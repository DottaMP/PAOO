"use strict";
/*Escreva uma versão genérica da função do Exercício 2. */
//Na função genérica será deduzido o tipo.
function allG(vs, fn) {
    // validação para percorrer todo o vetor.
    for (let i = 0; i < vs.length - 1; i++) {
        // ! inverte a função, só entra no if se a função retornar false, ou seja, se não satisfazer os pares consecutivos.
        if (!fn(vs[i], vs[i + 1])) {
            return false;
        }
    }
    ;
    //devolve true se, e só se, todo par de elementos forem consecutivos
    return true;
}
;
console.log("\nExercício 3:");
const generico1 = allG([1, 2, 4, 5, 6, 8], (x, y) => x < y);
console.log("\nSatisfaz a função fn");
console.log(generico1);
//nesse caso será retornado true, pois todo par de elementos consecutivos do vetor satisfaz a função fn x < y
const generico2 = allG([1, 2, 7, 4, 5, 6, 8], (x, y) => x < y);
console.log("\nNão satisfaz a função fn");
console.log(generico2);
//nesse caso será retornado false
