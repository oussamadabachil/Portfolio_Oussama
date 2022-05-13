let menu_toggle = document.querySelector(".projet_submenu")
let hidden_submenu = document.querySelector('.submenu')
let count = 0;
let menu_zoom = document.querySelector("header nav ul")

menu_toggle.addEventListener('click',()=>{

    menu_zoom.classList.remove("normal")

    menu_zoom.classList.add("zommheight")

   
})
let hidden_menu = document.querySelector(".hidden_menu")
let menu_burger_mobile = document.getElementById("check")
menu_burger_mobile.addEventListener("click",()=>{
    hidden_menu.classList.toggle("shown_menu")
})
window.addEventListener("scroll",()=>{
    console.log(window.scrollY)
    if(window.scrollY>=30){

    menu_zoom.classList.remove("normal")

    menu_zoom.classList.add("zommheight")
}
    else if(window.scrollY<30){

        menu_zoom.classList.remove("zommheight")

        menu_zoom.classList.add("normal")
    }


})

