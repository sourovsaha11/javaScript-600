function wishKoro(wishHandler) {
    wishHandler();
};
function eveningWish() {
    console.log("Good afternoon");
};
wishKoro(eveningWish);

// eikhane first a eveningWish parameter hoye jabe wishHandler er kache .then eveningWish er man hobe wishHandler er man ,tarpor wishhandler k call korle eveningWish er man console log a dekhte paoya jabe.