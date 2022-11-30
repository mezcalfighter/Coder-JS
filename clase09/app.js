class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto(1,"Fideos",100);
const arroz = new Producto(2,"Arroz",120);
const coca = new Producto(3,"Coca Cola",300);
const pan = new Producto(4,"Pan",200);

const productos = [fideos,arroz,coca,pan];
console.log(productos);

//modificar el dom para mostrar los productos
function mostrarProductos(arrayProductos){
    // Obtener el contenedor
    const contenedorProductos = document.getElementById("contenedorProductos");
    
    //Agregar elementos al contenedor
    arrayProductos.forEach(producto => {
        //Creas la etiqueta
        const etiquetaProducto = document.createElement("div");
        //Agregar clase
        etiquetaProducto.className = "caja"
        //Modificas el texto
        etiquetaProducto.innerHTML = `
        <p>Nombre: ${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <button>Agregar al carrito</button>`
        //Lo agregas al contenedor
        contenedorProductos.appendChild(etiquetaProducto);
    });
}

mostrarProductos(productos);