const website = {
    name: "MySite",
    type: "e-commerce",
    status: "active"
    
};
const newObject = { ...website, theme: "Dark" };
console.log(newObject);