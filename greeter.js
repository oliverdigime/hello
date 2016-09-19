var Student = (function () {
    function Student(firstName, mName, lastName) {
        this.firstName = firstName;
        this.mName = mName;
        this.lastName = lastName;
        this.fullname = firstName + mName + lastName;
    }
    return Student;
})();

function greeter(person) {
    return "hello, " + person.firstName;
}

var user = new Student("f", "m", "l");
document.body.innerHTML = greeter(user);
