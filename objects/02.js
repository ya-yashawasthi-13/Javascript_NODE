const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const user = [
    {
        name: "xyz"
    },
    {
        name: "xy"
    },
    {
        name: "x"
    }
]
console.log(user[0].name)

let tinder = {
    name: "bhatt",
    age: 19,
    place: "dehradun"
}

console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))