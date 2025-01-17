// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const app = express();
app.use(cors());
app.use(express.json());

const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));