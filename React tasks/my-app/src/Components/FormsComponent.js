import React, { useState } from 'react';
import '../Styles/FormsComponent.css'; 

const FormsComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.email) newErrors.email = 'Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="form-container">
      <center><h1>Simple Form</h1></center>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <br />
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>
        <br />
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormsComponent;
