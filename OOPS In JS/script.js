// JS is a prototype-based language. Not a object-oriented or not a functional lang. 

// OOPs -: 

// Object-: collection of properties(variable, constant) and methods(function) 
// used "new" keyword.

// 4 pillars -: 
// Abstraction
// Encapsulation 
// Inheritance
// Polymorphism


// Parts of OOPs -: 
// Object literal 

// -Constructor function
// -Prototypes
// -Classes 
// -instances (new, this)






// // Object literal -: collection of properties and methods. 

// // ex -: 

// const user = {
//     // Properties and their values. 
//     username: "Shivam", 
//     loginCount: 8,
//     signedIn: true,

//     // methods -: 
//     getUserDetails: function(){
//         console.log("Got user details from database"); 
//     }
// }


// console.log(user.username);
// console.log(user.getUserDetails()); 



// // Shivam
// // Got user details from database
// // undefined







// this keyword -: 

function User(username, loginCount, isLoggedIn){
    // LHS -: Variable and RHS -: jo value pass kr rhe h. 
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log('Welcome ${this.username}'); 
    }

    // this keyword is by default. 
    return this
}

const userone= new User("Shivam", 20, true);
const usertwo= new User("Aman", 18, false);
console.log(userone); 
console.log(usertwo); 




// // OUTPUT -: 
// User {
//     username: 'Shivam',
//     loginCount: 20,
//     isLoggedIn: true,
//     greeting: [Function (anonymous)]
//   }
//   User {
//     username: 'Aman',
//     loginCount: 18,
//     isLoggedIn: false,
//     greeting: [Function (anonymous)]
//   }






// "new" -: 

// when we write "new" keyword then a empty object is created called "instance". 
// call a constructure function by using "new" keyword 