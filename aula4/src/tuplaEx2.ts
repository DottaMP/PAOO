/*Para ser uma lista tem de ser uma dupla, primeiro componente é número e o segundo tem de ser uma lista
number: cabeça da lista 
a lista é a cauda
Não pode inverter as posições na tupla.

type NaoVazia = [number, Lista]
type Lista = NaoVazia | undefined;

//funções extratoras
function cabeca(lista: NaoVazia): number {
    return lista [0];
}

function cauda(lista: NaoVazia): Lista {
    return lista[1];
}

//função construtura
function eh_vazia(lista: Lista): boolean {
    return lista == undefined;
}

function constroi(cabeca: number, cauda: Lista): Lista {
    return [cabeca, cauda];
}

//Recebe inicio <= fim
//Devolve uma lista com os números inicio, inicio+1, ..., end-1
function cria_lista(inicio: number, fim:number): Lista {
    /*if (inicio == fim) return undefined;
    return constroi(inicio, cria_lista(inicio+1, fim));
    Ou jeito
    return inicio == fim
            ? undefined //if
            : constroi(inicio, cria_lista(inicio+1, fim)); //else
}

function para_string(lista: Lista): string {
    return lista == undefined
            ? 'undefined'
            : `[${cabeca(lista)}, ${para_string(cauda(lista))}]`//($ fala que o que dentro é a chamada de uma função - referência para chamar uma variável ou função)
}

const lista = cria_lista(2, 6);
console.log(para_string(lista));*/