import React from 'react';

const AppointmentItem = ({ appointment, onDelete }) => {
  return (
    <li>
      <div>
        <strong>{appointment.name}</strong> - {appointment.date}, {appointment.time}
      </div>
      <button onClick={() => onDelete(appointment.id)}>Delete</button>
    </li>
  );
};

export default AppointmentItem;
