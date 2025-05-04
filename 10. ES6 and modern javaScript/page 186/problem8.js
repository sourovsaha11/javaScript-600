const arr = [1, 2, 3, 4, 5, 6, 7];
function doubleArray(arr) {
    if (arr.length === 0) {
        const arr1 = [5, 10, 15];
        return arr1;
    }
    else {
        const newArr = [];
        for (let element of arr) {    
            element *= 2;
            newArr.push(element);       
        }
        return newArr;
    }    
}
const result = doubleArray(arr);
console.log(result);