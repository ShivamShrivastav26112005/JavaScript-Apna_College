// change the color of the body while pressing any of the button 
// means to do these things, we have to select all the button and body also.

// using document.querySelector() method -: 







// const buttons = document.querySelectorAll('.button')
// // it returns NodeList means you can use forEach() loop. 
// // console.log(buttons) // to check on the console thats our button is selected or not. 

// const body = document.querySelector("body")


// // forEach() loop ke andar mai callback likh skta hu like arrow fun ya regular fun. 
// // in forEach() loop, you can access ele.s one by one. 









// ex -: 

// buttons.forEach(function (button){
//     console.log(button); 
// }); 


// // o/p -: it returns value like this -: 
// // <span class="button" id="grey"></span>
// // <span class="button" id="white"></span>
// // <span class="button" id="blue"></span>
// // <span class="button" id="yellow"></span>




// Simple JS Used -: 



const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
    console.log(button); // we can access each button one by one 
    // and apply event listener
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target); 
        // event apply -: 
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id; 
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id; 
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id; 
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id; 
        }
    }); 
}); 
