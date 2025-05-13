const object1 = {
    Name: "sourov",
    Roll: 16,
    School: "Rangpur zilla school"
};

function newThings(object1, callback) {
    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            callback(key);
        }
    }
}


function printKey(key) {
    console.log(key);
}

newThings(object1, printKey);