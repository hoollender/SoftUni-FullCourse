function reverseArray(n, array){
    let arr =[];
    for (let i = 0; i < n; i++) {
        const element = array[i];
        arr.push(element);
    }
    let output ='';
    for (let i = arr.length-1; i >= 0; i--){
        output += arr[i] + " ";
        
    }
    console.log(output);
}
reverseArray (3, [10, 20, 30, 40, 50]);