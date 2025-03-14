function calculation(arr) {
    let sum = 0;
    const arr1 = [];

    for (const element of arr) {
        if (element < 0) {
            arr1.push(element);
        }
        else {
            continue;
        }    
    }

    for (const arr1Element of arr1) {
        sum = sum + arr1Element;
    }
    return sum;
}

const arr = [1, -2, 3, -4, 5, -6, 7, -8];
console.log(calculation(arr));