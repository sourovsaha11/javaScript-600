function square(a) {
    
    if (typeof a !== 'number') {
        return 1;
    }
    else {
        return a * a;
    }
}
const square1 = square(10);
console.log(square1);
