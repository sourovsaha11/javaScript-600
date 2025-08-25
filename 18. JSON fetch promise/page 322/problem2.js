const paymentProcess = new Promise((resolve, reject) => {
    const amount = 1000;
    if (amount > 0) {
        resolve("proccessed");
    } else {
        reject("taka nai account a");
    }
});
paymentProcess
    .then((payment) => {
        console.log("payment done");
    })
    .catch((error) => {
        console.log("promise reject khaiche")
    });