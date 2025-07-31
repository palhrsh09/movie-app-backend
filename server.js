const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mediaRoutes = require('./routes/MediaRoutes');
const sequelize = require('./config/database');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too many requests from this IP, please try again later.",
  },
});

app.use(cors());
app.use(express.json());

app.use('/api/media', limiter, mediaRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}).catch(err => console.error('Database connection error:', err));
