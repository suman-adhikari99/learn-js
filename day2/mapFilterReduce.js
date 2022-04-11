console.log('hello map ')

const users=[
    {firstName:'suman3',lastName:'khanal',age:26},
    {firstName:'suman',lastName:'adhikari',age:23},
    {firstName:'suman1',lastName:'khanal',age:22},
    {firstName:'suman2',lastName:'upadhyaa',age:26},
    {firstName:'suman3',lastName:'adhikari',age:22},
    {firstName:'suman3',lastName:'khanal',age:26}
]

//concatinate first nas last name of all 
const result= users.map(x=>(x.firstName+" "+x.lastName))
// console.log(result)
// print first name whose age is less than 23
const result1= users.filter(x=>x.age<23).map(x=>x.firstName)
console.log(result1)
const arr=[12,3,45,5,65,2]
//find max using reduce
//first without reduce
const max=arr.reduce(function(acc,curr){
    if (curr>acc){
        acc=curr
    }
    return acc
},0)
console.log(max)

// log the output as {age:count,.} or {26:2,75:1}
// we have to use reduce because we want one object

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
    return acc
},{})
console.log(output)