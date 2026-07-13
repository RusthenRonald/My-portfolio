import { type Request, type Response } from 'express'
import { sendContactEmail } from '../services/contact.service.js'
import { type ContactPayload } from 'shared'

export async function contactController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const payload = res.locals.body as ContactPayload
    await sendContactEmail(payload)
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[contact] Failed to send email:', error)
    res.status(500).json({
      ok:      false,
      message: 'Failed to send email. Please try again.',
    })
  }
}