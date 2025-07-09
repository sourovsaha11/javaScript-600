class petAnimal {
    constructor(name,legs,color) {
        this.name = name;
        this.legs = legs;
        this.color = color;
    }
};
class Dog extends petAnimal {
    constructor(name,legs,color,sound) {
        super(name, legs, color);
        this.sound = sound;
    }
};

class Cat extends petAnimal {
    constructor(name,legs,color,poshom) {
        super(name, legs, color);
        this.poshom = poshom;
    }
};

class Parrot extends petAnimal {
    constructor(name,legs,color,canFly) {
        super(name, legs, color);
        this.canFly = canFly;
    }
};

const object1 = new Dog("tommy", 4, "White", "ghew ghew");
const object2 = new Cat("paglu", 4, "brown", true);
const object3 = new Parrot("tiya", 2, "green", true);

console.log(object1, object2, object3);

console.log(object3?.canFly ?? "urte pare na");