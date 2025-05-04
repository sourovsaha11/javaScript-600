const arr = [1, 2, 3, 4, 5, 6, 7];
const [...rest] = arr;
function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++){
        total += rest[i];
    }
    const avrg = total / rest.length;
    return avrg;
}
console.log(sum(...rest));