// console.log("hello JS");
//scope
var c = 100     //will not print 100
let a =500     //it is global scope
if(true){
    const a = 5     //wont work after the scope
    let b = 10      //wont work after the scope
    var c = 15
}
// console.log(a)
// console.log(b)
// console.log(c) //prints 15 even tho we made 2 vars and 300 is global

//hoisting----- me execution context bnta hai
//jab nested fn hote hain toh child fns parent ko access krpate hain but not vice versa

function one(){
    const name="zoya"
    function two(){
        const website = "youtube"
        // console.log(name)
    }
    // console.log(website)    //cant print scope already exited
    // two()
}
// one()
addOne(5)    // will work fine as js already make all fn classes obj on the top(tree) while compiling
function addOne(num){
    return num+1
}
// addTwo(6)   will give error because it is a variable and not a function and it must be initialized before accessing
const addTwo = function(num){
    return num+2
}


//arrow fn ---- instead of using this keyword for referring to current context
const chai = ()=>{
    let user = "zoya"
//     console.log(this)
}
function coffee(){
    // console.log(this)   //will print alot of things
}
// console.log(this)   //will print {} because we are inside node environment
//but inside a fn this prints all the vars and nested fns contents

//implicit return
// const addThree=(num1,num2,num3) =>(num1+num2+num3) //no need to use return


/*
IIFE
immediately invoked function expression

it saves from pollution of global scope
*/
//named iife
// (function coffee(){
//     console.log("IIFE Called")
// })();

//1 ()for fn definition and () for calling the fn
//also used in arrow fn without name

//can also take paramenters
//un named iifi
((number)=>{
    // console.log("IIFE in arrow fn & val of parameter is "+number)
})(7);

//--------------IMPORTANT--------------------
//how is code executed in js

//js execution context --- js runs a program by dividing in two phases....js is single threaded
//1. global execution context
//2. function execution context
//{ } memory creation phase or creation phase-----memory allocated to vars,fns objects
//memory phase me sare variables k nam k sath undefined krte hain aur fn k nam pe definition 
//----------------------------------------------------------------
//execution phase------
//>>>>>>> har bar fn call k liye memory creation and execution sandbox hmesha bbntahai  baar baar and after completion it gets deleted
/*
    Call stack


        |                   |
        |                   |
        |                   |
        |          fn()     |
        |          fn()     |
        |          fn()     |
        |          fn()     |
        | Global Executiion |
        ---------------------
*/

//if else
//falsy val --- false,0,-0,bigint 0n,null,undefined
//truthy val--- "0",'false'," ",[],{},function(){}

//for each will not return anything its only for prining no operation can be done on an array in for each loop ---gives undefined if tried
//so filter is made

const num =[1,2,3,4,5,6,7]

// num.forEach(item => {
//     console.log(item)
//     // return item //not possible
// });

//++++++++++++++ filter +++++++++++++

// const numberPrint = num.filter((n) => n>4)
// console.log(numberPrint)
//  const numberPrint = num.filter((n) => {
//     return n>4     //in scope we need to explicitly add return keyword 
// })
// console.log(numberPrint)


//in JSON data filter is highly used
// const cat = [
//     {name : "Mau" , color : "dusky" , hobbies:"Sleeping" ,age: 2 },
//     {name : "candy" , color : "dusky" , hobbies:"playing" ,age: 1 },
//     {name : "cupcakie" , color : "tuxedo" , hobbies:"judging people" ,age: 1 },
//     {name : "caramel" , color : "orange" , hobbies:"Sleeping" ,age: 2 },
//     {name : "momo" , color : "yellow" , hobbies:"eating" ,age: 20 }
// ];

// console.log(cat.filter((ct)=> ct.hobbies=="Sleeping" ))

//-----------------------------------------------

//++++++++++  map  ++++++++++++++
//return automatically but in scope we'll have to explicitly return

const myNum = [1,2,3,4,5,6,7,8,9,10]
 
// const newNum = myNum.map((n) => n*10)
// console.log(newNum)
// const meaw = cat.map((ct)=>ct.color==="tuxedo") 
//map always return another array of same length here a bool array will be returned
// console.log(meaw)

//++++++  CHAINING +++++++++++++++
// const CHAINING = myNum
//                 .map((n)=>n*10)
//                 .map((n)=>n+2)
//                 .filter((n)=>n>40) 
// console.log(CHAINING);

//+++++++++ reduce +++++++
// const n = myNum.reduce((previousVal,currentVal)=>{ 
//     console.log(`${previousVal} and  ${currentVal}`)
//     return previousVal+currentVal
// },0)
//highly used in computing total cart value in ecommerce website 
// console.log(n);
// const shoppingCart=[
//     {
//         itemName: "shirt" , color:"blue" , price:200
//     },
//     {
//         itemName: "top" , color:"pink" , price:300
//     },
//     {
//         itemName: "trouser" , color:"beige" , price:2000
//     },
//     {
//         itemName: "skirt" , color:"brown" , price:299
//     }
// ];
// console.log(shoppingCart.reduce((acc,item)=> acc + item.price ,0))

//+++++++++ DOM MANIPULATION ++++++++++++++

//dom is document object model 