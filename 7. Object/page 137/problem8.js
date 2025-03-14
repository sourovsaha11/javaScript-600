const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
};

const value = Object.values(player);
for (const val of value) {
    console.log(val);
}