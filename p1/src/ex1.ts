/*Escreva uma função que recebe um vetor vs não-vazio de números e devolve uma 
dupla cujo primeiro elemento é um máximo de vs e o segundo, é um mínimo de vs. 
Eis a assinatura de sua função: function maxMin(vs: number[]): [number, number]
Dupla: Mayara Dotta e Alana Martins*/

//assinatura
function maxMin(vs: number[]): [number, number] | undefined {
    //validação para verificar se o vs está vazio, caso esteja será retornado um undefined.
    if (vs.length == 0){
        return undefined
    }
    //após validação será retornado o maior e o menor valor dos números informados.
    return [max(vs), min(vs)];
}

//função para "guardar" o valor mínimo
function min(vs: number[]) {
    let minimo:number = vs [0];
    let i;
    //será validado os números informados e sempre será guardado se o número mínimo atual for maior que o próximo número.
    for (i = 0; i< vs.length; i++){
        if (minimo > vs[i]) {
            minimo = vs[i];
        }
    }
    return minimo;
}

//função para "guardar" o valor máximo
function max(vs: number[]) {
    let maximo:number = vs [0];
    let i;
    //será validado os números informados e sempre será guardado se o número máximo atual for menor que o próximo número.
    for (i = 0; i< vs.length; i++){
        if (maximo < vs[i]) {
            maximo = vs[i];
        }
    }
    return maximo;
}

console.log("\nExercício 1:");
//const n para a relação dos números.
const n = maxMin([11, 33, 89, 6, 4, 29, 30]);
console.log("\nCom o vetor populado");
console.log(n);
//nesse caso será retornado [ 89, 4 ]


const v = maxMin([]);
console.log("\nCom o vetor vazio");
console.log(v);
//nesse caso será retornado undefined
