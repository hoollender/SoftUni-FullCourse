function divideFactorials(numOne, numTwo) {
    function calculateFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
    let divisionResult = calculateFactorial(numOne) / calculateFactorial(numTwo);
    console.log(divisionResult.toFixed(2));
}
divideFactorials(5, 2);
divideFactorials(6, 2);