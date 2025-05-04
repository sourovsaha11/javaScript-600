const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Corp"
};
const { title, ...detailes } = project;
console.log(detailes);