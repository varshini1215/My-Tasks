
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const ProtectedPage = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/protected', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default ProtectedPage;
