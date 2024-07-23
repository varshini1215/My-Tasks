import React, { useState } from 'react';


export const mockLikeApi = (itemId) => {

  return Math.random() > 0.5
    ? Promise.resolve()
    : Promise.reject(new Error('Failed to like'));
};

const LikeButton = ({ itemId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);
    setHasError(false);

    const newLikes = likes + 1;
    setLikes(newLikes);

    try {
      await mockLikeApi(itemId);
    } catch (error) {
      setLikes(likes);
      setHasError(true);
    } finally {
      setIsLiking(false);
    }
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: hasError ? '#dc3545' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: isLiking ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s',
  };

  const containerStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={handleLike}
        disabled={isLiking}
      >
        {hasError ? 'Error' : 'Like'} ({likes})
      </button>
    </div>
  );
};
export default LikeButton;
