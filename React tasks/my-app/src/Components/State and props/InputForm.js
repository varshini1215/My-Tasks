import React, { useState } from 'react';

const formContainerStyle = {
  padding: '20px',
  backgroundColor: '#ffe0b2',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center'
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  color: '#ff5722'
};

const inputStyle = {
  width: 'calc(100% - 20px)',
  padding: '10px',
  border: '1px solid #ff5722',
  borderRadius: '4px'
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#ff5722',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px'
};

const buttonHoverStyle = {
  backgroundColor: '#e64a19'
};

const InputForm = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div style={formContainerStyle}>
      <label htmlFor="inputField" style={labelStyle}>Enter something:</label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={inputStyle}
      />
      <button
        onClick={() => onInputChange(inputValue)}
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;
