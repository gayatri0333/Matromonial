const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/matrimonial_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  // Add more fields as needed
});
const User = mongoose.model('User', userSchema);

// Define routes
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
