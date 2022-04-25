"use strict";
/*Escreva uma versão genérica da função do Exercício 4
Dupla: Mayara Dotta e Alana Martins*/
//Na função genérica será deduzido o tipo.
function someG(vs, fn) {
    // validação para percorrer todo o vetor.
    for (let i = 0; i < vs.length - 1; i++) {
        //entra no if se a função fn retornar true, ou seja, se satisfazer pelo menos um par de consecutivos.
        if (fn(vs[i], vs[i + 1])) {
            return true;
        }
    }
    ;
    //devolve false se os elementos consecutivos não satizfazer a função fn
    return false;
}
;
console.log("\nExercício 5:");
const e = (someG([1, 2, 4, 3, 6, 8], (x, y) => x > y));
console.log("\nSatisfaz a função fn");
console.log(e);
//nesse caso será retornado true, pois pelo menos há um par de elementos consecutivos que satizfaz a função x > y
const f = (someG([1, 4, 6, 8], (x, y) => x > y));
console.log("\nNão satisfaz a função fn");
console.log(f);
//nesse caso será retornado false
