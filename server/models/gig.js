import { Schema, model } from 'mongoose'

const gigSchema = Schema({
    gigId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    totalStars: { type: Number, default: 0 },
    starNumber: { type: String, default: 0 },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    cover: { type: String, required: true },
    images: { type: [String], default: [] },
    shortTitle: { type: String, required: true },
    shortDescription: { type: String, required: true },
    delilveryTime: { type: Number, required: true },
    revisionNumber: { type: Number, required: true },
    features: { type: [String], required: false },
    sales: { type: Number, default: 0 },
}, { timestamps: true })

const gigModel = model('Gig', gigSchema)
export default gigModel