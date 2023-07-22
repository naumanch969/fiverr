import Review from '../models/review.js'
import bcrypt from 'bcryptjs'
import { error } from '../utils/error.js'
 


export const getReviews = async (req, res, next) => {
    try {
        const { new: new_reviews } = req.query

        const reviews = new_reviews
            ? await Review.find().sort({ _id: -1 }).limit()
            : await Review.find()
        res.status(200).json({ result: reviews, success: true, message: 'Reviews fetched successfully' })

    } catch (err) {
        next(error(500, `${err.message} - getReviews`))
    }
}

export const getReview = async (req, res, next) => {
    try {

        const { reviewId } = req.params

        const review = await Review.findById(reviewId)
        if (!review) return next(error(400, 'review not exist'))

        const { password, ...result } = review._doc
        res.status(200).json({ result, success: true, message: 'Review fetched successfully' })


    } catch (err) {
        next(error(500, `${err.message} - getReview`))
    }
}

export const getReviewStats = async (req, res, next) => {
    try {
        const data = await Review.aggregate([
            {
                $project: { month: { $month: '$createdAt' } }
            },
            {
                $group: { _id: '$month', total: { $sum: 1 } }
            }
        ])
        res.status(200).json({ result: data, success: true, message: 'Stats fetched successfully' })
    } catch (err) {
        next(error(500, `${err.message} - getReviewStats`))
    }
}

export const updateReview = async (req, res, next) => {
    try {
        const { reviewId } = req.params

        const review = await Review.findById(reviewId)
        if (!review) return next(error(400, 'Review not exist'))

        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const updatedReview = await Review.findByIdAndUpdate(reviewId, { $set: req.body }, { new: true })
        const { password, ...result } = updatedReview._doc
        res.status(200).json({ result, success: true, message: 'Review updated successfully' })

    } catch (err) {
        next(error(500, `${err.message} - updateReview`))
    }
}

export const deleteReview = async (req, res, next) => {
    try {
        const { reviewId } = req.params

        await Review.findByIdAndDelete(reviewId)
        res.status(200).json({ success: true, message: 'Review deleted successfully' })

    } catch (err) {
        next(error(500, `${err.message} - deleteReview`))
    }
}