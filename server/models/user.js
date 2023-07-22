import { Schema, model } from 'mongoose'

const userSchema = Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: false },
    country: { type: String, required: true },
    phone: { type: String, required: false },
    description: { type: String, required: false },
    isSeller: { type: Boolean, default: false },
}, { timestamps: true })

const userModel = model('User', userSchema)
export default userModel