/*1) Considere a seguinte interface cujo propósito é descrever uma sequência de ints:
interface Seq {
    value(): number;next():void;
}
O método get devolve o elemento atual da sequência e o método next produz o próximo elemento da sequência.*/

interface Seq {
    value(): number;
    next(): void;
}

/*(a) Defina uma classe IncByOne que implementa a interface Seq, que possuí dois construtores, o default que 
inicia o contador com zero e um outro que recebe um valor inicial e inicia a sequência com este valor, 
e tal que a operação next satisfaz: se c:IncByOne e c.value() é igual a v, então após c.next() a chamada c.value() devolve v+1.*/
class IncByOne implements Seq {
    current: number;
    constructor(initialValue: number = 0) {
        this.current = initialValue;
    }
    value(): number {
        return this.current;
    }

    next(): void {
        this.current+=1;
    }
}

/*(b) Derive da classe que você escreveu em (a) uma subclasse IncByTwo que
satisfaz: se c:IncByTwo e c.value() é igual a v, então após c.next()
a chamada c.value() devolve v + 2.*/
class IncByTwo extends IncByOne implements Seq {
    next(): void {
        this.current+=2;
    }
}

/*(c) Implemente uma outra versão de IncByTwo usando composição em
vez de herança.*/
class IncByTwoAlt implements Seq {
    incByOne: IncByOne;
    constructor(initialValue: number = 0) {
      this.incByOne = new IncByOne(initialValue);
    }
    
    value(): number {
      return this.incByOne.value();
    }
  
    next(): void {
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
let a= new IncByOne();
console.log("\Valor inicial");
console.log(a.value());
console.log("\Valor Next");
a.next();
console.log(a.value());

//(b)
console.log("b)");
let b= new IncByTwo();
console.log("Valor inicial");
console.log(b.value());
console.log("Valor Next");
b.next();
console.log(b.value());

//(c)
console.log("c)");
let c= new IncByTwoAlt();
console.log("Valor inicial");
console.log(c.value());
console.log("Valor Next");
c.next();
console.log(c.value());