"use strict";
console.log(((x) => x)(5)); // arrow function (do ponto do código para baixo) -> (x: number)=>x) define uma função que não tem nome (anonima) e que é aplicado imediatamente.
// Está sendo aplicado o valor x a função.
const sq = (x) => x * x;
console.log(sq(5));
//critério de nomear ou não uma função: é uma questão de uso, por exemplo se a função for utilizada em mais lugares, o ideal é nomear.
const maximo = (xs) => {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (x > cand)
            cand = x;
    return cand;
};
console.log(maximo([1, 10, 4, 5]));
function maximo2(x, y) {
    return x >= y ? x : y;
}
