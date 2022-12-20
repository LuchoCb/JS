// Local Storage sirve para almacenar datos localmente y poder usarlos. Se guarda todo y no se borra a menos que se borre el caché se puede apagar el mac y no se borra.

// SetItem -----> Ingresar y almacenar un valor en el local storage

/////////// TODO LO QUE SE GUARDA EN LS SE CONVIERTE EN UN STRING

localStorage.setItem ("usuario_uno"  , "Pepe");
localStorage.setItem ("edad_usuario"  , "30");
localStorage.setItem ("colores"  , ["Rojo" , "Azul" , "Verde"]);

// GetItem ------->>>  Llama lo almacenado en local Storage

let usuario_uno = localStorage.getItem ("usuario_uno"); /// Hay que meterla dentro de una variable para poderla llamar.
let edad_usuario = localStorage.getItem ("edad_usuario");
let colores = localStorage.getItem ("colores");


// SESSION STORAGE --------> Funciona similar al local storage pero persiste solo cuando la pestaña estè abierta o cuando se reinicie cualquiera.

