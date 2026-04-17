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
  careerValidationSchema 
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

    const formData = await request.formData()
    
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      coverLetter: formData.get('coverLetter') as string || '',
    }
    const cvFile = formData.get('cvFile') as File
    
    // Step 1: Zod Validation
    const validationResult = careerValidationSchema.safeParse(rawData)
    
    if (!validationResult.success || !cvFile) {
      return NextResponse.json(
        { error: 'Invalid data format or missing CV' },
        { status: 400 }
      )
    }
    
    const data = validationResult.data
    
    // Step 2: Security Checks
    const fieldsToCheck = [
      data.name,
      data.email,
      data.phone,
      data.position,
      data.coverLetter || '',
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

    // CV File checks
    if (cvFile.size > 5 * 1024 * 1024 || cvFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Invalid CV file' },
        { status: 400 }
      )
    }
    
    // Step 4: Sanitize all inputs
    const sanitizedData = {
      name: sanitizeString(data.name),
      email: sanitizeString(data.email).toLowerCase(),
      phone: sanitizeString(data.phone),
      position: sanitizeString(data.position),
      coverLetter: data.coverLetter ? sanitizeString(data.coverLetter) : '',
    }
    
    // Prepare file for Resend
    const arrayBuffer = await cvFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    // Step 5: Send email with attachment
    const { data: resendData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.COMPANY_EMAIL!,
      replyTo: sanitizedData.email,
      subject: `Nieuwe Sollicitatie - ${sanitizedData.position} - ${sanitizedData.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuwe Sollicitatie</h2>
          
          <p><strong>Naam:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Telefoon:</strong> ${sanitizedData.phone}</p>
          <p><strong>Functie:</strong> ${sanitizedData.position}</p>
          
          <h3 style="color: #333;">Motivatiebrief:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic; white-space: pre-wrap;">
            ${sanitizedData.coverLetter || 'Geen motivatiebrief toegevoegd.'}
          </div>
          
          <footer style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; color: #888; font-size: 12px; text-align: center;">
            Dit bericht is automatisch verzonden vanaf het Alasayl Transport carrièreformulier.
          </footer>
        </div>
      `,
      attachments: [
        {
          filename: `CV_${sanitizedData.name.replace(/\s+/g, '_')}.pdf`,
          content: buffer,
        },
      ],
    })
    
    if (error) {
      console.error('[send-application] Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, data: resendData })
    
  } catch (err) {
    console.error('[send-application] Internal error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
