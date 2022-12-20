let clientes = {nombre:"Jose" , apellid: "Gomez"};

localStorage.setItem ("clientes" , clientes_JSON);

let recuperando_clientes = localStorage.getItem ("clientes");

console.log (recuperando_clientes)

recuperando_clientes = JSON.parse (recuperando_clientes);

console.log (recuperando_clientes);

