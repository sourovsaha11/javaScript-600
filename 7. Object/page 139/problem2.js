const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
};
Object.freeze(player);

player.age = 32;
console.log(player);