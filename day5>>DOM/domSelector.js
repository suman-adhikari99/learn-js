let q=document.getElementsByTagName('li')
console.log(q)
console.log(q[0].textContent)
let q1=document.querySelector('li')
console.log(q1)

let parentq1=q1.parentElement
console.log(parentq1)
console.log(q1.nextElementSibling)

let query=document.querySelector('.outer-li')
console.log('query selected',query)
console.log('querySelectorAll',document.querySelectorAll('.outer-li'))
console.log(query.nextElementSibling.innerHTML)