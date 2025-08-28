/*

closer function create kora hoyeche,jeikhane ekta function er vitore r ekta function call kora hoyeche ,and function k return kora hoyeche, jar fole eta ekta closure er moto kaj korbe.

*/


function taskTracker() {
    let finishTask = 0;
    return function () {
        finishTask++;
        return finishTask;
    }
};

// return kora function take variable a store korechi

const akibHasDone = taskTracker();
const sakibHasDone = taskTracker();
const tamimHasDone = taskTracker();

// akib er click kora kaj

akibHasDone();
akibHasDone();
akibHasDone();

// sakib er click kora kaj

sakibHasDone();
sakibHasDone();
sakibHasDone();
sakibHasDone();
sakibHasDone();


// tamim er click kora kaj

tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();
tamimHasDone();

// for output 

console.log("akib task koreche :", akibHasDone());
console.log("sakib kaj koreche :", sakibHasDone());
console.log("tamim kaj koreche :", tamimHasDone());