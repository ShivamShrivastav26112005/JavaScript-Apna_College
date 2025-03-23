// Classes And Objects In JS -: 


// 1-: Prototypes In JS -: 
// A js object is an entity having state and behavior (properties and method). 
// JS Obj.s have a special property called prototype. 
// We can set prototype using "__proto__ "

// Note-: If object & prototype have same method, obj.s method will be used. 
// JS Object -: entity - inside -: (properties(variables) & method(functions))




// // ex -: Create an obj. in JS -: 
// const student = {
//     name: "shivam", // variables/properties 
//     marks: 89.9,
//     printMarks: function(){ // methods/functions
//         console.log("marks = ", this.marks); 
//     },
// };




// Output -: this prompt is written in console section -: 

// student
// {name: 'shivam', marks: 89.9, printMarks: ƒ} marks: 89.9name: "shivam"printMarks: 
// ƒ ()arguments: nullcaller: nulllength: 0name: "printMarks"prototype: {}[[FunctionLocation]]: 
// script.js:18[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Object

// student.marks
// 89.9
// student.name
// 'shivam'
// student.printMarks()
// undefined



// array in JS is a object 
// let arr=[1,2,3,4,5];

// Output -: From Console -: 
// arr -: we give i/p
// (5) [1, 2, 3, 4, 5] -: o/p generate 
// typeof arr -> give i/p
// 'object' -: o/p generate 

// "array" ke inside ek "prototype" obj bhi present hota hai 
// and this prototype contains diff methods like push, pop etc. 


// 2-: Classes In JS -: blueprint for an obj. 
// Class is a program-code template for creating Object.s 
// Those obj.s will have some state (variables) & some behaviour (fun.s) inside it. 

// ex-: create class -: syntax -: 
// class MyClass{
//     constructor(){
//         // some code
//     }
//     myMethod(){
//         // some code 
//     }
// }
// let myObj=new MyClass(); // "new" keyword is used to create a new "obj". 


// // ex-: class 

// //  create a class -: 
// class ToyotaCar{
//     // make 2 fun.s -: 
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

//     // variables -: 
//     setBrand(brand){
//         this.brand=brand;
//     }
// };

// // create an obj -: 
// let fortuner=new ToyotaCar(); 
// fortuner.setBrand("XUV"); 
// let texus=new ToyotaCar(); 


// // output -: 
// // fortuner
// // ToyotaCar {brand: 'XUV'}brand: "XUV"[[Prototype]]: Object

// // fortuner.setBrand
// // ƒ setBrand(brand){
// //     this.brand=brand;
// // }

// // fortuner.start;
// // ƒ start(){
// //     console.log("start");
// // }





// Constructor() methods -: special methods, resversed keyword -: Constructor
// automatically invoked/called by "new" keyword, when an obj of the class is created 
// Constructor is used to initialize the object.  

// // ex -: 1

// class Car{
//     constructor(){
//         console.log("Creating a new obj"); 
//     }

//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let maruti1=new Car(); 
// let maruti2=new Car(); 
// let maruti3=new Car(); 

// output -: constructure is called automatically when an obj of the class is crerated. 
// Creating a new obj
// Creating a new obj
// Creating a new obj




// // ex-2-: 

// class Car{
//     // constructor -: some variables is initialised 
//     constructor(brand, mileage){
//         console.log("Creating a new obj"); 
//         this.brand=brand;
//         this.mileage=mileage;

//     }
//     // properties / methods -: 
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let car1=new Car("Maruti",500); 
// console.log(car1);
// let car2=new Car("XUV",600); 
// console.log(car2);


// // Output-: 
// // Creating a new obj
// // Car {brand: 'Maruti', mileage: 500} -: Maruti is a type of Car Class that's why Car is written first. 
// // Creating a new obj
// // Car {brand: 'XUV', mileage: 600}





// Inheritance IN JS -: Inheritance is passing down properties & methods from parent 
// class to child class. 

// // syntax -: 
// class Parent{

// }
// class Child extends Parent{

// }

// Note -: If child & Parent have same method, child's method will be used. (Method Overriding)


// ex-1-: 

// class Parent{
//     hello(){
//         console.log("Hello"); 
//     }
// }
// class Child extends Parent{}
// let obj=new Child(); 

// Output -: go to console. 
// obj
// Child {}
// obj.hello
// ƒ hello(){
//         console.log("Hello"); 
//     }
// obj.hello()
// Hello



// // ex-21: 
// class Person{
//     constructor(){
//         this.species="Solo";
//     }

//     eat(){
//         console.log("Eat");
//     }

//     sleep(){
//         console.log("Sleep"); 
//     }
// }

// // Engineer extends all the properties and method of the Person class. 
// class Engineer extends Person{
//     work(){
//         console.log("Solve Problems, Build Something"); 
//     }
// }

// // Engineer extends all the properties and method of the Person class. 
// class Doctor extends Person{
//     work2(){
//         console.log("Treat Patients"); 
//     }
// }

// // object name is Shivam 
// let shivam = new Engineer(); 


// // Output -: 
// // shivam.eat()
// // Eat






// "super" Keyword -: The super keyword is used to call the constructor of its parent class to 
// access the parent's properties and methods. 
// child class se parent class ke constructor ko call karne ke liye then to call the parent's constructor we use super keyword. 


// super(args) // calls Parent's constructor 
// super.parentMethod(args) 

// Parent class -> child class (derived class)



// // ex-: 
// class Person{
//     constructor(){
//         console.log("enter parent constru"); 
//         this.space="no space";
//     }

//     eat(){
//         console.log("Eat");
//     }

//     sleep(){
//         console.log("Sleep"); 
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         console.log("enter child constru");
//         super(); // to invoke parent class constructor
//         this.branch=branch;
//         console.log("exit child constru");
//     }

//     work(){
//         console.log("Solve Problem"); 
//     }
// }

// let engObj=new Engineer("Computer Science"); 

// // output -: How constru. called -: 
// // enter child constru
// // enter parent constru
// // exit child constru





// Error Handling -: 
// try-catch block -: 

// syntax -: 
// try{
//     // ...normal code 
// }catch(err){ // err is error object
//     // ...handling error     
// }

// try block -: write those codes which gives an error 
// catch block -: to handles our errors -: 




// // ex-:

// let a=6;
// let b=3;
// console.log("a = ",a);
// console.log("b = ",b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);

// try{  
//     console.log("a+b = ",a+c); // error 
// }catch(err){
//     console.log(err); 
// }

// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);
// console.log("a+b = ",a+b);


// // output -: 

// // a =  6
// // b =  3
// // a+b =  9
// // a+b =  9
// // a+b =  9
// // script.js:336 ReferenceError: c is not defined -: here, code is not breaked. 
// //     at script.js:334:28
// // a+b =  9
// // a+b =  9
// // a+b =  9
// // a+b =  9
// // a+b =  9





