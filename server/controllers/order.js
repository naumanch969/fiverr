import Order from '../models/order.js'
import bcrypt from 'bcryptjs'
import { error } from '../utils/error.js'



export const getOrders = async (req, res, next) => {
    try {
        const { new: new_orders } = req.query

        const orders = new_orders
            ? await Order.find().sort({ _id: -1 }).limit()
            : await Order.find()
        res.status(200).json({ result: orders, success: true, message: 'Orders fetched successfully' })

    } catch (err) {
        next(error(500, `${err.message} - getOrders`))
    }
}

export const getOrder = async (req, res, next) => {
    try {

        const { orderId } = req.params

        const order = await Order.findById(orderId)
        if (!order) return next(error(400, 'order not exist'))

        const { password, ...result } = order._doc
        res.status(200).json({ result, success: true, message: 'Order fetched successfully' })


    } catch (err) {
        next(error(500, `${err.message} - getOrder`))
    }
}

export const getOrderStats = async (req, res, next) => {
    try {
        const data = await Order.aggregate([
            {
                $project: { month: { $month: '$createdAt' } }
            },
            {
                $group: { _id: '$month', total: { $sum: 1 } }
            }
        ])
        res.status(200).json({ result: data, success: true, message: 'Stats fetched successfully' })
    } catch (err) {
        next(error(500, `${err.message} - getOrderStats`))
    }
}

export const updateOrder = async (req, res, next) => {
    try {
        const { orderId } = req.params

        const order = await Order.findById(orderId)
        if (!order) return next(error(400, 'Order not exist'))

        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const updatedOrder = await Order.findByIdAndUpdate(orderId, { $set: req.body }, { new: true })
        const { password, ...result } = updatedOrder._doc
        res.status(200).json({ result, success: true, message: 'Order updated successfully' })

    } catch (err) {
        next(error(500, `${err.message} - updateOrder`))
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        const { orderId } = req.params

        await Order.findByIdAndDelete(orderId)
        res.status(200).json({ success: true, message: 'Order deleted successfully' })

    } catch (err) {
        next(error(500, `${err.message} - deleteOrder`))
    }
}