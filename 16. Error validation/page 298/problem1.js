function firstLetter(NameReceive) {
    if (typeof NameReceive !== "string") {
        return "please provide a string";
    }
    return NameReceive[0];
};

const firstLetterIs = firstLetter("Sourov");
console.log(firstLetterIs);