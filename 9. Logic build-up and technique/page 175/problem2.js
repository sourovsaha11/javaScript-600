function doubleOddNumber(arr) {
    const arr1 = [];
    for (const number of arr) {
        if (number % 2 === 1) {
            arr1.push(number * 2);
        }
        else {
            continue;
        }
    }
    return arr1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(doubleOddNumber(arr));