import React from 'react';
import AppointmentManager from './components/AppointmentManager'; // Import the AppointmentManager component

function App() {
  return (
    <div className="App">
      <h1>Appointment Scheduler</h1>
      <AppointmentManager />  {/* The React component for managing appointments */}
    </div>
  );
}

export default App;
