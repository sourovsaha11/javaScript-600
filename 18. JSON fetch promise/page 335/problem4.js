function stringOnlyParser(inputData) {
    try {
       if (inputData == null || inputData == "" || inputData == undefined || typeof inputData !== "string") {
           throw new Error("error section a print hobe");
     }
        console.log(inputData);
   } 
    catch (error) {
        console.error("Input must be a string");
    }

};

stringOnlyParser("sourov");
stringOnlyParser(123);