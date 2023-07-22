import express from 'express'
import { getConversation, getConversations, updateConversation, deleteConversation, getConversationStats } from '../controllers/conversation.js'
import { verifyToken, verifyUser } from '../middleware/auth.js'

const router = express.Router()

router.get('/all', verifyToken, getConversations)
router.get('/:conversationId', verifyToken, getConversation)
router.get('/get/stats', verifyToken, getConversationStats)
router.put('/update/:conversationId', verifyToken, verifyUser, updateConversation)
router.delete('/delete/:conversationId', verifyToken, verifyUser, deleteConversation)

export default router