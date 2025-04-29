const object = {
    salary: 50000,
    tax : 20
}

function calculateTax(object = { salary: 50000, tax: 10 }) {
    const salary = object.salary || 50000;
    const tax = object.tax || 10;
    const result = (salary * tax) / 100;
    return salary - result;
}
const result2 = calculateTax(object);
console.log(result2);