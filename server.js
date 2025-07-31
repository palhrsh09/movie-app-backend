const express = require('express');
const cors = require('cors');
const mediaRoutes = require('./routes/MediaRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/media', mediaRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}).catch(err => console.error('Database connection error:', err));