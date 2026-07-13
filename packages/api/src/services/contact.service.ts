import { Resend } from 'resend'
import { env } from '../config/env.js'
import { type ContactPayload } from 'shared'


const resend = new Resend(env.RESEND_API_KEY)

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const { name, email, message } = payload

  await resend.emails.send({
    from:     'Portfolio <onboarding@resend.dev>',
    to:       env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject:  `New message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px;">
        <h2 style="margin-bottom: 8px;">New portfolio message</h2>
        <p style="color: #666; margin-bottom: 24px;">
          Sent via your portfolio contact form.
        </p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999; width: 80px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #999;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 16px 10px 0; color: #999; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      </div>
    `,
  })
}