// All the events in JS are happens sequencially -:  
// Except some exceptions -: 

// Js is sequencially run lang. 


// Some events are happened or invoked after performing some activities. 
// like mouse pressing, keyboard press, drag and drop. 








// Ex.s -: how to apply events 



// ex-1 -: 


// // 1-: pick the Ele. by using getElementById(). 
// // 2-: use addEventListener(). -: it listen more events at a time. 
// // write those event first which you want to listen and after listening what you want to
// // perform write those things in the form of function, and third parameter is false (which is by default)

// document.getElementById('owl').addEventListener('click', function(){
//     alert("Owl Id wala picture click hua hai.")
// })

// // after writing above js code, you go to the html page then open your page on live server 
// // and then click 3rd photo then a pop_up displayed on the screen with some message,
// // then press ok, to remove the pop_up 









// // ex-2 -: After performing event you have to found an event_Object. 

// // in the below code "e" is a event_Object. 

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e);
// }, false)


// // false -: default hota hai. 
// // Majority event hote hai -: browser ke event, enviroment ke event (mouse ne kha pe click kara)




// *******************  IMP -: *******************

// Study -: 
// type -: mouse events type, keyboard events type. 
// timestamp, defaultPrevented (changed the default behaviour of any tag)
// like submit button click karne pe form submit nhi hoga 



// // Study these events -: 
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode 







// // Topic -: "event_Propogation" (true or false) 3rd parameter inside the addEventListener() fun. -: 
// // have 2 context -: 

// // 1-: event bubbling (false) -: ye niche se upper jata hai means ye inside tag se outside tag 
// // ke oor jata hai print / display karte karte. 
// // means images then li then ul. 

// // 2-: event capturing -: goes to top to bottom. means ul then li then images. 




// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside the ul");
// }, false)

// // ye upper wala tb print hoga jb mai images (ul) ke ander click karunga. 


// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Owl wala id click hoga");
// }, false)

// // ye wala tb print hoga jb mai owl wale id ke image pe click karunga. 









// // change default behaviour of google link, in this time when you click the google link
// // it redirect to its website but after appling event its not redirect to its websites. 


// // by using "e" you capture the event. 
// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault(); // it stops the redirection. 
// }, false)






// Final Projects -: 

// If you clicked on any image inside ul those image goes to be disappeared. 

// document.querySelector('#images').addEventListener('click', function(e){
    
    // 1-: 
    // console.log(e);
    // // go to the inspect section and console, then click on the image one by one
    // // and then you see on the console section events are displayed.  
    
    // 2-: 
    // console.log(e.target); // now target are displayed 
    

    // 3-: tagName is also a event. 
    // console.log(e.target.tagName);
    

    // 4-: .parentNode (is a event) me "li" ka "parent" "ul" aaya hai
    // console.log(e.target.parentNode);  
// }, false)




// main -: remove the images -:   


document.querySelector('#images').addEventListener('click', function(e){
    console.log("Tag Name is : ", e.target.tagName);
    if(e.target.tagName === 'IMG'){ 
        console.log("Delete Image ka id hai : ", e.target.id); 
        let removekaro = e.target.parentNode;
        removekaro.remove(); 
    }
}, false)   




// Go to console section by inspect and delete one by one images and see the output 
// like this -: 


// Tag Name is :  IMG
// script.js:160 Delete Image ka id hai :  photoshop
// script.js:158 Tag Name is :  IMG
// script.js:160 Delete Image ka id hai :  owl
// 5 script.js:158 Tag Name is :  LI
// script.js:158 Tag Name is :  IMG
// script.js:160 Delete Image ka id hai :  prayer
// script.js:158 Tag Name is :  IMG
// script.js:160 Delete Image ka id hai :  Programmer
// 3 script.js:158 Tag Name is :  LI
// script.js:158 Tag Name is :  IMG
// script.js:160 Delete Image ka id hai :  river