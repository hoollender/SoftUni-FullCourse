function calculate(fruit, weightGrams, price) {
    let weightKilos = (weightGrams / 1000);
    let totalSum = price * weightKilos
    console.log(`I need $${totalSum.toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${fruit}.`)
}
calculate('orange', 2500, 1.80);
calculate('apple', 1563, 2.35);