/**
 * Convertidor de temperaturas
 */

let convertirTemp = function(temperatura, grados){
    let resultado

    switch (grados) {
        case "C":
            resultado = (temperatura *  1.8) + 32;
            console.log(temperatura + " grados C" + resultado + " grados F");
            break;
        case "F":
            resultado = (temperatura - 32) * 0.55
        default:
            console.log("Unicamente puedo convertir Celcius y Farenheit")
            break;
    };
};

convertirTemp(26, "C")