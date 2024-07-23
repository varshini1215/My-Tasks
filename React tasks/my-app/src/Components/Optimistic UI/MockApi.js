export const mockLikeApi = (itemId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        Math.random() > 0.5 ? resolve() : reject(new Error('Failed to like'));
      }, 1000); 
    });
  };