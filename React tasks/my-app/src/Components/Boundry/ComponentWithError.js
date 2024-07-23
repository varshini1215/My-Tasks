import React from 'react';

const ComponentWithError = () => {
  throw new Error('This is a simulated error!');
  return <div>This will not be rendered.</div>;
};

export default ComponentWithError;