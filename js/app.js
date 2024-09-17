const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware to parse incoming JSON and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://<jakubmigda120>:<master2>@cluster2.pl88e.mongodb.net/appointmentsCalendar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));


// Appointment Schema and Model
const appointmentSchema = new mongoose.Schema({
    name: String,
    day: Number,
    time: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// API Endpoint to book an appointment
app.post('/book-appointment', (req, res) => {
    const { name, day, time } = req.body;

    // Create a new appointment
    const appointment = new Appointment({ name, day, time });
    
    // Save the appointment to the database
    appointment.save()
        .then(() => res.status(201).send('Appointment booked successfully'))
        .catch(err => res.status(500).send('Error booking appointment: ' + err));
});

// API Endpoint to get all appointments (for displaying in frontend)
app.get('/appointments', (req, res) => {
    Appointment.find()
        .then(appointments => res.status(200).json(appointments))
        .catch(err => res.status(500).send('Error fetching appointments: ' + err));
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
