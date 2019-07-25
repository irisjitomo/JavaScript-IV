// CODE here for your Lambda Classes

class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student} recieves a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects(){
        console.log(`${this.name} likes ${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class projectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standup times!`);
    }
    debugsCode(studentName, subject){
        console.log(`${this.name} debugs ${studentName}'s code on ${subject}`)
    }
}



/*Objects___________________________________________________________________________________________________*/

const testInstructor = new Instructor({
    name: 'testInstructor',
    age: 20,
    location: 'brazil',
    specialty: 'Javascript',
    favLanguage: 'CSS',
    catchPhrase: "It's a trap"
})

console.log(testInstructor);
testInstructor.speak();
testInstructor.demo('anything');
testInstructor.grade('Raul','Math');


const testStudent = new Student({
    name: 'testStudent',
    age: 20,
    location: 'brazil',
    previousBackground: 'AppAcademy',
    className: 'Web22',
    favSubjects: ["Javascript", "HTML", "CSS"],
    grade: Math.floor(Math.random() * 100),
})

console.log(testStudent);
testStudent.listsSubjects();
testStudent.PRAssignment('Math');
testStudent.sprintChallenge('Javascript-III');



const testProjectManager = new projectManager({
    name: 'testPM',
    age:27,
    location: 'Russia',
    specialty: 'Javascript/JQuery',
    favLanguage: 'CSS',
    catchPhrase: "Im the PM",
    gradClassName: 'Web18',
    favInstructor: 'Britt Hemming',
})

console.log(testProjectManager);
testProjectManager.standUp('Web22');
testProjectManager.debugsCode('Iris','Javascript')