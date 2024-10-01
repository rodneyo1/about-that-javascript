

//NOTES
//Array and Object Destructuring
const Alphabet= ['A','B','C','D','E','F']

const numbers=['1','2','3','4','5','6']
//const a =Alphabet[0]
//console.log (a)
//Destructuring
const [a,,c,d,...rest]=Alphabet
console.log (c)
console.log (d)
console.log (rest)
const newArr=[...Alphabet,...numbers]


console.log('youuu')

//Immediately Invoked functions
(function test(){
  //do stuff
})()


//destructuring objects
const person1 = {
  name: 'Kyle',
  age:24,
  address:{
    city: 'somewhere',
    state: 'One of them'
    }
}
const person2={
 // name:'Sally',
  //age: 32,
  address:{
    city: 'somewhere else',
    state: 'Another One of them'
    }
}

const {name: firstname, age}= person1
console.log(name)
console.log(age)
console.log(firstname)
const person3= {...person1,...person2}
console.log(person3)

//Array Iteration
const items=[
  {name:"Bike",price:100},
  {name:"TV",price:200},
  {name:"Album",price:10},
  {name:"Book",price:45},
  {name:"Phone",price:54},
  {name:"Computer",price:66},
  {name:"Keyboard",price:100},
]
//.forEach
items.forEach(item => console.log(item))
 
//.map
//creates a new array(doesnt mutate the array)
const ages2013=[34,92,20,40,56,10]
const ages2022=ages2013.map(age=>age+9)
console.log(ages2022)


const newPrices=items.map(item=>item.price+100)
console.log (newPrices)

const newerPrices=items.map(item=>item.price+50)
console.log(newerPrices)

//.filter
//creates new array that passes the constraints/rules created by the provided function

const Phones=['iphone','xiaomi','samsung','LG','Motorola']
const nPhones=Phones.filter(phones=>phones.length<=5);
console.log(nPhones)

const Phones2=[
      {brand:'iphone',
      RAM:2,
      ROM:256
      },
      {brand:'xiaomi',
       RAM:3,
       ROM:64},
      {brand:'samsung',
       RAM:6,
       ROM:168},
      {brand:'LG',
       RAM:3,
       ROM:256},
      {brand:'Motorola',
       RAM:4,
       ROM:32}
   ]
const hugeRam=Phones2.filter(phone=>phone.RAM>3)
console.log(hugeRam)

//.reduce
const scores=[3,4,5,6,6]
scores.reduce(accumulator,curentvalue=>accumulator+currentvalue)
const tot=scores.reduce(accumulator, curentvalue=> accumulator+currentvalue)
console.log(tot)

//.split
const sentence= "Personally im not having that"
const words  =sentence.split(' ')
console.log(words)

//.every

//if everything in the array matches a rule/condition return true
const scoress=[34,65,56,87,98]//check for over 30
const check= scoress.every(result=> result > 30)
console.log(check)
//true

//
const toConvert=[123,140,212,41]

// (50°F - 32) x .5556 = 10°C
const converted= toConvert.map(farenheight=>((farenheight-32)* 0.5556))
console.log(converted)
// function  conv (farenheight){
//  const celcius=(farenheight-32) *0.5556
//   return celcius
// };

// const converted= toConvert.map(conv)
// console.log(converted)

//using .reduce write a function that returns the total number of characters in an array
const stringArray=['rabbit','bunny','frog']
function geTotal(){
    const newStringarray=stringArray.map(string=>string.length)
    const newArray=newStringarray.reduce((accumulator, currentValue)=>accumulator + currentValue)
    console.log(newArray)
}
geTotal()
 

//Event listeners
//target.addEventListener('event', function)
document.addEventListener('',() => {
  
})
const body =document.querySelector('body')
function clicked() {
  console.log('clicked')
}
body.addEventListener('click',clicked)


// Functions:
// Function declaration syntax: const functionname=(param1,param2...) => action If there is an only return, there is no need to type "return" and if it's just one parameter, no need to add "()"
// Currying: const functionname= param1 => param2 => action 

// To properly call function syntax is: functionname (param1)(param2)
// Compose: const functionname= (param2,param3) => param1 => param2(param3(param1)) Being param2 and 3 functions y param1 a value. Executes a function inside a function executed with the initial param1


//Advanced Functions
//Currying
// Used when Converting a function that takes more than one parameter and returns something into a function that takes the parameters one
// at a time and returns the thing.
const multiPly=(a,b)=>a*b;
const curriedMultip=(a)=>(b)=>a*b;
const ans =curriedMultip(3)(4)
console.log(ans)
//answer 12

//compose
const Compose=(f,g)=>(a)=>f(7)
const sum=(num)=> num +1
Compose(sum, sum)(5)

//Avoiding side effects and Pure functions.
//A function must always return the same value
//A function shouldn't have side effects.

//Pass by value and Pass by Reference
//Objects and Arrays(non-primitive data types)are cloned to avoid changing the object 
//held by the original memory address.
//Cloning can be done using Object.assign method, rest operators,classes and JSON(deep cloning)

let obj={
  a:'a',
  b:'b',
  c:{deep:'Try and copy me'}
}
console.log(obj)
//using assign 
let clone=Object.assign({}, obj)
console.log(clone)
//Using rest Operators
let clone2={...obj}
console.log(clone2)
//using JSON
let superclone=JSON.parse(JSON.stringify(obj))
obj.c.deep='This has changed'
console.log(superclone)//obj remains the same(doesn't change the referenced object )

//Type Coercion 
//https://dorey.github.io/JavaScript-Equality-Table/

//ES7
//.includes()
'Hello'.includes('o')
//true
const pets=['cat','dog','hamster']
pets.includes('hamster')
//true
//ES8
//.padStart(number of spaces)
//.padEnd(number of spaces)
//Object.entries()- object to string

// ES10
// .flat()
const dinosaurs=['Raptor','Megladon',,,,,['Trex']]
const flattenedArray=dinosaurs.flat(2)
console.log (flattenedArray)
//Can also be used to remove empty items from arrays.
//answer is ['Raptor','Megladon','Trex']

//flatMap() 
//allows us to map through an array and flatens to a depth of 1
const jurassicPark=dinosaurs.flatMap(creature=>creature +' leg')
console.log(jurassicPark)

//.trimStart() and .trimEnd()
const userNam='       Fred'
console.log(userNam.trimStart())

//.fromEntries() and .entries()
//convert String to Object and vice versa
const Studnts=[['Vera',26],['Joe',31],['Lisa',30]]
const createdObject=(Object.fromEntries(Studnts))
const objectToArray=(Object.entries(createdObject))
console.log(createdObject,objectToArray)

// Advanced Loops,Iterables and Enumerables
//for-in loops loop over enumerable properties. 
//Enumerables are objects or arrays.
const basketItems={
          sugar:20,
          salt:4,
          kale:21
}
for (item in basketItems){
  console.log(item)
}
//ES2021 



//.replaceAll
const str='the league keeps getting softer and softer'
const replaced =str.replaceAll('softer','harder')
console.log(replaced)

//ES2020
//Optional chaining operator- ?
//Used instead of if statements to check if certain conditions are true and
//returns undefined if false

let jakePokemon={
  pikachu:{
    color: 'yellow',
    attack: 'lightning',
    habitat: 'forest',
    enemy: null
  }
}
let habitat=jakePokemon ?.pikachu ?.habitat
console.log('habitat',habitat)

let attack=jakePokemon ?.raichu ?.attack
console.log('attack',attack)
//assigns undefined

//Nullish coalescing operator- ??
//Checks if a value is null or false and returns true if null and false if false 
console.log(false ?? 'hellooo') //false so it logs 'false'
console.log(null ?? 'phone')//null so it logs 'phone'
//false
//To put it into context, you can replace the <false> or <null> in this example with an object key to return
//something if itsvalue is false or null
console.log(`The enemy of the Pet is ${jakePokemon.pikachu.enemy??"unknown"}`)


// ..................................
 


// React.js, Redux, React Hooks
// HTTP/JSON/AJAX + Asynchronous Javascript-promise,async/await
// Node JS
// ...................................
// BACKEND


// //Math.random() -Gives a random floating point number provided an integer. 
// The random number is >0 but <the Integer
console.log (Math.random()*6 )

//Math.floor()- rounds down to the nearest full integer
//Math.ceil()-rounds up to nearest integer.
//Math.round()-nearest integer

//Pick a random item in the array below

const drinksMenu=['vodka Tonic','white wine','beer','gin','cocktail']
let randomNumber=Math.random() * drinksMenu.length
let drinkIndex=Math.floor(randomNumber)
console.log(drinksMenu[drinkIndex])


//Date
//Timers
// setTimeout()
//setTimeout(function,milliseconds)

//setInterval()
//setInterval(function,millisecondreturn 0;s )
const printName = ()=>console.log('Rossetta')
const timerID=setInterval(printName,3000)
//clearInterval
clearInterval(timerID)



//Classes
//classes are essentially templates for creating new objects. They are functions that take 
//arguments asnd store them as new object properties..
//class declaration

class rectangle {
  constructor(length,width) {
    this.length=length
    this.width=width
  }
}
const newRectangle= new rectangle(25,40)
console.log(newRectangle)
console.log(newRectangle.length)

//Class Methods
//Syntax
// class ClassName {
//   constructor() { ... }
//   method() { ... }
// }
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age() + " years old.")

//TRY PACMAN PROJECT

//KEYS * html and css neededreturn 0;
const circle = document.querySelector('.circle')

function control(evt){
  if (evt.key==='Arrowleft'){
    console.log('pressed left')
    // alternatively, keycodes can be used as follows(depreciating):
  } else if (evt.keycode==='39'){
    console.log('pressed right')
  }
}
document.addEventListener('keydown', control)


//.createElement() - Needs html and css
const square= document.createElement('div')
const image= document.createElement('img')

const body= document.querySelector('body')

body.appendChild(square)
body.appendChild(image)
//.setAttribute() - for the image element
image.setAttribute('src','rodphoto.png')

console.log(body)
//.getAttribute() - for the image element
const imageSrc=image.getAttribute('src')
console.log(imageSrc)
*/

//FULL PROJECT WITH ANIA K.

//COMMAND LINE
//sudo
//apt get
//ls
//mkdir
//rm -r
//cd ..
//cd
//cp
//pwd
//mv
//man
//kill
//archive
//unarchive
//exit
//ping
//touch
//echo
//shutdown
//chmod +x,r,w
//pwd

//GIT AND GITHUB
// git add
// git status
// git commit -m "message"
// git push
// git pull

// git status
// git branch
// git checkout

//NPM
//npm start
//npm -v
//npm install < >
//npm install -g <  >
//npm upgrade < >

