"use strict";
// recebe xs: number[] tal que xs.length > 0
// e devolve um elemento máximo de xs
/*function max(xs: number[]): number {
    let cand = xs[0];
    for (const x of xs){
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}

console.log(max([2,4,1,8,3,5])+2);
console.log(max([])+2); //undefined: pois quando acessa um elemento que não faz parte do vetor o JS ele devolve um undefined.

//versão para corrigir o problema do underfined
function max1(xs: number[]): number | undefined{
    if (xs.length == 0) return undefined;
    let cand = xs[0];
    for (const x of xs){
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}

function maxBy1(xs: number[], key: (x:number) => number): number|undefined{ //key é uma função que recebe um number e devolver um number.
    if (xs.length == 0) return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand)) cand = x;
    return cand;
}

/*const r = max1([2,4,1,8,3,5]);
if (r != undefined)
    console.log (r+2);*/
/*
Escreva uma função que recebe xs: string[] e uma função key:(s: string) => number
e devolve underfined se o xs é vazio, ou caso contrário, devolve uma string s de xs
cuja chave key(s) é a máxima.
*/
function maxByStr(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand))
            cand = x;
    return cand;
}
//----------------------------------------------------------------------------------
//variáveis de tipo (no caso A) - tipos genéricos 
function maxBy(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand))
            cand = x;
    return cand;
}
function minBy(xs, key) {
    function invKey(x) {
        return -key(x);
    }
    return maxBy(xs, invKey);
    // Pode apagar tudo em cima e deixar apenas --> return maxBy(xs, x => -key(x)); //função anonima
}
function square(x) {
    return x * x;
}
function len(s) {
    return s.length;
}
console.log(maxBy([-4, 2, 3, -8, 5, 7], square));
console.log(maxBy(['João', 'Maria', 'Fernanda', 'Diego', 'Rodrigo', 'Joana'], s => s.length)); //assim não é necessário mais utilizar o length
function grade(s) {
    switch (s) {
        case 'Maria': return 10;
        case 'João': return 8;
        case 'Joana': return 6;
        case 'Diego': return 2;
        default: return 4;
    }
}
console.log(maxBy(['João', 'Maria', 'Fernanda', 'Diego', 'Rodrigo', 'Joana'], grade));
function invGrade(s) {
    return -grade(s);
}
console.log(maxBy(['João', 'Maria', 'Fernanda', 'Diego', 'Rodrigo', 'Joana'], invGrade));
console.log(minBy(['João', 'Maria', 'Fernanda', 'Diego', 'Rodrigo', 'Joana'], grade));
