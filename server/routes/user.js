import express from 'express'
import { getUser, getUsers, updateUser, deleteUser, getUserStats } from '../controllers/user.js'
import { verifyToken, verifyUser } from '../middleware/auth.js'

const router = express.Router()

router.get('/all', verifyToken, getUsers)
router.get('/:userId', verifyToken, getUser)
router.get('/get/stats', verifyToken, getUserStats)
router.put('/update/:userId', verifyToken, verifyUser, updateUser)
router.delete('/delete/:userId', verifyToken, verifyUser, deleteUser)

export default router