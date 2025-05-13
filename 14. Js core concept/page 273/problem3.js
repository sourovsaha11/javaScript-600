function numberProcessor(number1, callback) {
    let answer = number1 / 5;
    callback(answer);
};

function callback(answer) {
    console.log(answer);
};
numberProcessor(10, callback);
