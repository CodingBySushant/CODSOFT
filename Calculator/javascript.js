const buttons=document.querySelectorAll(".button")
const display=document.querySelector(".outputDisplay")
// console.log(buttons)

for(let button of buttons){
    button.addEventListener("click",(e)=>{
        if(e.target.innerText==="AC"){
            // console.log(e.target.innerText)
            display.innerText=""
        }
        else if(e.target.innerText==="DEL"){
            // console.log(e.target.innerText)
            display.innerText=display.innerText.slice(0,-1)
        }
        else if(e.target.innerText==="="){
            display.innerText=eval(display.innerText)
        }
        else{
            // console.log(e.target.innerText)
            display.innerText=display.innerText+e.target.innerText
        }
    })
}