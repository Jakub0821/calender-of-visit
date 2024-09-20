import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Assuming the Header component is used for navigation
import Footer from './components/Footer'; // Assuming Footer contains any footer-related content
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import axios from 'axios';

// Placeholder components for routing
const Home = () => <h2>Welcome to the Home Page</h2>;
const Settings = () => <h2>Settings Page</h2>;
const Profile = () => <h2>Profile Page</h2>;

const App = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from backend on initial render
  useEffect(() => {
    axios.get('/api/appointments')
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  // Add a new appointment
  const handleAddAppointment = (newAppointment) => {
    axios.post('/api/appointments', newAppointment)
      .then((response) => {
        setAppointments((prevAppointments) => [
          ...prevAppointments,
          response.data,
        ]);
      })
      .catch((error) => console.error('Error adding appointment:', error));
  };

  // Delete an existing appointment
  const handleDeleteAppointment = (id) => {
    axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((error) => console.error('Error deleting appointment:', error));
  };

  return (
    <Router>
      <div>
        <Header /> {/* Assuming the header includes navigation */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={
            <>
              <AppointmentForm onAddAppointment={handleAddAppointment} />
              <AppointmentList
                appointments={appointments}
                onDelete={handleDeleteAppointment}
              />
            </>
          } />
        </Routes>

        <Footer /> {/* Assuming the footer contains any footer-related content */}
      </div>
    </Router>
  );
};

export default App;
