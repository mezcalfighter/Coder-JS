let ejemplo = "esto es una variable"

//declaracion de objeto
const miObjeto = {
    color: "verde",
    peso: 5,
    altura: 120,
    nombre: "Planta"
}

// acceder a un valor especifico

// notacion de punto

/**
 * nombre del objeto tipo de notacion . [] mp,nre de la propiedad
 */

console.log(miObjeto.nombre) //planta

/**
 * Notacion []
 */
console.log(miObjeto["nombre"]) // planta

//Editar propiedades en objeto
miObjeto.altura = 100
console.log(miObjeto)

// agregar propiedades en objeto
miObjeto.pais = "México"
console.log(miObjeto)

// eliminar / borrar propiedad
delete miObjeto.pais
console.log(miObjeto)