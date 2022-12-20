

// I/O = Input Output

console.log ("Salida de datos");
//alert ("Otra salida de datos") //congelado hasta que no se de aceptar//

// Prompt para ingresar datos

/* let nombre_usuario = prompt ("Ingrese su nombre") //Prompt trae el dato que se ingreso por parte del usuario y se guarda en la variable en este caso nombre de usuario

console.log ("Bienvenido al sistema:" , nombre_usuario);
*/

// todo lo que se ingrese por promt va a convertirse en string//

//Funciones para convertir datos//

//ParseInt ---> devuele un numero entero corta la parte decimal no la redondea.

let num_uno =prompt("ingrese un numero");
let num_dos = prompt("ingrese otro numero");

num_uno = parseInt (num_uno);
num_dos = parseInt (num_dos);

let resultado = num_uno + num_dos;

console.log (resultado);