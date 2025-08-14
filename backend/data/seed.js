import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import connectDB from '../config/db.js';
import Menu from '../models/Menu.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
import menuData from './menu.js';
import usersData from './users.js';
import ordersData from './orders.js';

dotenv.config({ path: './backend/.env' });

const importData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Order.deleteMany();
    await Menu.deleteMany();
    await User.deleteMany();

    console.log('Data Cleared!');

    // Insert users
    const createdUsers = await User.insertMany(usersData);
    console.log(`${createdUsers.length} users imported!`);

    // Insert menu
    const createdMenu = await Menu.insertMany(menuData);
    console.log(`${createdMenu.length} menu items imported!`);

    // Link orders to a user
    const sampleOrders = ordersData.map((order, idx) => ({
      ...order,
      user: createdUsers[idx % createdUsers.length]._id,
    }));

    await Order.insertMany(sampleOrders);
    console.log(`${sampleOrders.length} orders imported!`);

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    await Order.deleteMany();
    await Menu.deleteMany();
    await User.deleteMany();

    console.log('All Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
