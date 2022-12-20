//BUCLE

/* 
for (desde; hasta; actualizaciòn) {

    sentencias
}
*/

/* for (let i= 1 ; i <= 4; i= i + 1) {
    console.log ("Hola estamos en la vuelta:" , i)
}*/

/*let numero = prompt ("ingrese el numero para conocer la tabla");

for (let i= 0 ; i <= 10; i = i + 1) {
    
    let resultado = numero * i;
    console.log (numero + " X " + i + " = " + resultado);
}*/

//CONTINUE Si la condicion IF se cumple vuelve a iniciar la vuelta del bucle
//BREAK lo que hace es cortar el bucle si la condicion del if se cumple.


for (let i= 0 ; i <= 10; i = i + 1) {

    let num_uno = parseInt (prompt ("ingrese un número"));
    let num_dos = parseInt (prompt ("ingrese otro número"));

    if (num_dos == 0) {
        console.log ("No se puede dividir por 0");
        continue
    }

    let division = num_uno / num_dos;
    console.log ("El resultado de la división es: " , division)
}