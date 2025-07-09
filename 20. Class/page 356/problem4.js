class worker {
    constructor(id, name, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
};
const worker1 = new worker(101, "Tom Cruise", 40);
console.log(worker1);