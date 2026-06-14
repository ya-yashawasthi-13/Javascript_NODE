// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task completed');
//         resolve()
//     },1000)
// })

// promise.then(function(){
//     console.log('Promise Consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('asyns task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Completed');
// })


// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user:"Yash",username:"yash@gmail.com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user.);
// })

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false ;
        if(!error){
            resolve({username:"Yash",Password:123})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promisefour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.