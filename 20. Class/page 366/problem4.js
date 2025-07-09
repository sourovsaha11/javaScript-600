class praniJogot {
    constructor(type,legs,name,food,canfly) {
        this.type = type;
        this.legs = legs;
        this.name = name;
        this.food = food;
        this.canfly = canfly;
    }
};

class Animal extends praniJogot{
    constructor(type,legs,name,food,canHumaneat) {
        super(type, legs, name, food);
        this.canHumaneat = canHumaneat;
    }
};

class Bird extends praniJogot {
    constructor(type, legs, food, canfly, weight) {
        super(type, legs, food, canfly);
        this.weight = weight;   
    }
};

class Fish extends praniJogot {
    constructor(type, canHumaneat, food, name, canSwim) {
        super(type, canHumaneat, food, name, canSwim);
        this.canSwim = canSwim;    
    }
};


const object1 = new Fish("type", true, "zuplankton", "Rui", true);
const object2 = new Bird("small bird", 2, "poka makor", true, 20);
const object3 = new Animal("poshu", 4, "Tiger", "mangsho", false);

console.log(object1, object2, object3);

console.log(object3?.canHumaneat ?? "can not fly");