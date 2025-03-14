function searchingOddNumber(arr) {
    const arr1 = [];
    for (const number of arr) {
        if (number % 2 === 1) {
            arr1.push(number);
        }
        else {
            continue;
        }
    }
    if (arr1.length === 0) {
        return "NO odd number found";
    }
    else {
        return "Odd number found";
    }
}

const arr = [2, 4, 6, 7, 8, 10];
console.log(searchingOddNumber(arr));