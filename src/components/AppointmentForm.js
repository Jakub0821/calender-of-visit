import React, { useState } from 'react';

const AppointmentForm = ({ onAddAppointment }) => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    time: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAppointment(appointmentData);
    setAppointmentData({
      name: '',
      date: '',
      time: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={appointmentData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="time"
          name="time"
          value={appointmentData.time}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="description"
          value={appointmentData.description}
          onChange={handleChange}
          placeholder="Description"
        />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
