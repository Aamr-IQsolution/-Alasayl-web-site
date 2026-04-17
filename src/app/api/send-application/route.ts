import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const coverLetter = formData.get('coverLetter') as string
    const cvFile = formData.get('cvFile') as File
    
    if (!name || !email || !phone || !position || !cvFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // تحويل الملف إلى Buffer لإرساله كمرفق
    const buffer = await cvFile.arrayBuffer()
    const cvBuffer = Buffer.from(buffer)
    
    // Send email with attachment
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.COMPANY_EMAIL!,
      replyTo: email,
      subject: `Nieuwe Sollicitatie - ${position} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuwe Sollicitatie</h2>
          
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone}</p>
          <p><strong>Functie:</strong> ${position}</p>
          
          ${coverLetter ? `
            <h3 style="color: #333;">Motivatie:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic; white-space: pre-wrap;">
              ${coverLetter}
            </div>
          ` : ''}
          
          <p style="margin-top: 20px; color: #666;"><em>Het CV is als bijlage bijgevoegd (Bestandsnaam: ${cvFile.name})</em></p>
          
          <footer style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee; color: #888; font-size: 12px; text-align: center;">
            Dit bericht is automatisch verzonden vanaf het Alasayl Transport sollicitatieformulier.
          </footer>
        </div>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer
        }
      ]
    })
    
    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }
    
    return NextResponse.json({ success: true, data })
    
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
