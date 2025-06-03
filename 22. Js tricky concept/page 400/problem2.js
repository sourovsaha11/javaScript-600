let browser = "Safari";
if (browser == "Chrome") {
    console.log("Best for developers");
}
else if (browser == "Brave") {
    console.log("Privacy focused");
}
else if (browser == "Safari") {
    console.log("Apple users choice");
}
else {
    console.log("Unsupported browser");
}


// now switch case diye korle jeta hobe ....

// let browser = "Chrome";
switch (browser) {
    case "Chrome":
        console.log("Best for developers");
        break;
    case "Brave":
        console.log("Privacy focused");
        break;
    case "Safari":
        console.log("Apple users choice");
        break;

    default:
        console.log("Unsupported browser");
        break;
}