import React,{useState,useEffect} from 'react';
import axios from 'axios';
// Lifecycle Methods or useEffect Hook

const LifecycleComponent=()=>{
    const [data,setData]=useState(null);
    const [error,setError] =useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
              setData(response.data);
            } catch (error) {
              setError(error);
            }
          };
          fetchData();
          return () => {
            console.log('Cleaning up...');
          };
        }, []);
        const containerStyle = {
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: '20px auto',
          fontFamily: 'Arial, sans-serif'
        };
      
        const listStyle = {
          listStyleType: 'none',
          padding: '0'
        };
      
        const listItemStyle = {
          backgroundColor: '#ffffff',
          margin: '10px 0',
          padding: '10px',
          borderRadius: '4px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
        };
      
        const errorStyle = {
          color: 'red',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        };
      
        const loadingStyle = {
          fontSize: '1.2rem',
          color: '#666'
        };
      

  if (error) {
    return <div style={errorStyle}>Error: {error.message}</div>;
  }

  if (!data) {
    return <div style={loadingStyle}>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <center><h1>Data fetched with useEffect</h1></center>
      <ul style={listStyle}>
        {data.slice(0, 10).map(item => (
          <li key={item.id} style={listItemStyle}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
 export default LifecycleComponent;
