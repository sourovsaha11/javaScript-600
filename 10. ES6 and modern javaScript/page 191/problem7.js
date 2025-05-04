const student = {
    name: "sourov",
    age: 26,
    marks: [80, 90, 78]
};
const avrg = (student.marks[0] + student.marks[1] + student.marks[2]) / 3;
console.log(`The student name is ${student.name} and his average marks is ${avrg.toFixed(2)}`);
