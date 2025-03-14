const food = {
    name: "Pizza",
    price: 500,
    size: "Large"
};
Object.seal(food);
food.quality = "good";
food.price = 800;
console.log(food);

//seal korar karon a property add kora jabe na but property er value change kora jabe. eikhane price change kora jabe ,kintu new property jemon quality add kora jabe na.