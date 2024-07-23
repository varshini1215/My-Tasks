function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
  
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
  
  // Example Input
  const inputArray1 = [1, 1, 2, 2, 3, 4, 4, 5];
  const newLength1 = removeDuplicates(inputArray1);
  console.log('New Length:', newLength1); 
  console.log('Array without duplicates:', inputArray1.slice(0, newLength1));
  
  // Test Input
  const inputArray2 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
  const newLength2 = removeDuplicates(inputArray2);
  console.log('New Length:', newLength2); 
  console.log('Array without duplicates:', inputArray2.slice(0, newLength2));
  