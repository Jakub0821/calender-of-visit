const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const appointmentRoutes = require('../routes/appointmentRoutes'); // Import the routes

const app = express();

// Middleware to parse incoming JSON and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://calendarUser:3MfZUlqGzxoqK7sY@cluster2.pl88e.mongodb.net/appointmentsCalendar', {
  retryWrites: true,
  w: 'majority'
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));


// Use the appointment routes
app.use('/api', appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
