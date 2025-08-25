async function personId(userId){
    try {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('something happen to the code');
    }
};

personId(3);