const stud = {
    name: "Yash",
    rollno: 100,
    greet: function(){
        console.log(`${this.name}, how are you`) // work on current context
    }
}

stud.greet()