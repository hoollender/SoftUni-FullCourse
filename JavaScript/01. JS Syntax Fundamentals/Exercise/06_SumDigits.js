function sumDigits(num) {
    // Convert the number to a string to work with its individual digits
    let numberStr = num.toString();

    // Initialize a variable to hold the sum of digits
    let digitSum = 0;

    // Iterate through each digit and add it to the sum
    for (let i = 0; i < numberStr.length; i++) {
        const digit = parseInt(numberStr[i], 10); // Parse the digit as an integer
        digitSum += digit;
    }

    console.log(digitSum);
}
sumDigits(245678);