/*interface ASet {
    add(x: number): void;
    remove(x: number): void;
    has(x: number): boolean;
}*/

//generating function: função geradora (em geral a função geradora não devolve nada, apenas produz uma saída)
function *nums(): Generator<number, void> { // * significa que é uma função gerador | number: produz um número e o void não devolve nada | gerador de números, ou seja vai produzir número e não vai devolver nada
    yield 4; //gera e produz o valor
    yield 6; //gera e produz o valor
    yield 3; //gera e produz o valor
}

/*for (const x of nums()){
    console.log(x);
}*/

const it = nums();
console.log(it.next()); //devolve um objeto
console.log(it.next());
console.log(it.next());
console.log(it.next());
