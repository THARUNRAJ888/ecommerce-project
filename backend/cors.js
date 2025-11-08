const cors = require('cors');
app.use(cors({
  origin: ['https://<your-netlify-site>.netlify.app'],
  credentials: true
}));
