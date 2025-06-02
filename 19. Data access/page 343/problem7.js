const vehicle = {
    type: 'car',
    feature: {
        color: 'red',
        brand: {
            name: 'Toyota',
            model: 'Corolla'
        }
    }
};
const brandName = vehicle.feature.brand.name;
console.log(brandName);