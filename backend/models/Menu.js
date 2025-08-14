import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String, default: '/images/placeholder.png' },
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;