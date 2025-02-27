let btnMenu = document.getElementById('btn-open')
let nav = document.getElementById('nav')

btnMenu.addEventListener('click', e =>{
    if(nav.classList.contains("left-0")){
        nav.classList.remove("left-0")
        nav.classList.add("-left-96")
    }
    else{
        nav.classList.remove("-left-96")
        nav.classList.add("left-0")
    }
        
})