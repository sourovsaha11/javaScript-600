const taxRate = 15;
function taxReturn(income) {
    let tax = (income * 15) / 100;
    return tax;
}
const diteHobeTax = taxReturn(200000);
console.log(diteHobeTax);