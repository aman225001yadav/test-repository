const td=document.querySelectorAll('td')
const table=document.querySelector('table')

window.addEventListener('keydown',(e)=>{
    document.querySelector('h1').innerHTML="Press another key"
    table.style.display="flex"
    td[0].innerHTML=e.key==" "?"Space":e.key; 
    td[1].innerHTML=e.keyCode
    td[2].innerHTML=e.code
})