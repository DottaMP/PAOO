"use strict";
//comentários sobre a p1.
// pre-condição: xs.length > 0;
/*function maxMin(xs: number[]): [number, number]{
    let min = xs[0];
    let max = xs[0];
    for (const x of xs){
        if (x < min){
            min = x;
        } else if (max < x){
            max = x;
        }
    }
    return [max, min];
}*/
//função genérica
function maxMin(xs, less) {
    let min = xs[0];
    let max = xs[0];
    for (const x of xs) {
        if (less(x, min)) {
            min = x;
        }
        else if (less(max, x)) {
            max = x;
        }
    }
    return [max, min];
}
const vs = [11, 33, 89, 6, 4, 29, 30];
console.log(maxMin(vs, (x, y) => x < y)); //no momento da chamada fala qual o comportamentoda função.
console.log();
