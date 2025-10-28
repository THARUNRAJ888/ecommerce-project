const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);

const { getMongoURI, containsPlaceholder } = require('./config/db');

// Build the mongo URI from either MONGO_URI or the split env vars.
let mongoURI = getMongoURI();

// Fallback to local if nothing is provided (safe default for local dev).
if (!mongoURI) {
  console.warn('No remote Mongo URI built from env; falling back to local MongoDB.');
  mongoURI = 'mongodb://127.0.0.1:27017/ecommerce';
}

// Fail fast if the value still contains a placeholder.
if (containsPlaceholder(mongoURI)) {
  console.error('\nERROR: MONGO_URI is not set or contains a placeholder password.');
  console.error('Update `backend/.env` with a valid MongoDB connection string or set MONGO_USER/MONGO_PASS.');
  console.error("Example: MONGO_URI=mongodb+srv://username:password@cluster0.tkqidqm.mongodb.net/ecommerce?retryWrites=true&w=majority\n");
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));



app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
