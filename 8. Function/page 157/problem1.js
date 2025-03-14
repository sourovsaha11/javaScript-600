function evenOrodd(numArr) {
    const len = numArr.length;
    if (len % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }

    
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
console.log(evenOrodd(number));
