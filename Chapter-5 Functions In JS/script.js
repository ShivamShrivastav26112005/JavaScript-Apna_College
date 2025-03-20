                // Functions In JS -: used to minimize redundancy / repeatition. 


// Block of code that performs a specific task, can be invoked whenever needed. 

// These are some in-built functions -: like .log(), .toUpperCase(), etc. 
// function invoked/call by using parenthesis -: (). 

console.log("shivam shrivastav"); // .log() -: log/print anything on the console. 

let str = "abc".toUpperCase(); // converts letters into the uppercase
console.log(str); 

let arr=[1,2,3];
arr.push(4); // add new ele.s into the array 
console.log(arr);

// shivam shrivastav
// ABC
// (4) [1, 2, 3, 4]



// gives some input into the function and it gives you to an output -: 



// // 1-: function definition -: 


// function function_name(){ // -: "function" keyword, fun_name, parenthesis (), curly bracket {} -: block of code. 
//     // do some work 
// }

// // function call -: 
// function_name(); 



// // function with parameters -: 
// function function_name(parameter1, parameter2, ...){
//     // do some work 
// }





// // ex-1 -: 

// function print(){
//     console.log("Shivam");
//     console.log("Shrivastav"); 
// }

// // fun calling / invoked -: 
// print(); 
// print(); 

// // Output -: 

// // Shivam
// // Shrivastav
// // Shivam
// // Shrivastav




// // ex-2 -: 

// // this fun takes parameter msg -: 
// function print(msg){ // parameter receive 
//     // parameter or input variable -> msg is a input variable  
//     console.log(msg); // print this msg 
// }

// // argument pass to a fun. 
// print("Shivam Shrivastav is a Software Engineer"); // fun calling 
// // Send string as a msg / input / argument. 




// // Pass multiple parameters - 

// function myfun(msg, n){ // it takes 2 parameters 
//     console.log(msg);
//     console.log(n); 
// }

// // "myfun" function calling -: 
// myfun("Shivam", 100); // pass 2 values / arguments 

// // Output -: 
// // Shivam
// // 100




// NaN -: Not a Number. 


// Make a function which takes 2 parameters and returns their sum. 

// function sum(a,b){
//     console.log(a+b); 
// }
// sum(15,20); // 35 



// function sum(a,b){ // a,b is a parameter / local variables -> scope / same block of code me present rahta hai / {} 
//     let ans=a+b;
//     console.log("before return"); // executed 
//     return ans;  
//     console.log("after return"); // after return it is not executed 
// }
// let val=sum(15,20); 
// console.log(val); 

// // before return
// // 35


// Note -: 
// function parameter -> it is like a local variable of fun / called block scope 





// // ***** Arrow Functions (=>) -: *****
// // Compact / small way of writing a function. 

// Syntax -: 
// const fun_name = (param1, param2, ...) => {
//     // do some work -: 
// }

// // Here, param1 and param2 is a input, => it gives output. 

// // // this below part is called arrow function -: 

// //             (param1, param2, ...) => {
// //     // do some work -: 
// // }

// // and arrow function is stored inside the fun_name variable




// ex -: 

// // simple function -: 

// function sum(a,b){
//     console.log(a+b); 
// }
// sum(3,4); // 7


// // arrow function -: 

// const sum = (a,b) => {
//     console.log(a+b); 
// }
// sum(5,6); // 11



// code explanation -: 

// // 1-: this part is called arrow function -: 
// (a,b) => {
//     console.log(a+b); 
// }


// // 2-: this function is stored inside the sum variable 
// const sum =
// IMP -: now "sum" variable behaves like a "function" you can call it. 


// // calling arrow function -: 
// sum(5,6); 


// // write sum into the console. 
// sum
// // it gives function definition. 
// (a,b) => {
//     console.log(a+b); 
// }



// multiply 2 no.s using arrow function -: 

// const multi = (a,b) => {
//     console.log(a*b); 
// }
// multi(5,5); // 25 

// OR -:

// const multi = (a,b) => {
//     return a*b; 
// }


// "multi" is a "fun_variable" and right side parts is called fun definition. 

// write into the console. 

// // write "multi" into the console it gives fun definition. 
// multi 
// (a,b) => {
//     return a*b; 
// }

// // call "multi" function and pass 2 parameters. it gives actual ans. 
// multi(4,5)
// 20



// Take a string as an argument & return no. of vowels. 

// function vowel(str){
//     for(const ch of str){
//         console.log(ch);
//     }
// }
// vowel("shivam"); 

// console output -: 
// script.js:239 s
// script.js:239 h
// script.js:239 i
// script.js:239 v
// script.js:239 a
// script.js:239 m




// function vowel(string){
//     let count=0; 
//     for(const str of string){
//         if(str=='a' || str=='e' || str=='i' || str=='o' || str=='u'){
//             count++;
//         }
//     }
//     console.log(count); 
// }
// vowel("shivam ae"); // 4




// let count=0;
// const vowel = (string) => {
//     for(const str of string){
//         if(str=='a' || str=='e' || str=='i' || str=='o' || str=='u'){
//             count++;
//         }
//     }
// }
// vowel("aeiou shshsh"); 
// console.log(count); // 5



// "forEach" loop in arrays -: "forEach" is a method. just like .toUpperCase() is also a method. 
// function ek normal function hota hai which takes an input and gives some output. 
// when function is associated with the object or any another DS then it is called a "method". 
// used to create a loop -: 


// ex -: arr is an array, apply forEach loop, and pass callBack function 
// arr.forEach(callBack function)


// ********* Note -: In JS "function" is "passed" as a "parameter" also returns the value of the function *********


// callBack function -: it is a function to execute for each element in the array. 
// A callback is a function passed as an argument to another function. 

// syntax -: 
// arr.forEach(val) => {
//     console.log(val);
// });


// // ex-: 
// let array=[1,2,3,4,5]; // this is an array 
// array.forEach(function print(val){ // used "forEach" loop, pass a function named print which takes each value from the array and print it. 
//     console.log(val); 
// });

// // script.js:309 1
// // script.js:309 2
// // script.js:309 3
// // script.js:309 4
// // script.js:309 5


// or -: using an arrow function -: 

// let array=[1,2,3,4,5];
// array.forEach((val) => { // pass val as a parameter and print array's value one by one. 
//     console.log(val);
// });

// // output -: 
// // script.js:322 1
// // script.js:322 2
// // script.js:322 3
// // script.js:322 4
// // script.js:322 5


// it takes 3 parameters -> val, idx and array itself. 

// "forEach" loop is used for only arrays not for strings. 


// let array=[1,2,3,4,5];
// array.forEach((val,idx,array) => { // pass val as a parameter and print array's value one by one. 
//     console.log(val,idx,array)
// });

// // val, idx, size, array -: 
// // 1 0 (5) [1, 2, 3, 4, 5]
// // 2 1 (5) [1, 2, 3, 4, 5]
// // 3 2 (5) [1, 2, 3, 4, 5]
// // 4 3 (5) [1, 2, 3, 4, 5]
// // 5 4 (5) [1, 2, 3, 4, 5]




// "forEach" loop is a HOF. 
// all callback function are called HOF.
// Higher Order functions / Higher Order methods -: used to take another function as 
// a parameter or return any other function. 


// Q-: given array of No.s, print the square of each value using forEach loop. 

// let array=[1,2,3,4,5]; 
// array.forEach((val) => {
//     console.log(val**2);
// }); 

// or -: 

// let nums=[1,2,3,4,5]; // array 
// let calculate = (num) => { // arrow function 
//     console.log(num**2);
// }; 
// nums.forEach(calculate); // calling 


// // Output -: 
// // script.js:363 1
// // script.js:363 4
// // script.js:363 9
// // script.js:363 16
// // script.js:363 25
// // script.js:363 36




// *********** Some More Array Methods -: ***********
// 1-: Map -: it traverse every idx of the array and perform some ops. 
// Map returns a new array after performing ops. 

// Similar to forEach loop -: forEach loop doesn't return any new array after performing ops. 

// Creates a new array with the results of some operation. The value its callback 
// returns are used to form new array. 


// syntax -: pass callback fun and 3 parameters, generally used value parameter 
// arr.map(callbackFun(value, index, array))



// let array=[1,2,3,4,5];
// array.map((val)=>{
//     console.log(val); 
// }); 
// // it prints 1 to 5 (given array) one by one into the console. 

// // store map fun into another variable newArr
// let newArr=array.map((val)=>{
//     return val;
// });
// console.log(newArr); // [1, 2, 3, 4, 5]




// // 2-: "filter" method -: goes every idx of the array and filter out ele.s based on some conditions. 
// // creates a new array of Elements that give true for a condition/filter. 

// // eg-: prints all even Element.s 

// let nums=[1,2,3,4,5,6]; // array 
// let newarr=nums.filter((val)=>{ // call back fun is defined here, 
//     // return val%2===0; // condition for even 
//     // return val%2!==0; // condition for odd
//     return val>3; // val greater than 3 
// });
// console.log(newarr); // prints newarray, becoz we store our fun definition into newarr

// // output -: 
// // [2, 4, 6]
// // [1, 3, 5]
// // [4, 5, 6]




// Q-: "Reduce" Method -: Performs some ops & reduces the array to a single value. 
// It returns that single value. performs many ops and than at the end return only one value. 
// like sum, avg, max, min etc. 


// ex-: 

let nums=[1,2,3,4,5];
const output=nums.reduce((res, curr) => {
    // return res+curr; // calculate sum 
    // return res>curr ? res : curr; // return maximum no. 
    return res<curr ? res : curr; // return minimum no. 
});
console.log(output); 


// 15 
// 5 
// 1


// ((res, curr) -> this is callback function with 2 parameters 
// => {
//     return res+curr; 
// }); -> and "arrow" fun which returns sum 




// Done Functions In JS On the Date of 25-11-2024 Time -: 12:10 PM. 