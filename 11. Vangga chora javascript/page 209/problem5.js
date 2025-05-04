const young = {
    name: "Arif",
    age: 30,
    country: "B Baria"
};
const { country, ...rest } = young;
const newObject = { ...rest };
console.log(newObject);