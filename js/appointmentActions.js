import axios from 'axios';

// Function to add a new appointment
export const addAppointment = (appointmentData) => {
  return axios.post('/api/appointments', appointmentData)
    .then(response => {
      console.log('Appointment added:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error adding appointment:', error);
      throw error;
    });
};

// Function to cancel an appointment
export const cancelAppointment = (appointmentId) => {
  return axios.delete(`/api/appointments/${appointmentId}`)
    .then(response => {
      console.log('Appointment cancelled:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error cancelling appointment:', error);
      throw error;
    });
};

// Function to confirm an appointment
export const confirmAppointment = (appointmentId) => {
  return axios.patch(`/api/appointments/${appointmentId}/confirm`)
    .then(response => {
      console.log('Appointment confirmed:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error confirming appointment:', error);
      throw error;
    });
};
