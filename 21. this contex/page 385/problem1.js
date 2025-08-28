const team = {
    name: "RCB",
    players: 15,
    play() {
        console.log(`Team name is ${this.name} and Team has ${this.players} players`);
    }
};


const tournament = {
    name: "CSK",
    players: 17,
    tournamentHasPlayers : 101,
}
team.play();

const newOne = team.play.bind(tournament);
newOne();