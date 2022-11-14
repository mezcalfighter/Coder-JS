class Producto{
    constructor(nombre, precio){
        this.nombre
        this.precio
    }

    //metodos
    sumarImpuesto(){
        this.precio = this.precio * 1.16
    }
}

const producto1 = new Producto("Sopa Instantanea",5.00)