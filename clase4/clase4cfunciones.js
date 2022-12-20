function calcula_iva( precio ){

    let iva = precio * 0.21;

    return iva

}

function calcular_cuota( precio, cuotas){

    if( cuotas == 3){
        let cuota = precio * 0.03;
        return cuota
    }
    else if( cuotas == 6){
        let cuota = precio * 0.10;
        return cuota
    }
    else if(cuotas == 12){
        let cuota = precio * 0.20;
        return cuota
    }
}



let lampara = 5000;
let tv = 15000;
let radio = 3000;

let cuotas = prompt("Ingrese la cantidad de cuotas 3 , 6 , 12");

let iva = calcula_iva(lampara); // Esto puede ser redundante, se puede capturar el valor de arriba y usarlo dentro de una misma lìnea.
let monto_cuotas = calcular_cuota(lampara, cuotas);

console.log("El precio de la lampara es: ", lampara + iva);


console.log("En " , cuotas , "pagas: " , lampara +iva  + monto_cuotas);
console.log("Por mes pagas: ", calcular_cuota(lampara, cuotas))