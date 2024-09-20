import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Assuming the Header component is used for navigation or branding
import Footer from './components/Footer'; // Assuming Footer contains any footer-related content
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import axios from 'axios';

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
    <div>
      <Header /> {/* Assuming the header includes navigation or branding */}
      <main>
        <AppointmentForm onAddAppointment={handleAddAppointment} />
        <AppointmentList
          appointments={appointments}
          onDelete={handleDeleteAppointment}
        />
      </main>
      <Footer /> {/* Assuming the footer contains any footer-related content */}
    </div>
  );
};

export default App;
