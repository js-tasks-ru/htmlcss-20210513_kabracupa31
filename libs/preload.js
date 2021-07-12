//$(window).on('load', function () {
//  $("body").removeClass("preload");
//});
window.onload = function() {
  //document.getElementsByTagName("body")[0].classList.remove("preload");
  //document.documentElement.setAttribute("animation-on", true);
  setTimeout(function () { document.getElementsByTagName("body")[0].classList.remove("preload") }, 300);
}
/*
var input = document.querySelectorAll('input');
   for(var i=0;i<input.length;i++){
      input[i].addEventListener('input', function()
      {  
        if(document.documentElement.getAttribute("animation-on")){
          document.getElementsByTagName("body")[0].classList.remove("preload");   
        }
      });

 }
 */