const laptop = {
    brand: "dell",
    getBrand() {
        console.log(this.brand);
        return this.brand;
    }
};

const mobile = {
    brand : laptop.getBrand
};


const mobileBrand = laptop.getBrand();
console.log(mobileBrand);