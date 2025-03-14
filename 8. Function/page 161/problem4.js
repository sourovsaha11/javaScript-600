function showSum(arr) {
    let sum = 0;
    for (const element of arr) {
        if (element % 4 === 0) {
            sum = sum + element;
        }
        else {
            continue;
        }
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(showSum(arr));