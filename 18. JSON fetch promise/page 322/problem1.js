const moneyRequest = new Promise((resolve, reject) => {
    setTimeout(() => resolve("request submitted!"), 1000);
});

const transferMoney = new Promise((resolve, reject) => {
    setTimeout(() => resolve("money transfered"), 2000);
});

const payfee = new Promise((resolve, reject) => {
    setTimeout(() => resolve("free pay"), 1500);
});

Promise.all([moneyRequest, transferMoney, payfee])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });

    