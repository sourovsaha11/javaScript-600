const product = {
    name: 'phone',
    price: 15000
};
const serchingStock = product?.stock ?? 0;
console.log(serchingStock);