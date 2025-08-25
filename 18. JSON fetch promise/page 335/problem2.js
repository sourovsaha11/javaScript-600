function validateInput() {
    const email = "sourov.gmail.com";
    try {
        if(!email.includes("@")){
            throw new Error("Invalid email format");   
        }
        console.log("good email format");
        
    }
    catch (error) {
        console.log(error.message);
    }
};

validateInput();