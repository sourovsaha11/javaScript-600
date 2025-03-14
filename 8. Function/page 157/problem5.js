function MathCalculation(number) {
    if (number < 0) {
        return number * 3;
    }
    else {
        return number * 2;
    }
}
const multiply = MathCalculation(-5);
console.log(multiply);