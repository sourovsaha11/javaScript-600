function removeDuplicates(arr) {
    const uniqueArr = [];

    for (const item of arr) {
        if (uniqueArr.includes(item) === false) {
            uniqueArr.push(item);
        }
        else {
            continue;
        }
    }
    return uniqueArr;
}

const arr = [1, 5, 61, 5, 87, 7, 5, 81, 61];
console.log(removeDuplicates(arr));