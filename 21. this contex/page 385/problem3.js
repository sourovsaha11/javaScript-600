const employee = {
    name: "sourov",
    role: "SWE",
    details() {
        console.log(`employee name is ${this.name} and role is ${this.role}`);
    }
};
employee.details();

const manager = {
    name : "jhanker mahbub",
    role : "senior manager",
};

employee.details.apply(manager);
