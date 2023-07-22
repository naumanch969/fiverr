import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import { error } from '../utils/error.js'

 
export const getUsers = async (req, res, next) => {
    try {
        const { new: new_users } = req.query

        const users = new_users
            ? await User.find().sort({ _id: -1 }).limit()
            : await User.find()
        res.status(200).json({ result: users, success: true, message: 'Users fetched successfully' })

    } catch (err) {
        next(error(500, `${err.message} - getUsers`))
    }
}

export const getUser = async (req, res, next) => {
    try {

        const { userId } = req.params

        const user = await User.findById(userId)
        if (!user) return next(error(400, 'user not exist'))

        const { password, ...result } = user._doc
        res.status(200).json({ result, success: true, message: 'User fetched successfully' })


    } catch (err) {
        next(error(500, `${err.message} - getUser`))
    }
}

export const getUserStats = async (req, res, next) => {
    try {
        const data = await User.aggregate([
            {
                $project: { month: { $month: '$createdAt' } }
            },
            {
                $group: { _id: '$month', total: { $sum: 1 } }
            }
        ])
        res.status(200).json({ result: data, success: true, message: 'Stats fetched successfully' })
    } catch (err) {
        next(error(500, `${err.message} - getUserStats`))
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params

        const user = await User.findById(userId)
        if (!user) return next(error(400, 'User not exist'))

        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true })
        const { password, ...result } = updatedUser._doc
        res.status(200).json({ result, success: true, message: 'User updated successfully' })

    } catch (err) {
        next(error(500, `${err.message} - updateUser`))
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params

        await User.findByIdAndDelete(userId)
        res.status(200).json({ success: true, message: 'User deleted successfully' })

    } catch (err) {
        next(error(500, `${err.message} - deleteUser`))
    }
}