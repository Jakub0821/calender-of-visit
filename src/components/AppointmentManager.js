import React, { useState } from 'react';
import { addAppointment, cancelAppointment, confirmAppointment } from '../actions/appointmentActions';

const AppointmentManager = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    time: '',
    description: ''
  });
  const [appointmentId, setAppointmentId] = useState('');

  const handleAddAppointment = async () => {
    try {
      const response = await addAppointment(appointmentData);
      console.log('Appointment added successfully:', response);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const handleCancelAppointment = async () => {
    try {
      const response = await cancelAppointment(appointmentId);
      console.log('Appointment cancelled successfully:', response);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  const handleConfirmAppointment = async () => {
    try {
      const response = await confirmAppointment(appointmentId);
      console.log('Appointment confirmed successfully:', response);
    } catch (error) {
      console.error('Error confirming appointment:', error);
    }
  };

  return (
    <div>
      <h1>Appointment Manager</h1>
      <div>
        <h2>Add Appointment</h2>
        <input
          type="text"
          placeholder="Name"
          value={appointmentData.name}
          onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
        />
        <input
          type="date"
          value={appointmentData.date}
          onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
        />
        <input
          type="time"
          value={appointmentData.time}
          onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={appointmentData.description}
          onChange={(e) => setAppointmentData({ ...appointmentData, description: e.target.value })}
        />
        <button onClick={handleAddAppointment}>Add Appointment</button>
      </div>

      <div>
        <h2>Cancel Appointment</h2>
        <input
          type="text"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
        <button onClick={handleCancelAppointment}>Cancel Appointment</button>
      </div>

      <div>
        <h2>Confirm Appointment</h2>
        <input
          type="text"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
        <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
      </div>
    </div>
  );
};

export default AppointmentManager;
