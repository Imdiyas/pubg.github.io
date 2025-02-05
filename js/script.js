home = document.getElementById("home")
form = document.getElementById("form")
overlay = document.getElementById("overlay")

home.addEventListener("click",() => {
    if(form.style.display=="none"){
        form.style.display="block"
        overlay.style.display="block"
    } else {
        form.style.display="none"
        overlay.style.display="none"
    }
}) 

overlay.addEventListener("click",() => {
    form.style.display="none"
        overlay.style.display="none"
})