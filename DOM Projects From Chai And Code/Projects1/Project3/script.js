// Select first "clock" by using 2 method -: 


// const clock = document.getElementById('clock')
// or 

// Select the clock element
// const clock = document.querySelector('#clcok')


// this clock is digit clock -: means it changed their time after every second 

// koi aise method jisse every time, time changed or updated aaye in js 
// those method runs in every movment in js. 

// then method is -: "setInterval()". 

// ******** learn their syntax -: ********




// Final JS -: 



// Select the clock element
const clock = document.querySelector('.clock');

// Update the time every second
setInterval(() => {
    const date = new Date();
    // Update the clock element with the current time
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
