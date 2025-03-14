const building = {
    floors: 10,
    address: {
        street: 'Main road',
        city: 'Dhaka'
    },
    type: 'commercial'
};

for (const key in building) {
    const value = building[key];
    console.log(key, value);
}