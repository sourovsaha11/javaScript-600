function nameAndIncome(name = 'anonymous', income = 0) {
   
    if (name === "") {
        name = "anonymous";
    }
    
    return { name, income };
}

const person = nameAndIncome('', 1000);
console.log(person);