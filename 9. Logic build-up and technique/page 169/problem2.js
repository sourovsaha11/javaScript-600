function delivaryCharge(kg) {
    if (kg < 10) {
        return 100;
    }
    else if (kg < 20) {
        return 300;
    }
    else if (kg < 50) {
        return 1000;
    }
    else {
        return kg * 100;
    }
}

const charge = delivaryCharge(47);
console.log(charge);