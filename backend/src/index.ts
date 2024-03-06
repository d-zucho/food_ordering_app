import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import myUserRoute from './routes/MyUserRoute'

// connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error.message))

const app = express()
app.use(express.json())
app.use(cors())

// tells express to use the myUserRoute for any requests that start with /api/my/users
app.use('/api/my/user', myUserRoute)

// define endpoints

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
