// AJAX - Es una tecnologia que nos permite hacer peticiones asincronas a un servidor sin necesidad de recargar la pagina. ESTÁ EN DESUSO

// 1) Vamos a conectarnos a JSONPLACEHOLDER, QUE ES UNA API que nos permite practicar peticiones AJAX

const url = "https://jsonplaceholder.typicode.com/users"

// 2) crear un objeto de tipo XMLHttpRequest
//¿ Que es este objeto? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

const xhr = new XMLHttpRequest();

// 3) Crear una funcioon manejadora:
function manejador(){
    if(this.readyState == 4 && this.status == 200){
        /**
         * ¿Que es readyState? Es un atributo que nos indica el estado de la peticion. 
         * Si es 4 = Significa que la petición ha terminado.
         * ¿Que es el status? Es un atributo que nos indica el estado de la respuesta. Si es 200, significa que la respuesta es correcta.
         */
        const datos = JSON.parse(this.response)
        console.log(datos)
        mostrarUsuarios(datos)
    }
}

// 4) Ahora tengo que llamar a un evento "load" y pasarle como parámetro la función manejadora.

xhr.addEventListener("load",manejador)

// 5) Abrir la conexión con el método "open" y pasarle como parámetro el método de la petición y la url

//Metodos comunes
/**
 * GET: Para pedir información a un servidor
 * POST: para enviar información a un servidor
 * PUT: para actualizar información en un servidor
 * DELETE: para eliminar información en un servidor
 */
xhr.open("GET",url)

// 6) Ahora tengo que enviar la petición con el método "send"
xhr.send()

// Creamos una función para mostrar usuarios
const app = document.getElementById("app")
function mostrarUsuarios(datos){
    datos.forEach(usuario => {
        const li = document.createElement("li")
        li.textContent = `${usuario.id} - ${usuario.name}`
        app.appendChild(li)
    });
}

//Fetch
// JS - Nos ofrece fetch() para hacer peticiones HTTP a algun servicio externo.  Como estas peticiones son asincronas, convenientemente fetch trabaja con promesas:

/**
 * Sintaxis:
 * fetch(url, opciones)
 */

// El primer parámetro es la URL a la que se le realiza la peticion. Y el segundo parámetro de configuración.

const apiFotos = "https://jsonplaceholder.typicode.com/photos"
const contenedorFotos = document.getElementById("contenedorFotos")
fetch(apiFotos)
    .then((response)=>response.json())
    .then((datos)=>{
        console.log(datos)
        //mostrarFotos(datos)
    })
    .catch((error)=>console.log(error))

function mostrarFotos(datos){
    datos.forEach(foto => {
        const img = document.createElement("img")
        img.src = foto.thumbnailUrl
        contenedorFotos.appendChild(img)
    })
}

/**
 * CRIPTOYA
 */
const criptoYa = "https://criptoya.com/api/dolar"
const divDolar = document.getElementById("divDolar")
setInterval(()=> {
    fetch(criptoYa)
        .then((response) => response.json())
        .then(({blue, ccb, ccl, mep, oficial, solidario}) => {
            divDolar.innerHTML = `
                <h2>Tipos de Dolar</h2>
                <p>Dolar Oficial: ${oficial}</p>
                <p>Dolar Solidario: ${solidario}</p>
                <p>Dolar MEP: ${mep}</p>
                <p>Dolar CCL: ${ccl}</p>
                <p>Dolar CCB: ${ccb}</p>
                <p>Dolar BLUE: ${blue}</p>
            `
        })
        .catch((error)=>console.error(error))
}, 3000)

// Rutas relativas
// Nos permite trabajar con un archivo JSON local  de forma local. Diapositiva 60
const listado = document.getElementById("listado")
const listadoProductos = "json/productos.json"

fetch(listadoProductos)
    .then((respuesta) => respuesta.json())
    .then((data) => {
        data.forEach(element => {
            listado.innerHTML += `
                <h2> Nombre: ${element.nombre} </h2>               
                <p> Precio: ${element.precio}</p>
                <p> ID: ${element.id}</p>
        `
        })
    })
    .catch(error => console.error(error))
    .finally(() => {
        console.log("Proceso finalizado")
    })