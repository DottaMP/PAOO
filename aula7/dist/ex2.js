"use strict";
/*interface ASet {
    add(x: number): void;
    remove(x: number): void;
    has(x: number): boolean;
}*/
//generating function: função geradora (em geral a função geradora não devolve nada, apenas produz uma saída)
function* nums() {
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
