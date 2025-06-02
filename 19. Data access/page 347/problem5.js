const restaurent = {
    name: "Diya bari",
    place: "Dhaka",
    expensive: true,
};

const checking = restaurent?.menu ?? "menu not available";
console.log(checking);