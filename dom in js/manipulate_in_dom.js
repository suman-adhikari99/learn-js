console.log('manipulate part in dom')
//innerHTML
//sssssslet div = document.querySelector('#div1')
// console.log(div)
// console.log(div.children)
//let div= document.querySelector('#div1')
//console.log(div.innerHTML)
//console.log(div)

// let div= document.querySelectorAll('#div1 p')
// console.log(div)

// for (let i of div){
//     console.log(i.innerHTML)
 
let p= document.querySelectorAll('p.p-class')
 console.log(p)

for (let i of p){
    i.innerHTML='<h1>thsi is heading</h1>'
    console.log(i.innerHTML)
}
let onep= document.getElementById('p')
onep.innerHTML='this content is changed'
console.log(onep.innerHTML)


//create 

let elem= document.getElementById('p')
console.log(elem)

let h1=document.createElement('h1')
h1.text
elem.append(h1)
console.log(elem)

let body=document.querySelector('body')
let ultag=document.createElement('ul')
let litag=document.createElement('li')
litag.textContent='this is li tag created'
ultag.append(litag)
body.append(ultag)
console.log(body)

