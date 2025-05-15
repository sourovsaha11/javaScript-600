function getArea(height,width) {
    if (typeof height !== "number" || typeof width !== "number") {
        return "please provide a number";
    }

    const result = height * width;
    return result;
};
const area = getArea(54,"78");
console.log(area);