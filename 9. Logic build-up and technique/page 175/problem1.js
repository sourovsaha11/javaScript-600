function sumOfEvenNumber(arr) {
    let sum = 0;
    const arr1 = [];
    for (const number of arr) {
        if (number % 2 === 0) {
            arr1.push(number);
            sum = sum + number;
        }
    }
    const avrg = sum / arr1.length;
    return avrg;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNumber(arr));