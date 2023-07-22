import express from 'express'
import {  getOrder, getOrders, updateOrder, deleteOrder, getOrderStats } from '../controllers/order.js'
import {  verifyToken,  verifyUser } from '../middleware/auth.js'

const router = express.Router()
 
router.get('/all', verifyToken,  getOrders)
router.get('/:orderId', verifyToken, getOrder)
router.get('/get/stats', verifyToken,  getOrderStats)
router.put('/update/:orderId', verifyToken, verifyUser, updateOrder)
router.delete('/delete/:orderId', verifyToken, verifyUser, deleteOrder)

export default router