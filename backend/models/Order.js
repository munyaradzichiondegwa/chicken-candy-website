import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true, default: 0.0 },
  status: { type: String, required: true, default: 'Received' },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;