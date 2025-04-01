// // select first form tag -: 


const form = document.querySelector('form'); 

// this below usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault(); 

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // height is empty || height is less than 0 || height is not a number(NaN)
    // en thino me se agar koi nhi h to results me add kro height ko -: 

    if(height === '' || height < 0 || isNaN(height)){
        // add values inside the results using innerHTML method -: 
        results.innerHTML=`Please give a valid height ${height}`; 
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        // add values inside the results using innerHTML method -: 
        results.innerHTML=`Please give a valid weight ${weight}`; 
    } else { // if you have height and weight then calculate BMI using google formula -: 
        const bmi = (weight / ((height * height) / 1000)).toFixed(2); 

        // Determine BMI category and display on the web page
        if (bmi < 18.6) {
            results.innerHTML = `Your BMI is <strong>${bmi}</strong>. 
            You are <span style="color: blue;">Underweight</span>.`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Your BMI is <strong>${bmi}</strong>. 
            You are in the <span style="color: green;">Normal Range</span>.`;
        } else {
            results.innerHTML = `Your BMI is <strong>${bmi}</strong>. 
            You are <span style="color: red;">Overweight</span>.`;
        }
    }
    

});




   