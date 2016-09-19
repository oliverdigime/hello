class Student
{
    fullname:String;

    constructor(public firstName, public mName, public lastName)
    {
        this.fullname = firstName+mName+lastName;
    }
}


interface Person
{
    firstName:String;
    lastName:String;
}


function greeter(person:Person)
{
    return "hello, "+person.firstName;
}


var user =  new Student("f", "m", "l")
document.body.innerHTML = greeter(user);