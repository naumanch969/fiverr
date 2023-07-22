import express from 'express'
import { getGig, getGigs, createGig, updateGig, deleteGig, getGigStats } from '../controllers/gig.js'
import { verifySeller, verifyToken, verifyUser } from '../middleware/auth.js'

const router = express.Router()


router.get('/get/all', verifyToken,  getGigs)
router.get('/get/single/:gigId', verifyToken, getGig)
router.get('/get/stats', verifyToken, verifySeller, getGigStats)
router.post('/create', verifyToken, createGig)
router.put('/update/:gigId', verifyToken, verifySeller, updateGig)
router.delete('/delete/:gigId', verifyToken, verifySeller, deleteGig)

export default router