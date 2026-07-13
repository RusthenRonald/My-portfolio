import 'dotenv/config'

function require(key: string): string {
  const value = process.env[key]
  if (!value) throw new Error(`Missing environment variable: ${key}`)
  return value
}


export const env = {
  RESEND_API_KEY:    require('RESEND_API_KEY'),
  CONTACT_TO_EMAIL:  require('CONTACT_TO_EMAIL'),
  PORT:              process.env.PORT ?? '3001',
  ALLOWED_ORIGINS:   (process.env.ALLOWED_ORIGINS ?? 'http://localhost:5173,http://localhost:4173').split(','),
}