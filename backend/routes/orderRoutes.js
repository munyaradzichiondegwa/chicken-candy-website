import express from 'express';
import { placeOrder, getMyOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, placeOrder);
router.route('/myorders').get(protect, getMyOrders); // <-- ADD THIS

export default router;