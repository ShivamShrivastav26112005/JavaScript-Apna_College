// Async Code in JS -: 

// Default JS -: is a synchronous lang. means pahle ek code execute hoga then dusra code 
// execute hoga then tisra code execute hoga ... 

// It is a single threaded lang means ek hi thred pe sb kuch execute hoga. 
// it is slow lang.  




// Execution Context -: 
// means -: execute one line of code at a time. 
// means console.log me 1 hai then pahle 1 print hoga. then 2 hai then 2 print hoga. 

// first execute old statement then execute new statement
// -: each operation waits for the last one to complete before executing. 


// 2 types of code are written in JS => 
// blocking code and non-blocking code -: 

// blocking code -: block the flow of program (Read file sync)
// non-blocking code -: does not block execution (Read file async)



// ************* you can see all the changes by going to inspect section -: *************

// some functions / methods are used in Js -: 



// 1-: setTimeout(); -: it calls API also. 
// time is in miliseconds -: 1sec = 1000ms 







// ex-1-: 

// setInterval(function(){
//     console.log("Shivam"); // name prints on the console after every 2sec continuously. it never stops 
// }, 2000)











// ex-2-: 

// setTimeout(function(){
//     console.log("Shivam"); // name prints on the console after 2sec only once. 
// }, 2000)







// // store it into the variable. 
// const sayshivam = function(){
//     console.log("Shivam"); // name prints on the console after 2sec only once. 
// }

// // pass "reference" as a parameter to the fun. 
// setTimeout(sayshivam, 2000)







// change name of h1 tag from chai aur code to shivam shri using JS after 2sec -: 


// const changetext = function(){
//     document.querySelector('h1').innerHTML="Shivam Shri"
// }

// setTimeout(changetext, 2000)











// // 3-: clearTimeout() fun -: 



// const changetext = function(){
//     document.querySelector('h1').innerHTML="Shivam Shri"
// }

// const changeMe = setTimeout(changetext, 2000)

// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log("Stopped")
// })


// // now whats happened -: 
// // if you not pressed "stop" button displayed on the page then your name is going to be changed 
// // but if you press "stop" button then after that your name is not changed and in console section 
// // "Stopped" displayed. 














// 4-: setInterval() fun -: they contains 3 parameters -: 

// parameter "str" comes inside the function 

// if you press "start" button then printing starts and if you press "stop" button then printing stopped.



let intervalId = null;

const sayDate = function (str) {
    console.log(str, Date.now());
};

// Event listener for the "start" button
document.getElementById("start").addEventListener("click", function () {
    if (!intervalId) {
        intervalId = setInterval(sayDate, 1000, "Hi Shivam");
    }
});

// Event listener for the "stop" button
document.getElementById("stop").addEventListener("click", function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
