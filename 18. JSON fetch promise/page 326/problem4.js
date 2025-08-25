const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => response.json())
    .then((users) => {
        console.log(users)
    })
    .catch((error) => {
        console.log("users nai kono");
    });