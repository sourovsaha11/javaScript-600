let num = 0;
const peraLage = setInterval(() => {
    console.log("I am learning JavaScript");
    num++;
    if (num === 6) {
        clearInterval(peraLage);
    }
});