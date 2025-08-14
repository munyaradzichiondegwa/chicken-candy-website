// Load environment variables first
import 'dotenv/config'; // alternative to require('dotenv').config() in ES modules

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

// Import Routes
import menuRoutes from './routes/menuRoutes.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Connect to Database
// Make sure connectDB reads process.env.MONGO_URI inside db.js
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To accept JSON data in the body

// Mount Routes
app.use('/api/menu', menuRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
