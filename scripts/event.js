const email = document.getElementById('email')
const optionFrom =document.getElementById('option')
const passFrom = document.getElementById('pass')
// step-1: onclick 
email.addEventListener("change",function(e){
    console.log ("change", e.target.value)
})

email.addEventListener('input', function(event){
    console.log('input', event.target.value)
})

optionFrom.addEventListener('change',function(event){
    console.log(event.target.value )
})

passFrom.addEventListener('focus',function(event){
    console.log(event)
    event.target.style.background ='blue'
})
passFrom.addEventListener('blur',function(event){
    event.target.style.background=''
})

window.addEventListener('load', function(){
    console.log ('window loading.....')
    this.alert('please wait something..')
})