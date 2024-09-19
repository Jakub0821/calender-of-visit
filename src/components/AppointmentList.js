import React from 'react';
import AppointmentItem from './AppointmentItem';

const AppointmentList = ({ appointments, onDelete }) => {
  return (
    <div>
      <h3>Your Appointments:</h3>
      <ul>
        {appointments.map((appointment) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
