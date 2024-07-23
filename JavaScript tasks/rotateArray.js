function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
  
    
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; 
        start++;
        end--;
      }
    }
  
    
    reverse(arr, 0, n - 1);
 
    reverse(arr, 0, k - 1);
  
    reverse(arr, k, n - 1);
  
    return arr;
  }
  
  // Example Input
  const inputArray1 = [1, 2, 3, 4, 5, 6, 7];
  const k1 = 3;
  console.log('Rotated Array:', rotateArray(inputArray1, k1)); 
  // Test Input
  const inputArray2 = [3, 8, 9, 2, 5];
  const k2 = 2;
  console.log('Rotated Array:', rotateArray(inputArray2, k2)); 
  