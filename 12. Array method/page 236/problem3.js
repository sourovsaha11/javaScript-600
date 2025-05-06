const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
const newMovieList = movieList.splice(2,2,"Batman","Superman");
console.log(newMovieList); 
console.log(movieList);