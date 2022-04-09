"use strict";
//funções extratoras
function cabeca(lista) {
    return lista[0];
}
function cauda(lista) {
    return lista[1];
}
//função construtura
//avisar ao compilador que é undefined, se devolver o falso é não vazia e com isso vai para a cabeça.
//se for indefined
function ehVazia(lista) {
    return lista == undefined;
}
function vazia() {
    return undefined;
}
function constroi(cabeca, cauda) {
    return [cabeca, cauda];
}
//Recebe inicio <= fim
//Devolve uma lista com os números inicio, inicio+1, ..., end-1
function criaLista(inicio, fim) {
    /*if (inicio == fim) return undefined;
    return constroi(inicio, criaLista(inicio+1, fim));
    Ou jeito*/
    return inicio == fim
        ? vazia() //if
        : constroi(inicio, criaLista(inicio + 1, fim)); //else
}
function paraString(lista) {
    return ehVazia(lista)
        ? 'vazia'
        : `[${cabeca(lista)}, ${paraString(cauda(lista))}]`; //($ fala que o que dentro é a chamada de uma função - referência para chamar uma variável ou função)
}
function map(lista, f) {
    return ehVazia(lista)
        ? vazia()
        : constroi(f(cabeca(lista)), map(cauda(lista), f));
}
//// cada vez que chama um map ou um filter ele vai chamar um array novo.
//function para saber o que vai receber e o que vai devolver
function filter(lista, test) {
    if (ehVazia(lista)) {
        return vazia();
    }
    const resto = filter(cauda(lista), test);
    return test(cabeca(lista))
        //operador ternário tá envolvido em uma expressão que produz um valor
        ? constroi(cabeca(lista), resto) //se
        : resto; //senão
}
function reduce(lista, op, inicial) {
    return ehVazia(lista)
        ? inicial //se é vazia devolve o valor inicial
        : reduce(cauda(lista), op, op(inicial, cabeca(lista))); //senão reduza o resto da lista, depois injete o operador no valor inicial na cabeça da lista.
    //releitura: ([2 1 5], +,  0) (lista com 2, 1 e 5, onde o primeiro valor é 2 e o inicial é zero)
    //= reduce ([1 5], +, 2) (o arumento (valor inicial) passa a se 2)
    //= reduce ([5], +, 3) (o argumento passa a ser 3, pois 2 argumento anterior + 1 primeiro valor da lista)
    //= reduce ([], +, 8) (o argumento passa a ser 8, pois 3 argumento anterior + 5 primeiro valor da lista))
}
const strs = constroi('maria', constroi('joana', constroi('amanda', undefined)));
const comprimentos = map(strs, s => s.length);
console.log(comprimentos);
const ns = constroi(2, constroi(4, constroi(3, vazia())));
console.log(paraString(filter(ns, x => x > 2)));
console.log(reduce(ns, (acc, x) => acc + x, 0));
