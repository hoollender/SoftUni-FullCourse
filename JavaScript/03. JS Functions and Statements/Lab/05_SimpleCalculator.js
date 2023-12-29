function calculate(numX, numY, operator) {
    let result = 0;
    switch (operator) {
        case "multiply": result = numX * numY;
            break;
        case "divide": result = numX / numY;
            break;
        case "add": result = numX + numY;
            break;
        case "subtract": result = numX - numY;
            break;
    }
    console.log(result);
}
calculate(5, 5, 'multiply');
calculate(40, 8, 'divide');
calculate(12, 19, 'add');
calculate(50, 13, 'subtract');