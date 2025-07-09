class hotel{
    constructor(name, numberofRooms, expense) {
        this.name = name;
        this.numberofRooms = numberofRooms;
        this.expense = expense;
    }

    getName() {
        return this.name;
    }
};

const hotel1 = new hotel("Seraton", 23, 5000);
console.log(hotel1.getName());
