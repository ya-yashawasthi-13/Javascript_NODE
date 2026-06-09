// object literals 

let mysym = Symbol("key1");

let stud = {
    name: "Yash",
    "full name": "awasthi",
    mysym: "key2", //symbol
    age: 18,
    email: "yash@gmail.com",
    course: "bca"
}

stud.greet = function(){
    console.log("Hello Student")
}
stud.greet2 = function(){
    console.log(`Hello, ${this.name}`)
}

console.log(stud["full name"])
console.log(stud["name"])
console.log(stud["mysym"])
console.log(typeof mysym)

Object.freeze(stud.name)

console.log(stud)
console.log(stud.greet())
console.log(stud.greet2())


