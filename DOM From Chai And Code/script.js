// Below Given Codes are written in the console section by going to inspect -: 


// 1-: getElementById() -: 


// document.title
// then pres enter -: 

// 'DOM From Chai Aur Code'

// // different - 2 methods are present inside the document 
// undefined

// document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// // You can select ele.s by using these methods and when you enter then it returns some value. 
// undefined

// document.getElementById('title').id
// 'title'

// document.getElementById('title').class
// undefined

// document.getElementById('title').className
// 'heading'

// document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }

// document.getElementById('title').getAttribute('id')
// 'title'

// document.getElementById('title').getAttribute('class')
// 'heading'

// document.getElementById('title').setAttribute('class', 'newClass')
// undefined
// O/P -: <h1 id="title" class="newClass">DOM Learning</h1>

// document.getElementById('title').setAttribute('class', 'class','newClass')
// undefined
// not changed anything -: syntax error -: 

// document.getElementById('title').setAttribute('class', 'class newClass')
// undefined
// O/P class_name changed -: <h1 id="title" class="class newClass">DOM Learning</h1>





// Gives styling by selecting the Element.s and store it into the variable.


// document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// store "title" id inside the variable and gives styling -: 

// const title=document.getElementById('title') // then press enter 
// undefined // it returns the value 




// changes / manipulation happens -: these are written inside the console section -: 

// title
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// title.style.backgroundColor='green'
// 'green'

// title.style.padding="30px"
// '30px'

// title.style.borderR="30px"
// '30px'

// title.style.webkitBorderRadius="30px"
// '30px'




// 2-: How to add content -:



// title
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​

// document.getElementById('title').setAttribute('class', 'class newClass')
// undefined

// title
// <h1 id=​"title" class=​"class newClass">​DOM Learning​</h1>​

// //  Adds Content inside the document -: 
// undefined






// document.getElementById('title').setAttribute('class', 'class newClass')
// undefined

// // Adds the content inside the document -> press Enter then, 
// undefined

// title
// <h1 id=​"title" class=​"class newClass">​DOM Learning​</h1>​

// // find content using 'title' id like here content is DOM Learning 
// undefined

// title.innerHTML
// 'DOM Learning'

// title.textContent
// 'DOM Learning'

// title.innerText
// 'DOM Learning'

// // these above are gives same output
// undefined

// // Now What is the difference b/w innerText and innerContent
// undefined



// Now adds some extra text inside the h1 tag in the html -: 
// and then go to the console section and write some properties of DOM 
// and run them. 



// Bu using CSS 'display' Property, I remove the text which is written inside the span tag
// now, by using "innerText" property, only visible contents are showed, but
// by using 'textContent' property all the contents are visible which is written and we display by pressing 'Enter'

// title.innerText
// 'DOM Learning On Chai Aur Code'

// title.textContent
// 'DOM Learning On Chai Aur Code test text'



// 3-: 

// title.innerHTML
// 'DOM Learning On Chai Aur Code <span style="display: none;">test text</span>'

// -: it gives whole HTML (content as well as tags also)


// To select an Element we have different - 2 properties like getElementById, getElementByClass and much more -: 
// // Some ex -: 

// document.getElementsByClassName('heading')
// HTMLCollection [h1#title.heading, title: h1#title.heading]





// Some IMP "Query_Selectors" which is used in real Life -: 

// document.querySelector('h2') -: then press enter, it returns only "first" h2 tag from html page. 
// <h2>Lorem ipsum dolor sit amet consectetur elit</h2> 

// select id using querySelector -: 

// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​</h1>​


// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​​</h1>​






// ********** IMP ********** querySelector() gives only single value. 

// now I add ul and inside ul, there are 3 list items present named one, two, three, 
// select and change their color using "querySelector". 

// change color of the first item. 


// document.querySelector('ul')
// <ul>​…​</ul>​

// // store it into the variable -: 
// undefined

// const myul=document.querySelector('ul')
// undefined

// myul.querySelector('li')
// <li>​…​</li>​

// // store this into another variable 
// undefined

// const turnGreen=myul.querySelector('li')
// undefined

// turnGreen.style.backgroundColor="green"
// 'green'

// turnGreen.style.padding="10px"
// '10px'

// turnGreen.innerText
// 'one'

// // change content from one to shivam 
// undefined

// turnGreen.innerText="shivam"
// 'shivam'

// // these above are some methods to select individual ele.s 
// undefined




// *********** querySelectorAll() -: ************
// it select multiple things in the form of NodeList


// document.querySelectorAll('li')
// NodeList(3) [li, li, li] // -: this is called NodeList. just like array but not same as it is. 

// const tempList=document.querySelectorAll('li')
// undefined







// ******** change the color of the item1 and item3. ********

// const tempList=document.querySelectorAll('li')
// undefined

// tempList
// NodeList(3) [li, li, li] // Not a array, it is a NodeList. 

// tempList[0].style.color='green'
// 'green'

// tempList[2].style.color='pink'
// 'pink'



//  ********* colors are changed of all the three items using forEach method -: 

// const tempList=document.querySelectorAll('li')
// undefined

// tempList
// NodeList(3) [li, li, li]

// itemcomesonebyone -: this is variable name. 

// tempList.forEach(function (itemcomesonebyone){
//     itemcomesonebyone.style.background="green"
// })
// undefined






// ********* .getElementsByClassName() *********

// adds again another "ul" and inside them 4 list items also (ONE, TWO, THREE, FOUR) in the html page. 


// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]


// ****** "HTMLCollection" are different from "NodeList".


// forEach() loop is used on the "NodeList" but is not used on the 
// "HTMLCollection", To use forEach() loop on the HTMLCollection, 
// we have to convert it into the NodeList. Now, How we convert it ? 

// Sol -: By Using Array method named ".from()" -: 






// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// const tempList=document.getElementsByClassName('list-item')
// undefined

// tempList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollection

// Array.from(tempList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

// // Convert it into the array -: 
// undefined

// // Convert HTMLCollection into the Array -: 
// undefined

// const myConvertedArray=Array.from(tempList)
// undefined

// myConvertedArray
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

// // it returns array 
// undefined

// // now you can use forEach() loop 
// undefined

// // by using forEach() loop, you can perform some ops
// undefined

// myConvertedArray.forEach(function(elecomesonebyone){
//     elecomesonebyone.style.color="blue"
// })
// undefined

// it converts all the items into the "blue" color by using forEach() loop. 