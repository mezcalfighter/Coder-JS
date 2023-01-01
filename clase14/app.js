//Programacion sincronica

console.group("Programación Sincrónica");
console.log("Primer tarea");
console.log("Segunda tarea");
console.groupEnd("__");

//Programación Asincrona
console.group("Programación Asincronica");
setTimeout(()=>{
    console.log("Tarea A");  
},3000)

setTimeout(()=>{
    console.log("Tarea B");
},2000)

//Ejemplo, utilizando setTimeOut modificamos el color del fondo del body después de 3 segundos.
setTimeout(()=>{
    document.body.style.backgroundColor = "bisque";
},3000)

// Puedo practicar esto en un array:
for(let letra of "Hola Mundo"){
    setTimeout(()=>{
        console.log(letra)
    },4000)
}

/**
 * CALL STACK
 * Es una lista en donde se apilan las distintas tareas a ejecutar por nuestro programa. JS es un lenguaje de un solo hilo, por lo que se ejecuta una tarea a la vez.
 */

/**
 * Event Loop:
 * Es un bucle que se ejecuta constantemente y que se encarga de revisar si el callstack está vacío. Si lo está, entonces revisa la cola de tareas y la envía al callstack para que se ejecute
 */

// set interval: Tiene la misma sintaxis que el settimeout pero la unidad de tiempo es un intervalo para la repetición de la función asociada.

setInterval(() =>{
    console.log("Tic");
},1000)

// Cortamos con clearInterval(interval)
let contador = 1;
const interval = setInterval(()=>{
    console.log("Tuki")
    contador == 5 ? clearInterval(interval) : contador++;
},2000)

//Ejemplo de uso setItnterval para que cambie el color del fondo del body cada 3 segundos. Utilizando array de oclores
let colores = ["red","green","blue","yellow","orange","purple","pink","brown","black","white","bisque"];

let i = 0;
const interval2 = setInterval(()=>{
    document.body.style.backgroundColor = colores[i];
    i == colores.length ? clearInterval(interval2) : i++
},1000)

// Promesas: Es un objeto que representa un evento a futuro. Una promesa puede ser resuelta o rechazada.

//Sintaxis
const falsasPromesas = () => {
    return new Promise ((resolve,reject) =>{
        //Resolve = Se ejecuta cuando la promesa se cumple
        //Reject = Se ejecuta cuando la promesa no se cumple

    })
}

console.log(falsasPromesas());
//Las promesas pueden tener 3 estados:
//Pending: Está pendiente porque todavía no hay conexión
//Fulfilled: Cuando se realiza la conexion
//Rejected: Cuando se nos rechaza la conexion

//Practicamos consumiendo una base de datos de ususarios:

class Usuario{
    constructor(user,password){
        this.user = user
        this.password = password
    }
}

const usuario1 = new Usuario("usuario1",1234)
const usuario2 = new Usuario("usuario2",1234)
const admin = new Usuario("Admin",4321)

const usuarios = [usuario1,usuario2,admin]

const solicitarUsuarios = (estado) => {
    return new Promise((resultado,rechazado) => {
        if(estado == true){
            resultado(usuarios)
        }else{
            rechazado("Conexión fallida")
        }
    })
}

console.log(solicitarUsuarios(true))
console.log(solicitarUsuarios(false))

//then y catch
//then = se ejecuta cuando la promesa se cumple
//catch = se ejecuta cuando la promesa no se cumple
//finally = se ejecuta siempre, sin importar si se cumple o no

//ejemplo con then y catch tomando el login de usuarios
solicitarUsuarios(true)
    .then( (usuarios) => {
        console.table(usuarios)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=>{
        console.log("Cerrando conexión")
    })