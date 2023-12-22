function sortNumbers(array) {
    let resultArray = [];
    let sortedArray = array.sort((a, b) => a - b);
    while (sortedArray.length !== 0){
        
        let first = sortedArray.shift();
        let last = sortedArray.pop();
        resultArray.push(first);
        resultArray.push(last);
    }
    return resultArray;
}
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);