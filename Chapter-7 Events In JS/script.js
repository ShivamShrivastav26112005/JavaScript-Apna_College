// Events in JS -: 
// The change in the state of an object is known as an Event. 
// Events are fired to notify code of "interesting changes" that may affect code execution. 

// these are events -: 

// Mouse events (click, double click etc)
// keyboard events (keypress, keyup, keydown)
// form events (submit etc)
// print event & many more 


// if we "click" on the "button" then it is an "event". 
// when user interacts our websites then events are happens 
// window -> size -> minimize or maximize or fullscreen these are events 



//                  Event Handling in JS -: 
// event handles by 2 ways 1-: using inline event (directly write inside the html tag)
// 2-: using JS (by making a function)
// more priority [JS event > inline event]


// take a node and by using "arrow" function -: syntax -: 
// Node.event=()=>{
//     // handle event here using JS 
// };


// // ex -: 
// // access first "button" by using their "id" -: 
// let btn1=document.querySelector("#btn1"); 
// // access "event" over "btn1" using arrow fun. 
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
// };
// // go to the console section and seen output -: 




// // handle "div" from the html file -: 

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside div"); 
// }; 

// // when your mouse goes to div and touch then the msg is displayed.





// Event Object -: It is a special object that has details about the event. (event ki sari details event object ke pass hoti hai)
// like kis type ka event hai -: mouse ka event hai, keyboard ka event hai etc... it saves all the background info. of the event. 
// All event handlers have access to the event object's properties and methods. 


// // syntax -: 
// Node.event=(event)=>{
//     // event handle here
// }
// "event" is a special arguments 
// // e.target, e.type, e.clientX, e.clientY. 





// let btn1=document.querySelector("#btn1"); 
// // access "event" over "btn1" using arrow fun. 
// btn1.onclick=(event)=>{
//     // console.log(event); // output -: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, ..…}
//     // console.log(event.type); // click
//     console.log(event.clientX, event.clientY); // 52 12
//     // console.log("btn1 was clicked"); // btn1 was clicked
// };
// // go to the console section and seen output -: 





//        3 ways to handle our events -: 
// ************ Event Listeners -: ************


// Event Listeners -> it is fun jo hamesha event ko listen karte rhate hai and when event comes then they execute their works 


// syntax -: pass 2 parameters, "callback" is a fun which goes as an arguments to another fun. 
// callback -: fun, event -: click, doubleclick, mouse related event etc. 
// when "event" occurs then "callback" is "execute" 

// 1-> Node.addEventListener(event, callback)

// 2-> Node.removeEventListener(event, callback)

// Note -: the callback reference should be same to remove. 




// // ex-: // 1-> Node.addEventListener(event, callback)
// let btn2=document.querySelector("#btn2"); 
// btn2.addEventListerner("onclick", (event) => {
//     console.log("button was clicked 1"); 
//     console.log(event); 
// } ); 

// btn2.addEventListerner("onclick", (event) => {
//     console.log("button was clicked 2"); 
//     console.log(event); 
// } ); 




 

// remove 2 fun --: 
// ex-: // 2-> Node.removeEventListener(event, callback)

const handle2=()=>{
    console.log("button was clicked 2"); 
}
btn2.removeEventListener("click", handle2);



