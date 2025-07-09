/* 
            DRY = DONT REPEATE YOURSELF

eikhane eki code bar bar likhte hoy na . simple vabe,smart vabe code likha hoy 
*/

class students {
    constructor(section,teachersPerstudent) {
        this.section = section;
        this.teachersPerstudent = teachersPerstudent;
    }
};

class A {
    constructor(section,teachersPerstudent,result) {
        this.section = section;
        this.teachersPerstudent = teachersPerstudent;
        this.result = result;
    }
};

class B {
    constructor(section,teachersPerstudent,offDay) {
        this.section = section;
        this.teachersPerstudent = teachersPerstudent;
        this.offDay = offDay;
    }
};

// eikhane constructor a (this.section) && (this.teachersPerstudent) line ta mela bar likha hoiche.bolte gele proty constructor er vitor e use kora hoyeche.jeta extends r super use korle etto bar likhte hoito na.


class c extends students {
    constructor(section,present) {
        super(section);
        this.present = present;
    }
};

// eikhane extend r super bebohar kore students class er property use korte parchi c class er vitore. jar fole amader r (this.section) line ta constructor er vitor likhte hocche na.

const object1 = new c("batch-B", 50);
console.log(object1.section);



