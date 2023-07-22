import { Schema, model } from 'mongoose'

const reviewSchema = Schema({
    gigId: { type: String, required: true },
    userId: { type: String, required: true },
    star: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    description: { type: String, required: true },
}, { timestamps: true })

const reviewModel = model('Review', reviewSchema)
export default reviewModel