function oddNumberSum(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num % 2 === 1) {
            sum = sum + num;
        }
    }
    return sum;
}
const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oddNumberSum(arrOfNumbers));