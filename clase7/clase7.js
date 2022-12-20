// Funciones de orden superior ----> Reciben o retornan una función

// Retornar funciones

/*

function doble (num) {

    return num * 2
}

function triple (num){

    return num * 3
}

let resultado_doble = doble(10); // la función retorna un resultado.

*/


/* function crear_multiplicador (multiplicador) {

    return function (num) {

        return num + multiplicador

    }
}

let doble_num = crear_multiplicador (2);
console.log (doble_num(20));*/


// RECIBIR UNA FUNCIÒN POR PARÁMETRO -----> es el mas utilizado!

/*function saludar (nombre) {
    console.log ("hola" , nombre)
}

function saludar_a_todos (arr , saludar) { //Llama a la funcion por parámetro y y recorre cada uno de los arreglos en este caso.

    for (let usuario of arr) {
        saludar (usuario)
    }

}

let lista_alumnos = ["pepe", "juana", "Luis", "Carlos"];

saludar_a_todos (lista_alumnos, saludar) //cuando se pase una función por parámetro va sin los paréntesis

*/

//// METODOS -----> Todos recorren el arreglo dependiendo la longitud

////// FOR EACH ----> Recorre para cada elemento una determinada función. Casi siempre se usa para una lista de usuarios y evaluar si tienen algo o no tienen.

/*

let numeros = [3,6,10,2,20,30];

numeros.forEach (function (num) {

    console.log ("el numero es", num);
    console.log ("Y el doble es: " , num * 2);

})
*/

///// FIND ------> El método busca dentro de un array el o los elementos que cumplan con una condición específica. Si lo encuentra lo arroja si no arroja indefinido que no existe.

///// FILTER ----> El filter busca dentro del array todos los resultados posibles dentro del arreglo que cumplan con la condición determinada. La función entra por parámetro y se ejecuta para llamarlo.

//// REDUCE ----> Se utiliza un acumulador para ir REDUCIENDO el arreglo hasta un único valor.

//// SORT -----> Funciona bien cuando estamos trabajando con Strings y no tan bien con números. El sort ordena no Filtra.


const numbers = [3, 1, 5, 4, 2];

const sortedNumbers = numbers.sort(function(a, b) {
  return a - b;
});

console.log(sortedNumbers); // [1, 2, 3, 4, 5]