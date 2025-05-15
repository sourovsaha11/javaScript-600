const arr = [1, 2, 3, 4, 5, 6, 10];
function lastElementOfArray(arr) {
    if (Array.isArray(arr) == false) {
        return "please provide an array";
    }
    const result = arr[arr.length - 1];
    return result;
    
};
const lastElement = lastElementOfArray(arr);
console.log(lastElement);