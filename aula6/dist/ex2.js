"use strict";
//Importante!
//1 deixar vazar uma referência da classe
//2 não ter invariante
/* versão errada
class NSet {
    //invariante
    //o array elements não contem elementos repetidos
    private _elements: number[] = [];
    get elements() {
        return this._elements;
    }
}

const s = new NSet();
const es = s.elements;
es.push(10);
es.push(10);
console.log(s.elements);*/
//versão correta
// só incluí o _ no elements se houvesse get e set
class NSet {
    constructor(xs) {
        //invariante
        //o array elements não contem elementos repetidos
        this.elements = [];
        for (const x of xs) {
            this.add(x);
        }
    }
    //documentação "o quê?"
    //para cada objeto obj: NSet e cada x: number vale que:
    //obj.add(x)
    //obj.has(x) -> true
    add(x) {
        //preservar o invariante
        const idx = this.elements.indexOf(x);
        //documentação "como?"
        //se idx == -1 então x não é elemento de elements
        if (idx == -1)
            this.elements.push(x);
    }
    has(x) {
        return this.elements.indexOf(x) != -1;
    }
    //documentação "o quê?"
    //para cada objeto obj: NSet e cada x: number vale que:
    //obj.remove(x)
    //obj.has(x) -> false
    remove(x) {
        const idx = this.elements.indexOf(x);
        if (idx != -1) {
            const last = this.elements.length - 1;
            this.elements[idx] = this.elements[last];
            this.elements.pop();
        }
    }
}
const conj = new NSet([1, 4, 2, 1, 1, 3]);
conj.add(8);
console.log(conj.has(8));
conj.remove(1);
console.log(conj.has(1));
