const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes'); // Import route for appointments
const authRoutes = require('./routes/authRoutes'); // Import route for authentication
const authenticateToken = require('./middleware/auth'); // Import middleware for JWT verification

const app = express();

// Middleware to parse incoming JSON and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://calendarUser:3MfZUlqGzxoqK7sY@cluster.mongodb.net/appointmentsCalendar', {
  retryWrites: true,
  w: 'majority'
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Authentication routes (login/register)
app.use('/api/auth', authRoutes);

// Appointment routes (secured by JWT authentication middleware)
app.use('/api/appointments', authenticateToken, appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
