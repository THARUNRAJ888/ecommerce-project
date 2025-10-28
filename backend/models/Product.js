const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  offer: { type: Number, default: 0 }, 
  rating: { type: Number, default: 0 },
  description: { type: String },
  imageUrl: String,
  stock: { type: Number, default: 0 },
  material: { type: String, required: true },
  fabric: { type: String, required: true },
  blouse: { type: String, required: true },
  weight: { type: Number, default:900}
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
