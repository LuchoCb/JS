// Entre más precisa sea la función va a ser más fácil re utilizarla.

// Cada vez que tenga creada una funcionalidad no tengo que volverla a escribir sino puedo re utilizarla.

// Concepto de debuguear: Con las funciones hace màs fàcil encontrar dònde se encuentran los errores para "debuguear" màs fàcil.

// COMO CREAR UNA FUNCION

// DECLARAR UNA FUNCION:

/*function saludar_usuario( nombre ) { 

    // Este es el bloque se va a ejecutar cuando se llama a la función.

    console.log ("Bienvenido al sistema" + nombre);

}

// Cada vez que necesito la funcionalidad la llamo. Es flujo no es cascada cuando es asincrónica no se ejecuta de arriba abajo.

// Ejecución sincrónica: todo se va ejecutaqndo de arriba a abajo una cosa después de la otra.


//--------´LLAMANDO A LA FUNCION ---> La llamo por su nombre

//saludar_usuario("Marta"); /* siempre va con paréntesis --- Si llamo 5 veces a la misma función la ejecuta las 5 veces */

function saludar_usuario(nombre) { 

    if (nombre == "") {
        console.log ("No se puede ingresar nombre vacios");
    }
    else if (nombre == "pepe") {
        console.log ("No se aceptan mas pepes")
    }
    else {
        console.log ("Bienvenido al sistema: " + nombre);
    }

}

/*let numero_uno = parseInt (prompt ("Ingrese un nùmero")); // El ParseInt puede salir bien o mal no es 100% fiable
let numero_dos = parseInt (prompt ("ingrese otro nùmero"));*/


// es importante dejar comentado que es la funcion y los parámetros es una buena pràctica

// LAS FUNCIONES DAN LÖGICA ENCAPSULADA, YO PUEDO CREAR CUALQUIER COSA LÓGICA DENTRO DE UNA FUNCIÓN


function suma_dos_numeros(numero_uno, numero_dos) {

    if (typeof (numero_uno) != "number" || typeof (numero_dos) != "number") {
    
        console.log ("solo sumo numeros!");
    }
    else {  
        
        let suma = numero_uno + numero_dos;
        console.log ("El resultado de la suma es:",suma)
}
}