const programmer = {
    name: "Sophia",
    language: "Javascript",
    experience: 5,
    speciality: "Frontend",
    tools: "React"
};
const { language, speciality, ...details } = programmer;
console.log(details); 