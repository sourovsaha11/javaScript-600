const animal = {
    name: "tiger",
    location: "Sundarban"
};
Object.freeze(animal);
animal.location = "bandarban";
console.log(animal);

//freeze korle object change kora jay na .