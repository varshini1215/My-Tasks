import React from 'react';
import { Link } from 'react-router-dom';
// Routing with React Router
const contactPageStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#b3e5fc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: '20px auto'
};

const navStyle = {
  listStyleType: 'none',
  padding: '0',
  margin: '20px 0'
};

const navItemStyle = {
  display: 'inline',
  margin: '0 10px'
};

const ContactPage = () => {
  return (
    <div style={contactPageStyle}>
      <h1>Contact Page</h1>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}><Link to="/">Home</Link></li>
          <li style={navItemStyle}><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default ContactPage;