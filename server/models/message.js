import { Schema, model } from 'mongoose'

const messageSchema = Schema({
    conversationId: { type: String, required: true },
    userId: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true })

const messageModel = model('Message', messageSchema)
export default messageModel