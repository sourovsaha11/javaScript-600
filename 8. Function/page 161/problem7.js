function calculation(arr) {
    let multiplication = 1;
    for (const element of arr) {
        if (element % 3 === 0) {
            multiplication = multiplication * element;
        }
        else {
            continue;
        }
    }
    return multiplication;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculation(arr));