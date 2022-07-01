//matriz con palabras
let palabras = ["JUEGO","PROGRAMACION","COMPUTADORA","LEON","LUNA","GATO","COMIDA","GUITARRA","FAMILIA","ARGENTINA","HAMBURGUESA"];

var lienzo = document.querySelector("#dibujo-ahorcado");
var pincel = lienzo.getContext("2d");
var textosLienzo = document.querySelector("#lineas-ahorcado");
var lineas = textosLienzo.getContext("2d");

var letras = [];
var contadorErrores = 0;
var contadorAciertos = 0;

function crearPalabra(){
    var palabraSecreta = (palabras[(Math.floor(Math.random()*(palabras.length)))]);
    return palabraSecreta;
}

var ingresarPalabra = llamarDatosStg();

//Si no se ingresó una palabra anteriormente, se ejecuta este código
if(ingresarPalabra == null){

    palabraSecreta = crearPalabra();
    dibujarLineas(palabraSecreta);
    logicaHorca(palabraSecreta);
    
}
//Si se ingresó una palabra anteriormente, se ejecuta este código
else{

    palabras.push(ingresarPalabra);
    palabraSecreta = crearPalabra();
    dibujarLineas(palabraSecreta);
    logicaHorca(palabraSecreta);
}
