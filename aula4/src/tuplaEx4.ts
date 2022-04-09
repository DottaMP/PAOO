type NaoVazia<A> = [A, Lista<A>]
type Lista<A> = NaoVazia<A> | undefined;

//funções extratoras
function cabeca<A>(lista: NaoVazia<A>): A {
    return lista [0];
}

function cauda<A>(lista: NaoVazia<A>): Lista<A> {
    return lista[1];
}

//função construtura
function eh_vazia<A>(lista: Lista<A>): boolean {
    return lista == undefined;
}

function constroi<A>(cabeca: A, cauda: Lista<A>): NaoVazia<A> {
    return [cabeca, cauda];
}

//Recebe inicio <= fim
//Devolve uma lista com os números inicio, inicio+1, ..., end-1
function cria_lista(inicio: number, fim:number): Lista<number> {
    /*if (inicio == fim) return undefined;
    return constroi(inicio, cria_lista(inicio+1, fim));
    Ou jeito*/
    return inicio == fim
            ? undefined //if
            : constroi(inicio, cria_lista(inicio+1, fim)); //else
}

function para_string<A>(lista: Lista<A>): string {
    return lista == undefined
            ? 'undefined'
            : `[${cabeca(lista)}, ${para_string(cauda(lista))}]`//($ fala que o que dentro é a chamada de uma função - referência para chamar uma variável ou função)
}

function map<A, B>(lista: Lista<A>, f: (a: A) => B): Lista<B>{//recebe lista de valores do tipo A e o resultado será o tipo de valor do tipo B
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
const comprimentos = map (strs, s => s.length);
console.log(comprimentos);