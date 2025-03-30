// Promise jadatar consume kiya jata hai. 


// How to make / create Promises -: 

// Promise() -: it takes a function (either basic or callback fun)
// this function contains 2 parts -: (resolve, reject), promise pura hoga ya nhi hoga. 


// setTimeout() fun hota hai jo exeucte hota h kuch time bad 

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an asynchronus task -: like database call (data receive kiya, data reject kiya)
//     // cryptography related tasks, network calls 
// })



// Promise - 1 -: 


// // 1-: create a promise -: 

// // ***** created promise is hold inside the variable promiseOne *****

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is complete'); 
//         resolve(); 
//     }, 1000)
// })


// // 2-: now consume the created promise -: 

// // .then() ka connection resolve ke sath hai direct. 
// // .then() ke ander ek function or callback milta hai 
// // and jo bhi kaam hua hai promise ke ander vo value return hota hai. 


// promiseOne.then(function(){
//     console.log("Promise Consumed"); 
// })






// Promise - 2 -: 



// Overall -: how to create a promise -: 

// Without storing Promise into another variable -:
// create a promise -: new Promise 
// inside Promise, one function present, which have 2 parts -: resolve, reject
// write any function inside them like setTime() fun, inside this fun do some work 
// and call resolve() fun. 
// and then connect with .then() function








// // Code Walk -: 

// // new Promise kuch bhi kr rha ho, like network handling kr rha ho, file handling kr rha ho 
// // after 1sec or 2sec, jb bhi ye kaam complete ho jayega, then it inform resolve()
// // and .then function called. 


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2"); 
//         resolve(); 
//     }, 1000);

// }).then(function(){
//     console.log("Async 2 Resolved"); 
// })


// IMP -: 
// resolve() fun data ko pass karta hai "Promise" to "then" me 









// // Promise - 3 -: 


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "code@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user); 
// })













// // .then() se value diya jata hai and .catch() se value liya jata hai 


// // Promise - 4 -: 

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username: "Shivam", password: "123"})
//         }else{
//             reject('"Reject" gives an Error: Something went wrong')
//         }
//     }, 1000)
// })


// // user aayega .then() fun me 
// // used arrow function -:

// // if error comes then used .catch() fun. 
// // chaining concepts used here -: 




// // IMP Chaining ex -: 

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){ // catch errors 
//     console.log(error); 
// })
// .finally(() => console.log("Promise either resolved or rejected")) // always execute


// // {username: 'Shivam', password: '123'}
// //      password: "123"
// //      username: "Shivam"
// //      [[Prototype]]: Object
// // Shivam
// // Promise either resolved or rejected






















// Promise-5-: 


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('Error : JS went wrong')
        }
    }, 1000)
})



// Promise (object) -: future me hone wali chije hai 
// it is not necessary to handle promise using .then() or .catch() fun. 

// used -: async -: ye work done hone ka wait karta h, if work done then it move forward 


// async-:keyword, function-:keyword, consumePromiseFive-:fun_name
async function consumePromiseFive(){
    try{
        const response = await promiseFive // "await" -: wait karta hai 
        console.log(response)
    }catch(error){ // if error comes then catch block handle those errors. 
        console.log(error);
    }
}

consumePromiseFive()

// O/P -: Error : JS went wrong -: error handle. 




// Now, Promise 4 and 5 both are same you can use anyone. 
// by using .then() and catch() or by using try and catch() block -: 