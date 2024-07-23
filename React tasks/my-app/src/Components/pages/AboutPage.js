import React from 'react';
import { Link } from 'react-router-dom';
// Routing with React Router
const aboutPageStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f8bbd0',
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

const AboutPage = () => {
  return (
    <div style={aboutPageStyle}>
      <h1>About Page</h1>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}><Link to="/">Home</Link></li>
          <li style={navItemStyle}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutPage;