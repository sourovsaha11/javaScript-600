const projectManager = {
    projects: ["projects one", "projects two", "projects three"],
    name: "projects one full",
    description: "full length projects it is",
    teamMembers: [12, 23, 42, 12, 13, 34],
    deadlines: "10 october",
    tasks: {
        title: "task one",
        assignee: 23,
        status: "ongoing"
    }
};
const projectManagerJSON = JSON.stringify(projectManager);
console.log(projectManagerJSON);