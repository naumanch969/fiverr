import { Schema, model } from 'mongoose'

const conversationSchema = Schema({
    id: { type: String, required: true, unique: true },
    sellerId: { type: String, required: true },
    buyerId: { type: String, required: true },
    readBySeller: { type: Boolean, required: true },
    readByBuyer: { type: Boolean, required: true },
    lastMessage: { type: String, required: false },
}, { timestamps: true })

const conversationModel = model('Conversation', conversationSchema)
export default conversationModel