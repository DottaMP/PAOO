"use strict";
class GSet {
    //invariante: elements não possuí elementos repetidos
    constructor(equals) {
        this.equals = equals;
        this.elements = [];
    }
    has(k) {
        return this.elements.findIndex(a => this.equals(k, a)) != -1; //devolve -1 caso não esteja presente
    }
    add(k) {
        const idx = this.elements.findIndex(a => this.equals(k, a));
        if (idx != -1)
            return;
        this.elements.push(k);
    }
    remove(k) {
        const idx = this.elements.findIndex(a => this.equals(k, a));
        if (idx != -1) {
            this.elements[idx] = this.elements[this.elements.length - 1];
            this.elements.pop();
        }
    }
    *getElements() {
        for (const a of this.elements)
            yield a;
    }
}
class Box {
    constructor(value) {
        this.value = value;
    }
}
function test() {
    const set = new GSet((a, b) => Math.abs(a.value) == Math.abs(b.value));
    set.add(new Box(10));
    set.add(new Box(20));
    console.log(set.has(new Box(20)));
    //nesse caso a comparação irá devolver false, pois não está comparando valores e sim objetos.
    //precisa redefinir o comportamento do equals (pois o default do equals é comparar endereço de memória e não valores)
    //console.log(b1 == b2); 
    //foi criado a função equals com o constructor(private equals: (a: A, b: A) => boolean) para redefinir o comportamento
}
function cnt(xs, eq, k) {
    let c = 0;
    for (const x of xs) {
        if (eq(k, x)) {
            ++c;
        }
    }
    return c;
}
function test3() {
    const xs = [1, -2, 2, 2, 4, -2];
    console.log(cnt(xs, (a, b) => Math.abs(a) == Math.abs(b), 2));
}
test3();
//const b = new Box(10);
//const xs = [new Box(10), new Box(20), new Box(30)];
//console.log(xs.indexOf(new Box(10))); nesse caso não irá achar, pois procura pela posição(objeto) e não pelo valor.
//console.log(xs.findIndex(b => b.value == 30)); //findIndex devolve o primeiro objeto do array que satisfaz o predicado.
//const xs = [1, 4, 6, 7, 2, 5, 2];
//console.log(xs.indexOf(10)) //devolve a primeira ocorrência (a posição do valor do vetor), caso devolva -1 quer dizer que o número não existe no vetor.
