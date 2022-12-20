// Arreglos: puedo almacenar varias cosas dentro de una misma variable como un listado. Es un tipo de dato como es un string o un entero (nùmero)

let lista_alumnos = ["pepe" , "Marta" , "Juan"]

// ----- NO SE LE PUEDEN AGREGAR COSAS DIRECTAMENTE -----
// lista_alumnos = "Marcos"; Si hago esto se pisa el arreglo y solo muestra marcos.


// INgreso a un elemento directo por INDEX o ÌNDICE

console.log (lista_alumnos [0]); // Acà me estoy refiriendo a la posiciòn 0 ----> "Pepe"

console.log (lista_alumnos [2]);  // Acà me estoy refiriendo a la posiciòn 2 ----> "Juan"


// MODIFICACION DE ARRAY POR INDEX

lista_alumnos[1] = "Juana"; // acà està modificando el arreglo en la posiciòn 1 cambia Marta por Juana
console.log (lista_alumnos);




//--- Pàctica Ingreso por INDEX 2

let lista_random = [30, "pedro" , 10 , 20 , "Laura" , ["Ratòn" , "Gato" , "Perro"] , "Azul" , "Rojo" , true ]; // la lista funciona como un tipo de datos, pore eso los animales acà son 1 solo elemento. Una lista dentro de otra.

console.log (lista_random [3]); // muestra el 20
console.log (lista_random [6]); // muestra el "Azul"
console.log (lista_random [5[2]]); // muestra el "Perro" se llama un sub indice. Es bastante ùtil cuando se empieza a trabajar con Json

// ++++++ ESTRUCTURA ITERABLE -----> Permite recorrer cada uno de los elementos con un bucle sin tener que ir uno por uno.

for (let i = 0 ; i <  9 ; i = i + 1) { // -----> ESTE SE USA PARA RECORRER EL ARREGLO

    console.log (lista_random [i]);
}






