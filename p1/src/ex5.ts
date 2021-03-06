/*Escreva uma versão genérica da função do Exercício 4*/

//Na função genérica será deduzido o tipo.
function someG<G>(vs: G[], fn: (n1: G, n2: G) => boolean): boolean {

    // validação para percorrer todo o vetor.
    for (let i = 0; i < vs.length - 1; i++) {
        //entra no if se a função fn retornar true, ou seja, se satisfazer pelo menos um par de consecutivos.
        if (fn(vs[i], vs[i + 1])) {
            return true;
        }
    };
    //devolve false se os elementos consecutivos não satisfazer a função fn
    return false;
};

console.log("\nExercício 5:");

const e = (someG([1, 2, 4, 3, 6, 8], (x, y) => x > y));
console.log("\nSatisfaz a função fn");
console.log(e);
//nesse caso será retornado true, pois pelo menos há um par de elementos consecutivos que satisfaz a função x > y

const f = (someG([1, 4, 6, 8], (x, y) => x > y));
console.log("\nNão satisfaz a função fn");
console.log(f);
//nesse caso será retornado false