function factorial(n) {

    if (n === 0 || n === 1) {
      return 1;
    }
    

    return n * factorial(n - 1);
  }
  
  // Example Input
  const n1 = 5;
  console.log(`Factorial of ${n1}:`, factorial(n1)); 
  
  // Test Input
  const n2 = 10;
  console.log(`Factorial of ${n2}:`, factorial(n2)); 
  