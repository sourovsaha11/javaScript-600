function number(x) {
    if (x % 13 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const provideNumber = number(25);
console.log(provideNumber);