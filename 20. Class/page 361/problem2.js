class Employee{
    constructor(name, position, salery) {
        this.name = name;
        this.position = position;
        this.salery = salery;
    }

    getsalary() {
        return this.salery;
    }
};
const employee1 = new Employee("rakib", "senior manager", 10000);
console.log(employee1.getsalary());