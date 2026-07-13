import express      from 'express'
import cors         from 'cors'
import { env }      from './config/env.js'
import contactRouter from './routes/contact.route.js'

const app = express()


app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
}))


app.use(express.json())

app.use('/api/contact', contactRouter)

app.get('/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() })
})

app.listen(env.PORT, () => {
  console.log(`API running on http://localhost:${env.PORT}`)
})