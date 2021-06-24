import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(
  `mongodb+srv://SirGuiL21:${process.env.DB_PASS}@cluster0.ifeyy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
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
