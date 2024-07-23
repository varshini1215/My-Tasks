import React from 'react';
const inputDisplayStyle = {
  padding: '20px',
  backgroundColor: '#e0f7fa',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center'
};

const headingStyle = {
  color: '#00796b'
};

const paragraphStyle = {
  fontSize: '18px',
  color: '#004d40'
};

const InputDisplay = ({ inputValue }) => {
  return (
    <div style={inputDisplayStyle}>
      <h2 style={headingStyle}>Input Display</h2>
      <p style={paragraphStyle}>Current Input: {inputValue}</p>
    </div>
  );
};

export default InputDisplay;
