// function add(num1, num2){
//     console.log(num1+num2)
// }
// function add(num1, num2){
//     return num1 + num2
// }

// const res = add(2,3)

// console.log(res)

function login(username){
    if(!username) "Please enter username"
    return `${username} logged in`
}

console.log(login("Yash"))


//shoppping cart


function cart(...num1){
    return num1
}

const shop = cart(40, 900, 233, 400)

console.log(shop)