import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (newAppointment) => {
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      { id: Date.now(), ...newAppointment },
    ]);
  };

  const handleDeleteAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div>
      <Header />
      <main>
        <AppointmentForm onAddAppointment={handleAddAppointment} />
        <AppointmentList
          appointments={appointments}
          onDelete={handleDeleteAppointment}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
