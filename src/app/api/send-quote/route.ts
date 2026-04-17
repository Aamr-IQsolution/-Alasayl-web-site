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
  quoteValidationSchema 
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
    const validationResult = quoteValidationSchema.safeParse(body)
    
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
      data.address,
      data.cargoType,
      data.pickupLocation,
      data.deliveryLocation,
      data.notes || '',
    ]
    
    // التحقق من SQL Injection
    if (fieldsToCheck.some(field => containsSQLInjection(field))) {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      )
    }
    
    // التحقق من XSS
    if (fieldsToCheck.some(field => containsXSS(field))) {
      return NextResponse.json(
        { error: 'Invalid input detected' },
        { status: 400 }
      )
    }
    
    // Step 3: Additional Validations
    if (!isValidName(data.name)) {
      return NextResponse.json(
        { error: 'Invalid name format' },
        { status: 400 }
      )
    }
    
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    if (!isValidPhone(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      )
    }
    
    // Step 4: Sanitize all inputs
    const sanitizedData = {
      name: sanitizeString(data.name),
      email: sanitizeString(data.email).toLowerCase(),
      phone: sanitizeString(data.phone),
      address: sanitizeString(data.address),
      cargoType: sanitizeString(data.cargoType),
      weight: data.weight,
      pickupLocation: sanitizeString(data.pickupLocation),
      deliveryLocation: sanitizeString(data.deliveryLocation),
      transportDate: data.transportDate,
      serviceType: data.serviceType,
      notes: data.notes ? sanitizeString(data.notes) : '',
    }
    
    // Step 5: Send email
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.COMPANY_EMAIL!,
      replyTo: sanitizedData.email,
      subject: `Nieuwe Offerte Aanvraag - ${sanitizedData.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuwe Offerte Aanvraag</h2>
          
          <h3 style="color: #333;">Klantgegevens:</h3>
          <p><strong>Naam:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Telefoon:</strong> ${sanitizedData.phone}</p>
          <p><strong>Adres:</strong> ${sanitizedData.address}</p>
          
          <h3 style="color: #333;">Transportdetails:</h3>
          <p><strong>Type Goederen:</strong> ${sanitizedData.cargoType}</p>
          <p><strong>Gewicht:</strong> ${sanitizedData.weight} kg</p>
          <p><strong>Ophalen van:</strong> ${sanitizedData.pickupLocation}</p>
          <p><strong>Afleveren bij:</strong> ${sanitizedData.deliveryLocation}</p>
          <p><strong>Datum:</strong> ${sanitizedData.transportDate}</p>
          <p><strong>Type Service:</strong> ${sanitizedData.serviceType === 'urgent' ? '<span style="color: #ef4444;">🚨 Spoed</span>' : '<span style="color: #10b981;">✅ Normaal</span>'}</p>
          
          ${sanitizedData.notes ? `<h3 style="color: #333;">Opmerkingen:</h3><p style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">${sanitizedData.notes}</p>` : ''}
          
          <footer style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; color: #888; font-size: 12px; text-align: center;">
            Dit bericht is automatisch verzonden vanaf het Alasayl Transport contactformulier.
          </footer>
        </div>
      `
    })
    
    if (error) {
      console.error('[send-quote] Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }
    
    return NextResponse.json({ success: true })
    
  } catch (err) {
    console.error('[send-quote] Internal error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
