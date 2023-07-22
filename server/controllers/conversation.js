import Conversation from '../models/conversation.js'
import bcrypt from 'bcryptjs'
import { error } from '../utils/error.js'
 



export const getConversations = async (req, res, next) => {
    try {
        const { new: new_conversations } = req.query

        const conversations = new_conversations
            ? await Conversation.find().sort({ _id: -1 }).limit()
            : await Conversation.find()
        res.status(200).json({ result: conversations, success: true, message: 'Conversations fetched successfully' })

    } catch (err) {
        next(error(500, `${err.message} - getConversations`))
    }
}

export const getConversation = async (req, res, next) => {
    try {

        const { conversationId } = req.params

        const conversation = await Conversation.findById(conversationId)
        if (!conversation) return next(error(400, 'conversation not exist'))

        const { password, ...result } = conversation._doc
        res.status(200).json({ result, success: true, message: 'Conversation fetched successfully' })


    } catch (err) {
        next(error(500, `${err.message} - getConversation`))
    }
}

export const getConversationStats = async (req, res, next) => {
    try {
        const data = await Conversation.aggregate([
            {
                $project: { month: { $month: '$createdAt' } }
            },
            {
                $group: { _id: '$month', total: { $sum: 1 } }
            }
        ])
        res.status(200).json({ result: data, success: true, message: 'Stats fetched successfully' })
    } catch (err) {
        next(error(500, `${err.message} - getConversationStats`))
    }
}

export const updateConversation = async (req, res, next) => {
    try {
        const { conversationId } = req.params

        const conversation = await Conversation.findById(conversationId)
        if (!conversation) return next(error(400, 'Conversation not exist'))

        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const updatedConversation = await Conversation.findByIdAndUpdate(conversationId, { $set: req.body }, { new: true })
        const { password, ...result } = updatedConversation._doc
        res.status(200).json({ result, success: true, message: 'Conversation updated successfully' })

    } catch (err) {
        next(error(500, `${err.message} - updateConversation`))
    }
}

export const deleteConversation = async (req, res, next) => {
    try {
        const { conversationId } = req.params

        await Conversation.findByIdAndDelete(conversationId)
        res.status(200).json({ success: true, message: 'Conversation deleted successfully' })

    } catch (err) {
        next(error(500, `${err.message} - deleteConversation`))
    }
}