/* Progrmaación orientada a objetos:
---- clases: Planos para construir Objetos. Puedo construir multimples instancias o multimples ocurrencias para crear un mismo objeto.
*/

class alumno_coder {

    constructor (nombre, apellido , edad) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nota_a = 0; // Esta propiedad no viene por parámetro pero se puede usar
        this.nota_b = 0; // Esta propiedad no viene por parámetro pero se puede usar
    }

}


// ASI SE HARÍA PIDIENDO POR PROMT LOS DATOS -------

/*let nombre = prompt ("ingrese nombre");
let apellido = prompt ("ingrese apellido");
let edad = prompt ("ingrese edad");

let alumno_uno = new alumno_coder (nombre, apellido , edad);
console.log (alumno_uno);*/


// ---- LOS GET Y LOS THIS VAN DENTRO DEL CLASS PORQUE SON COMPORTAMIENTOS Y CARACTERÍSTICAS------

class producto {

    constructor (nombre, precio , stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos (){
        console.log ( "DATOS DEL PRODUCTO");
        console.log ("Nombre: " , this.nombre);
        console.log ("Precio: " , this.precio);
        console.log ("Stock: " , this.stock);
    
    }

    get_stock

}
