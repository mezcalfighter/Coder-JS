/**
 * Carrito de compras
 * 
 * ¿ Que funcionalidad debe tener un carrito de compra?
 * 
 * 1) Mostrar productos en el HTML de forma dinámica
 * 2) Debe agregar productos en el carrito
 * 3) Evitar la carga de productos repetidos
 * 4) Mostrar carrito en el HTML de forma dinámica
 * 5) Eliminar productos del carrito
 * 6) Calcular el total de la compra
 * 7) Vaciar carrito
 * 8) Guardar carrito en Local Storage
 */

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const arroz = new Producto(1, "Arroz", 100, ".//img/arroz.png");
const azucar = new Producto(2, "Azucar", 50, ".//img/azucar.png");
const fideos = new Producto(3, "Fideos", 80, ".//img/fideos.png"); 
const mermelada = new Producto(4, "Mermelada", 150, ".//img/mermelada.png");
const queso = new Producto(5, "queso", 200, ".//img/queso.png");
const sal = new Producto(6, "Sal", 30, ".//img/sal.png");
const tomate = new Producto(7, "Tomate", 70, ".//img/tomate.png");
const yerba = new Producto(8, "Yerba", 120, ".//img/yerba.png");

// Crear un array con todo catálogo de productos
const productos = [arroz,azucar,fideos,mermelada,queso,sal,tomate,yerba];

// Creamos el array del carrito de compras:
let carrito = [];

// Cargar Carrito desde localStorage, lo cargamos desde el localstorage
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

// Crear función que muestre productos
const contenedorProductos = document.getElementById("contenedorProductos");
const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
                        <div>
                            <img src = "${producto.img}" class = "card-img-top imgProdcutos" alt="${producto.nombre}">
                            <div class= "card-body">
                                <h5>${producto.nombre}</h5>
                                <p>${producto.precio}</p>
                                <button class= "btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

// Función agregar al carrito
const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id == id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        //Trabajamos con el localStorage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarProductos();

// Mostrar el carrito de compras
const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostarCarrito();
})

//Función para mostar el carrillllooo:

const mostrarCarrito = () => {
    //que trucazo!
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class = "card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = " ${producto.nombre}">
                            <div class ="card-body">
                                <h5> ${producto.nombre} </h5>
                                <p> ${producto.precio} </p>
                                <p> ${producto.cantidad} </p>
                                <button class= "btn colorBoton" id ="eliminar${producto.id}" >Eliminar producto</button>
                            </div>
                        </div>`

        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito:

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find( producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();

    //localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//VACIAMOS TODO EL CARRITO DE COMPRAS: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //localStorage: 
    localStorage.clear();
}

//Mostramos mensaje con el total de la compra: 

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}