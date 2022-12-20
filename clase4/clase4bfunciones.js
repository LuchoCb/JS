// Podemos pensar las funciones como un progrmaa dentro de un programa. Para desarrollar funcionalidades dentro.

// JS tiene funciones nativas como prompt() o parseInt() que ya trae JS.

// FUNCION MAYOR EDAD

function mayor_edad (edad){

    if (edad >= 18) {
        return  true // Una vez que la funciòn se llama se devuelve un valor true or false que puedo almacenar en una variable para reutilizarla
    }                   // Es lo màs comun de usar y puede hacer una comprobaciòn como nueva variable que pueda usar adelante.
   
    else {
        return false
    }
}

/*
let resultado = mayor_edad (25);
console.log (resultado);
*/

// ejemplo tengo que validar y comprobar algo especìfico si es true o false para re utilizarlo en el còdigo y combinar las herramientas.

if (mayor_edad (18)) {
    console.log ("mostrar panel de accesorios");
}
else {
    console.log ("hay problemas con el los datos");
}
