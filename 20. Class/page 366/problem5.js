class Furniture {
    constructor(legs,wood,shape) {
        this.legs = legs;
        this.wood = wood;
        this.shape = shape;
    }
};

class Chair extends Furniture {
    constructor(legs,wood,shape,waterproof) {
        super(legs, wood, shape);
        this.waterproof = waterproof;
    }
};

class Table extends Furniture {
    constructor(legs,wood,shape,color) {
        super(legs, wood, shape);
        this.color = color;
    }
};

const object1 = new Chair(4, "kathal kath", "square", false);
const object2 = new Table(6, "segun kath", "rectangualar", "Merun");

console.log(object2.color);

console.log(object1, object2);