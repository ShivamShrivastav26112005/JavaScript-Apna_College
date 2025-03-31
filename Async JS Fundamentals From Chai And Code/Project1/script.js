// Unlimited Colors -: 

// you have 2 buttons on the page, start and stop 
// if you click on the start button then starts color changing of background color on the page 
// and if you press stop button then color changing stopped. 


// on every second background color are changed -: 

// use setInterval() method -: becoz on every interval/ second some ops are performed. 


// How to generate random colors -: using hex value and Math.randon() fun. 

const randonColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color; 
};


let intervalId; // global variable 
const startchangingcolor=function(){
    function changeBgColor(){
        // document se ek ek karke sab chijo ka access le lo 
        document.body.style.backgroundColor=randonColor();
    }
    if(!intervalId){
        intervalId=setInterval(changeBgColor, 1000); // after every sec bg is changed of the page. 
    }
};

const stopchangingcolor=function(){
    clearInterval(intervalId); 
    intervalId=null; 
}; 


document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor); 