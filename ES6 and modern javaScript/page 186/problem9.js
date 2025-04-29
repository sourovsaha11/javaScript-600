const object1 = {
    principal: 2500,
    rate: 10
};
function simpleInterest(object = {principal : 1000, rate : 5}) {
    const principal = object.principal || 1000;
    const rate = object.rate || 5;
    const result = (principal * rate) / 100;
    return result; 
}
const result1 = simpleInterest();
console.log(result1); 
