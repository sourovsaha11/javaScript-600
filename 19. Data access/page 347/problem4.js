const vehicle = {
    name: "rickshaw",
    tyre: 3,
    price: 15000
};

const checkingEngine = vehicle?.engine ?? "Engine info missing";
console.log(checkingEngine);