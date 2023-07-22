import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser"

import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
import conversationRoutes from './routes/conversation.js'
import orderRoutes from './routes/order.js'
import reviewRoutes from './routes/review.js'
import messageRoutes from './routes/message.js'

dotenv.config()
const app = express()
const CONNECTION_URL = process.env.ATLAS_URL
const PORT = process.env.PORT || 4000

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/conversation', conversationRoutes)
app.use('/order', orderRoutes)
app.use('/review', reviewRoutes)
app.use('/message', messageRoutes)

// error handler middleware
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong!'
    return res.status(status).json({ message, status, success: false, stack: err.stack })
})

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('listening at port', PORT)))
    .catch((err) => console.log('error in connnecting with MongoDB = \n', err))