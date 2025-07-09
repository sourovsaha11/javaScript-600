class product{
    constructor(name, category, stock) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
};
const product1 = new product("mobile", "Electronics", 50);
console.log(product1);