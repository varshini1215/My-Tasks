import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      login(response.data.token);
      navigate.push('/protected');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      margin: '10px 0 5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;