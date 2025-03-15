                // Chapter-2 -: Operators And Conditional Statements -:

// 1-: Comments in JS -: Part of code which is not executed.

// This is a single line Comment. (//)
// ex -: Single line Comment -: is used to describe our code. 

// Comment -: This below code prints my name -: 
// console.log("My name is Shivam Shrivastav"); 

// Output -: run html page on live server then go to the page, right click
// go to inspect section, then Console section and here you can see your output -: 

// My name is Shivam Shrivastav






/* 2-: This is a 
multi-line Comment. */ 





// 2-: Operators in JS -: Used to perform some operation on data. 
// Arithmetic Operators -: +,-,*,/. 
// Modulus (%) -: Find Remainder, Exponentiation -> power (**), Unary Operators -: Increment, Decrement. 

// a+b => this is called expression, 
// a & b is operands, + is operators -> it adds two no.s 


// // 1-: Arithmetic Operators -: 
// let a=5;
// let b=2;
// console.log("a =",a, "& b =",b); 
// console.log("a+b=", a+b); 
// console.log("a-b=", a-b); 
// console.log("a*b=", a*b); 
// console.log("a/b=", a/b);  
// console.log("a%b=", a%b); // remainder 
// console.log("a**b=", a**b); // a power b

// // output -: 
// // a = 5 & b = 2
// // script.js:39 a+b= 7
// // script.js:40 a-b= 3
// // script.js:41 a*b= 10
// // script.js:42 a/b= 2.5
// // script.js:43 a%b= 1
// // script.js:44 a**b= 25




// // Unary Operators -: Increment, Decrement. 
// // a++ (post increment), (pre increment) ++a means a=a+1, a--,--a means a=a-1

// let a=5;
// let b=2;
// console.log("a =",a, "& b =",b); 
// a=a+1;
// console.log("a =", a); 
// a++;
// console.log("a =", a); 
// a=a-1;
// console.log("a =", a); 
// a--;
// console.log("a =", a); 

// ++a;
// console.log("a =", a); 
// --a;
// console.log("a =", a); 

// // output -: 
// // a = 5 & b = 2
// // script.js:64 a = 6
// // script.js:66 a = 7
// // script.js:68 a = 6
// // script.js:70 a = 5
// // script.js:73 a = 6
// // script.js:75 a = 5





// 3-: Assignment Operators -: assign values to the variables 
// =,+=,-=,*=,/=,**=,%=

// let a=5;
// // right side values goes to left side 
// // 5 goes and store into the variable a 

// a+=1 == a=a+1


// let a=5;
// let b=2;
// a+=4; // a=a+4
// console.log("a =",a);  // a = 9

// b**=4; // b=b**4
// console.log("b =",b);  // b = 16 




// 3-: Comparison Operators -: it gives either true or false value. 
// Equal to ==, Not Equal to !=, Equal to & type ===, Not Equal to & type !==. 
// >,>=,<,<= 

// let a=5;
// let b=2;
// console.log("a==b", a==b); // false 
// console.log("a!=b", a!=b); // true 


// let a=5; // number
// let b="5"; // JS converts from string to number implicitly and then starts comparing  
// console.log("a==b", a==b); // true 
// console.log("a!=b", a!=b); // false


// == -> it checks only values but 
// === -> it checks values as well as data types also 


// strict version of comparing of two values -: 
// Equal to & type ===, Not Equal to & type !==. 


// // === -> it checks values as well as data types also 
// // if equal then return true else false 
// let a=5; // number
// let b="5"; // string 
// console.log("a===b", a===b); // false 
// console.log("a!==b", a!==b); // true



// // greater than, greater than equal to, less than, less than equal to. 
// // >,>=,<,<=.

// let a=5; // number
// let b=2; // string 
// console.log("a>b", a>b); // true 
// console.log("a>=b", a>=b); // true
// console.log("a<b", a<b); // false 
// console.log("a<=b", a<=b); // false

// // a>b true
// // a>=b true
// // a<b false
// // a<=b false




// // Logical Operators -: it returns either true or false. 
// // logical AND &&, logical OR ||, logical NOT !.  

// ex -: 
// let a=6;
// let b=5;
// let cond1 = a>b; // true
// let cond2 = a===6; // true

// console.log("cond1 && condi2 =", cond1 && cond2); // true 
// console.log("cond1 || condi2 =", a<b || a===6); // true 
// console.log("cond1 || condi2 =", a<b || a!==6); // false 

// console.log("!cond1 =", !cond1); // false -: opposite. 





// Conditional Statements -: To implement some condition in the code. 

// if statement -: 
// Write condition means write some expression. 

// let age=25;
// if(age>=18){
//     console.log("you can vote"); // you can vote
// }

// let age2=12;
// if(age2<18){
//     console.log("you can't vote"); // you can't vote
// }


// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black"; 
// }
// if(mode==="light"){
//     color="white"; 
// }
// console.log(color); // black 




// 2-: if-else statement -: 

// let mode="pink";
// let color;
// if(mode==="dark"){
//     color="black"; 
// }else{
//     color="white"; 
// }
// console.log(color); // white 


// let age=25;
// if(age>=18){
//     console.log("vote"); 
// }else{
//     console.log("not vote");
// }
// // vote 



// // odd or even -: 
// let num=13;
// if(num%2===0){
//     console.log(num, "is even");
// }else{
//     console.log(num, "is odd"); 
// }

// // 13 'is odd'


// syntax means -> programming rules. 




// // else-if statement -: 

// let mode="dark";
// let color;

// if(mode==="dark"){
//     color="black"; 
// }else if(mode==="blue"){
//     color="blue"; 
// }else if(mode==="pink"){
//     color="pink";
// }else{
//     color="white";
// }
// console.log(color); // black 



// if(mode==="dark"){  
//     console.log(mode); // dark
// }





// Ternary Operators -: 

// condition ? true output : false output 

// let age=19;
// let result = age>=18 ? "adult" : "not adult"; 
// console.log(result); // adult 

// or -: 

// let age=14;
// age>=18 ? console.log("adult") : console.log("not adult"); // not adult 



// study -: switch statements. 



// MDN Docs -: it is the most imp official documents for html, css, javascript languages -:
// search all the topics here... 



// Q-: Get user to input a number using prompt("Enter a number : "). 
// Check if the  number is a multiple of 5 or not.  


// Imp -: 
// alert and prompt -: 
// alert -: it gives us a "message" as a "pop-up" on the screen. 
// It creates one time pop-up for us. 

// ex-: 
// alert("Heloo"); // press OK it goes out from the screen.  

// prompt -: It gives us some messages. And we can write something inside them also. It takes ""input"" also. 
// we can save this input inside the variable and display it also. 
// temporary ways to take input from the user. 

// ex-: 
// prompt("Hii");

// ex -:
// let name=prompt("Hello!"); 
// console.log(name); // i am taking input as Shivam, after pressing OK it displayed Shivam on the console. 




// let num=prompt("Enter a number : ");
// if(num%5===0){
//     console.log("yes");
// }else{
//     console.log("No"); 
// }

// // Take input inside the prompt and it checks condition if true then print accordingly. 


// Q-: Write a code which can give grades to students according to their scores.

// 90-100 A , 70-89 B , 60-69 C , 50-59 D , 0-49 F 



// let scores=75;
// Or -:
let scores=prompt("Enter a Score (0-100) : "); 
let grade;
if(scores>=90 && scores<=100){
    grade="A"; 
}else if(scores>=70 && scores<=89){
    grade="B";
}else if(scores>=60 && scores<=69){
    grade="C";
}else if(scores>=50 && scores<=59){
    grade="D";
}else{
    grade="F"; 
}

console.log(grade); // B 
 





// Done Chapter - 2 of JS from Apna College. 