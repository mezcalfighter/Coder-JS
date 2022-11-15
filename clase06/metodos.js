//declarar mi arreglo
const ejemploArreglo = ['Aguacate',2,null,true,[1,2,3],'x',33,56]

//Conocer la longitud de mi arreglo
//console.log(ejemploArreglo.length)

//for loop
for(let i=0; i<ejemploArreglo.length; i++){
    if(typeof ejemploArreglo[i] == 'number'){
        //console.log(ejemploArreglo[i])
    }
}

 //push
 
ejemploArreglo.push('Planta')
//console.log(ejemploArreglo)

//pop
ejemploArreglo.pop()
//console.log(ejemploArreglo)

//shift
ejemploArreglo.shift()
//console.log(ejemploArreglo)

//slice
//const nuevoArreglo = ejemploArreglo.slice(2, 4)
//console.log(nuevoArreglo)

//splice
//const nuevoArreglo = ejemploArreglo.splice(2, 4)
//console.log(nuevoArreglo)

//concat
const otroArreglo = ['w','Limon',false,{}]
//const mergeArrays = ejemploArreglo.concat(otroArreglo)
//console.log(mergeArrays)

//reserve
console.log(ejemploArreglo.reverse())

//includes
//console.log(mergeArrays.includes('w'))

//join
const joinArrays = ejemploArreglo.join('*')
console.log(joinArrays)