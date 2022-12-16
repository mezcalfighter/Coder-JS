/**
 * Storage
 * 
 * Nos permite guardar datos de manera local en el navegador
 * El navegador nos ofrece dos formas de guardar datoss en el localstorage
 * 
 * localStorage: Almacena los datos de forma indefinida, hasque que el usuario los borre de forma manual.
 * 
 * sessionStorage:  Almacena los datos hasta que el usuario cierre el navegador
 */

// 1) Trabajamos con el LocalStorage
// Para guardar los datos en el localStorage vamos a utilizar el metodo que se llama setItem()
// Este metodo recibe dos parametros: una clave(key) y un valor ascociado(value)

// Ejemplo A. Almacenar un saludo
localStorage.setItem("saludo","Hola mundo");

// Ejemplo B Almacenar un numero
localStorage.setItem("numero",1234)

// Para recuperar los datos almacenados getItem()
let saludo = localStorage.getItem("saludo");
// Los datos se guardan de tipo string

// 2) Session storage
//Guardar datos en sessionStorage
sessionStorage.setItem("saludo","Hola mundo");
// Para recuperar los datos almacenados getItem()
let saludoSession = sessionStorage.getItem("saludo");

//Agregar mas datos:
sessionStorage.setItem("numero",34234523);
sessionStorage.setItem("booleanoNuevo",false);

//Reccorremos con un bucle
// Ejemplo recorremos el localStorage
console.log("Recorremos el localStorage");
for(let i=0; i<localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`Key: ${key} Value: ${value}`);
}

//Eliminar datos del localStorage
//Utilizamos el método removeItem()
localStorage.removeItem("saludo");

//Para eliminar todo lo que tenga el localStorage es con el metodo clear()
//localStorage.clear();

//Almacenar objetos en el Storage
//JSON: Javascript Object Notation. Es un formato de texto ligero para el intercambio de datos
//JSON.stringify();
const samuel = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 18,
    casado: false
};

const samuelJSON = JSON.stringify(samuel);

//Almacenar en localStorage
localStorage.setItem("samuel",samuelJSON);
// Si lo quiero recuperar y convertirlo a objeto se usa JSON.pase();
const personaJSON = localStorage.getItem("samuel");
const persona = JSON.parse(personaJSON);
console.log(persona, typeof persona);

//Ejemplo utilizando el localStorage para cambiar el modo dar o claro

//1) Crear un boton que cambie el modo de la pagina.
//2) Almacenar el modo en el localStorage.
//3) Al recargar la pagina, recuperar el modo del localStorage
//4) Cambiar el modo de la página

const botonFondo = document.getElementById("botonFondo");
botonFondo.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    botonFondo.innerText="Boton Claro";
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark");
    }else{
        botonFondo.innerText="Boton Obscuro";
        localStorage.setItem("modo","light");
    }
});

// recuperamos el modo del localStorage
const modo = localStorage.getItem("modo");
if(modo === "dark"){
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
}
//Recordemos
//Document es el objeto que representa al documento HTML.
//Body es el elemento que representa al body del documento HTML
//classList es una propiedad que nos devuelve una lista de clases del elemtnto.
//Toggle es un metodo que nos permite agregar o eliminar una clase de une elemento

//Ejemplo: Almacenamiento de carrito en el localStorage y lo recuperamos
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto("Camisa",500);
const producto2 = new Producto("Pantalon",1000);

const carrito = [];
carrito.push(producto1);
carrito.push(producto2);
// Convertir a JSON
const carritoJSON = JSON.stringify(carrito);
//Almacenar en localStorage
localStorage.setItem("carrito",carritoJSON);
// Recuperar el carrito
const carritoRecuperado = localStorage.getItem("carrito");
//Convertimos el JSON a un Objeto
const carritoObjeto = JSON.parse(carritoRecuperado);
//Imprimimos el carrito en el HTML
const contenedorCarrito = document.getElementById("contenedorCarrito");
carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `
    <p> ${producto.nombre} - $ ${producto.precio} </p>
    `
});