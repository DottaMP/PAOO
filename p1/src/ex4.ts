/*Escreva uma função de alta ordem, digamos some, que recebe um vetor de números e uma função fn, 
que recebe dois números e devolve um booleano, e devolve true se, e só se, existe um par de elementos consecutivos
do vetor que satisfaz a função fn. Por exemplo, some([1, 2, 4, 3, 6, 8], (x, y) ) x > y)deve devolver true. 
Eis a assinatura de sua função: function some(vs: number[], fn: (a: number, b: number) ) boolean): boolean */

//assinatura
//função some recebe vetor de números e função fn recebe dois numeros e devolve um booleano
function some(vs: number[], fn: (a: number, b: number) => boolean): boolean {

    // validação para percorrer todo o vetor.
    for (let i = 0; i < vs.length - 1; i++) {
        //entra no if se a função fn retornar true, ou seja, se satisfazer pelo menos um par de consecutivos.
        if (fn(vs[i], vs[i + 1])) {
            return true;
        }
    };
    //devolve false se os elementos consecutivos não satizfazer a função fn
    return false;
};

console.log("\nExercício 4:");

const a = (some([1, 2, 4, 3, 6, 8], (x, y) => x > y));
console.log("\nSatisfaz a função fn");
console.log(a);
//nesse caso será retornado true, pois pelo menos há um par de elementos consecutivos que satizfaz a função x > y

const b = (some([1, 4, 6, 8], (x, y) => x > y));
console.log("\nNão satisfaz a função fn");
console.log(b);
//nesse caso será retornado false