                // Chapter-4 -> Arrays -: Collections of items. 



// like object in JS -: it also stores collection of items (in the form of key:value) pairs
// like we want to store information of the student -: name:"shivam", age:19, cgpa:8.45 etc. 



// ex -: store marks of the 5 students.
// Method-1 -: make separate variables for all the student and store their marks 
// but it is bad method.  

// let mark1=89;
// let mark2=59;
// let mark3=85;
// let mark4=45;
// let mark5=98;




// Method-2 -: By making an object -: 
// it also not a efficient method to store the marks 

// let marks = {
//     stud1:98,
//     stud1:56,
//     stud1:76,
//     stud1:86,
//     stud1:69,
// }; 



// Method-3 -: By using arrays -: linear ways to store marks, values store in a linear fashion.
// contiguous memory allocation hota hai array me. 

// // idx -:    0, 1, 2, 3, 4
// let marks = [78,76,89,87,67]; // arrays -: 
// console.log(marks); // [78, 76, 89, 87, 67] 

// // when open output -: 
// // 0: 78 -> 0 is idx, 78 is marks 
// // 1: 76
// // 2: 89
// // 3: 87
// // 4: 67
// // length: 5


// // array of numbers -: 

// let marks = [78,76,89,87,67]; // arrays -: 
// console.log(marks); // print arrays 
// console.log(marks.length); // length is a property of array 

// // Output -: 
// // [78, 76, 89, 87, 67]
// // 5





// // array of strings -: 
// let str=["shivam", "shivani", "shiv", "shiva", "shivamshri"]; 
// console.log(str); // ['shivam', 'shivani', 'shiv', 'shiva', 'shivamshri']
// console.log(str.length); // 5

// idx: "value"
// 0: "shivam"
// 1: "shivani"
// 2: "shiv"
// 3: "shiva"
// 4: "shivamshri"
// length: 5


// // array is a "object" type -: arrays -: (idx:value) pairs store hote hai 
// // array is a special type of object. 
//  console.log(typeof str); // object



// // 2-: Array indices -: 

// // idx : 0, 1, 2, 3, 4, 5
// let arr=[89,76,78,89,87,67];

// console.log(arr); // [89, 76, 78, 89, 87, 67] 
// console.log(arr.length); // 6
// console.log(arr[0]); // 89
// console.log(arr[5]); // 67
// console.log(arr[6]); // undefined 

// // array in JS is muttable (can be changed) but string in JS are immutable (can't be changed). 
// // change / update the values of the array -: go a particular idx and change their values. 
// arr[0]=100;
// console.log(arr[0]); // 100 




// 3-: Looping over an array -: Prints all the ele.s of an array.
// loops -: used for iteration 


// let arr=[67,56,45,67,89,78,56];

// // 1-: for loop -: 
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]); 
// }

// // 2-: while loop -: 
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// // 3-: do-while loop -: 
// let i=0;
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length); 


// // 4-: for-of loop -: it prints only values of the array 
// for(let val of arr){
//     console.log(val); 
// }


// // 5-: for-in loop -: it prints only idx of the array from 0 to 6
// for(let ele in arr){
//     console.log(ele);
// }







// ********** Note ***********

// for-in loop -: it "iterates" over the "keys" or "indices" of the array in JS
// it doesn't iterate over the elements of the array  


// for-of loop -: it "iterates" over the "values" of the array in JS
// it Iterates over the values of iterable objects (like arrays, strings etc). 



// output -: 
// script.js:108 67
// script.js:108 56
// script.js:108 45
// script.js:108 67
// script.js:108 89
// script.js:108 78
// script.js:108 56



// // ex-: array of strings -: 

// let arr=["shivam", "shivani", "ram", "sita"];
// // used for-of loop -: 
// for(let str of arr){
//     console.log(str.toUpperCase()); 
// }

// // script.js:169 SHIVAM
// // script.js:169 SHIVANI
// // script.js:169 RAM
// // script.js:169 SITA



// // Q-: For a given array with marks of students -: [56,45,45,78,56,80]
// // Find the average marks of the entire class. 

// let marks = [56,45,45,78,56,80];
// let sum=0;
// for(let val of marks){
//     sum+=val; 
// }
// let avg=sum/marks.length;

// console.log(sum); // 360
// console.log(avg); // 60
// console.log(marks.length); // 6



// Q-: For a given array with prices of 5 items -: [250,645,300,900,50]
// All items have an offer of 10% OFF on them. Change the array to store final 
// price after applying offer. 


// using for-of loop -: 

// let items = [250,645,300,900,50];
// let idx=0;
// for(let val of items){
//     console.log(`Value at idx ${idx} = ${val}`); 
//     let offer=val/10;
//     items[idx]=items[idx]-offer; 
//     console.log(`Value after offer = ${items[idx]}`); 
//     idx++;
// }



// script.js:206 Value at idx 0 = 250
// script.js:206 Value after offer = 225
// script.js:203 Value at idx 1 = 645
// script.js:206 Value after offer = 580.5
// script.js:203 Value at idx 2 = 300
// script.js:206 Value after offer = 270
// script.js:203 Value at idx 3 = 900
// script.js:206 Value after offer = 810
// script.js:203 Value at idx 4 = 50
// script.js:206 Value after offer = 45







// // using for loop -: 

// let items = [250,645,300,900,50];
// console.log(items); 

// for(let i=0; i<items.length; i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items); 


// // Output -: 
// // script.js:217 (5) [250, 645, 300, 900, 50]
// // script.js:222 (5) [225, 580.5, 270, 810, 45]





// 4-: Arrays Methods -: 

// push() -: add to end, 
// pop() -: delete/remove from the end and return, 
// toString() -: converts array to string 


// let arr = [3,4,5,6,7,8,9]; 
// console.log(arr); // [3, 4, 5, 6, 7, 8, 9]
// arr.push(3,4,5); 
// console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 3, 4, 5]

// arr.pop(); 
// console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 3, 4]

// let deleteValue=arr.pop(); // store deleted value into the deleteValue variable 
// console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 3]
// console.log(deleteValue); // 4




// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems); // ['potato', 'apple', 'litvhi', 'tomato']
// console.log(foodItems.toString()); // potato,apple,litchi,tomato -: this is string 
// console.log(foodItems); // ['potato', 'apple', 'litchi', 'tomato']



// let arr = [3,4,5,6,7,8,9]; 
// console.log(arr); // [3, 4, 5, 6, 7, 8, 9]
// console.log(arr.toString()); // 3,4,5,6,7,8,9 -: this is string, display strings represented by (,)




// Some more methods -: 

// concat() -: joins multiple arrays & returns result. 
// unshift() -: "add to start" like push at the front 
// shift() -: "delete from start" & return like pop from the front 


// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];

// let ans = arr1.concat(arr2);
// console.log(ans); // [1, 2, 3, 4, 5, 6, 7, 8]

// // or -: 

// // console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6, 7, 8]


// let arr1 = [1,2,3,4]; // given arrays 
// arr1.unshift(23); // it "adds" value at the "starting" 
// console.log(arr1); // [23, 1, 2, 3, 4]

// arr1.shift(); // it "delete" values from the "starting"
// console.log(arr1); // [1, 2, 3, 4]
// arr1.shift(); 
// console.log(arr1); // [2, 3, 4]



// slice() -: returns a piece of the array -: it doesn't changed in the original array 
// syntax -: slice(startidx, endidx); // endidx is not included 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr.slice(3,5)); // [4, 5]





// splice() -: change original array (add, remove, replace) -: it changed into the original array, 
// you can add,remove something into the original array. 

// syntax -: splice(startidx, delcount, newEle1...) -: it takes 3 parameters 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
// arr.splice(2,2,101,102); 
// console.log(arr); // [1, 2, 101, 102, 5, 6, 7, 8]



// // ADD Element -: 
// // Q-: add 1000 at idx 3.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
// arr.splice(3,0,1000); // 3 idx per add karna hai, 0 ele ko delete karna hai, 1000 ko add karna hai 
// console.log(arr); // [1, 2, 3, 1000, 4, 5, 6, 7, 8]




// DELETE Ele -: 
// Q-: Delete ele at idx 4. 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
// arr.splice(4,1); // 4th idx per jakar 1 ele. ko delete kar do 
// console.log(arr); // [1, 2, 3, 4, 6, 7, 8]


// // REPLACE Ele -: 

// console.log(arr); // [1, 2, 3, 4, 6, 7, 8]
// arr.splice(2,1,1000); // 2nd idx per jakar 1 ele ko replace kar do 
// console.log(arr); // [1, 2, 1000, 4, 6, 7, 8]



// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.splice(2,4,1000, 1001, 1002, 1003); // 2nd idx se start hoga -: 4 idx tk jayega / 4 ele. 
// ko delete karega (2nd, 3rd, 4th, 5th idx) and value ko update karega 
// console.log(arr); // [1, 2, 1000, 1001, 1002, 1003, 7, 8]


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(4); // it deletes all the ele.s from idx 4 
console.log(arr); // [1, 2, 3, 4] 






// Done Arrays in JS by @shivamshrivastav Date-23-11-2024, Time-08:08 PM 