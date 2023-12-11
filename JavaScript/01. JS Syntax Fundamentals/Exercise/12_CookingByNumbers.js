function manipulateNumber(startingNumber, op1, op2, op3, op4, op5) {
  let currentNumber = parseInt(startingNumber);
  let operations = [op1, op2, op3, op4, op5];
  let currentOp;

  for (let i = 0; i <= operations.length-1; i++) {
    currentOp = operations[i];
    switch (currentOp) {
      case "chop":
        currentNumber /= 2;
        break;
      case "dice":
        currentNumber = Math.sqrt(currentNumber);
        break;
      case "spice":
        currentNumber += 1;
        break;
      case "bake":
        currentNumber *= 3;
        break;
      case "fillet":
        currentNumber -= (0.2 * currentNumber);
        break;
      default:
        console.log("Invalid operation: " + currentOp);
        return;
    }
    console.log(currentNumber);
  }
}
  manipulateNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');