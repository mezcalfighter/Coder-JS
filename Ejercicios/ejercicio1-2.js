// Programa que nos pida dos números y que nos diga cual es el mayor, el menor o si son iguales
function numeroMayor(numero1, numero2){
    if((Number(numero1) && Number(numero2)) && numero1 > 0 && numero2 > 0){
        if(numero1 == numero2){
            return `${numero1} es igual a ${numero2}`
        }
        return numero1 > numero2 ? `${numero1} es mayor que ${numero2}`:`${numero1} es menor que ${numero2}`
    }
    return `Alguno de los datos ingresados no fue un numero valido`
}

console.log(numeroMayor(2,2))
console.log(numeroMayor(2,3))
console.log(numeroMayor(3,2))
console.log(numeroMayor(2,'ñ'))
console.log(numeroMayor(2,'-1'))