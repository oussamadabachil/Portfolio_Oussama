/*document.addEventListener("DOMContentLoaded",()=>{
    let title =document.querySelector(".title")
    let projetsDiv = document.querySelector(".mesprojetsdiv")
    let ha = document.querySelector(".title h1")
    let zoomanone = document.querySelector(".zooma")
    let menu = document.querySelector("header nav ul")
    let hc = document.querySelector(".x")
    let body = document.querySelector("body")
    let mespj = document.querySelector(".mesprojets")
    let apro = document.querySelector(".apropos")
    let aproDIV = document.querySelector(".aproposdiv")

    let hb = document.querySelector(".title2")

    window.addEventListener("scroll",()=>{


        console.log( window.scrollY)

        ha.style.scale = window.scrollY/10;

        if((window.scrollY>=30)&&(window.scrollY<139)){

            ha.classList.add("h1bye")
            hb.classList.add("h2hey")
            title.classList.add("titlea")


        }else if((window.scrollY>150)&&(window.scrollY<160)){

        }else if(window.scrollY>161){

            zoomanone.classList.add("zoomnone");
            menu.classList.add("menushown")
        }
    })


    mespj.addEventListener("click",()=>{

        hc.textContent = "MES PROJETS";
        hc.classList.toggle("hczoom")
        hc.classList.add("title2h1tr")
       /* projetsDiv.classList.remove("aproposdiv_show")
        projetsDiv.classList.toggle("mesprojetsdiv_show")

    })


    apro.addEventListener("click",()=>{

        hc.textContent = "À propos";
        hc.classList.toggle("hczoom")
        hc.classList.add("title2h1tr")
       /* aproDIV.classList.remove("aproposdiv_show")

        aproDIV.classList.toggle("aproposdiv_show")


    })



})
*/



document.addEventListener("DOMContentLoaded",()=>{
    let btn_menu = document.querySelector(".icone")
    let menu_toggle = document.querySelector(".menu_toggle")

    btn_menu.addEventListener("click",()=>{
        menu_toggle.classList.toggle("menu_toggled")
    })
})