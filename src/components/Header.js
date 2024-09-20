import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <header>
      <h1>Calendar of Appointments</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
