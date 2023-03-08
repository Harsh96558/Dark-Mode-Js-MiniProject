const Icon=document.getElementById("icon")
Icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        Icon.src="./image/sun.png"
    }
    else{
        Icon.src="./image/moon.png"

    }
})