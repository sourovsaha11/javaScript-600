function taxAmount(incomeAmount) {
    if (incomeAmount <= 50000) {
        return "10";
    }
    else if (incomeAmount <= 100000) {
        return "20";
    }
    else if (incomeAmount <= 200000) {
        return "30";
    }
    else {
        return "40";
    }
}
 
const tax = taxAmount(1145000);
console.log(tax);