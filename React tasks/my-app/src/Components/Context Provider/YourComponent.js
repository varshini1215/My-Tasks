import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#e3f2fd',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  margin: '20px auto',
  fontFamily: 'Arial, sans-serif'
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#333',
  marginBottom: '20px'
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease'
};

const buttonHoverStyle = {
  ...buttonStyle,
  backgroundColor: '#45a049'
};

const YourComponent = () => {
  const { state, setGlobalState } = useContext(GlobalContext);

  const updateState = () => {
    setGlobalState({ key: 'Updated Value' });
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>{state.key || 'No value'}</p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={updateState}
      >
        Update State
      </button>
    </div>
  );
};

export default YourComponent;
