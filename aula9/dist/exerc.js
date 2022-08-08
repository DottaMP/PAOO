"use strict";
//Grupo: Mayara, Alana, Diego e Jaqueline
/*1) Considere a seguinte interface cujo propósito é descrever uma sequência de ints:
interface Seq {
    value(): number;next():void;
}
O método get devolve o elemento atual da sequência e o método next produz o próximo elemento da sequência.*/
/*(a) Defina uma classe IncByOne que implementa a interface Seq, que possuí dois construtores, o default que
inicia o contador com zero e um outro que recebe um valor inicial e inicia a sequência com este valor,
e tal que a operação next satisfaz: se c:IncByOne e c.value() é igual a v, então após c.next() a chamada c.value() devolve v+1.*/
class IncByOne {
    constructor(initialValue = 0) {
        this.current = initialValue;
    }
    value() {
        return this.current;
    }
    next() {
        this.current += 1;
    }
}
/*(b) Derive da classe que você escreveu em (a) uma subclasse IncByTwo que
satisfaz: se c:IncByTwo e c.value() é igual a v, então após c.next()
a chamada c.value() devolve v + 2.*/
class IncByTwo extends IncByOne {
    next() {
        this.current += 2;
    }
}
/*(c) Implemente uma outra versão de IncByTwo usando composição em
vez de herança.*/
class IncByTwoAlt {
    constructor(initialValue = 0) {
        this.incByOne = new IncByOne(initialValue);
    }
    value() {
        return this.incByOne.value();
    }
    next() {
        let times = 0;
        while (times < 2) {
            this.incByOne.next();
            times++;
        }
    }
}
/*Qual das alternativas dentre (b) e (c) está correta? Justifique.

Ambas estão corretas, porém de forma geral a herança deve ser pouco utilizada.
Atualmente a composição é considerada muito superior à herança na maioria dos
casos pois entre as suas principais vantagens a composição permite mudar a associação
entre classes em tempo de execução, os objetos podem assumir mais de um comportamento,
os projetos são mais simples e reutilizáveis, além de descartar os problemas envolvendo
a herança como o acoplamento entre as classes e outros problemas discutidos. */
//(a)
console.log("a)");
let a = new IncByOne();
console.log("\Valor inicial");
console.log(a.value());
console.log("\Valor Next");
a.next();
console.log(a.value());
//(b)
console.log("b)");
let b = new IncByTwo();
console.log("Valor inicial");
console.log(b.value());
console.log("Valor Next");
b.next();
console.log(b.value());
//(c)
console.log("c)");
let c = new IncByTwoAlt();
console.log("Valor inicial");
console.log(c.value());
console.log("Valor Next");
c.next();
console.log(c.value());
/*3) Neste exercício você vai escrever um conjunto de classes para
resolver o seguinte problema. Sistemas solares são constituídos de sóis, planetas
e luas. As suas classes devem permitir as seguintes operações:
• dado um sol s determinar quais são os planetas que orbitam s,
• dado um sol s determinar quais são as luas que orbitam s,
• dado um planeta p determinar quais luas orbitam p.
• dado um vetor de sóis determinar qual dentre este sóis é orbitado por um número máximo de planetas.
• dado um vetor de planetas determinar qual dentre estes planetas é orbitado por um número máximo de luas.*/
class Sol {
    planetasQueOrbitam() {
        return this.planetas;
    }
    luasQueOrbitam() {
        return this.luas;
    }
    maximoDePlanetas(sois) {
        let maximo = new Sol;
        for (let sol of sois) {
            if (sol.planetas.length > maximo.planetas.length)
                maximo = sol;
        }
        return maximo;
    }
}
class Planeta {
    luasQueOrbitam() {
        return this.luas;
    }
    maximoDeLuas(planetas) {
        let maximo = new Planeta;
        for (let planeta of planetas) {
            if (planeta.luas.length > maximo.luas.length)
                maximo = planeta;
        }
        return maximo;
    }
}
class Lua {
}
class Green {
    constructor() { }
    next() {
        return Yellow.light;
    }
}
class Yellow {
    constructor() { }
    next() {
        return Red.light;
    }
}
class Red {
    next() {
        return Green.light;
    }
}
