"use strict";
class Coll {
    constructor() {
        this.elements = [];
    }
    add(x) {
        this.elements.push(x);
    }
    addAll(xs) {
        for (const x of xs) {
            this.add(x);
        }
    }
}
class CntColl extends Coll {
    constructor(prop) {
        super();
        this.prop = prop;
        this._size = 0; //conta a qtd de elementos que satisfazem prop
    }
    get size() {
        return this.size;
    }
    add(x) {
        if (this.prop(x)) {
            ++this._size;
        }
        super.add(x);
    }
}
