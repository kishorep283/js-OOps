class Member{
    name;
    memberID;
    constructor(name,memberID){
        this.name=name;
        this.memberID=memberID;

    }
    displayprofile(){
        console.log("desplay profile");
    }
}
class Student extends Member{
    grade;
    constructor(name,memberID,grade){
        super(name,memberID);
        this.grade=grade;
    }
    displayprofile(){
        console.log(`this is ${this.name} profile`)
    }
}
class Teacher extends Member{
    subject;
    constructor(name,memberID,subject){
        super(name,memberID);
        this.subject=subject;
    }
    displayprofile(){
        console.log(`this is ${this.name} profile`)
    }

}
var student = new Student("Ravi",123,"XI");
var teacher = new Teacher("raghav",234,"XX");
student.displayprofile();
teacher.displayprofile();