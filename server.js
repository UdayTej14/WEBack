// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const recipeRoutes = require('./routes/recipe');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use recipe routes
app.use('/api/recipes', recipeRoutes);

// Use authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});