function sameNumbersChecker(number) {
    let numberStr = number.toString(); // Convert the number to a string to work with its digits
    let firstDigit = numberStr[0]; // Get the first digit for comparison
    let allDigitsAreSame = true; // Assume all digits are the same initially
    let digitSum = 0; // Initialize the sum of digits

    // Iterate through each digit to check if they are the same and calculate the sum
    for (let i = 0; i < numberStr.length; i++) {
        if (numberStr[i] !== firstDigit) {
            allDigitsAreSame = false; // If a different digit is encountered, set the flag to false
        }
        digitSum += parseInt(numberStr[i], 10); // Parse and add the digit to the sum
    }

    // Print the results
    console.log(allDigitsAreSame);
    console.log(digitSum);
}
sameNumbersChecker(123);
