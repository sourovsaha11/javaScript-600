class product{
    constructor(name, category, stock=0) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
};
const product1 = new product("Mobile", "Electronics",50);
console.log(product1);


