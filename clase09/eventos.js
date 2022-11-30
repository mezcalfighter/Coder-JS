/**
 * Eventos
 * Son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir un comportamiento cuando se produzcan
 * 
 * Hay varias formas de realizar esto
 * 
 * La herramienta mas comun es utilizar es un "Manejador de eventos"
 */

// 1.- Forma utilizando el método AddEventListener.
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    alert("Me hiciste click");
});

// 2.- Utilizando las propiedades del nodo
const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    alert("Utilizando la forma 2")
};

// 3.- Escribiendo la funcion en HTML
function jsEnHTML(){
    console.log("Estoy llamando a la funcion desde un HTML");
};

// EVENTOS MAS UTILIZADOS
//Eventos con el Mouse
// mouseover /mouseout: El puntero se mueve sobre / sale del elemento


// Mousemove: el movimiento del mouse sobre el elemento.

//mousedown / mouseup: se oprime / suelta el boton del ratón sobre un elemento

const caja = document.getElementById("caja");

caja.onmousemove = () =>{
    console.log("Pasaste el mouse sobre la caja");
};

caja.onmousedown = () => {
    console.log("Apretaste el botón");
};

caja.onmouseover = () => {
    console.log("Ingresó el puntero");
};

//Eventos con el Teclado
// Se producen con la interacción del usuario y el teclado
const campoTexto = document.getElementById("campoTexto");

//OnKeydown: cuando se presiona una tecla
//OnKeyup: Cuando se suelta una tecla
campoTexto.onkeydown = () =>{
    console.log("Presiono una tecla")
};

campoTexto.onkeydup = () =>{
    console.log("Suelto una tecla")
};

//Evento Change: Se activa cuando cambia el valor de un elemento
const texto = document.getElementById("texto")
texto.addEventListener("change",() => {
    console.log("Ingresaste texto (evento change)")
})

// La propiedad value me permite acceder al texto ingresado por el usuario en un input
// Evento Submit: Se activa cuando el formulario es enviado

class Cliente{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arrayClientes = [];
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    // Evito el comportamiento default del formulario
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    const cliente = new Cliente(nombre.value, apellido.value);
    arrayClientes.push(cliente);

    //verificador por consola
    console.log(arrayClientes);

    // Reseteamos el formulario
    formulario.reset();
});


