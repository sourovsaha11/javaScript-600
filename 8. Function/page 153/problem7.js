function negativeToPositive(number) {
    if (number < 0) {
        return number * -1;
    }
    else {
        return number;
    }
}
const positiveNumber = negativeToPositive(-7);
console.log(positiveNumber);