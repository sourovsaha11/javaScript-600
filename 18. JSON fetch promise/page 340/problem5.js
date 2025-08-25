async function commentLoading() {
    
    try {
        const url = "https://jsonplaceholder.typicode.com/comments";
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data);
    } catch (error) {
        console.log("something bad happen");
    }
    finally {
        console.log("Request completed");
    }
};

commentLoading();