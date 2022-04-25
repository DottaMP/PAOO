/*Escreva uma função de alta ordem, digamos all, que recebe um vetor de números e uma função fn, 
que recebe dois números e devolve um booleano, e devolve true se, e só se, todo par de elementos consecutivos
do vetor que satisfaz a função fn. Por exemplo, all([1, 2, 4, 5, 6, 8], (x, y) ) x < y)
deve devolver true. Eis, para ajudar, a assinatura de sua função: 
function all(vs: number[], fn: (a: number, b: number) ) boolean): boolean 
Dupla: Mayara Dotta e Alana Martins*/

//assinatura
//função all recebe vetor de números e função fn recebe dois numeros e devolve um booleano
function all(vs: number[], fn: (a: number, b: number) => boolean): boolean {
    
    // validação para percorrer todo o vetor.
    for (let i = 0; i < vs.length - 1; i++) {

        // ! inverte a função, só entra no if se a função retornar false, ou seja, se não satisfazer os pares consecutivos.
        if (!fn(vs[i], vs[i + 1])) {
            return false;
        }
    };
    //devolve true se, e só se, todo par de elementos forem consecutivos
    return true;
};

console.log("\nExercício 2:");
const verdadeiro = all([1, 2, 4, 5, 6, 8], (x, y) => x < y);
console.log("\n\Satisfaz a função fn");
console.log(verdadeiro);
//nesse caso será retornado true, pois todo par de elementos consecutivos do vetor satisfaz a função fn x < y


const falso = all([1, 4, 6, 8, 2], (x, y) => x < y);
console.log("\nNão satisfaz a função fn");
console.log(falso);
//nesse caso será retornado false
