const kenaKataKorche = 4500;
if (kenaKataKorche > 6000) {
    const discount = kenaKataKorche / 100 * 15;
    const takaDiteHobe = kenaKataKorche - discount;
    console.log(takaDiteHobe);
}
else if (kenaKataKorche > 3000) {
    const discount = kenaKataKorche / 100 * 5;
    const takaDiteHobe = kenaKataKorche - discount;
    console.log(takaDiteHobe);
}
else {
    console.log("pura takai dite hobe");
}