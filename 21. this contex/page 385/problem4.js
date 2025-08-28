const classroom = {
    name: "class seven",
    students: ["abul", "kassem", "mojnu", "roky", "sakib"],
    
    attendance() {
        console.log(`${this.name} and the students are ${this.students}`);
    }
    
};

classroom.attendance();

const lab = {
    name: "lab name alpha",
    students : ["Rafiq", "jobbar", "safiur", "salam", "barkat"],
    
};

const bindingLab = classroom.attendance.bind(lab);
bindingLab();