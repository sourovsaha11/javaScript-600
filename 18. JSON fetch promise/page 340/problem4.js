// async....await version

try {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log("something error happen");
} 

// pyramid of doom version


const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
fetch(url)
    .then(function(response) {
        response.json()
            .then(function(data) {
                console.log(data);
            })
            .catch(function(error) {
                console.log("something error happen");
            });
    })
    .catch(function(error) {
        console.log("something error happen");
           });