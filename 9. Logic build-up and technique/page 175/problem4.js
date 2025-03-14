function oddNumberAvrg(arr) {
    const arr1 = [];
    let sum = 0;
    for (const number of arr) {
        if (number % 2 === 1) {
            arr1.push(number);
            sum = sum + number;
        }
    }
    const avrg = sum / arr1.length;
    return avrg.toFixed(2);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oddNumberAvrg(arr));