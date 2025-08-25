const mail = "jhankar@gmail.com";
function sendEmail(mail) {
    const validEmail = ["nisan@gmail.com", "jhankar@gmail.com", "tiya@gmail.com"];
    const myPromise = new Promise((resolve, reject) => {
        if (validEmail.includes(mail)){
            resolve("Email from Nigerian prince");
        }
        else {
            reject("Let's dance in the spam folder!");
        }    
    })
        .then((msg) => {
            console.log("Email from Nigerian prince");
        })
        .catch((error) => {
        console.log("Let's dance in the spam folder")
    })
    return myPromise;
};

const callingFunction = sendEmail(mail);
