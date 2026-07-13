import express      from 'express'
import cors         from 'cors'
import { env }      from './config/env.js'
import contactRouter from './routes/contact.route.js'

const app = express()

app.use(cors({
  origin: env.ALLOWED_ORIGINS,
}))

app.use(express.json())

app.use('/api/contact', contactRouter)

app.get('/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() })
})

export default app
