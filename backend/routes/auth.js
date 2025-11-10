const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,                  // max 20 requests per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests from this IP, please try again later.' }
});


function ensureJwtSecret() {
  if (!process.env.JWT_SECRET) {
    const err = new Error('Server misconfiguration: JWT_SECRET not set');
    err.status = 500;
    throw err;
  }
}

router.post(
  '/signup',
  authLimiter,
  [
    body('username').trim().isLength({ min: 2 }).withMessage('Username must be at least 2 characters'),
    body('email').isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array().map(e => e.msg).join(', ') });
      }

      const { username, email, password } = req.body;

      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: 'User already exists' });

      const user = new User({ username, email, password });
      await user.save();

      ensureJwtSecret();

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.status(201).json({
        token,
        user: { id: user._id, username: user.username, email: user.email }
      });
    } catch (error) {
      next(error); 
    }
  }
);

router.post(
  '/login',
  authLimiter,
  [
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('password').exists().withMessage('Password is required')
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array().map(e => e.msg).join(', ') });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });

      const isMatch = await user.matchPassword(password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

      ensureJwtSecret();

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.json({
        token,
        user: { id: user._id, username: user.username, email: user.email }
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
