import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(
  'mongodb+srv://SirGuiL21:28102002@cluster0.ifeyy.mongodb.net/bloggy-api?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

server.use(express.json())
server.use(routes)

server.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`)
})
