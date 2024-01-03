function calculate(x, y, operator) {
    const operations = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    };
    const operatorFunction = operations[operator];
    const result = operatorFunction(x, y);
    console.log(result);
    //console.log(operations[operator](x, y));
}
calculate(5, 5, 'multiply');
calculate(40, 8, 'divide');
calculate(12, 19, 'add');
calculate(50, 13, 'subtract');