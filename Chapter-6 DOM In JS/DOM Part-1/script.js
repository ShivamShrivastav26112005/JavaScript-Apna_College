// Before open the html page "alert" shows on the screen 

// alert / prompt it display first before opening the web page 
// and it pause temporary execution of the js code 
// after closing the window of the alert / prompt our execution starts.

// ex-: 
// alert("Hello"); 
 
// When we write our JS code in separate file then it increase our code "readability", 
// it promote "modularity" -> codes breaks down into samll pieces / components 
// browser caching -: loading time is increased 



                    // ******* Window Object ******* -: 

// The window object represents an open window in a browser. It is browser's object
// (not JS's) & is automatically created by browser. 
// window object is always available when we open a new tab.

// Go to console section by inspect and write window then press enter. you see many objects present here. 
// all the code comes under window object. 
// It is a "global" object with lots of properties & methods. 

 


// // print window object. 
// console.log(window); 

// // output -: something prints like that into the console section -: 
// // Window {window: Window, self: Window, document: document, name: '', location: Location, …}




// console.log("Heelo"); // Heelo

// // you can also print like this -: 
// window.console.log("Hello2"); // Hello2

// It means console.log() is also a part of window object. 





// // also -: 
// // "alert" is also a part of window objects -: 

// window.alert("HI Shivam"); 





// ****************** What is DOM ? ******************

// When a web page is loaded, browser creates a Document Object Model(DOM) of the page. 


// // // print "window" object -: 
// console.dir(window); // Window

// // print 'document' object -: 
// console.dir(document); // #document 
// // or -: 
// console.dir(window.document); // #document



// we want to access "body" and "head" "object" using "window" object -: 

// Notes -: 
// console.log() // -: print anthing (like html parts)
// console.dir() // -: prints only special object (document object) -: it prints their properties and methods. 
 


// console.dir(document.head); // head -: head object 
// console.dir(document.body); // body -: this is body "object". 
// console.log(document.body); // <body>...</body>  -: this is "html" part of the body. 


// console.dir(document.body.childNodes[1]); // div -: div tag 






// DOM Manipulation (changes in the DOM) -: 
// before changing firstly we know that where we want to change -> in paragraph, heading, button etc. 
// then first access (select) the Ele.s 

// // 1-: Selecting with id -: 
// document.getElementById("myId");

// // 2-: Selecting with class -: 
// document.getElementsByClassName("myClass"); 

// // 3-: Selecting with tag -: 
// document.getElementsByTagName("p");




// **********  Accessing the Ele.s -: **********
// 1-: By using "id" -: 
// document.getElementById("myId");




// 1-: id (#) selector is always unique -:

// store into diiv variable. 

// // ex-: 
// let diiv=document.getElementById("myid");
// console.dir(diiv); // it prints div tag becoz of its "id" is "mydiv". 

// Output -: <div id="myid">This is Div</div>






// 2-: class (.) selector is used to select multiple Ele.s at a Time. 

// 2-: Selecting with class -: it returns "html collections" similar to an array. 
// document.getElementsByClassName("myClass"); 

// // ex -: 
// let heading=document.getElementsByClassName("myClass");
// console.dir(heading); 

// Output -: by going to console section -: 
// HTMLCollection(2)
// 0: h2.myClass
// 1: h2.myClass
// length: 2
// [[Prototype]]: HTMLCollection



// // if you want to access all the paragraphs or buttons or headings(h1,h2,h3, etc) then use this 
// // 3-: Selecting with tag -: 
// // document.getElementsByTagName("p");


// // ex-: 

// let pargraphs=document.getElementsByTagName("p"); 
// console.log(pargraphs); 

// // Output -: these are all the paragraphs -: 
// // HTMLCollection(8) [p, p, p, p, p, p, p, p]





// 4-: Most imp selector -: Query Selector -: 

// inside the document one method is present called "querySelector". 
// inside this querySelector we pass our id, class or tag name. 

// 1-: document.querySelector("myId" / "myClass" / tag); 
// it returns the first ele 

// 2-: document.querySelectorAll("myId" / "myClass" / tag")
// it returns a NodeList 


// ex -: find all the paragraphs using querySelector -: 


// // 1-: access on the basis of id -: 

// // it returns only first ele. 
// let ele = document.querySelector("p"); // pass tag name inside the querySelector. 
// console.dir(ele); // p -: display into the console. 

// // it returns all the paragraphs in the form of "NodeList". 
// let allele = document.querySelectorAll("p"); // pass tag name inside the querySelectorAll. 
// console.dir(allele); // NodeList(8) -: display into the console. 





// // 1-: access on the basis of class -: 

// let ele = document.querySelector(".myClass"); 
// console.dir(ele); // h2.myClass

// let allele = document.querySelectorAll(".myClass"); 
// console.dir(allele); // NodeList(2)




// Some Elements properties -: by using these prOperties we can access/get the ele.s and set/change/update the ele.s. 

// tagName -: it returns "tag" for any element'nodes 
// innerText -: it returns the text content of the element and all its children
// innerHTML -: it returns the plain text or HTML contents in the Element
// textContent -: it returns textual content even for hidden ele.s  



// // ex -: 
// let ele = document.querySelector("#myid"); 
// console.dir(ele); // div#myid -> this tag is present inside the html file. -> prints "objects" 
// console.log(ele);  // <div id="myid">This is Div</div> -> prints "div" tag (html tag)
// console.log(ele.tagName); // DIV 




// Part - 1 Done Date -: 25-11-2005, Time -: 06:40 PM
