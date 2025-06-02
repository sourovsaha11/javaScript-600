const courses = {
    courseOne: {
        courseTitle: "This is course one",
        instructorName: "unknown one",
        duration: 3,
        difficultyLevel: "easy",
    },

    courseTwo: {
        courseTitle: "This is course two",
        instructorName: "unknown two",
        duration: 3,
        difficultyLevel: "medium",
    },

    courseThree: {
        courseTitle: "This is course three",
        instructorName: "unknown three",
        duration: 3,
        difficultyLevel: "Hard",
    },
};
const coursesJSON = JSON.stringify(courses);
console.log(coursesJSON);