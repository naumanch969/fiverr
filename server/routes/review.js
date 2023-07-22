import express from 'express'
import { getReview, getReviews, updateReview, deleteReview, getReviewStats } from '../controllers/review.js'
import {  verifyToken, verifyUser } from '../middleware/auth.js'

const router = express.Router()


router.get('/all', verifyToken,  getReviews)
router.get('/:reviewId', verifyToken, getReview)
router.get('/get/stats', verifyToken,  getReviewStats)
router.put('/update/:reviewId', verifyToken, verifyUser, updateReview)
router.delete('/delete/:reviewId', verifyToken, verifyUser, deleteReview)

export default router