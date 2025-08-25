const myPromise = new Promise((resolve, reject) => {
    const userAvailable = false;
    const users = ["aaan", "baan", "shaan"];
    if (userAvailable) {
        resolve(users);
    }
    else {
        reject("No user data available")
    }
});
myPromise
    .then((userNames) => {
        console.log(userNames);
    })
    .catch((error) => {
        console.log(error);
    });