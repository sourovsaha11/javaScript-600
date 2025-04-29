const arr = [1, 2, 3, 4, 5, 6, 7];

const firstAndLastIndex = (arr) => {
    const firstIndex = arr[0];
    const lastIndex = arr[arr.length - 1];
    const sum = firstIndex + lastIndex;
    return sum;
}
const result = firstAndLastIndex(arr);
console.log(result);