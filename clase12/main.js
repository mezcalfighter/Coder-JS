/**
 * Sugar Sintax
 * La utilización de operadores avanzados para simplificar  el código.
 */
// 1) Operador ++
let i = 1;
i++;
console.log(i) // 2

// 2) Operador Ternario: Es una simplificación del If / ELse
// Sintaxis: 3 partes (si o si)
// La condicion + ?
// Codigo que se ejecuta cuando la condición es true + :
// Codigo que se ejecuta cuando la condición es false

let edadCliente = 8;
if(edadCliente >= 18){
    console.log("Usted es mayor puede ingresar");
}else{
    console.log("Es menor no puede ingresar, ratón!");
}

// Con el operador ternario:
edadCliente >= 18 ? console.log("Usted es mayor puede ingresar") : console.log("Es menor no puede ingresar, ratón!");

//Otro Ejemplo: Carrillo de compras y localStorage
let carrito = [150,25,30];
// ¿Como lo guardo en el localStorage?
localStorage.setItem("carrito",JSON.stringify(carrito));

//Si no hay nada en el localStorage, entonces carrito = []
carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

//Operadores logicos: 
let nombreCliente = "Samuel";
//nombreCliente == "Samuel" && alert("Bienvenido Samuel");

let carrito2 = [];
carrito2 === 0 && console.log("El carrito está vacío");

// Tambien retorna un valor
let vacio = carrito.length === 0 && "el carrito está vacío"

//Operador Lógico || OR:
//Primero tenemos que saber que en JS hay valores que denominan "Falsy"
// Valores falsy: false, 0, "", null, undefined, NaN.
console.log("Operador Lógico OR: ");

console.log(0 || "miaaau");
console.log(1 || "guuuau");
console.log(""|| "La mejor comisión del condado");

//Ejemplo: Pedimos datos al usuario
//let nombre = prompt("Ingrese su nombre");
//console.log(nombre || "Usuario no ingresó el nombre");

// Operador NULLISH COALESCING (??)
// Es una simplificación del operador OR.
// Trabaja igual que el OR, pero solo admite como valores "nullish" a null y undefined
console.log("Operador NULLISH");
console.log(0 ?? "nullish");
console.log(null ?? "nullish");

//Ejemplo
//let nombre = prompt("Ingrese su nombre") ?? "Cliente anonimo";
//console.log(nombre);

// Acceso condicional a un objeto
console.log("Acceso condicional a un objeto");
const cliente = null;

console.log(cliente?.nombre || "el cliente no existe");

// Desestructuración de Objetos
const alumno = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 25,
    curso : "Javascript"
};

let nombreAlumno = alumno.nombre;
console.log(nombreAlumno);

//Sintaxis: (crea variables copia de los elementos del objeto, los nombres tienen que coincidir con las propiedades)
let {nombre, apellido, edad, curso:carrera} = alumno;
console.log(edad);

// Si intento una propiedad que no existe, retorna undefined

// Alias: renombrar para las propiedades despues de :
console.log(carrera); 

//¿Que pasa si una de las propiedades del objeto es un objeto?

const gato = {
    duenio: "Juan",
    raza: "Felino",
    edad: 5,
    direccion:{
        calle:"Av. Siempre Viva",
        numero:123,
        ciudad:"Springfield"
    }
}

let {duenio, raza, edad:edadGato, direccion:{calle, numero, ciudad}} = gato;
console.log(calle); 