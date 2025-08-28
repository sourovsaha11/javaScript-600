biggerNumber(87, 12);
function biggerNumber(a, b) {
    if (a > b) {
        console.log("a is bigger than b");
    }
    else if (b>a){
        console.log("b is bigger than a")
    }
    else {
        console.log("They are equal");
    }
};


/*
Function declarations are fully hoisted, allowing you to call them before their actual definition in the code.

javascript nijei hoisting kore dey amader subidhar jonno vitore vitore. that's why amader output a error dekha jay na function initialization er age declare korle.mainly js jokhon parse kore tokhon e move kore top a ene dey function k.
*/