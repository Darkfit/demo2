//funcion de sonido para el boton de sonido
//Inicio
var x= document.getElementById("miAudio");

function audioLogica(){
   x.play();  
};

function toggleSound(img)
{
   img.src= img.src=="http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png" ? "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/music_off-512.png" : "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
};

function toggleSound1() {
   var elements = document.getElementsByTagName('audio'); 
   for(var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++);    

 }
//Fin
//funcion de sonido para el boton de sonido


 