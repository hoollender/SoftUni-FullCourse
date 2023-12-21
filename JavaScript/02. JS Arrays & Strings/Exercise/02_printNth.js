function printNth(array, step) {
    let output = [];
    for (let i = 0; i < array.length; i+=step) {
        const element = array[i];
        output.push(element);
    }
return output;
}
printNth(['5', '20', '31', '4', '20'], 2);