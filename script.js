let display = document.getElementById('display');
function buton(number){
    
    display.textContent+=number
}
function beraberIsaresi(){
    display.innerHTML=eval( display.textContent)

}
function hamsiniTemizle(){
    display.innerHTML=""
}
function birBirSil(){
    display.textContent=display.textContent.substring(0,display.textContent.length-1)
}
// function darkTheme(){
//     let x=document.getElementById('clace');
//     x.className='calculator'
// }