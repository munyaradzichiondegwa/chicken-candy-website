import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // The MONGO_URI is already loaded by server.js before this code runs
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // A more specific error message is helpful for debugging
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;