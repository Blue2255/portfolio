// console.log("i like pizza!");
// console.log("it's really good");
// console.log("my name is blue");
// console.log("i love jesus!");
// name ="peter pan"
// console.log(name)
// window.alert("welcome to our page");
// sentence = "how are you doing today love hope you are good because i have been calling your line and you have not been picking my calls pls why"
// console.log(sentence)

// //simple maths
//  food = Number( prompt("how much was the food?"))
//  console.log("the food costs ",food +"$")
//  tipAmount = Number( prompt("how much tip do you want to give " + "$"))
//  console.log( 'the tip is',tipAmount)
//  total =  food + tipAmount
// //  console.log(total)

//  console.log("tip =",tipAmount)
//  console.log("total=",total)
// //user input
// // ferrari = prompt('what is your favourite car?')
// // console.log(ferrari)
// ikeja = Number( prompt ("how much was your transport to ikeja"));
// ago = Number( prompt("how much was your transport to Ago"))
// totalTransport =  ikeja + ago
// console.log(totalTransport)
// console.log("total transport from ikeja to ago costs ", totalTransport)

// // age = 21
// // age  = 21 + 1
// // console.log(age)
// // student = true

// // console.log("enrolled:" ,student);


// // fisrtname = "Blue";
// // console.log(fisrtname)
// // document.getElementById("1").innerHTML="Hello " +  fisrtname;
// // document.getElementById("2").innerHTML= "i am " + age + " yeras old."
// //complex maths
// complexMath = 2 + 2 - 3 + 4 *(4 +1)
// console.log(complexMath)


//more mathrmaticsl problems
vnum = 2 ** 2
console.log(vnum)
myNum = Math.floor(112.52 * 3)
my = Math.pow(4,4)
console.log(my)
console.log(myNum)
blue = Math.sqrt(64)
console.log(blue)
random =  Math.floor( Math.random() * 3) 
console.log(random)
quasim = (70 / 2)
console.log(quasim)
// console.log("This are random number (between 0 and 1)" , random )
//baby weather app
// rain = 'rain' == 'rain'
// sun = 'sun' =='rain'
// console.log("sun",sun)
// console.log(rain)
//  let food = prompt('how was the food today')
// let food = prompt
//
// }
function saymyname(name){
saymyname = `hi ${name}, nice to meet you! `
console.log(saymyname)
//      console.log('hi', name +', Nice to meet you!')
}
saymyname('blue')


//  let nice = prompt('what is your name')
//  console.log(`hi ${nice},nice to meet you!`)

function sum(a,b,c,d) {
    return a + b + c + d
}
console.log(sum( 1 , 2, 2, 3))
// math = 1 + 2 + 3
//  console.log(math)
const side = document.getElementById("submitt")
side.onclick = function(){
      a = document.getElementById('a').value;
      a = Number(a);
      b = document.getElementById('b').value;
     b = Number(b);
  c = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
     document.getElementById('c').innerHTML = 'SIDE C = ' + c;
     console.log(c)


//  a =Number( prompt('ENTER SIDE A'))
//  b = Number( prompt('Enter Side B'))
//  c =Math.sqrt( Math.pow(a,2) + Math.pow(b,2))
//  console.log('side c =',c)
  } 
//  function Counter(food, tip){
// tipPercentage = tip / 10
// tipAmount = food * tipPercentage
// total =  food + tipAmount
// return total
//  }
// console.log(Counter(300, 20))
// tipPercentage = 20 / 100
// tipAmount = 100 + tipPercentage
// console.log(tipAmount)
function godswill(){
    console.log("blue")
    console.log('red')
    console.log('white')
    console.log('green')

  
  
}
// function ifeanyi(a,b){
// // return a + b 
// // }
// // console.log(ifeanyi(1,2))
//godswill()
// //arow function =>
//explict
//  const sumARROW4 = (a, b) =>{
//   return a + b
//  }
//  console.log(sumARROW4(1,2))

//there are various types of arrow function which are explict and implict return
//examples of implict return are;
// const sum = (a,b) => a + b
 sumARROW = (a,b) => a + b
 console.log(sumARROW(10,40))
 sumARROW2 = (a,b) => a * b
console.log(sumARROW2(10,2))
sumARROW3 = (a,b) => a / b
console.log(sumARROW3(10,2))
//boolean function(true or false )
// g = 5 > 2
// console.log(g)
// function mathfunction(a,b,){

//     return a * b
// }

// console.log(mathfunction(2,3))


function blur(){
  console.log('blue')
console.log('white')
}
blur()

//arrays eg;
const groceries = ['apple', 'pear', 'banana','orange']
console.log(groceries)
console.log(groceries[2])

console.log(groceries)
//this means start from 0 and up to 2 [0,2] in other words pick any sting or any object from 0 to 2

console.log(groceries.slice(2,4))
// groceries.push('godswill')
// console.log(groceries)
// groceries.push('eze')
// console.log(groceries)
//indexof('')
console.log(groceries.indexOf('orange'))
console.log(groceries.length)


//objects in java script
const object = {
  name: 'blue',
  shirt:'white',
  phone:'9123833071',
  shirt:'black'
}
//note:when console.loging the object you need to be specific or it will run the result anyhow ......
//there are two ways of accessing this information which are dot notation and bracket notation.e.g:
//console.log(object.name )//this is dot notation
//console.log(object[name] )//this is bracket notation
//the one we are using below is dot notation...
console.log(object.name)
console.log(object.shirt)
//the one below we are using below is called bracket notaion..
console.log(object['name'])
    console.log(object['shirt'])
// object.phone = '09123991724'
console.log(object.phone)
console.log(object)
//this is a es6 arrow function
//it has an object 
//and we are using template litreals
 introducer =() =>{
  //this method we are are using is a way of gettin g user information e.g prompt
  //if you ever get confused you can always go back
   person = {
    //  name:window.alert('my name is godswill'),
    //  shirt: window.alert('and the love of my life is favor'),
    name:'godswill',
    shirt:'black',
     assets: 100000,
     liabilities: 20000,
     networth : function (){
      return this.assets - this.liabilities
     }
     
   }
  
 intro = `hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my networt is $ ${person.networth()}  USD `
 return intro
}
console.log(introducer())
//methods : a method is a property containing a function defintion
 

//loops
//for loops


const fruits=['apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange','apple','mango','pear','bananna','orange',]
// console.log(fruit[4])
// console.log(fruit.length)
//for loop example ;
//for (let i=0; i < fruits .length; i++){
//console.log(i, fruits [i])
//}
//the i stands for index (i.e indexing of the number it runs)
//the fruit.length proprty in (index.225) means that the codeshould print or run how many times depending on wat is in the aaray e.g length property 
//i++ means increment of the index
//  for ( let i=0; i < fruit.length; i++) {
//   console.log(i,fruit[i])
//  }
//there be no need to use this loop probably because there is an update in the java script which makes life much easier
// the new update is down below
// for (const fruit of fruit) {
//console.log(fruit)
//}
//
for (const fruit of fruits) {
  console.log(fruit)
}

//for (index.242) you will have to console log the fruit instead of fruits
function godswill(numbers){
  let result = []
  for (const number of numbers){
    result.push(number ** 3)
  }
return result
}
 console.log(godswill([1,2,3,4,5,6,14,15,16,17]))
 const numbers= [1,2,3,4,5,0]
 let result =[]
 for (const number of numbers){
   console.log(number ** 2)
 result.push(number **5)
 }
//  console.log(result)
 // to square a number u will use **
 //function random(){
  
// }
letters =()=>{
phrase = [1,2,4,5,6,7]
let result = 0;
for (letter of phrase){
  console.log(Number(letter) + 1)
  result =Number((letter)) + 1 
}
return { result }
}
console.log(letters())
//note :'of' will loop through the string while 'in' will loop the numbers(i.e it will count the numbers)
// when dealing with numbers use of when dealing with words use in.

function pjay(){
  para = 'woe2fvhkvqbjefujfvn uefjln  efjsvn fqejvn ejf fjv efjvn fjvnc e;fjslvn wfjv wg'
  for (paragraph in para){
    console.log(paragraph)
 
  }

}
pjay()

// function pjay(para){
  // return = { result : para.length} 
//   }

// }
//   para = 'woe2fvhkvqbjefujfvn uefjln  efjsvn fqejvn ejf fjv efjvn fjvnc e;fjslvn wfjv wg
// pjay()
function sumarray(numerals){
let result = [0]
for(numeral of numerals){
  console.log(numeral)
  result=Number(result + numeral)
}
return {result }
}
 console.log(sumarray([1, 2 , 3, 4, 5]))
function times(number){
  let result = number[0]
  for (const numbers of number){
    if (numbers > result){
      result = numbers
    }
    // return result
  }
  return {result}

}
console.log(times([1,2,3,4,1]))
// function frq(){
//   let result = []
//   phrase='haha'
//   for (parad in phrase){
//     console.log((parad))
//   result =Number(parad) + 1

//   }

//   return {result}
// }
// console.log(frq())
function letterfrqency(){
  const words =('godswill')
  console.log(words) 
  // phrase = prompt('say a word')
  let frqency =[]
  for ( const letter of words){
  if (letter in frqency){
    frqency[letter] =frqency[letter]+1 //note if you are you using increment it should look like this
    //frqency[letter]+=1 this simply means that if (frqency[letter]=frqency[letter]) add it by one(1)
    //it could also look like this (frqency[letter]++)this also means what  i stated in line (337)
  }
  else{
    frqency[letter] = 1
  }
    
// console.log(frq)
  }

  return frqency

}
console.log(letterfrqency())
function example(){
  const feel =[1,2,3,4,5,6]
let push =[]
for ( const feels of feel){
  if(feels in push){
    push[feels] += +1
  }
}
}
//incremental operators
//++,--,+=




// const fool =['bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit','bidcuit',]
// for (fools in fool){
//   console.log(fools)
// }


function java(){
  let plan = 'olol olol ioio'
  plan = plan.split(' ')
  let result = []
  for( plans of plan){
    if( plans in result){
     result[plans] += + 1
      // result = plans
    
  }
  // return {result}
  else{
    result[plans] = 1
  }
}
return result
}
console.log(java())












// function wordfrequency(){
//   const mister = prompt('what is your word')
//   console.log(mister) 
//   // phrase = prompt('say a word')
//   let frequency =[]
//   for ( const letter in mister){
//   if (letter =  frequency){
//     frequency[letter] =frequency[letter]+1
  
//   }
//   else{
//     frequency[letter] =1
//   }
//   frequency =letter 
    
// // console.log(frq)
//   }

//   return frequency

// }
// console.log(wordfrequency())





function smartphone(){
 phone = 'write your word'
console.log(phone)
phone =phone.split(' ')
let iphone = []
for(phones of phone){
    //  console.log(phones)
    if(phones in iphone){
    iphone[phones]+= + 1
    }
    else{
      iphone[phones] = 1
    }
}
return iphone

}
console.log(smartphone())
//note: in other to accomlish this task above the function split(' ')was used and split is explained down below
//the function 'split is a function that identifies character or characters to use in seprating
//the string.if omitted, a single-elment array containing the entire string is returned.
//split a string into substrings using the specified seprator and return them as an array.


//ARRAY METHODS
//maps(): it runs a loop and returns an array
//filter():it runs a loop and returns an array in matching conditions
//reduce():it basically sums. reduce() loops and then gives you back the accumulator

//example of map array method ;
let figures = [1,2,3,4,5].map(figures =>figures **3 )
  console.log(figures )
  // console.log(figures **3)
  //  const figure = [1,2,3,4,5,]
  //  for( figuree of figure){
    // console.log(figuree)
  //  }






function double(){
  number = [1, 3, 4, 5, 6]
  let result = [0]
  for(const numbers of number){
    console.log(numbers)
    result= Number(result + numbers)
     
  }
  return  {result}
}
console.log(double())


//filter()

function filter(number,three){
  // let number =[1,2,3,4,5,6,7]
  let result =  []
  for(const numbery of number){
    if(numbery > three){
      result.push(numbery)
    }
    
  }
  return result
 }
 console.log(filter([1,2,3,4,5,6,7],[5]))


//this is an example of filter( down below)
let examplez =[1,2,3,4,5,6].filter(number =>number >2)
console.log(examplez)
//lets take an example praticing the or and and(&&)statement in javascript
let examplee =[1,2,3,4,5,6].filter(number =>number >2 || number < 2)
console.log(examplee)
let k=[1,2,3,4,5,6].filter(k => k >3||k <2)
console.log(k)

// (|| this means or in javascript.)
const somto = [
  {name:'emeka',Assets:10000},
  {name:'neji',Assets:1000},
  {name:'blue',Assets:10}
]
let results = somto.filter(somto => somto.Assets > 100)
 let a=somto.reduce((c ,d) => c + d.Assets,0)
console.log(a)
console.log(results)
//reduce()


// const nums = [1,2,3,4]
//  const resultz=nums.reduce(function(back , foward){
//   return back * foward
// })
// console.log(resultz)

 const numes = [1,2,3,4]
   const favourite=numes.reduce((a ,b) =>a * b )
 console.log(favourite)



function sum(a,b){
  return a * b
}
const nums = [1, 2, 3 ,4]
 const resulte=nums.reduce(sum)
console.log(resulte)

//dom manipulation skills(document object model)
let title = document.getElementById('title')
// title.textContent='boss how far na'
console.log(`before : ${title.textContent}`)

title.textContent='boss how far na'
console.log('after :',title.textContent)










// function blur(){
//    let words ='godswill how are you doing you  doing ?'
//   words=words.split(' ')
//   let wording =[]
//   for(const word of words){
//     if (word in wording){
//      wording [word] += +1
//     }
  
//   else{
//      wording [word] =1
     
//   }
// }
// return wording
// }
// console.log(blur())

































































































//  let weather = prompt('how is the weather today')
// 
// 
//  if (weather == 'sunny'){
  //  console.log('grab your sunshade')
//  }
//  else {
  //  console.log('grab your umbrella')
// }
// 
// bet =window.alert('bet today to win prizes on 1xbet')
// console.log(bet)




























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































// let count = 0
// document.getElementById('decrease').innerHTML= function(){
// count=-1
// document.getElementById('counterlabel').innerHTML = count
// }
// document.getElementById('reset').innerHTML =function(){
//   count=0
//   document.getElementById('counterlabel').innerHTML = count
//   }
//   document.getElementById('increase').innerHTML =function(){
//     count=+1
//     document.getElementById('counterlabel').innerHTML = count
//     }
      
let count = [0]
const decrease=document.getElementById('decrease')
decrease.onclick = function(){
   count = Number(count - 1)
document.getElementById('counterlabel').innerHTML = count
}
const reset=document.getElementById('reset')
reset.onclick = function(){
   count = 0
document.getElementById('counterlabel').innerHTML = count
} 
const increase=document.getElementById('increase')
increase.onclick = function(){
   count = Number(count + 1)
document.getElementById('counterlabel').innerHTML = count
}
// const firstdiv=document.getElementById('rock')
// firstdiv.onclick = function(){
//   console.log(' you clicked red')
// }
// const seconddiv=document.getElementById('paper')
// seconddiv.onclick =()=>console.log('you clicked green')
// const thirddiv=document.getElementById('scissors')
// thirddiv.onclick =()=>console.log('you clicked blue')

//the .onclick function is used when you touch a item it detect you touched it 


//there is a new kind of loop which is called the'for ( each ) loop'.An example is down below
const win = document.getElementById('ur')
// console.log(win.value)

const squares =
document.querySelectorAll('.squares')
console.log(squares)
// console.log(squares[0].value)
// squares.forEach(squares=>{
  // {
  //   // console.log(squares.value)
  //   squares.onclick =()=>console.log(squares.value)
  
  // }

  const timesclicked={'0':0,'green':0,'blue':0}
  squares.forEach(squares=>
    {
    
      squares.onclick =()=>{
      timesclicked[squares.value] +=1 
      squares.textContent =timesclicked[squares.value]
      
      }
      
    }
  
    )
   
function clear(){
  timesclicked.red =0
  timesclicked.green =0
  timesclicked.blue =0
  squares.forEach(squares=>{
squares.textContent = 0
  })

}

const clearbtn = document.getElementById('clear')
clearbtn.onclick =()=>clear()



// const icons =document.getElementById('icon').textContent=""

// let value = [0]
// const icons = document.getElementById('plus')
// icons.onclick = function(){
//    value = Number(value + 1)
// document.getElementById('one').innerHTML = value
// }
// const icon = document.getElementById('minus')
// icon.onclick = function(){
//   value = Number(value - 1)
// document.getElementById('one').innerHTML = value
// }

const bill = document.getElementById('billtotal')
const tip = document.getElementById('tip')
const total = document.getElementById('bal')
 const people = document.getElementById('one')
let numpeople = Number(people.innerText)
const icons = document.getElementById('plus')
const icon = document.getElementById('minus')

function userinput(){
const tips = Number(tip.value/100)
 const bils = Number(bill.value)
 const tipamount=Number(bils * tips)
//  console.log(`the tipamount is ${tipamount}$`)
 const totala= Number(bils + tipamount) 
//  console.log(` your total is ${totala}$`)
 const perperson = totala / numpeople
//  console.log(perperson)
 total.innerHTML=`$${perperson.toFixed(2)}`

//  total.innerHTML
}
//either you use this functions and enable the onclik function in line 91 and 94 in the html file to add and subtract in the bill calculator app
//  function increasebtn(){
//  numpeople += 1
//  people.innerText=numpeople
//  userinput()

// }
// function decreasebtn(){
//   if(numpeople <=1){
//     return
//   }
//   numpeople += -1
//   people.innerText=numpeople
//   userinput()
 
// }
//.tofixed is a function  for  number to be fixed after a digit eg like 4.00
//this is another method for the bill calculator app
icons.onclick = function(){
 numpeople += +1
 people.innerText=numpeople 
 userinput()
 }

icon.onclick = function(){
  if(numpeople <=1){
  // throw(`hey you can't have more than one user`)
  // console.error(`hey you can't have more than one user`);
let h =window.alert('stop')
    //the throw function allows you to know what the user is doing with your site
    return
  
}

 numpeople += -1
 people.innerText = numpeople 
 userinput()
 }

//how to select an item from an array!!
//this code shows you how to select a random elment from an array.
function games(game){
const computer =Math.floor(Math.random () * game.length)
console.log(computer)
return game[computer]
}
 let game =['rock','paper','scissors','shoot']
console.log(games(game))

 function weathers(weather,weather2){
 
let scores = [0]

if (weather == 'rainy'&& weather2=='overcast'){
  // console.log('rainy (1)')
  scores =2
 }if (weather == 'rainy'){
  // console.log('rainy (1)')
  scores =1
 }
else if(weather =='sunny'){
  // console.log('sunny(0)')
  scores =-1
}
else{
// console.log('overcast (0)')
scores =0
}
return scores
 }
 console.log(weathers('rainy','overcast'))
//order matters in an else statement logic chain



  

  // const totalscore  ={computerscore :0,playerscore:0}


//  function Computerchoice(){
//    const value=['rock','paper','scissors']
//    const brain = Math.floor(Math.random()*3)
//    return value[brain]
//  }

//  function getresult(playerchoice,computerchoice){
//    let scores;
//  if (playerchoice == computerchoice){
//    scores =0
//  }
//  else if(playerchoice == 'rock' && computerchoice =='scissors'){
//    scores =1
//    }
//    else if(playerchoice == 'paper' && computerchoice =='rock'){
//      scores =1
//      }else if(playerchoice == 'scissors' && computerchoice =='paper'){
//        scores =1
//        }
//        else{
//          scores =-1
//        }
//        return scores
//  }
// //  console.log(getresult())
// //  function showresult(scores, playerchoice , computerchoice){
 
// //    if (scores == -1){
// //    resultdiv.innerText='You Lost!'
// //    }
// //   else if (scores == 0){
// //    resultdiv.innerText="It's a tie!"
// //    }
// //    else{
// //     resultdiv.innerText= 'You won!!'
    
// //  }

//  // showresult()
//  // }
//  function been(playerchoice){
//     console.log({playerchoice})
//    const computerchoice = Computerchoice
//   //  console.log({computer})
//     const scores = getresult(playerchoice,computerchoice)
//     console.log({scores})
//    // totalscore['playerscore']  += scores
//    // console.log({totalscore})

//  }
// //  function ComputerChoice() {
// //   let value = ['Rock', 'Paper', 'Scissors']
// //   let brain = [Math.floor(Math.random() * 3)]
// //   return value[brain]
// // }
//  function play(){ 

//    const endgame = document.querySelectorAll('.rockgame')
// //   // endgame[0].onclick =()=>console.log(endgame[0].value)
//  endgame.forEach(endgames => {
//   endgames.onclick =()=> been(endgames.value)});

// }

//   play()
// // console.log(getresult('rock','rock'))

// // butoon()


/*
  Rock Paper Scissors SOLUTION 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const totalscore  ={computerscore :0,playerscore:0}

function computerChoice() {
  let value = ['rock', 'paper', 'scissors']
  let brain = [Math.floor(Math.random() * 3)]
  return value[brain]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getresult(playerchoice, computerchoice) {
  
  
  let score;
  if (playerchoice === computerchoice) {
    score = 0

  
  } else if (playerchoice === 'rock' && computerchoice === 'scissors') {
    score = 1

  } else if (playerchoice === "paper" && computerchoice === "rock") {
    score = 1

  } else if (playerchoice === "scissors" && computerchoice === "paper") {
    score = 1

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  // return score
  return score
}
// //  console.log(getresult())
function showresult(score, playerchoice , computerchoice,){
  const resultdiv=document.getElementById('result')
const hands = document.getElementById('hands')
const playerScore=document.getElementById('playerScore')

  if (score == -1){
  resultdiv.innerText='You Lost!'
  }
 else if (score == 0){
  resultdiv.innerText="It's a tie!"
  }
  else{
   resultdiv.innerText= 'You won!!'
}

hands.innerText =`🧔${playerchoice} vs 🤖${computerchoice}`
   playerScore.innerText =`your score is:${totalscore['playerscore']}`

}
function been(playerchoice) {
  console.log({playerchoice})
  const computerchoice = computerChoice()
  console.log({computerchoice})
  const score = getresult(playerchoice, computerchoice)
  console.log({score})
  showresult(score, playerchoice, computerchoice)
  totalscore['playerscore']= +score
   console.log({totalscore})
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function play() {
  // use querySelector to select all RPS Buttons
  let playgame = document.querySelectorAll('.rockgame')
// //   // endgame[0].onclick =()=>console.log(endgame[0].value)
playgame.forEach(playgames => {
      playgames.onclick =()=> been(playgames.value)});

      const endgamebtn = document.getElementById('endgamebtn')
endgamebtn.onclick =()=> endGame(totalscore)
}
function endGame(totalscore) {
  totalscore['playerscore']=0
  totalscore['computerscore']=0
  let playerScore = document.getElementById('playerScore')
  let hands = document.getElementById('hands')
  let resultdiv = document.getElementById('result')
  playerScore.innerText = [] 
  hands.innerText = []
  resultdiv.innerText = []
}

play()




// /*
//   Rock Paper Scissors SOLUTION 🚀🔥
//   Concepts covered in this project
//     👉 For loops
//     👉 Dom Manipulation
//     👉 Variables
//     👉 Conditionals (if else if)
//     👉 Template Literals
//     👉 Event Listeners
//     👉 Higher order Function (Math.random())
// */

// // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// // getComputerChoice() 👉 'Rock'
// // getComputerChoice() 👉 'Scissors'
// function getComputerChoice() {
//   let rpsChoices = ['Rock', 'Paper', 'Scissors']
//   let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
//   return computerChoice
// }

// // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// // human wins - getResult('Rock', 'Scissors') 👉 1
// // human loses - getResult('Scissors', 'Rock') 👉 -1
// // human draws - getResult('Rock', 'Rock') 👉 0
// function getResult(playerChoice, computerChoice) {
//   // return the result of score based on if you won, drew, or lost
  
//   let score;

//   // All situations where human draws, set `score` to 0
//   if (playerChoice === computerChoice) {
//     score = 0

  
//   } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
//     score = 1

//   } else if (playerChoice === "Paper" && computerChoice === "Rock") {
//     score = 1

//   } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
//     score = 1

//   // Otherwise human loses (aka set score to -1)
//   } else {
//     score = -1
//   }

//   // return score
//   return score
// }

// // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
// function showResult(score, playerChoice, computerChoice) {
//   // Hint: on a score of -1
//   // You should do result.innerText = 'You Lose!'
//   // Don't forget to grab the div with the 'result' id!
  
//   let result = document.getElementById('result')
//   switch (score) {
//     case -1:
//       result.innerText = `You Lose!`
//       break;
//     case 0:
//       result.innerText = `It's a Draw!`
//       break;
//     case 1:
//       result.innerText = `You Win!`
//       break;
//   }

//   let playerScore = document.getElementById('player-score')
//   let hands = document.getElementById('hands')
//   playerScore.innerText = `${Number(playerScore.innerText) + score}`
//     hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
// }

// // ** Calculate who won and show it on the screen **
// function onClickRPS(playerChoice) {
//   const computerChoice = getComputerChoice()
//   const score = getResult(playerChoice.value, computerChoice)
//   showResult(score, playerChoice.value, computerChoice)
// }

// // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
// function playGame() {
//   // use querySelector to select all RPS Buttons
//   let rpsButtons = document.querySelectorAll('.rpsButton')

//   // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
//   // 1. loop through the buttons using a forEach loop
//   // 2. Add a 'click' event listener to each button
//   // 3. Call the onClickRPS function every time someone clicks
//   // 4. Make sure to pass the currently selected rps button as an argument

//   rpsButtons.forEach(rpsButton => {
//     rpsButton.onclick = () => onClickRPS(rpsButton)
//   })

//   // Add a click listener to the end game button that runs the endGame() function on click
//   let endGameButton = document.getElementById('endGameButton')
//   endGameButton.onclick = () => endGame()
// }

// // ** endGame function clears all the text on the DOM **
// function endGame() {
//   let playerScore = document.getElementById('player-score')
//   let hands = document.getElementById('hands')
//   let result = document.getElementById('result')
//   playerScore.innerText = ''
//   hands.innerText = ''
//   result.innerText = ''
// }

// playGame()







//APi
//APIs stands for application programming interface and it lets your app communicate with other services to fetch data
const api = document.getElementById('api')
function apis(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response =>response.json())
.then(json => {
  console.log(json)
api.innerHTML =`<img src ='${json.message}'height =300 width =350/>`
})
}
const dog =document.getElementById('apis')
dog.onclick=()=>apis()



//you dont really need to confuse yourself with the .php in line 2447 .its just for the superheroapi to work
const searchbtn = document.getElementById('search')
const searchbtns = document.getElementById('ved')
function hero(id){
 fetch(`https://superheroapi.com/api.php/106821782309662/${id}`)
.then(response =>response.json())
.then(json =>{
  // console.log (json.powerstats)
//  let stats = getstats(json)
const stats =json
 getstats(stats)
 


// const stats = getstats(json.powerstats)
})
}


//alternatively you can  do this in another way that might be more complex so lets goo.. 
//  const stats = json.powerstats/
//  console.log(stats)

const emoji ={
  intelligence:'🧠' ,
  strength:'💪',
  speed:'⚡',
  power:'🌀',
  durability:'🏋️‍♂️',
  combat:'🪓🔪'

}
 function getstats(stats){
  const name = `<h2>${stats.name}</h2>`
  const img = `<img src="${stats.image.url}" height=380 width=327/>`
  console.log(img)
 const stands =Object.keys(stats.powerstats).map(stat=> {return`<h2>${stat.toUpperCase()}${emoji[stat]}:${stats.powerstats[stat]}</h2>`}).join(' ')
 //  const stands =Object.keys(stats).map(stat=> {return`<h2>${stat.toUpperCase()}${emoji[stat]}:${stats[stat]}</h2>`})



herodiv.innerHTML=`${name}${img}${stands}`

 }

 


function getuserinput(name){
  fetch(`https://superheroapi.com/api.php/106821782309662/search/${name}`)
  .then(response =>response.json())
  .then(json =>{
    const heros = json.results[0]
    console.log(heros)
  // herodiv.innerHTML=`<img src="${heros.image.url}" height = 380 width =327/>`
getstats(heros)

  }
  
  )
}
 searchbtn.onclick=()=>getuserinput(searchbtns.value)


searchbtn.onclick=()=>getuserinput(searchbtns.value)


  const herodiv =
  document.getElementById('superhero')


function gethero(){
   const number = 731
return Math.ceil(Math.random()* number ) + 1
  } 

const get = document.getElementById('herobtn')
 get.onclick=()=>hero(gethero())
 

//object.keys():its turns objects into array

const things = {'strength':0}
console.log(Object.keys(things))



let words = ["Hello", "world", "!"];
let sentence = words.join(' ');
console.log(sentence);
// Output: "Hello world !"

console.log('hello')


//promises
//Asyncchronus programming
// The setTimeout function in JavaScript is used to schedule a function to be executed after a specified amount of time (in milliseconds). It's commonly used to delay the execution of code in asynchronous programming.
// Here's an example of using setTimeout to log a message after 2 seconds:

//  setTimeout(()=> console.log('stop'), 2000)//the 2000 is 2000ms which is 2s.
//The "ternary(?) operator" in JavaScript is a shorthand way to write an if-else statement. It has the following syntax:
//example down below!!
let ternary = (1 > 2) ? "positive" : "non-positive";
console.log(ternary)
//examples of promises
const promises=new Promise((resolve,reject)=>{
setTimeout(()=>{
 let hair=[true,false][Math.floor(Math.random()*2)]
  hair ? resolve('braid hair'):reject('leave hair')
},1000)
})
console.log(
  promises
  .then(answer=>console.log(answer))
  //In JavaScript, the .catch method is used with promises to handle errors that may occur during the execution of a promise. It is used to catch any error that might have been thrown in the .then method of a promise, and allows you to perform some error handling logic.
  .catch(error=>console.error('There was a problem with the fetch operation:', error))
  )
 


//aysnc / await
// let box = 'hi'





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































 const cals = document.getElementById('omg')
 const zero =document.getElementById('bts')
 zero.onclick=function(){
  cals.value+=0
 }
 const add = document.getElementById('plusto')
function tim(){ add.onclick=function(){
  two.onclick +=Number(+two.onclick)
  cals.value+='+'

}
}
equalto.onclick=function(){
  cals.value+='='
}
 const multiplication = document.getElementById('timesto')
 const minus= document.getElementById('minusto')
 const divide= document.getElementById('divide')
 const equalto= document.getElementById('equalsto')

 const percentageto = document.getElementById('percentageto')

//  const one =document.getElementById('1')
  const two =document.getElementById('2')
    two.onclick=function(){
   cals.value+=2
  }
 
// two.onclick=()=>console.log('2')
// cals.innerHTML=first.onclick
//   const three=document.getElementById('3')
//  three.onclick=function(){
//   cals.value+=3
//  }
//  function tryout(){
//  add= Number(forall + forall)
//   console.log(add)
//   }
 
// tryout()
//  const four =document.getElementById('4')
//  const five =document.getElementById('5')
//  const six =document.getElementById('6')
//  const seven =document.getElementById('7')
//  const eight =document.getElementById('8')
//  const nine =document.getElementById('9')
// two.onclick=function(){
//   cals.value+=2
// }


const forall= document.querySelectorAll('.bt')
console.log(forall)
forall.forEach(forall=> {
  forall.onclick=()=>{
    cals.value+=Number(forall.value)
    console.log(cals.value)
  }
  
}); squares.forEach(squares=>
  {
  
    squares.onclick =()=>{
    timesclicked[squares.value] +=1 
    squares.textContent =timesclicked[squares.value]
    
    }
    
  }

  )
 
















































// food =Number(prompt('how much was yor food'))
// console.log(food)
// tipAmount =Number(prompt('how much tip do you want to give'))
// console.log(tipAmount)
// total = Number( food + tipAmount)
// console.log(total)
// console.log(`your food is ${food}`)
// console.log(`your tip is ${tipAmount}`)
// console.log(`your total is ${total}`)
//