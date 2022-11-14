function User(name, age){
    this.name = name;
    this.age = age;
    this.accion = "ejecuta una accion"
}

let user1 = new User("Bob", 25);
let user2 = new User("Laura", 26);

// metodos de Object
const car = {}
Object.defineProperties(car,{
    marca:{
        enumerable: true,
        value:"Toyota",
        writable: true
    },
    modelo:{
        enumerable: true,
        value:"Corola",
        writable: true
    },
    color:{
        enumerable: true,
        value:"Negro",
        writable: true
    }
})

console.log(car)
console.log(car.color.enumerable)

// para evitar cambiar datos en las propiedades
Object.freeze(car)