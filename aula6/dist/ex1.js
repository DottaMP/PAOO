"use strict";
/* Versão 1 (não utilizar essa)
class Pessoa {
    //bom hábito é documentar o invariante da classe
    // invariante (está preservado sempre): nome.length > 0 && idade > 0
    //tem de limitar o acesso para cada um dos atributos da classe.
    //não usar public
    private nome: string;
    private idade: number;
    
    constructor (nome: string, idade: number){ //var local
        if (nome.length == 0) throw new Error ('Nome invalido'); //exceção
        if (idade < 0) throw new Error ('Idade invalido'); //exceção
        this.nome = nome; //ref. a var classe Pessoa
        this.idade = idade; //ref. a var classe Pessoa
    }

    getNome(){
        return this.nome;
    }
}*/
/* Versão 2
class Pessoa {
    //bom hábito é documentar o invariante da classe
    //invariante (está preservado sempre): nome.length > 0 && idade > 0
    //tem de limitar o acesso para cada um dos atributos da classe.
    //não usar public
    //usar o _ no atributo e o get e setters é o nome sem o _
    private _nome: string;
    private _idade: number;
    
    constructor (nome: string, idade: number){ //var local
        if (nome.length == 0) throw new Error ('Nome invalido'); //exceção
        if (idade < 0) throw new Error ('Idade invalido'); //exceção
        this._nome = nome; //ref. a var classe Pessoa
        this._idade = idade; //ref. a var classe Pessoa
    }

    get nome(){
        return this._nome;
    }

    //garantir a invariante para que não seja possível entrar com nada por exemplo, inserindo a exceção.
    set nome(umNome: string) {
        console.log('chamou o setter')
        if (umNome.length == 0) throw new Error ('Nome invalido'); //exceção
        this._nome = umNome;
    }

    get idade(){
        return this._idade;
    }
}
const joao = new Pessoa('João', 20);
joao.nome = 'João Manuel'
console.log (joao.nome);
*/
class Pessoa {
    constructor(_nome, _idade) {
        this._nome = _nome;
        this._idade = _idade;
        if (this._nome.length == 0)
            throw new Error('Nome invalido'); //exceção
        if (this._idade < 0)
            throw new Error('Idade invalido'); //exceção
    }
    get nome() {
        return this._nome;
    }
    //garantir a invariante para que não seja possível entrar com nada por exemplo, inserindo a exceção.
    set nome(umNome) {
        console.log('chamou o setter');
        if (umNome.length == 0)
            throw new Error('Nome invalido'); //exceção
        this._nome = umNome;
    }
    get idade() {
        return this._idade;
    }
}
const maria = new Pessoa('Maria', 20);
maria.nome = 'Maria Manuel';
console.log(maria.nome);
