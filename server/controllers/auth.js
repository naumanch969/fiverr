import User from '../models/user.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { error } from '../utils/error.js'

export const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        const isValidEmail = validator.isEmail(email)
        if (!isValidEmail) return next(error(400, 'Invalid email'))

        const isEmailExist = await User.findOne({ email })
        if (Boolean(isEmailExist)) return next(error(400, 'Email already registered'))

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        const result = await User.create({ username, email, password: hashedPassword, ...req.body })
        res.status(201).json({ result, success: true, message: 'Registered successfully' })

    } catch (err) {
        next(error(500, `${err.message} - register `))
    }
}



export const login = async (req, res, next) => {
    try {

        const { email, password: input_password } = req.body

        const isValidEmail = validator.isEmail(email)
        if (!isValidEmail) return next(error(400, 'Invalid email'))

        const user = await User.findOne({ email })
        if (!user) return next(error(400, 'wrong email'))

        const isPasswordCorrect = bcrypt.compare(input_password, user.password)
        if (!isPasswordCorrect) return next(error(400, 'Invalid password'))

        const token = jwt.sign({ _id: user._id, isSeller: user.isSeller }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '7d' })

        const { password, ...result } = user._doc
        res.cookie('authtoken', token, { httpOnly: true }).status(200).json({ result: { ...result }, success: true, message: 'Logged In successfully' })

    } catch (err) {
        next(error(500, `${err.message} - login`))
    }
}



export const logout = async (req, res, next) => {
    try {

        res
            .clearCookie('authtoken', { sameSite: 'none', secure: true })
            .status(200)
            .json({ message: 'User has been logged out.' })

    } catch (err) {
        next(error(500, `${err.message} - logout`))
    }
}
