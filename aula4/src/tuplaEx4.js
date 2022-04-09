"use strict";
//funções extratoras
function cabeca(lista) {
    return lista[0];
}
function cauda(lista) {
    return lista[1];
}
//função construtura
function eh_vazia(lista) {
    return lista == undefined;
}
function constroi(cabeca, cauda) {
    return [cabeca, cauda];
}
//Recebe inicio <= fim
//Devolve uma lista com os números inicio, inicio+1, ..., end-1
function cria_lista(inicio, fim) {
    /*if (inicio == fim) return undefined;
    return constroi(inicio, cria_lista(inicio+1, fim));
    Ou jeito*/
    return inicio == fim
        ? undefined //if
        : constroi(inicio, cria_lista(inicio + 1, fim)); //else
}
function para_string(lista) {
    return lista == undefined
        ? 'undefined'
        : `[${cabeca(lista)}, ${para_string(cauda(lista))}]`; //($ fala que o que dentro é a chamada de uma função - referência para chamar uma variável ou função)
}
function map(lista, f) {
    return lista == undefined
        ? undefined
        : constroi(f(cabeca(lista)), map(cauda(lista), f));
}
/*const lista = cria_lista(2, 6);
const outra = cria_lista(10, 20);
const ll = constroi(lista, constroi(outra, undefined));//lista de listas
console.log(cabeca(ll));
console.log(para_string(lista));
const nomes = constroi('maria', constroi('joana', undefined));
console.log(para_string(nomes));*/
const strs = constroi('maria', constroi('joana', constroi('amanda', undefined)));
const comprimentos = map(strs, s => s.length);
console.log(comprimentos);
