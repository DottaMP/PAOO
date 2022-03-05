"use strict";
// const c1 = contador (10);
//c1 é uma função que possui um ambinte que contém uma variável chamada "inicial", cujo valor é inicialmente 10.
function contador(inicial) {
    return () => inicial++; //arrow function que acessa um nome que está definido em cima (inicial). Cada vez que chama a função ele cria um ambiente.
}
const log = console.log;
const c1 = contador(10);
const c2 = contador(5);
log(c1());
log(c1());
log(c2());
log(c2());
