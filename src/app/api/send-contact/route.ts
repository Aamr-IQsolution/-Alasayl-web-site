import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    const { name, email, phone, message } = body
    
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.COMPANY_EMAIL!,
      replyTo: email,
      subject: `Nieuw Bericht via Website - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuw Contactbericht</h2>
          
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone}</p>
          
          <h3 style="color: #333;">Bericht:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic; white-space: pre-wrap;">
            ${message}
          </div>
          
          <footer style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; color: #888; font-size: 12px; text-align: center;">
            Dit bericht is automatisch verzonden vanaf het Alasayl Transport contactformulier.
          </footer>
        </div>
      `
    })
    
    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, data })
    
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
