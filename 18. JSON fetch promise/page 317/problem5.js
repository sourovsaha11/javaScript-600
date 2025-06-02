const movie = {
    title: "ami je tmr,tu tu tu",
    releaseYear: 2025,
    actors: ["dev", "tom cruise", "jeet", "shakib khan"],
    ratings: 9.5,

};
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);
const parseIntoJsAgain = JSON.parse(movieJSON);
console.log(parseIntoJsAgain);