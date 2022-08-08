/*3) Neste exercício você vai escrever um conjunto de classes para
resolver o seguinte problema. Sistemas solares são constituídos de sóis, planetas
e luas. As suas classes devem permitir as seguintes operações:
• dado um sol s determinar quais são os planetas que orbitam s,
• dado um sol s determinar quais são as luas que orbitam s,
• dado um planeta p determinar quais luas orbitam p.
• dado um vetor de sóis determinar qual dentre este sóis é orbitado por um número máximo de planetas.
• dado um vetor de planetas determinar qual dentre estes planetas é orbitado por um número máximo de luas.*/

class Sol {
    private static nextId = 0;
    private _id: number;
    private readonly planetas: Planeta[] = [];
    constructor(readonly nome: string, planetas: Planeta[]){
        this._id = +Sol.nextId;
        for (const planeta of planetas){
            this.planetas.push(planeta);
        }
    }
    get id() {
        return this._id;
    }
    *getPlanetas(): Generator<Planeta, void> { //função geradora
        for (const planeta of this.planetas) {
            yield planeta;

        }
    }
    numeroDePlanetas(): number {
        return this.planetas.length;
    }

    *getLuas(): Generator<Lua, void> { //função geradora
        for (const planeta of this.planetas) {
            for (const lua of planeta.getLuas()) {
                yield lua;
            }

        }
    }
}

function solMaisPopuloso(sois: Sol[]): Sol | undefined {
    if (sois.length == 0){
        return undefined;
    } 
    /*let cand = sois[0];
    for (const sol of sois){
        if (sol.numeroDePlanetas() > cand.numeroDePlanetas()) {
            cand = sol;
        }
    }*/   
    return sois.reduce((cand, sol) => sol.numeroDePlanetas() > cand.numeroDePlanetas()
        ? sol
        : cand);

}

class Planeta {
    private static nextId = 0;
    private _id: number;
    private readonly luas: Lua[] = [];
    constructor(readonly nome: string, luas: Lua[]){
        this._id = +Planeta.nextId;
        for (const lua of luas){
            this.luas.push(lua);
        }
    }
    get id() {
        return this._id;
    }
    *getLuas(): Generator<Lua, void> { //função geradora
        for (const lua of this.luas) {
            yield lua;

        }
    }
}

class Lua {
    //favoreça sempre classes imutáveis
    //e os objetos nomeados são imutáveis também.
    private static nextId = 0 //existe independente de qualquer objeto da classe.
    private _id: number;
    constructor(readonly nome: string = 'lua') { //string em ts é imutável. argumento default 'lua'
        this._id = ++Lua.nextId;

    }

    get id() {
        return this._id;
    }
}

const luas1 = [new Lua('Lua 1'), new Lua('Lua 2')];
const planeta1 = new Planeta('Planeta 1', luas1);
const luas2 = [new Lua('Lua 3'), new Lua('Lua 4')];
const planeta2 = new Planeta('Planeta 2', luas2);
const sol = new Sol ('Sol', [planeta1, planeta2]);
for (const planeta of sol.getPlanetas()){
    console.log(planeta.nome);
}
for (const lua of sol.getLuas()){
    console.log(lua.nome);
}

/*const luas1 = [new Lua('Lua 1'), new Lua('Lua 2')];
const planeta1 = new Planeta('Planeta 1', luas1);
const luas2 = [new Lua('Lua 3'), new Lua('Lua 4')];
const planeta2 = new Planeta('Planeta 2', luas2);
const sol1 = new Sol ('Sol 1', [planeta1, planeta2]);
const sol2 = new Sol ('Sol 2', [planeta1, planeta2, planeta1, planeta2]);
const sol = solMaisPopuloso([sol1, sol2]);
console.log(sol == undefined ? 'nenhum' : sol.nome);
*/