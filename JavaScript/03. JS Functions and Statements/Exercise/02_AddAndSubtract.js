function sum(first, second, last) {
    let sum = (first, second) => {
        return first + second;
    }
    let subtract = (sum, last) => {
        return sum - last;
    }
    console.log(subtract(sum(first, second), last));
}
sum(23, 6, 10);
sum(1, 17, 30);
sum(42, 58, 100);