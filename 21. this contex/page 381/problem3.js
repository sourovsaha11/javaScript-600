// In assignWork method, 'this' refers to the 'manager' object

const manager = {
    tasks: ["write note always", "write clean code", "always drink water"],
    assignWork(newTask) {
        this.tasks.push(newTask); // 'this' refers to the manager object
        console.log(this.tasks);
    }
};

manager.assignWork("code review"); 