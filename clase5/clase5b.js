// FUNCION CONSTRUCTORA ---->  Función que construye objetos para no tener que reescribir las propiedades sino que se llama la función para crear el objeto
// Se encarga de "setear" el objeto

// ------- ESTA YA NO SE USA MUCHO -------------------- //

function alumno (id, nombre, apellido, dni, legajo, edad) {

    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.legajo = legajo;
    this.edad = edad;

}

let alumno_uno = new alumno (1, "pepe", "marecone", 232232323 , 32232323 , 25)
let alumno_dos = new alumno (1, "Luis", "Cabezas", 1018422797 , 3123456 , 34)

console.log (alumno_uno);
console.log (alumno_dos);
