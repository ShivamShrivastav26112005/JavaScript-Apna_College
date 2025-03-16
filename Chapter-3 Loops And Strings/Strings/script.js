// console.log("Strings in JS"); 

// Strings in JS -: 
// String is a sequence of characters used to represent Text. 

// create string -: let str="Shivam"; 
// string length -: str.length;
// string indices -: str[0], str[1], str[2]; 

// strings have some inbuilt properties and functions (methods).
// properties -: length (it returns total no. of char.s present in the string)



// let str="shivam";
// let str2="shrivastav"; 
// console.log(str); // shivam
// console.log(str2); // shrivastav
// console.log(str.length); // 6
// console.log(str2.length); // 10 





// // access individual char.s from the string by giving their position no. -: 

// // position / indices -: 012345
// // strings -:            shivam 

// console.log(str[0]); // s 
// console.log(str[2]); // i
// console.log(str[4]); // a 
// console.log(str[6]); // undefined 
// console.log(str2[3]); // i 
// console.log(str2[2]); // r 





// Template literals in JS - : it is a special types of string. creates using backticks symbols (``). 
// A way to have embedded expressions in strings -: 
// initialise string by using "backticks" (``) symbol also . 
// syntax -: `string text ${expression/variable} string text`. 


// ex-: 
// let specialString=`This is a template literal`; 

// console.log(specialString); // This is a template literal 

// // print its type -: 
// console.log(typeof specialString); // string 



// // ex -: Take an ex. of an object (key:value) pairs -: 

// let obj = {
//     item:"pen",
//     price:56,
// };


// console.log("Item is =", obj.item, "And Price is =", obj.price, "rupees"); 
// "Item is =", "And Price is =" =>  this is a strings. 
// obj.item, obj.price. => And this is variables. 

// // output -: Item is = pen And Price is = 56





// // Use of template literals -: it "combines whole strings as well as variables" into one string. 
// // in template literals we can write our strings as well as our variables also . 

// // console.log("Item is =", obj.item, "And Price is =", obj.price, "rupees"); 
// // template literals combine this above line into one line 


// String Interpolation -: 
// String Interpolation means (write any expression/variable) -: To create strings by doing substitution of placeholders. 

// `string_text ${expression/variable} string_text` 


// // ex. of expression -: 
// let ans=`This is a template literals ${1+2+3}`; 
// console.log(ans); // This is a template literals 6



// // ex -: 

// let obj = {
//     item:"pen",
//     price:56,
// };

// // display obj -: 

// // normal display -: 
// let ans = console.log("Item is =", obj.item, ",","Price is =", obj.price); 
// // Item is = pen , Price is = 56


// // display using template literals -: 
// console.log(`Item is = ${obj.item} And Price is = ${obj.price}`); 
// // Item is = pen And Price is = 56


// // or -: 
// let output = `Item is = ${obj.item} And Price is = ${obj.price}`; 
// console.log(output); 
// // Item is = pen And Price is = 56





// escape characters -: \n -: for next line, \t -: for tab space (goes 1 char. / 1 space at right direction)
// \n and \t it counts as a single char.

// let str="Shivam\nShrivastav"; 
// console.log(str); 

// output -: 
// Shivam
// Shrivastav

// let str="Shivam\tShrivastav"; 
// console.log(str); // Shivam Shrivastav
// console.log(str.length); // 17 




// Strings Methods (block of code) / functions (which is used to do some work) in JS -: 
// These are built-in functions to manipulate a string. 

// Note -: any methods of the string is not changed original string, it make a copy of the given string then 
// change or modify copy string but it doesn't changed the original strings 
// becoz strings are immutable (can't be changed). 

// if you want to change the string then create a new string and change them. 

// methods -: 
// str.toUpperCase() -: it converts all the char.s of the string into upper case letters 
// str.toLowerCase() -: it converts all the char.s of the string into lower case letters 
// str.trim() method -: it remove whitespaces from starting and ending of the string. 
// str.slice(start,end) -: it returns part of the string 
// str.concat(str2) -: joins str2 with str1 
// str.replace(searchVal, newVal) 
// str.charAt(idx)





// let str="shivam"; 
// console.log(str); // shivam -> prints original string 
// console.log(str.toUpperCase()); // SHIVAM -> make a copy of the given above string and then change those copy of the string 
// console.log(str); // shivam -: not change original string 


// if you want to change the original string then do these things -: 

// let str="shivam"; 
// str=str.toUpperCase(); // -> it return a new value. 
// console.log(str); // SHIVAM



// let str="shivam"; 
// console.log(str); // shivam
// console.log(str.toUpperCase()); // SHIVAM 
// console.log(str.toLocaleLowerCase()); // shivam


// let str="shivam"; 
// let newstr=str.toUpperCase(); // -> it return a new value. 
// console.log(str); // shivam
// console.log(newstr); // SHIVAM



// str.trim() method -: it remove whitespaces from starting and ending of the string. 
// it doesn't removes middle spaces of the string. 


// let str="    shivam     shrivastav   "; 
// console.log(str); //     shivam    shrivastav   -: original string 
// console.log(str.trim()); // shivam     shrivastav -: changed string -: it removes all the spaces from the starting and ending position . 
// console.log(str); //     shivam    shrivastav   -: original string 



// some more methods -: 

// str.slice(start,end?) -: it returns parts of the string -> "end" is a optional value (non-inclusive),
// ending value is not included. 
// gives starting idx and ending idx (not included)

// str.concat(str2) -: joins str2 with str1 
// str.replace(searchVal, newVal) -> used to "search" a value in the string 
// str.charAt(idx)





// str.slice(start,end?) -: it returns parts of the string -> "end" is a optional value (non-inclusive),
// ending value is not included. 
// gives starting idx and ending idx (not included)

// // ex -: 

// let str="123456"; 
// console.log(str.slice(2,4)); // 34 

// let str2="shivam";
// console.log(str2.slice(1,5)); // hiva
// console.log(str2.slice(3)); // -> starting from the 3rd idx and print till last char.s -: vam



// // 2-: str.concat(str2) -: joins str2 with str1. -: Make a single string by adding two strings 
// let str1="shivam";
// let str2="shrivastav"; 

// let ans=str1.concat(str2);
// console.log(ans); // shivamshrivastav 
// // or -: 
// let ans2=str1+str2;
// console.log(ans2); // shivamshrivastav 
// // or -: 
// let res="I am learning Coding from "+str1+" kumar "+str2; // combine 3 strings into a single string 
// console.log(res); // I am learning Coding from shivam kumar shrivastav 
// // or -:
// let res2="hello"+123;
// console.log(res2); // hello123 
// // or-: 
// console.log(str1.concat(str2)); // shivamshrivastav
// console.log(str2.concat(str1)) // shrivastavshivam 




// // 3-: str.replace(searchVal, newVal) -> used to "search" a value in the string 
// // searchVal -> searchable value, newVal -> replaceable value 
// // only replace 1st matching characters except are same.  

// let str="hellolololo";
// console.log(str.replace("h","y")); // yellolololo 
// console.log(str.replace("hell","y")); // yolololo 
// console.log(str.replace("o","y")); // hellylololo 

// // .replaceAll -: it replace all the values -:
// console.log(str.replaceAll("o","y")); // hellylylyly 




// // 4-: str.charAt(idx) method -: find char. at any idx in the string 

// let str="shivam"; 
// console.log(str.charAt(2)); // i 
// console.log(str.charAt(5)); // m 
// console.log(str.charAt(0)); // s



// // strings are also immutable, if you want to change a string then make a new string and change it.  


// if you want to change a string then use replace method -: 


// let str="shivam";
// str=str.replace("m","ni");
// console.log(str); // shivani



// Q-: Promt the user to enter their fullname. Generate a username for them based on the input. 
// Start username with @AboutController, followed by their full name and ending with the fullname length. 
// ex-: username="shivamshrivastav", username should be "@shivamshrivastav16"


let username=prompt("Enter fullname");
let ans="@"+username+username.length;
console.log(ans); // @shivamshrivastav16 





// String Done By @ShivamShrivastav Date-23-11-2024 Time-4:45 PM