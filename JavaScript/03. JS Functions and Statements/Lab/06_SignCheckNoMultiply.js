function signCheck(numOne, numTwo, numThree) {
    // Count the number of negative inputs
    let negativeCount = 0;
  
    // Check if numOne is negative
    if (numOne < 0) {
      negativeCount++;
    }
  
    // Check if numTwo is negative
    if (numTwo < 0) {
      negativeCount++;
    }
  
    // Check if numThree is negative
    if (numThree < 0) {
      negativeCount++;
    }
  
    // Determine the sign of the result based on the number of negative inputs
    if (negativeCount % 2 === 0) {
      console.log("Positive");
    } else {
        console.log("Negative");
    }
    
  }


signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);