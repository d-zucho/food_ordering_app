import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

// connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error.message))

const app = express()
app.use(express.json())
app.use(cors())

// define endpoints
app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
