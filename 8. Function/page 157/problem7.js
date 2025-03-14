function calculation(num1,num2) {
    if (num1 * num2 < 100) {
        return num1 * num2;
    }
    else {
        return (num1 * num2) / 2;
    }
}
const result = calculation(10, 11);
console.log(result);