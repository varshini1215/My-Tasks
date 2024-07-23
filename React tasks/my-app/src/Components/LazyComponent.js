import React from 'react';
const lazyComponentStyle = {
  backgroundColor: '#e3f2fd',
  borderRadius: '8px',
  padding: '20px',
  color: '#333',
  fontSize: '1.1rem',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
};
const LazyComponent = () => {
  return <div style={lazyComponentStyle}>This component is loaded lazily!</div>;
};

export default LazyComponent;