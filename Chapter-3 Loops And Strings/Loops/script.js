// console.log("Loops in JS"); 


// console.log("Hii, Shivam");


// 1-: Loops in JS -: 
// Loops are used to execute a piece of code again and again. 

// a)-: for loop -: 

// syntax -: 
// for(declaration and initilization, condition or stopping condition, updation){
    
// }




// // Q -: print 5 times shivam 
// for(let i=0; i<5; i++){
//     console.log("Shivam"); // it execute 5 times and print 5 times Shivam
// }
// console.log("Loop has ended");


// // Q-: Calculate sum of 1 to n. 
// let sum=0;
// let n=5;
// for(let i=1; i<=n; i++){
//     sum+=i;
// }
// console.log(sum); // 15 


// print 1 to 5 and 5 to 1 

// for(let i=1; i<=5; i++){
//     console.log("i =", i); 
// }

// for(let i=5; i>=1; i--){
//     console.log("i =", i); 
// }


// output -: 
// script.js:40 i = 5
// script.js:40 i = 4
// script.js:40 i = 3
// script.js:40 i = 2
// script.js:40 i = 1



// scope of the "let" and "var" keywords -: 


// // "let" scope -: 
// for(let i=1; i<=5; i++){
//     console.log("i =", i); 
// }
// console.log(i); // it gives us error -: i is not defined 
// // becoz i variable is defined inside the block scope only you can access inside 
// // the block or {} curly bracket. Outside the curly {} bracket you can't access this variable. 




// "var" scope -: it doesn't gives an error, it's variable is available globally 
//  it is available everywhere. 


// for(var i=1; i<=5; i++){
//     console.log("i =", i); 
// }
// console.log(i); // it prints 6 doesn't give an error. 

// // output-: 
// // script.js:72 i = 1
// // script.js:72 i = 2
// // script.js:72 i = 3
// // script.js:72 i = 4
// // script.js:72 i = 5
// // script.js:74 6



// Infinite Loop -: A Loop that never ends. 
// it runs always -: it's harmful for us becoz it takes lots of memory in our computer. 
// never ends means stopping condition never false . it gives always true. 

// ex-: 
// for(let i=1; i>=0; i++){
//     console.log("i =", i); 
// }





// 2-: while loop -: 

// while(condition){
//     // do some work -: 
//     // updation -:  
// }


// ex -: 

// let i=1; // initilization -: 
// while(i<=5){ // condition 
//     // console.log("i = ", i); // do some work
//     // or -: 
//     console.log("Shivam"); // it prints 5 times Shivam
//     i++; // updation 
// }

// // output -: 
// // script.js:111 i =  1
// // script.js:111 i =  2
// // script.js:111 i =  3
// // script.js:111 i =  4
// // script.js:111 i =  5






// 3-: do-while loop in JS -: 
// it runs atleast 1 time either condition is true or not. 

// do{
//     // do some work 
//     // updation 
// }while(condition); 


// ex -: 

// let i=20;
// do{
//     console.log(i); // it prints 20 then break the loop becoz condition is false 
//     i++;
// }while(i<=10); 


// // prints 1 to 5. 

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5); 

// // it prints 1 to 5 





// 4-: for-of loop -: it is used to iterate or apply loop on some special data types  
// "for-of" loop is used to iterate on "strings" and "arrays" not used for "objects". 

// syntax -: 

// for(let val of str){
//     // do some work 
// }


// ex -: for of loop -: 

// let str="Shi vam"; 
// for(let ch of str){
//     console.log(ch); 
// }
// // it takes one by one character from the given string str and prints it. 


// output -: 
// script.js:175 S
// script.js:175 h
// script.js:175 i
// script.js:175  
// script.js:175 v
// script.js:175 a
// script.js:175 m







// // find the size of the string 

// let str="Shivam Shrivastav"; 
// let size=0;
// for(let ch of str){
//     // console.log(ch); // it prints characters 
//     size++;
// }

// console.log(size); // 17 (including space)





// 5 -: for-in loop -: it is used for "objects" and arrays, it iterates in "objects". 

// objects in JS -: it is used to store "key:value" pairs. 


// create an objects in JS -: 
// object name is student 

let student = {
    name:"shivam shrivastav",
    age:19,
    cgpa:8.45,
    isPass:true,
};


// apply loop on the given above "student" object -: 
// print its all keys -: 


// for(let key in student){
//     console.log(key); 
// }
// // output-: 
// // script.js:229 name
// // script.js:229 age
// // script.js:229 cgpa
// // script.js:229 isPass




// // print its keys as well as their values 

// for(let key in student){
//     console.log("Key =", key, ", Value =", student[key]);
// } // key is like a variable 

// // output -: 
// // script.js:245 Key = name , Value = shivam shrivastav
// // script.js:245 Key = age , Value = 19
// // script.js:245 Key = cgpa , Value = 8.45
// // script.js:245 Key = isPass , Value = true



// using for loop -: 

// print all the no.s from 0 to 100.
// for(let i=0; i<=100; i++){
//     console.log(i); 
// }



// print all the even no.s from 0 to 100.
// for(let i=0; i<=100; i+=2){
//     console.log(i); 
// }


// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i); 
//     }
// }


// print all the odd no.s from 0 to 100.
// for(let i=0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i); 
//     }
// }



// using while loop -: 


// let i=0; 
// while(i<=100){
//     if(i%2==0){
//         console.log(i); 
//     }
//     i++;
// }


// using do-while loop -: 

// let i=0;
// do{
//     console.log(i);
//     i+=2;
// }while(i<=100); 







// Q-: create a game where you start with any random game No.
// Ask the user to keep guessing the game no. until the user enters corret value. 


// here, gameNum and userNum is a variable -: 


// let gameNum=25;
// let userNum=prompt("Guess the game number : ");
// while(userNum!=gameNum){
//     userNum=prompt("You entered wrong number. Guess again : ");
// }
// console.log("Congratulations, you entered the right number");


// mechanism how to find the output -: 
// go to the html page and right click -: then click open with live server 
// then a simple and empty tab is open then again right click and go to the inspect section 
// and then a prompt (pop-up) is comes on the screen write your number here and if number is right
// then prints Congratulations on the console. 




// Loops Done in JS -:  
