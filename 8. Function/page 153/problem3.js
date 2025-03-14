function motBill(vat, curry, drinks) {
    return vat + curry + drinks;
}
const motTaka = motBill(30, 150, 20);
console.log(motTaka);