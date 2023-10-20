import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del dom

let enlaces = document.querySelectorAll("a"); //consulta todos los selectrores que son a
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//agregar evemnto click a cada enlace

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover el activo
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //AGREGAR ACTIVO
    this.classList.add("active");

    // traer la informacion correspondiente a la seleccion
    let contenido = obtenerContenido(this.textContent);

    //MOSTRAR EL CONTENIDO EN EL DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML= contenido.precio;

  });
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS

function obtenerContenido(ciudad) {
  let detalleCiudades = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return detalleCiudades[ciudad];
}
