import express from 'express';
import { placeOrder } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// Any request to this route must first pass through the 'protect' middleware
router.route('/').post(protect, placeOrder);

export default router;