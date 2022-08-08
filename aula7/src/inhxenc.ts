class Coll {
    private elements: number[] = [];

    add(x: number) {
        this.elements.push(x);
    }

    addAll(xs: number[]) {
        for (const x of xs) {
            this.add(x);
        }
    }
}

class CntColl extends Coll {
    private _size = 0; //conta a qtd de elementos que satisfazem prop

    get size() {
        return this.size;
    }

    constructor(private prop: (x: number) => boolean) {
        super();
    }

    override add(x: number) {
        if (this.prop(x)) {
            ++this._size;
        }
        super.add(x);
    }
}