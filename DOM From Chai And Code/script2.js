// const parent=document.querySelector('.parent')
// console.log(parent);

// // Output -: Go to console section -: 
// // <div class="parent">
// //         <div class="day">Monday</div>
// //         <div class="day">Tuesday</div>
// //         <div class="day">Wednesday</div>
// //         <div class="day">Thursday</div>
// // </div>








// console.log(parent.children); // it returns HTMLCollection like array 

// // Output Looks like this -: 
// // HTMLCollection(4) [div.day, div.day, div.day, div.day]

// // when you open this above Collection then below are describes 
// // 0: div.day
// // 1: div.day
// // 2: div.day
// // 3: div.day
// // length: 4
// // [[Prototype]]: HTMLCollection








// console.log(parent.children[1]); 
// // Output -: 
// // <div class="day">Tuesday</div>



// console.log(parent.children[1].innerHTML); 
// // Tuesday 

// // Every ele.s have children. 












// Now we Found HTMLCOllection then we apply loop,
// to apply forEach() loop, firstly we have to convert HTMLCOllection
// into an array then use forEach() loop. But We apply our classic loop. "for loop". 



// const parent=document.querySelector('.parent')
// for(let i=0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML); 
// }

// // Output -: 
// // script2.js:43 Monday
// // script2.js:43 Tuesday
// // script2.js:43 Wednesday
// // script2.js:43 Thursday





// Some Methods -: 

// Traversing b/w child to parent and reverse, child to sibling. 


// // 1-: Move Parent to child -: 

// const parent=document.querySelector('.parent')
// console.log(parent.firstElementChild);

// // o/p -: it returns 1st ele. 
// // <div class="day">Monday</div>







// console.log(parent.lastElementChild); 

// // o/p -: it returns last ele. 
// // <div class="day">Thursday</div>







// 2-: Move child to Parent -: 



// const dayone=document.querySelector('.day')
// console.log(dayone); 

// // it returns firstday. 
// // <div class="day">Monday</div>




// // Go from dayone(children) to their parent element -: 
// console.log(dayone.parentElement); 

// // o/p -: 
// // <div class="parent">
// //         <div class="day">Monday</div>
// //         <div class="day">Tuesday</div>
// //         <div class="day">Wednesday</div>
// //         <div class="day">Thursday</div>
// // </div>








// // go to their next siblings -: 

// console.log(dayone.nextElementSibling); 
// // o/p -: 
// // <div class="day">Tuesday</div>






const dayone=document.querySelector('.day')




// console.log(dayone.nextElementSibling); 

// // o/p -: NextSibling of Monday is Tuesday -: 
// // <div class="day">Tuesday</div>



// It returns how many nodes parent have. 
console.log("Nodes : ", parent.clildNodes); 