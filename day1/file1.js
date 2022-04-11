// let age=22;
// console.log(typeof age);
// // convert number to string
// age=age+""
// console.log(typeof age);//->  result is string
// // convert number to string
// let mystr=+"ab";
// console.log(typeof mystr);//-->number


let age2=23;
age2=String(age2)
console.log(typeof age2)

// template string
let age = 22;
firstName='suman';
console.log('myname is '+firstName+'my age is '+age)
console.log(`my name is ${firstName} my age is ${age} from template string`)

// null, const, let
let myVariable = null;
console.log(`value is ${myVariable}and type is ${typeof(myVariable)}`)
// the typeof(null)->object : this is bug or error 
// why they don't fix this bug ? because there is lot of code 
// and framework which deal with this bug if they chage
// there is a lot of problem


//BigInt

let myNumber = BigInt(12)
let sameMyNumber = 123
console.log((Number.MAX_SAFE_INTEGER))
// console.log(myNumber+sameMyNumber)//-->type error
sameMyNumber = 123n // convert to bigint
console.log(sameMyNumber+myNumber)

// == vs ===
// don't explore this// != vs !==
// let num1=22;
// let num2="22";
// console.log(num1!==num2)
if ([]){
    console.log("who is you")
}
if (NaN){
    console.log('empty string')
}


// let winingNumber=19;
// let userGuess = +prompt('guess a number')
// console.log(typeof userGuess,userGuess)
// var a= userGuess===winingNumber?'your are winner':userGuess>winingNumber?'your number is greater':'your nunger is less'
// console.log('avarialbe is '+a)


// let array=[12,34,14,56,4,7]
// for (let element in array){
//     console.log(element)
// }

// for (let element of array){
//     console.log(element)
// }

// array.forEach((elem,index,array)=>{
//     console.log(elem,index,array)
// })