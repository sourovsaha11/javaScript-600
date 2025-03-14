function tellingAge(age) {
    if (age < 18) {
        return "18";
    }
    else if (age > 45) {
        return "45";
    }
    else {
        return age;
    }
}
const age = 46;
console.log(tellingAge(age));