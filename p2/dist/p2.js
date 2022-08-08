"use strict";
;
class Simples {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        this.superPartes = [];
    }
    ;
    // Pega o valor da peça simples
    getValor() { return this.valor; }
    ;
    // Adiciona uma nova peça composta como super parte
    adicionaSuperParte(parte) {
        // Se a peça composta já não estiver na lista de super partes ela sera adiciona
        if (!this.superPartes.includes(parte.nome)) {
            this.superPartes.push(parte.nome);
        }
        ;
        // Adiciona tambem as super partes da peça composta caso ja não estejam na lista de super partes
        for (const item of parte.getSuperParte()) {
            if (!this.superPartes.includes(item)) {
                this.superPartes.push(item);
            }
            ;
        }
        ;
    }
    ;
    // Pega a lista de super partes da peça
    getSuperParte() { return this.superPartes; }
    ;
}
;
class Composta {
    constructor(nome) {
        this.nome = nome;
        this.partes = [];
        this.superPartes = [];
        this.simples = [];
    }
    ;
    // Adiciona uma nova peça composta como super parte
    adicionaSuperParte(parte) {
        // Se a peça composta já não estiver na lista de super partes ela sera adiciona
        if (!this.superPartes.includes(parte.nome)) {
            this.superPartes.push(parte.nome);
        }
        ;
        // Adiciona tambem as super partes da peça composta caso ja não estejam na lista de super partes
        for (const item of parte.getSuperParte()) {
            if (!this.superPartes.includes(item)) {
                this.superPartes.push(item);
            }
            ;
        }
        ;
    }
    ;
    // Adiciona uma nova parte a peça composta
    adicionaParte(parte, qtd) {
        // Inclui nova parte na lista de partes
        this.partes.push([parte, qtd]);
        // Caso nova parte seja uma peça simples adiciona ela na lista se ela não estiver
        if (parte instanceof Simples) {
            if (!this.simples.includes(parte.nome))
                this.simples.push(parte.nome);
        }
        ;
        // Caso a nova parte seja uma peça composta adiciona as peças simples dela na lista se elas não estiverem
        if (parte instanceof Composta) {
            for (const nomeSimples of parte.simples) {
                if (!this.simples.includes(nomeSimples))
                    this.simples.push(nomeSimples);
            }
            ;
        }
        ;
    }
    ;
    // Pega o valor da peça composta de maneira recursiva para pegar o valor das peças compostas
    getValor() {
        let valor = 0;
        for (const [parte, qtd] of this.partes) {
            valor += parte.getValor() * qtd;
        }
        ;
        return valor;
    }
    ;
    // Pegas a lista de peças simples
    getSimples() { return this.simples; }
    ;
    // Pega a lista de super partes
    getSuperParte() { return this.superPartes; }
    ;
}
;
class Fabrica {
    constructor() {
        this.pecasSimples = new Map();
        this.pecasCompostas = new Map();
    }
    // Cria uma nova peça simples
    criaSimples(nome, valor) { this.pecasSimples.set(nome, new Simples(nome, valor)); }
    ;
    // Cria uma nova peça composta
    criaComposta(nome) { this.pecasCompostas.set(nome, new Composta(nome)); }
    ;
    // Adiciona uma nova parte a uma peça composta
    adicionaParte(nomeSuper, nomeSub, qtd) {
        // Pega a peça composta
        const newSuper = this.pecasCompostas.get(nomeSuper);
        // Pega a peça que sera a nova parte da composta
        const newSub = this.pecasSimples.get(nomeSub) != undefined ?
            this.pecasSimples.get(nomeSub) : this.pecasCompostas.get(nomeSub);
        /*
        o comando acima é a mesma coisa que:
 
        let newSub;
        if(this.pecasSimples.get(nomeSub) != undefined){
            newSub = this.pecasSimples.get(nomeSub);
        }else{
            newSub = this.pecasCompostas.get(nomeSub);
        };
        
        */
        // Verifica se a peça composta existe e encerra a função caso ela não exista
        if (newSuper == undefined) {
            console.log('Peça super não existe');
            return;
        }
        ;
        // Verifica se a peça composta existe e encerra a função caso ela não exista
        if (newSub == undefined) {
            console.log('Peça sub não existe');
            return;
        }
        ;
        // Adiciona a nova parte na peça composta
        newSuper.adicionaParte(newSub, qtd);
        // Adiciona na lista de super partes na peça que sera parte da peça composta
        newSub.adicionaSuperParte(newSuper);
        // Adiciona a peça composta na lista de super partes de todas as peças que tem a sub parte como super partes 
        for (const [nome, peca] of this.pecasSimples) {
            if (peca.getSuperParte().includes(newSub.nome))
                peca.adicionaSuperParte(newSuper);
        }
        ;
        for (const [nome, peca] of this.pecasCompostas) {
            if (peca.getSuperParte().includes(newSub.nome))
                peca.adicionaSuperParte(newSuper);
        }
        ;
    }
    ;
    // Pega o valor de uma determinada peça
    getValor(nomePeca) {
        // Pega na lista de peças a peça em questão
        const peca = this.pecasSimples.get(nomePeca) != undefined ?
            this.pecasSimples.get(nomePeca) : this.pecasCompostas.get(nomePeca);
        // Verifica se a peça existe e retorna 0 caso não exista
        if (peca == undefined) {
            console.log('Peça não existe');
            return 0;
        }
        ;
        // Retorna o valor da peça
        return peca.getValor();
    }
    ;
    // Pega a lista de peças simples que fazem parte de uma peça composta
    getSimples(nomeComposta) {
        // Pega a peça composta em questão
        const composta = this.pecasCompostas.get(nomeComposta);
        // Verifica se ela existe
        if (composta == undefined) {
            console.log('Peça composta não existe');
            return;
        }
        ;
        // Retorna a lista de peças simples
        return composta.getSimples();
    }
    ;
    // Pega uma lista de todos os item que tem um valor a baixo de um valor x
    getItemAbaixoValor(valor) {
        const items = [];
        // Pega todas as peças simples com o valor abaixo de x
        for (const [nome, peca] of this.pecasSimples) {
            if (peca.getValor() <= valor)
                items.push(nome);
        }
        ;
        // Pega todas as peças compostas com o valor abaixo de x
        for (const [nome, peca] of this.pecasCompostas) {
            if (peca.getValor() <= valor)
                items.push(nome);
        }
        ;
        return items;
    }
    // Retorna uma lista com as peças em ordem não-decrescente de valor
    emOrdemValor() {
        let items = [];
        const ordenada = [];
        // Pega todas as peças simples
        for (const [nome, peca] of this.pecasSimples) {
            items.push([nome, peca.getValor()]);
        }
        ;
        // Pega todas as peças Compostas
        for (const [nome, peca] of this.pecasCompostas) {
            items.push([nome, peca.getValor()]);
        }
        ;
        // Ordenas as peças de acordo com o valor
        items = items.sort((a, b) => a[1] - b[1]);
        // Pega os nomes das peças já em ordem
        for (const item of items)
            ordenada.push(item[0]);
        // Retorna a lista das peças
        return ordenada;
    }
    ;
    // Questão 5 que eu não entendi
    questaoV() { }
    ;
    // Pega a lista de super partes de uma peça
    getSuperParte(nomePeca) {
        // Pega a peça em questão
        const peca = this.pecasSimples.get(nomePeca) != undefined ?
            this.pecasSimples.get(nomePeca) : this.pecasCompostas.get(nomePeca);
        // Verifica se a peça existe
        if (peca != undefined) {
            // Caso ela exista, retorna a lista de super partes
            return peca.getSuperParte();
        }
        else {
            // caso não exista, informa o usuario
            console.log('Peça não existe');
            return;
        }
    }
    ;
    // Pega a lista de peças simples
    getPecasSimples() { return this.pecasSimples; }
    // Pega a lista de peças Compostas
    getPecasCompostas() { return this.pecasCompostas; }
}
;
// Criando a fabrica e as peças para o exercicio
const fabrica = new Fabrica();
fabrica.criaSimples('a', 3);
fabrica.criaSimples('b', 6);
fabrica.criaSimples('c', 2);
fabrica.criaSimples('d', 5);
fabrica.criaComposta('e');
fabrica.adicionaParte('e', 'a', 2);
fabrica.adicionaParte('e', 'b', 1);
fabrica.criaComposta('f');
fabrica.adicionaParte('f', 'e', 3);
fabrica.adicionaParte('f', 'b', 2);
fabrica.adicionaParte('f', 'c', 1);
fabrica.criaComposta('g');
fabrica.adicionaParte('g', 'c', 3);
fabrica.adicionaParte('g', 'd', 2);
fabrica.criaComposta('h');
fabrica.adicionaParte('h', 'e', 3);
fabrica.adicionaParte('h', 'f', 2);
fabrica.criaComposta('i');
fabrica.adicionaParte('i', 'h', 2);
fabrica.adicionaParte('i', 'g', 4);
fabrica.criaComposta('j');
fabrica.adicionaParte('j', 'g', 2);
fabrica.adicionaParte('j', 'd', 4);
/*
    Exercicio I
    Dada uma peça composta, deve ser possível determinar o seu valor.
*/
const i = fabrica.getValor('h');
console.log(i);
/*
    Exercicio II
    Para cada peça composta deve ser possível obter uma lista com as peças
    simples que fazem parte da peça composta.
*/
const ii = fabrica.getSimples('j');
console.log(ii);
/*
    Exercicio III
    Dado um valor v deve ser possível obter uma lista com as peças cujo valor é
    no máximo a v
*/
const iii = fabrica.getItemAbaixoValor(5);
console.log(iii);
/*
    Exercicio IV
    Deve ser possível obter uma lista das peças em ordem não-decrescente de
    valor
*/
const iv = fabrica.emOrdemValor();
console.log(iv);
/*
    Exercicio V
    Dado um predicado p deve ser possível obter uma lista com as peças que
    satisfazem p.

*/
const v = 'não entendi a pergunta';
/*
    Exercicio VI
    Dada uma peça simples s deve ser possível obter uma lista com todas as
    peças compostas que possuem s com uma de suas subpeças.

*/
const vi = fabrica.getSuperParte('c');
console.log(vi);
/*
    Imprime as lista de peças simples e compostas
*/
// const s = fabrica.getPecasSimples();
// s.forEach((simples, nome) => { console.log(nome, simples) });
// const c = fabrica.getPecasCompostas();
// c.forEach((composta, nome) => { console.log(nome, composta) });
