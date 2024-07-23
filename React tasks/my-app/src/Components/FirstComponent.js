import React, { useState } from 'react';
import '../Styles/FirstComponent.css'; 
const FirstComponent = () => {
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      {/* Basic Component Creation */}
      <div className="basic-component">
       <center> <h1>Basic Component Creation</h1></center>
        <button className="button">Click Me!</button>
        <input type="text" placeholder="Enter the text" className="input" />
      </div>
      {/* State Management */}
      <div className="state-management">
        <center><h1>State Management</h1></center>
        <h2 className="counter">Counter: {count}</h2>
        <button className="button" onClick={increment}>Increase</button>
        <button className="button" onClick={decrement}>Decrease</button>
      </div>
      <br />
      {/* Conditional Rendering */}
      <div className="conditional-rendering">
        <center><h1>Conditional Rendering</h1></center>
        <button className="button" onClick={toggle}>
          {isToggled ? 'Hide Message' : 'Show Message'}
        </button>
        {isToggled && <p className="message">This is a toggled message!</p>}
        <p className="message-status">
          {isToggled ? 'The message is visible.' : 'The message is hidden.'}
        </p>
      </div>
    </div>
  );
};

export default FirstComponent;
