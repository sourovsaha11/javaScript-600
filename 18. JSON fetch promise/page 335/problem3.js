try {
    const data = '{"role" : "CEO", "weeklyHours" : "1000"}';
    const dataParse = JSON.parse(data);
    console.log(dataParse);
}

finally {
    console.log("Week is over");
}