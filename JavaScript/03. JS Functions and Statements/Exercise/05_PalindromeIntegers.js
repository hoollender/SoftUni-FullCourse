function areTherePalindromeIntegers(array) {

    function isPalindromeInteger(num) {
        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('');
        return numAsString === reversedNum;
    }
    for (const currentNumber of array) {
        console.log(isPalindromeInteger(currentNumber));
    }

}
isPalindromeInteger([123, 323, 421, 121]);