const person = {
    name: "Rahim",
    city: "Dhaka",
};
const { name, city, phone = "N/A" } = person;
console.log(phone);