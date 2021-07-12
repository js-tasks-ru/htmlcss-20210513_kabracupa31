const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');
//const mainBody = document.getElementsByTagName("body")[0];

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            //if(document.documentElement.getAttribute("animation-on")){
            //    mainBody.classList.remove("preload");   
            //}
            menu.setAttribute('data-open', '');  
            
        }
    });
}
if (menuClose) {
    menuClose.addEventListener('click', function() {
        
        if (menu) {
            menu.removeAttribute('data-open');  
            //if(document.documentElement.getAttribute("animation-on")){
            //    setTimeout(function () {mainBody.classList.add("preload"); }, 300);   
            //}   
        }
       
    });
    
}
