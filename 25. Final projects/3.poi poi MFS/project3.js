const userDatabase = (function () {
    const users = [];
    const transactionHistory = [];
    let processingFee = 0;
    return {
        registerUser: function (name, pin) {
            // checking name and pin ache kina
            if (!name && !pin) {
                return `give valid name and pin number`;
            }

            // checking 4 ta pin number and type number ki na .
            else if (pin.length !== 4 && typeof pin !== "number") {
                return `something error happening`;
            }

            // sob kichu thik thakle.

            else {
                const newUser = {
                    id: users.length + 1,
                    name: name,
                    pin: pin,
                    balance: 0
                };
                users.push(newUser);
                return true;
            }
        },
        loginUser: function (nameUser,pinNumber) {
            const matchedUser = users.find(user => user.name == nameUser && user.pin == pinNumber);
            if (matchedUser) {
                return true;
            }
            else {
                return false;
            }
        },

        addMoney: function (nameUser, pinNumber, amount) {
            const matchedUser = users.find(user => user.name === nameUser && user.pin === pinNumber);
           
            if (matchedUser) {
                matchedUser.balance += amount;

                // adding history section.
                        const newHistory = {
                            sender: nameUser,
                            receiver: nameUser,
                            amount: amount
                };
                
                transactionHistory.push(newHistory);

                // transaction history checking
                 console.log("This is the transaction history \n ",transactionHistory);

                return `${nameUser} has been received ${amount} taka, New balance is ${matchedUser.balance}`;

            }
            else {
                return `Sorry, taka account a add korte pari nai, tomar taka refund kora hoyeche.`;
            }

          
        },

        //taka send korar method. 
        sendMoney : function (nameUser,pinNumber,recieverName,amountOfMoney) {
            const matchedUser = users.find(user => user.name === nameUser && user.pin === pinNumber);
            if (matchedUser) {
                if (matchedUser.balance >= amountOfMoney + 15) {
                    const matchedUser2 = users.find(user => user.name === recieverName);
                    if (matchedUser2) {
                        matchedUser2.balance += amountOfMoney;
                        matchedUser.balance -= amountOfMoney + 15;

                        // adding processingFee
                        processingFee = processingFee + 15;
                        console.log("processing fee is : ", processingFee);

                        console.log(matchedUser.balance);
                        console.log(matchedUser2.balance);

                        // adding history section.
                                const newHistory = {
                                    sender: nameUser,
                                    receiver: recieverName,
                                    amount: amountOfMoney
                            };
                
                        transactionHistory.push(newHistory);

                        // transaction history checking
                         console.log("This is the transaction history \n ",transactionHistory);
                        

                        return `taka valo vabe sent kore diyechi`;
                    }
                    else {
                        return `reciever k khuje paoya jay nai`;
                    }
                }
                else {
                    return `tomar account a enough taka nai`;
                }
            }
            else {
                return `tomar taka pathanor access nai`;
            }
        },
        
        // for checking kar account a koto taka ache.
        checkBalance : function (nameUser,pinNumber){
             const matchedUser = users.find(user => user.name === nameUser && user.pin === pinNumber);
            if (matchedUser) {
                return `${matchedUser.balance}`;
            }
            else {
                return `tomar access nai ,ei account er balance janar`;
            }
        },

       
    };

    
})();




// test section.

userDatabase.registerUser("Alice", 1234);
userDatabase.registerUser("Bob", 5678);

// seeing the userDatabase.
console.log(userDatabase);

// checking the result true or false.
console.log(userDatabase.loginUser("Alice", 1234));
// wrong one 
console.log(userDatabase.loginUser("Alice", 7891));

// adding money.
console.log(userDatabase.addMoney("Alice", 1234, 50000));
console.log(userDatabase.addMoney("Bob",5678, 50000));

// calling checkbalance function
console.log(userDatabase.checkBalance("Alice", 1234));

// taka send korar method
console.log(userDatabase.sendMoney("Alice", 1234, "Bob", 100));
console.log(userDatabase.sendMoney("Alice", 1234, "Bob", 200));
console.log(userDatabase.sendMoney("Alice", 1234, "Bob", 100));

