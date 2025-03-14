function eligableForVoting(age) {
    if (age > 18) {
        return ("you are eligable for voting");    
    }
    else{
        return "Not Eligable";     
    }
}
const checkVoting = eligableForVoting(10);
console.log(checkVoting);