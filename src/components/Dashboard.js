import React from 'react';
import CustomCalendar from '../components/customCalendar'; // jeśli przeniesiesz do 'src/components'
import AppointmentManager from './AppointmentManager'; // import formularza zarządzania wizytami

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li><a href="#">Twoje wizyty</a></li>
          <li><a href="#">Ustawienia</a></li>
          <li><a href="#">Profil</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Kalendarz i Zarządzanie Wizytami</h1>
        <CustomCalendar /> {/* Kalendarz */}
        <AppointmentManager /> {/* Formularz zarządzania wizytami */}
      </div>
    </div>
  );
};

export default Dashboard;
