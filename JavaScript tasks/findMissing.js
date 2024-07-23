function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
  }
  
  // Example Input
  const inputArray1 = [1, 2, 3, 4, 6, 7, 8];
  console.log('Missing Number:', findMissingNumber(inputArray1)); 
  
  // Test Input
  const inputArray2 = [1, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log('Missing Number:', findMissingNumber(inputArray2)); 
  