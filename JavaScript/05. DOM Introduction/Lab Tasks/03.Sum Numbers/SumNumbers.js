function calc() {
    const firstNumberElementRef = document.getElementById('num1');
    const firstNumberValue = firstNumberElementRef.value;
    const firstNumberAsNum = Number(firstNumberValue);

    const secondNumberElementRef = document.getElementById('num2');
    const secondNumberValue = secondNumberElementRef.value;
    const secondNumberAsNum = Number(secondNumberValue);

    const sum = firstNumberAsNum + secondNumberAsNum;
    document.getElementById('sum').value = sum;
}
