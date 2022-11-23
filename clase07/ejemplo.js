// Funciones de orgen superior / high order functions
function elevar(n) {
    return function (m) {
        return m ** n
    }
}

const cuadrado = elevar(2) // n => 2
const cubo = elevar(3) // n => 3
const aLaCuatro = elevar(4) // n => 4

console.log(cuadrado(7)) // m = 7 - 49
console.log(cubo(7)) // m = 7 - 343
console.log(aLaCuatro(7)) // m = 7 - 2401

// funciones que reciben funciones
const sumar = (n1, n2) => n1 + n2
const restar = (n1, n2) => n1 - n2

function calculadora(n1, n2, fn) {
    const resultado = fn(n1, n2)
    return resultado
}

console.log(calculadora(5, 3, restar))

//forEach - Excecute function per element
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 10, 1, 2, 3, 4, 5, 6, 7]
array.forEach(element => {
    console.log(element)
});

// find() - looks for an element on array but returns the element
const numeroBuscado = array.find(element => element === 4)
console.log(numeroBuscado)

// some - looks for an element on array but returns if found
const numeroBuscado2 = array.some(element => element === 4)
console.log(numeroBuscado)

//filter - return array filtered
const filteredArray = array.filter(element => element % 2 == 0)
console.log(filteredArray)

// map - creates a copy of the array and execute function to modify it
const mappedArray = array.map(element => element * 2)
console.log(mappedArray)

// sort() 
array.sort((numb1, numb2) => numb1 - numb2)
console.log(array)

// Math
console.log(Math.PI)
let number = 4.56
console.log(Math.round(number))
console.log(Math.floor(number))

// Date
const fechaActual = new Date()
console.log(fechaActual.getFullYear())