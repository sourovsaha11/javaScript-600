const productDetails = {
    name: 'tshirt',
    price: 1234,
    discount: false
};

const discountOffer = productDetails.discount || 10;
console.log(discountOffer);