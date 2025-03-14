const phone = {
    brand: "samsung",
    model: "galaxy S21",
    price: 85000
};

const allKeys = Object.keys(phone);
for (const value of allKeys) {
    console.log(value, phone[value]);
}