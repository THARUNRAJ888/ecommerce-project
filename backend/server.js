const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 200,                  
  standardHeaders: true,
  legacyHeaders: false,
});

require('dotenv').config();

const app = express();
const allowed = [
  'https://tharun-getroost.netlify.app/',
  'http://localhost:5173', 
];

app.use(limiter);
app.use(express.json());
app.use(cors({
  origin(origin, cb) {
    if (!origin || allowed.includes(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(helmet());

const errorHandler = require('./middleware/errorHandler');


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use(morgan('dev')); 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('API running');
});

app.get('/health', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    const connState = mongoose.connection.readyState; 
    const dbConnected = connState === 1;

    return res.json({
      status: 'ok',
      db: dbConnected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Healthcheck failed:', err);
    return res.status(500).json({ status: 'error', message: 'healthcheck failed' });
  }
});


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
