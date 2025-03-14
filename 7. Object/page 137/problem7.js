const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
let sum = 0;

const value = Object.values(numbers);
for (const val of value) {
    sum += val;
}
console.log(sum);