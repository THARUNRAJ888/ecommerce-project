const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const protect = require('../middleware/authMiddleware');


router.post('/', protect, async (req, res) => {
  const { products, totalAmount } = req.body;
  try {
    const order = new Order({
      user: req.user,
      products,
      totalAmount,
      paymentStatus: 'Success' 
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user }).populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
