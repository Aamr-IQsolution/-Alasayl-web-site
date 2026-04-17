import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rateLimit'
import { 
  sanitizeString, 
  isValidEmail, 
  isValidPhone,
  isValidName,
  containsSQLInjection, 
  containsXSS,
  contactValidationSchema 
} from '@/lib/validation'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    // Rate limit: 5 requests per minute per IP
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Step 1: Zod Validation
    const validationResult = contactValidationSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      )
    }
    
    const data = validationResult.data
    
    // Step 2: Security Checks
    const fieldsToCheck = [
      data.name,
      data.email,
      data.phone,
      data.message,
    ]
    
    if (fieldsToCheck.some(field => containsSQLInjection(field) || containsXSS(field))) {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      )
    }
    
    // Step 3: Additional Validations
    if (!isValidName(data.name) || !isValidEmail(data.email) || !isValidPhone(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid field format' },
        { status: 400 }
      )
    }
    
    // Step 4: Sanitize all inputs
    const sanitizedData = {
      name: sanitizeString(data.name),
      email: sanitizeString(data.email).toLowerCase(),
      phone: sanitizeString(data.phone),
      message: sanitizeString(data.message),
    }
    
    // Step 5: Send email
    const { data: resendData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.COMPANY_EMAIL!,
      replyTo: sanitizedData.email,
      subject: `Nieuw Bericht via Website - ${sanitizedData.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuw Contactbericht</h2>
          
          <p><strong>Naam:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Telefoon:</strong> ${sanitizedData.phone}</p>
          
          <h3 style="color: #333;">Bericht:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic; white-space: pre-wrap;">
            ${sanitizedData.message}
          </div>
          
          <footer style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; color: #888; font-size: 12px; text-align: center;">
            Dit bericht is automatisch verzonden vanaf het Alasayl Transport contactformulier.
          </footer>
        </div>
      `
    })
    
    if (error) {
      console.error('[send-contact] Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, data: resendData })
    
  } catch (err) {
    console.error('[send-contact] Internal error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
