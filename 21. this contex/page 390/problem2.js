function fridgeTracker (){
    let open = 0;
    return function(){
        open++;
        return open;
    }
};

const rahim = fridgeTracker();
const sakib = fridgeTracker();
const riad = fridgeTracker();


rahim();
rahim();
riad();
sakib();
sakib();
sakib();
riad();


console.log("ramim open the fridge ", rahim());
console.log("sakib open the fridge ", sakib());
console.log("riad open the fridge ", riad());
