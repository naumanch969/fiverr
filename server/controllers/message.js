import Message from '../models/message.js'
import bcrypt from 'bcryptjs'
import { error } from '../utils/error.js'


export const getMessages = async (req, res, next) => {
    try {
        const { new: new_messages } = req.query

        const messages = new_messages
            ? await Message.find().sort({ _id: -1 }).limit()
            : await Message.find()
        res.status(200).json({ result: messages, success: true, message: 'Messages fetched successfully' })

    } catch (err) {
        next(error(500, `${err.message} - getMessages`))
    }
}

export const getMessage = async (req, res, next) => {
    try {

        const { messageId } = req.params

        const message = await Message.findById(messageId)
        if (!message) return next(error(400, 'message not exist'))

        const { password, ...result } = message._doc
        res.status(200).json({ result, success: true, message: 'Message fetched successfully' })


    } catch (err) {
        next(error(500, `${err.message} - getMessage`))
    }
}

export const getMessageStats = async (req, res, next) => {
    try {
        const data = await Message.aggregate([
            {
                $project: { month: { $month: '$createdAt' } }
            },
            {
                $group: { _id: '$month', total: { $sum: 1 } }
            }
        ])
        res.status(200).json({ result: data, success: true, message: 'Stats fetched successfully' })
    } catch (err) {
        next(error(500, `${err.message} - getMessageStats`))
    }
}

export const updateMessage = async (req, res, next) => {
    try {
        const { messageId } = req.params

        const message = await Message.findById(messageId)
        if (!message) return next(error(400, 'Message not exist'))

        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const updatedMessage = await Message.findByIdAndUpdate(messageId, { $set: req.body }, { new: true })
        const { password, ...result } = updatedMessage._doc
        res.status(200).json({ result, success: true, message: 'Message updated successfully' })

    } catch (err) {
        next(error(500, `${err.message} - updateMessage`))
    }
}

export const deleteMessage = async (req, res, next) => {
    try {
        const { messageId } = req.params

        await Message.findByIdAndDelete(messageId)
        res.status(200).json({ success: true, message: 'Message deleted successfully' })

    } catch (err) {
        next(error(500, `${err.message} - deleteMessage`))
    }
}