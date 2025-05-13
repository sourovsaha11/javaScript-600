function wish(callback) {
    callback();
}
function morningGreet() {
    console.log("good morning");
}
wish(morningGreet);