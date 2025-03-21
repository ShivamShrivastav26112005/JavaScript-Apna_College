// DOM Manipulation -: 

// 1-: Attributes -: gives additional info. to an html tag in the form of attributes. 

// 1-: getAttribute(att) -: to get the attribute value 
// 2-: setAttribute(att, value) -: to set the attribute value 




// A)-: Access -: 



// // access div from the html file -: 

// let div=document.querySelector("div"); 
// console.log(div); // <div id="box">This is a Div.</div>

// let value=div.getAttribute("id");
// console.log(value); // id is "box"

// let names=div.getAttribute("names");
// console.log(names); // id is "firstDiv"








// let para=document.querySelector("p"); 
// console.log(para); // <p class="para">This is a Simple Paragraph</p>

// console.log(para.getAttribute("class")); // class name is -: para_hai





// 2-: setAttribute(att, value) -: to set the attribute or change/modify the attribute name -: 
// means we can access and change any attributes. 




// html Paragraph code -: 
// <p class="para_hai">This is a Simple Paragraph</p>


// // Select the paragraph element
// let para = document.querySelector("p");

// // Set a custom attribute
// para.setAttribute("para_hai", "newclass");

// // Log the paragraph element to check changes
// console.log(para);

// // Set the 'class' attribute instead of a custom attribute
// para.setAttribute("class", "newclass");

// // Log the paragraph element to check changes
// console.log(para);





// B)-: Changes -: 




// // 2-: Style -: 
// // Node.style 



// // 2-: style -: change style of any ele. 
// // Node.style -: 


// // access / change "style" of the "div" which is defined in the html file.  

// // first access div -: 

// let div=document.querySelector("div"); 
// console.log(div); // whole div is display -: <div id="box" names="firstDiv">This is a Div.</div>


// console.log(div.style); 
// // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// // you can open this by going to console section -: 

// // ********* styling change using JS -: *********
// // change 'background_color' of the div from "red" to "pink" -: 

// div.style.backgroundColor="pink"; 
// div.style.fontSize="23px"; 









// C)-: Insertion -:  






// // 3-: Insert Elements -: 

// // before adding new ele. we have to first create new ele. ex-: 

// let ele=document.createElement("div"); 

// // properties -: 
// Node.append(ele) // -: adds at the end of node (inside)
// Node.prepend(ele) // -: adds at the start of node (inside)
// Node.before(ele) // -: adds before the node (outside)
// Node.after(ele) // -: adds after the node (outside)








// // create a new button -: 

// let newbtn=document.createElement("button"); 
// console.log(newbtn); // only prints "button" into the console. like this -: <button></button> 

// newbtn.innerText="click me"; 
// console.log(newbtn.innerText); // click me 


// // ---: add new "button" into the "div" at the "ending" position -: 

// // access div first and then add button -: 
// let div=document.querySelector("div"); 
// div.append(newbtn); 
// // now you can see button is added at the ending -: 






// // ---: add button at the starting also -: 

// let newbtn2=document.createElement("button"); 
// newbtn2.innerText="click me2"; 
// console.log(newbtn2.innerText); // click me2 
// // access div then add button -: 
// let div2=document.querySelector("div"); 
// div2.prepend(newbtn2); 
// // now you can see button is added at the starting also -: 








// -: add button at the starting but outside -: 

let newbtn2=document.createElement("button"); 
newbtn2.innerText="click me2"; 
console.log(newbtn2.innerText); // click me2 
// access div then add button -: 
let div2=document.querySelector("div"); 



// div2.before(newbtn2); 
// // now you can see button is added at the starting but outside of the div -: 


div2.after(newbtn2); 
// now you can see button is added at the ending but outside of the div -: 




// Done Part-2 DOM Date -: 26-11-2024 Time - 04:25 PM. 

 