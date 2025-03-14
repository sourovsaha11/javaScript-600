function result(marks){
    if(marks>=80){
        return "A";
    }
    else if(marks>=70){
        return "B";
    }
    else if(marks>=60){
        return "C";
    }
    else if(marks>=50){
        return "D";
    }
    else{
        return "F";
    }
    
}
const grade = result(95);
console.log(grade);