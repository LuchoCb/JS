

let small = document.getElementById (`sm`)
let medium = document.getElementById (`md`)
let big = document.getElementById (`bg`)

let is= 0;
let im= 0;
let ib= 0;

let smbox = 0
let mdbox = 0
let bgbox = 0


small.addEventListener('click', function cajasm() {
   
        if(small.click && smbox<5) {
            smbox++;
            window.alert ("Artículo agregado a caja pequeña");
            console.log ("Articulos agregados caja pequeña: " + smbox)
            }

        else {
            alert ("Caja pequeña lista")
            is++;
            smbox = 0
            let smboxprice = 15000
            let smfinalprice = smboxprice * is;
            console.log ("Cajas pequeñas completas: " + is)
            console.log ("Valor cajas pequeñas = " + smfinalprice );
            
        }

})

medium.addEventListener('click', function cajamd() {

    

    if(medium.click && mdbox<3) {
        mdbox++;
        window.alert ("Artículo agregado a caja mediana");
        console.log ("Articulos agregados caja mediana " + mdbox)
        }

    else {
        alert ("Caja mediana lista")
        im++;
        mdbox = 0
        let mdboxprice = 25000
        let mdfinalprice = mdboxprice * im
        console.log ("Cajas medianas completas: " + im);
        console.log ("Valor cajas mediana = " + mdfinalprice );
    }

})

big.addEventListener('click', function cajabg() {


    if(big.click && bgbox<3) {
        bgbox++;
        window.alert ("Artículo agregado a caja grande");
        console.log ("Articulos agregados caja grande " + bgbox)
        }

    else {
        alert ("Caja grande lista")
        ib++;
        bgbox = 0
        let bgboxprice = 30000
        let bgfinalprice = bgboxprice * ib
        console.log ("Cajas grandes completas: " + ib);
        console.log ("Valor cajas grande = " + bgfinalprice );
    }

    

})



//crear una gran funcion para meter todo y dejar los event lisener afuera que ejecuten la función que la llamen


