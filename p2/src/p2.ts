/*Observação: Os console log de cada execício estão por último, ao final desse arquivo.

Você deverá resolver o seguinte problema. Suponha que uma fábrica produza peças. Há dois tipos de peças, 
as simples e as compostas. Cada peça simples possui um nome e um valor, além de outras características 
que para o nosso problema não são relevantes. Cada peça composta c é constituída de uma lista de pares(p,m),
onde p é uma peça e m é o número de cópias de p necessárias para se obter c.O valor de uma peça composta é a soma 
do valor de suas peças constituintes, levando-se em conta a multiplicidade de cada uma de tais peças. 
O seu sistema, além de evidentemente representar computacionalmente a descrição acima, deverá satisfazer 
os requisitos que seguem.*/

//Peças da Fabrica
interface Peca {
    nome: string;
    getValor(): number;
    adicionaSuperParte(parte: Peca): void;
    getSuperParte(): Array<string>;
};

//Peças Simples
class Simples implements Peca {
    private superPartes: Array<string> = [];

    //construtor apenas reandonly
    constructor(readonly nome: string, readonly valor: number) { 

    };

    // Irá pegar o valor da peça simples pelo método getValor e retornar o valor.
    getValor(): number { 
        return this.valor 
    };

    // Irá adicionar peça nova composta que será SuperParte
    adicionaSuperParte(parte: Peca): void {
        // ! inverte a função, só entra no if se a função retornar false, ou seja, 
        // se a peça composta não estiver na lista de super partes ela será adiciona nela.
        if (!this.superPartes.includes(parte.nome)) {
            
            this.superPartes.push(parte.nome);
        };
        // ! inverte a função, só entra no if se a função retornar false, ou seja,
        // se as super partes referente a peça composta não estiver na lista das super parte será adiciona nela. 
        for (const item of parte.getSuperParte()) {

            if (!this.superPartes.includes(item)) {

                this.superPartes.push(item);
            };
        };
    };

    // O método getSuperParte irá pegar as super partes da peça a partir de uma lista.
    getSuperParte(): Array<string> { 
        return this.superPartes 
    };
};

//Peças Compostas
class Composta implements Peca {
    constructor(readonly nome: string) { };
    private partes: Array<[Peca, number]> = [];
    private superPartes: Array<string> = [];
    private simples: Array<string> = [];

    // Irá adicionar nova peça Composta como uma SuperParte
    adicionaSuperParte(parte: Peca): void {
        // ! inverte a função, só entra no if se a função retornar false, ou seja, 
        // se a peça composta não estiver na lista de super partes ela será adiciona nela.
        if (!this.superPartes.includes(parte.nome)) {

            this.superPartes.push(parte.nome);
        };

        // ! inverte a função, só entra no if se a função retornar false, ou seja,
        // se as super partes referente a peça composta não estiver na lista das super parte será adiciona nela. 
        for (const item of parte.getSuperParte()) {

            if (!this.superPartes.includes(item)) {

                this.superPartes.push(item);

            };
        };
    };

    // Irá adicionar nova parte (adicionaParte) de Peça Composta
    adicionaParte(parte: Peca, qtd: number): void {

        // Irá incluir uma nova parte de partes na lista
        this.partes.push([parte, qtd]);

        // Se a parte nova for uma peça Simples será adicionado a peça na lista caso não tenha
        if (parte instanceof Simples) {
            // ! inverte a função, só entra no if se a função retornar false
            if (!this.simples.includes(parte.nome))

                this.simples.push(parte.nome);
        };
        // Se a parte nova for uma peça Composta será adicionado as peças Simples da peça na lista caso não tenha
        if (parte instanceof Composta) {

            for (const nomeSimples of parte.simples) {
                // ! inverte a função, só entra no if se a função retornar false
                if (!this.simples.includes(nomeSimples))
                    this.simples.push(nomeSimples);
            };
        };
    };
    
    // O método getValor irá pegar o valor referente a peça composta de forma de recursividade afim de
    // obter o valor de todas as peças compostas.
    getValor(): number {
        let valor = 0;
        for (let [parte, qtd] of this.partes) {
            valor += parte.getValor() * qtd;
        };

        return valor;
    };

    // O método getSimples irá pegar e retornar a lista das peças Simples
    getSimples(): Array<string> { 
        return this.simples; 
    };

    // O método getSuperParte irá pegar e retornar a lista das peças de SuperPartes
    // Pega a lista de super partes
    getSuperParte(): Array<string> { 
        return this.superPartes 
    };
};

// A Fabrica, onde é "feito" as peças a partir de peças simples e compostas.
class Fabrica {
    private pecasSimples: Map<string, Simples> = new Map<string, Simples>();
    private pecasCompostas: Map<string, Composta> = new Map<string, Composta>();

    // Irá criar nova peça Simples
    criaSimples(nome: string, valor: number) { 
        this.pecasSimples.set(nome, new Simples(nome, valor)); 
    };

    // Irá criar uma nova peça Composta
    criaComposta(nome: string) { 
        this.pecasCompostas.set(nome, new Composta(nome)); 
    };

    // Irá adicionar nova parte (adicionaParte) de Peça Composta
    adicionaParte(nomeSuper: string, nomeSub: string, qtd: number): void {

        // A variável novaSuper irá receber a peça composta.
        let novaSuper = this.pecasCompostas.get(nomeSuper);

        // A variável novaSuperNova irá receber a nova parte da peça composta.
        let novaSuperNova = this.pecasSimples.get(nomeSub) != undefined ?
            this.pecasSimples.get(nomeSub) : this.pecasCompostas.get(nomeSub);

        // Irá validar Se a peça composta existe, caso não exista será retornado a msg.
        if (novaSuper == undefined) {
            console.log('NÃO EXISTE A SUPER PEÇA!');
            return;
        };

        // Irá validar Se a peça composta existe, caso não exista será retornado a msg.
        if (novaSuperNova == undefined) {

            console.log('NÃO EXISTE A SUPER PEÇA NOVA!');
            return;
        };

        // Irá adicionar a parte nova na peça composta
        novaSuper.adicionaParte(novaSuperNova, qtd);

        // Irá adicionar a peça na lista da super partes onde fará parte da peça composta
        novaSuperNova.adicionaSuperParte(novaSuper);

        // Irá adicionar a peça na lista da super partes onde fará parte da peça composta que possuí as novaSuperNova
        for (let [nome, peca] of this.pecasSimples) {
            if (peca.getSuperParte().includes(novaSuperNova.nome)) peca.adicionaSuperParte(novaSuper);
        };
        for (let [nome, peca] of this.pecasCompostas) {
            if (peca.getSuperParte().includes(novaSuperNova.nome)) peca.adicionaSuperParte(novaSuper);
        };
    };

    // O método getValor irá pegar o valor de uma peça
    getValor(nomeDaPeca: string): number {
        let peca = this.pecasSimples.get(nomeDaPeca) != undefined ?
            this.pecasSimples.get(nomeDaPeca) : this.pecasCompostas.get(nomeDaPeca);

        if (peca == undefined) {

            console.log('NÃO EXISTE A PEÇA!');
            return 0;
        };
        return peca.getValor();
    };

    // Irá pegar a lista de peças simples que fazem parte de uma peça composta
    getSimples(nomePeçaComposta: string): Array<string> | void {

        const composta = this.pecasCompostas.get(nomePeçaComposta);

        if (composta == undefined) {
            console.log('NÃO EXISTE A PEÇA COMPOSTA!');
            return;
        };
        return composta.getSimples();
    };

    // Irá pegar uma lista de todos os itens que possuí o valor menor do valor y
    getValorMenorDoItem(valor: number): Array<string> {
        let itens: Array<string> = [];

        for (let [nome, peca] of this.pecasSimples) {
            if (peca.getValor() <= valor) itens.push(nome);
        };

        for (let [nome, peca] of this.pecasCompostas) {
            if (peca.getValor() <= valor) itens.push(nome);
        };
        return itens;
    }

    // Irá retornar lista com todas as peças de forma não seja decrescente do valor
    emOrdemdeValor(): Array<string> {
        let itens: Array<[string, number]> = [];
        let ordem: string[] = [];

        for (let [nome, peca] of this.pecasSimples) {
            itens.push([nome, peca.getValor()]);
        };

        for (let [nome, peca] of this.pecasCompostas) {
            itens.push([nome, peca.getValor()]);
        };

        itens = itens.sort((x: [string, number], y: [string, number]) => x[1] - y[1]);

        for (let item of itens) ordem.push(item[0]);

        return ordem;
    };

    // Irá pegar a lista das super partes da peça
    getSuperParte(nomeDaPeca: string): Array<string> | void {

        let peca = this.pecasSimples.get(nomeDaPeca) != undefined ?
            this.pecasSimples.get(nomeDaPeca) : this.pecasCompostas.get(nomeDaPeca);

        if (peca != undefined) {

            return peca.getSuperParte();
        } else {

            console.log('PEÇA NÃO EXISTE!');
            return;
        }
    };

    // Irá pegar a peça de peças simples
    getSimplesPeca(): Map<string, Simples> { 
        return this.pecasSimples 
    }

    // Irá pegar a peça de peças compostas
    getCompostasPeca(): Map<string, Composta> { 
        return this.pecasCompostas 
    }
};

// Fazendo a fábrica funcionar:
let fabrica = new Fabrica();
fabrica.criaSimples('m', 15);
fabrica.criaSimples('o', 30);
fabrica.criaSimples('i', 12);
fabrica.criaSimples('j', 3);
fabrica.criaSimples('k', 5);
fabrica.criaSimples('l', 1);
fabrica.criaSimples('w', 2);
fabrica.criaComposta('t');
fabrica.adicionaParte('t', 'm', 5);
fabrica.adicionaParte('t', '0', 7);
fabrica.criaComposta('n');
fabrica.adicionaParte('n', 'f', 1);
fabrica.adicionaParte('n', 'k', 11);
fabrica.adicionaParte('n', 'w', 3);
fabrica.criaComposta('z');


/*(i) Dada uma peça composta, deve ser possível determinar o seu valor.*/
console.log("\n(primeiro):");
const primeiro = fabrica.getValor('t');
console.log(primeiro);

/*(ii) Para cada peça composta deve ser possível obter uma lista com as peças
simples que fazem parte da peça composta.*/
console.log("\n(segundo):");
const segundo = fabrica.getSimples('n');
console.log(segundo);

/*(iii) Dado um valorvdeve ser possível obter uma lista com as peças cujo valor éno máximo av.*/
console.log("\n(terceiro):");
const terceira = fabrica.getValorMenorDoItem(11);
console.log(terceira);

/*(iv) Deve ser possível obter uma lista das peças em ordem não-decrescente devalor.*/
console.log("\n(quarto):");
const quarta = fabrica.emOrdemdeValor();
console.log(quarta)

/*(v) Dado um predicado p deve ser possível obter uma lista com as peças quesatisfazemp.*/
console.log("\n(quinto):");
const quinto = ;

/*(vi) Dada uma peça simplessdeve ser possível obter uma lista com todas aspeças compostas 
que possuemscom uma de suas subpeças.*/
console.log("\n(sexto):");
const sexto = fabrica.getSuperParte('c');
console.log(sexto);

