try {
    const acc = 123;
    const deletedAcc = delete acc;
    console.log("Deleting account");
} catch (error) {
    console.log("could not find any error");
}
finally {
    console.log("account nai hoye geche");
}