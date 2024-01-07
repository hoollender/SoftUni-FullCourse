function printSquareMatrix(number) {
    function printRow(num) {
        return (num.toString() + ' ').repeat(num);
    }
    for (let currentRow = 1; currentRow <= number; currentRow++) {
        console.log(printRow(number));
    }
}
printSquareMatrix(3);
printSquareMatrix(7);
printSquareMatrix(2);