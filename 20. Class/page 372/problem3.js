class person{
    constructor(name) {
        this.name = name;
    }
};

const person1 = new person("Sourov");
const proto1 = Object.getPrototypeOf(person);
console.log(proto1);

const proto2 = person.__proto__;
console.log(proto2);

console.log(person.toString());