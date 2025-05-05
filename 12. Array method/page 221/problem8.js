const arr = [1, 2, 3, 4, 5];
function showNumbers(arr) {
    const result = arr.forEach(n => console.log(n));
    return result;
    
}
showNumbers(arr);
const result2 = showNumbers(arr);
console.log(result2);

//both result are here and we can see one is printing 1 to 5 and the second one is 1 to undefined.because forEach method does not return anything .