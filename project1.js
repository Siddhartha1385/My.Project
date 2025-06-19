const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach((button)=>{
  button.style.backgroundColor=button.id 
})

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    body.style.backgroundColor=e.target.id;
  })
})