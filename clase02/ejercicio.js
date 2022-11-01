let variable = prompt("Ingrese su variable o dato:")

if((Number(variable) <= 1000) && (parseInt(variable) > 0)){
    alert("Su numero está en el rango de 1000")
}else if(!Number(variable)){
    alert("Usted ingresó un texto",variable)
}else if(Number(variable) <= 0){
    alert("Usted ingresó un valor negativo")
}else{
    alert("Usted no ingresó una opcion valida")
}