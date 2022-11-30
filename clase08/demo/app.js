let cliente = "Bruce Willis";
let montoCompra = 150;

let mensaje = `El cliente ${cliente} realizó una compra por $ ${montoCompra}`;
console.log(mensaje);

/**
 * DOM = Document Object Model 
 */

/**
 * Acceder al DOM
 */
// ID - GetElementById

const tituloPrincipal = document.getElementById("tituloPrincipal");
console.log(tituloPrincipal);

// Class - GetElementByClassName
const nombres = document.getElementsByClassName("nombres");
console.log(nombres);

// Class - GetElementByClassName
const meses = document.getElementsByTagName("li");
console.log(meses);

// el HTMLColletion se puede trabajar como arreglo
for (let mes of meses){
    console.log(mes);
};

// querySelector: Este metodo permite seleccionar nodos con la misma sintaxis que se usa en CSS:

// retorna el primer resultado que encuentra
const queryNombres = document.querySelector(".nombres");
console.log(queryNombres);

// querySelectorAll: Este metodo permite seleccionar nodos con la misma sintaxis que se usa en CSS:

// retorna TODOS los resultado que encuentra
const queryNombresAll = document.querySelectorAll(".nombres");
console.log(queryNombresAll);

// Modificar Nodos
// InnerText - InnnerHTML - ClassName

// innerText: Me permite acceder al contenido textual de algun elemento del DOM
tituloPrincipal.innerText = "Nuevo Titulo desde JS";

// innerHTML: Me permite agregar contenido codigo HTML en el interior del nodo
// Genera un nuevo nodo (etiqueta) en su interior
tituloPrincipal.innerHTML = `<p> Esto es un parrafo </p>`;

// ClassName: me permite agregar un nombre de clase:
tituloPrincipal.className = "titulo";

// Agregar nodos:
const contenedor = document.getElementById("contenedor");

// Creas la etiqueta
const parrafo = document.createElement("p");
parrafo.innerText = "Este es un parrafo agregado desde JS"
parrafo.className = "titulo";
//Plasmarlo en el HTML - Agregar un nodo al contenedor
contenedor.appendChild(parrafo);

// Eliminar nodo:
//parrafo.remove();

// Modificar el Dom para mostrar elementos de un array
const arrayPersonas = ["Juan","Maria","Ernesto","Carlos"]
const listaPersonas = document.getElementById("listaPersonas");
for (let persona of arrayPersonas){
    const itemLista = document.createElement("li");
    itemLista.innerText = persona;
    listaPersonas.appendChild(itemLista);
}