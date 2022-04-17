// console.log("hello sir g")
// //now let's see what is call bind and apply
// //note are presented at js and react js copy

// //this refresher
// console.log('this alone represet global object',this)
// console.log(this === window); 
// // in a function this represent also global object

// function fun(){
//     console.log('this inside function also refer window or global object',this)
// }
// fun()

// function f1(){
//     'use strict'
//     return this
// }
// console.log(f1()==  undefined)

// // in object this rerfer to that object

// const obj={
//     name:'suman',
  
//     mydes:function(){
//         return `this object have my name ${this.name} and this refer ${this}`
//     },

  
// }

// console.log(obj.mydes())



// // now lets start call
let name1={
    firstname:'suman',
    lastname:'adhikari',
    printFullName1:function(){
        console.log(this.firstname+" "+this.lastname)
    }
}

name1.printFullName1()

let name2={
    firstname:'sum',
    lastname:'tom',

}

name1.printFullName1.call(name2)


let printFullName=function(hometown){
    console.log(this.firstname+" " +this.lastname +" "+ hometown)


}
printFullName.call(name2,'dolakha')
printFullName.call(name1,'dolakha')
let printFullNameapply=function(hometown,notapply){
    console.log(this.firstname+" " +this.lastname +" "+ hometown+" "+notapply)


}
printFullNameapply.apply(name2,['apply','not applied','who applied'])


let bindmet=printFullName.bind(name2,'who')
bindmet()
