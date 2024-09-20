import React, { useState } from 'react';

const AppointmentItem = ({ appointment, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAppointment, setEditedAppointment] = useState(appointment);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedAppointment);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedAppointment.name}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={editedAppointment.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={editedAppointment.time}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={editedAppointment.description}
            onChange={handleChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <strong>{appointment.name}</strong> - {appointment.date}, {appointment.time}
          <p>{appointment.description}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(appointment.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default AppointmentItem;
