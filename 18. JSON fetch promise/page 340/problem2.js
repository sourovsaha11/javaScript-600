async function fetchUser(){
   try {
     const url = "https://jsonplaceholder.typicode.com/users/2";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   } catch (error) {
       console.log("something bad happen");
   }
};

fetchUser();