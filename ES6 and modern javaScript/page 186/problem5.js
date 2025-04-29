function namDam(name, price = 1) {
    if (name === "") {
        name = "unknown product";   
    }
    return { name, price };
}

console.log(namDam("akkas", 1000));
console.log(namDam("",));