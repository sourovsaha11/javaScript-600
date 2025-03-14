function MathCalculation(number) {
    if (number < 10) {
        return number * 10;
    }
    else {
        return number / 10;
    }
}
const result = MathCalculation(33);
console.log(result);