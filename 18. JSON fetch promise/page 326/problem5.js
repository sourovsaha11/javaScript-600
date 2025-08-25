const url = "https://jsonplaceholder.typicode.com/users/1";
fetch(url)
    .then((response) => response.json())
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error.massage)
    });