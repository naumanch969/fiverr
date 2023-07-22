import express from 'express'
import {  getMessage, getMessages, updateMessage, deleteMessage, getMessageStats } from '../controllers/message.js'
import {  verifyToken, verifyUser } from '../middleware/auth.js'

const router = express.Router()
 
router.get('/all', verifyToken,  getMessages)
router.get('/:messageId', verifyToken, getMessage)
router.get('/get/stats', verifyToken,  getMessageStats)
router.put('/update/:messageId', verifyToken, verifyUser, updateMessage)
router.delete('/delete/:messageId', verifyToken, verifyUser, deleteMessage)

export default router