// JavaScript Apna College -: 

//                          Chapter-1 -: Variables And Data Types -: 

// What is JavaScript -: Js is a programming language (used to communicate with the computer/machine). 
// We use it to give instructions to the computer. 

// Computer takes input, process them and produce output. 
// Input(code/instruction) -> Computer -> Output 

// You can write your JS code inside your browser(chrome)(used to search anything on the internet) itself.
// open your chrome browser and then a normal tab -> right click -> inspect -> 
// there are many options present at the upper side like Elements, Console, Sources etc... 

// after opening new tab -: 
// we can write our JS code by going to console section and run there. 
// first write the bellow code then press enter 

// alert("Hello Shivam");

// alert gives us "pop-up" like something or any message comes in our screen randomly. 

// when we refresh our browser by using refresh button or press ctrl+R, our console window
// goes to empty and by default some messages or warning comes. 


// Used Code Editor to write your JS code. 
// like VS Code -: It is a free and popular code editor by Microsoft. 
// It is like a digital notebook where you can write your codes. 




// Our first JS Code -: 
// console.log is used to log(print) a message to the console. 
// console.log -: it is a command, piece of Code, statement, used to print something on the console. 

// you can open new tab and open console section and write your small - small codes then 
// to run your code, press enter your code is going to be run 

// ; -: used to terminate the sentence / statement / line end
// console.log("shivam");
// console.log('shivam');

// If you want to write your previous code then press "up arrow" or "down arrow". 


// JavaScript file_name is First_File.js 
// .js is an extension -> it tells us which type of infomation is stored in this file. 
// like .js, .txt, .cpp, .c, .java, .py, .html, .css etc 


// print something in Javascript language -: 
// console.log("Shivam Shrivastav");

// this code is not run becoz we have to connect this js file with browser 
// to connect this file we make a separate html file.

// html is used to make a structure for the websites.  
// where our input box, search bar, some another options are visible, where our button is visible in our webpage. 


// to connect the browser with js, i am making an extra html file. 


// html is direct connected with the browser, and js is connected with the browser with the help of console. 
// now what we do, we direct connect our js file to html file. 
// and then js file is also connected with the browser. 


// after connecting the js file to the html file you can write your js code 
// here and it runs on the browser by going to inspect and seeing console section. 

// console.log("I am always happy!!")






// //                      Variables in JS -: 

// // Variables are containers for data. 

// // Process to seen Output -: 

// // I made a variable named age and store value 24 and then print those 
// // value with the help of console.log it shows by running the html file 
// // on the browser and then right click on the web page then go to inspect section and then go to 
// // Console and seen their output -: 

// // define variables in JS -: 

// // integers -: 
// // age = 24;
// // console.log(age);

// // strings -: 
// console.log("Shivam");

// // strings -: 
// fullName = "Shivam Shrivastav";
// console.log(fullName); 

// // floating-point no.s -: 
// price=56.49;
// console.log(price);


// // Null value means "nothing" -: 
// x=null;
// console.log(x); 

// // undefined value means we don't know anything -: 
// y=undefined;
// console.log(y); 


// radius=34;
// console.log(radius);


// // boolean values -: 
// isFollow=false;
// console.log(isFollow); 

// isFollow2=true;
// console.log(isFollow2); 


// // (=) this is called "equal to" symbol or assignment symbol / assign the value -: 
// // it means all the right side values is stored in the left side variable names 

// // 5 is a value which is stored in the variable a. 
// a=5;
// console.log(a); 



// // You can see your Outputs by going to inspect section -: 

// // Shivam
// // First_File.js:103 Shivam Shrivastav
// // First_File.js:107 56.49
// // First_File.js:112 null
// // First_File.js:116 undefined
// // First_File.js:120 34
// // First_File.js:125 false
// // First_File.js:128 true
// // First_File.js:132 5





// // JS is a dynamically typed language -: 
// // In js we can store any type of values in the variable -: 
// // we can't define data types in JS write simple variable name and store values -: 




// // JS Variables Naming Rule -: 
// // Variable names are case sensitive (difference b/w upper case and lower case) : "a" & "A" are different. 
// // Only letters, digits, underscore(_) and $ is allowed. (not even space). 
// // Only a letter, underscore(_) or $ should be 1st Character. 
// // 1st Character is not a numeric characters like 123 etc. 
// // Reserved Words(fixed words have fixed meaning) cannot be variable names. 

// // Used "Camel Case" approach to write a variable names -: 
// // ex-: fullName






//                To declare variables Use below Keywords -: 
//                  "let,const,var" keywords -: 

// use these keywords when you want to write variable names. 
// use "let" or "const" keyword at the maximum times. 


// var-: variable can be re-declared & updated. A global scope variable. -> don't use "var" keyword. 
// let-: variable can't be re-declared but can be updated. A block scope variable. -> use "let" keyword frequently. 
// const-: variable cannot be re-declared or updated. A block scope variable.




// used keywords to declared the variables - 

// ex. of "var" keyword -: 
 
// var name1 = "shivani";
// console.log(name1); 
// var age1=20;
// var totalPrice1=53.59;
// console.log(age1); 
// console.log(totalPrice1); 

// // re-declared variables -: this is bad things as well as confusing. 
// var age=34;
// var age=32;
// var age=45;
// var age=87;
// console.log(age); 



// always use "let" keywords -: 
// // ex. of "let" keyword -: Most Useful Keywords -: 
 
// let name = "shivam";
// console.log(name); 
// let age=19;
// let totalPrice=56.89;
// console.log(age); 
// console.log(totalPrice); 


// // output -: 
// // First_File.js:216 shivam
// // First_File.js:219 19
// // First_File.js:220 56.89


// only variable can be declared but not assigned a single value. 
// It doesn't works for "const" keyword. 
// let a;
// console.log(a); // O/P -: undefined


// ex. of "const" keywords -: used to define constant (which can't be changed / fixed value)

// const rate=45;
// console.log(rate); // 45


// const PI=3.14;
// console.log(PI); // 3.14 



// block scope -: 
// block means -: {}








//                                 Data Types in JS -: 

// Number, String, Boolean, Undefined, Null, BigInt, Symbol. 

// In JS, we can store different types of data inside the variables. 


// Data Types are of two types -: 
// 1-: primitive data types -: it is a fixed data types, there are 7 data types exists in JS 
// 2-: Non-primitive data types -: like objects 






// // 1-: "Number" data types (+ve or -ve number) -: 

// this "age" is a numerical data types -: 
// let age=19;
// // use "typeof" keyword to know "types of the data" -: 
// typeof age; 



// // ex -: write these things into the console section -: 
// // age -: you write  
// // 19 -: console gives to you output 
// // typeof age
// // 'number'



// let price=45.98;

// // price
// // 45.98
// // typeof price 
// // 'number'




// // 2-: "string" data types -: 

// name="shivam"; 

// // Run on the console by going to inspect section -: 
// // name 
// // 'shivam'
// // typeof name 
// // 'string'


// // 3-: "boolean" data types -: 
// isFollow = true; 

// // isFollow
// // true
// // typeof isFollow
// // 'boolean'




// // 4-: "undefined" data types -: by default all the variables are "undefined" until or unless
// // any values is not defined at that variables. 

// let x;

// // Output -: 
// // x
// // undefined
// // typeof x
// // 'undefined'



// // 5-: null -: special value -: 

// x=null;

// // x
// // null -> primitive data types, absence of an object.  
// // typeof x
// // 'object' -> null is a "object" data types 






// // 6-: "BigInt" data types -: 

// let large=BigInt("2342345");


// // large -: write by yourself to the console 
// // 2342345n -> console gives o/p to you, n means very large values is stored. 
// // typeof large -: write by yourself
// // 'bigint' -> console gives o/p 




// // 7-: Symbol data types -:  

// let z=Symbol("Hello!!!"); 


// // outputs are -: 
// // z
// // Symbol(Hello!!!)
// // typeof z
// // 'symbol'





// 2-: Non-primitive data types -: objects (arrays, functions)


// "object" -: it is a collection of values -: 
// 'object' is used to store "key:value" pairs -: 
// use "const" keyword to declared the objects -: 


// ex of "object" data types -: 

// const student = {
//     fullName:"Shivam Shrivastav",
//     age:19,
//     cgpa:8.45,
//     isPass:true,
// };



// // Output -: 
// // Run on the console -: 

// student -: you write inside the console 
// {fullName: 'Shivam Shrivastav', age: 19, cgpa: 8.45, isPass: true}
// typeof student 
// 'object'




// we want to access only name of the student -: 

// student["fullName"] // -> we writes into the console. 
// 'Shivam Shrivastav' // this is the output which generates console. 


// Q-: print age of the student -: 

// used square brackets -: where age is a variable name 
// console.log(student["age"]); // 19 is displayed on the console by going through inspect section

// or use (.) dot symbol like this -: 

// console.log(student.age);





// // assigne new values to the object -: 
// student["age"]=student["age"]+1;
// console.log(student["age"]);

// student["name"]="Shivani Shrivastav"; 
// console.log(student["name"]);


// output -: 
// 20
// Shivani Shrivastav



// if we change our objects'name while we taking const keyword then why it doesn't gives an error
// becoz to found error while changing we have to change whole object not a particular 
// things present inside the object, object is a collection of key:value pairs 

// we can update keys of the object while making by using 'const' keyword. 




// // Q-: Create a const object called "product" to store information shown in the picture.

// const product = {
//     title:"Ball Pen",
//     rating:5,
//     price:270,
//     offer:5,
// };

// console.log(product); 


// // output -: 

// // product
// // {title: 'Ball Pen', rating: 5, price: 270, offer: 5}
// // typeof product 
// // 'object'
// // 1+2
// // 3
// // 5-3
// // 2
// // "1234"+14
// // '123414'
// // "abcd"+123456
// // 'abcd123456'




// Q-: Create a const "object" called "profile" to store information shown in the PictureInPictureEvent. 

const profile={
    username:"@shivamshrivastav", 
    isFollow:false,
    followers:123,
    following:123,
};

console.log(profile); 
console.log(typeof profile); 


// {username: '@shivamshrivastav', isFollow: true, followers: 123, following: 123}
// object


console.log(typeof profile["username"]); 
// string

console.log(typeof profile["isFollow"]); 
// boolean
 




// Done Chapter - 1. of the JS from ApnaCollege Youtube Channel. 