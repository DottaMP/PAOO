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


/*3) Neste exercício você vai escrever um conjunto de classes para
resolver o seguinte problema. Sistemas solares são constituídos de sóis, planetas
e luas. As suas classes devem permitir as seguintes operações:
• dado um sol s determinar quais são os planetas que orbitam s,
• dado um sol s determinar quais são as luas que orbitam s,
• dado um planeta p determinar quais luas orbitam p.
• dado um vetor de sóis determinar qual dentre este sóis é orbitado por um número máximo de planetas.
• dado um vetor de planetas determinar qual dentre estes planetas é orbitado por um número máximo de luas.*/

class Sol {
    planetas: Planeta[];
    luas: Lua[];
  
    planetasQueOrbitam(): Planeta[] {
      return this.planetas;
    }
  
    luasQueOrbitam(): Lua[] {
      return this.luas;
    }
  
    maximoDePlanetas(sois: Sol[]): Sol {
      let maximo = new Sol;
      for (let sol of sois) {
        if( sol.planetas.length > maximo.planetas.length) 
          maximo = sol;
      }
      return maximo;
    }
}

class Planeta {
    luas: Lua[];

    luasQueOrbitam(): Lua[] {
        return this.luas;
    }

    maximoDeLuas(planetas: Planeta[]): Planeta {
        let maximo = new Planeta;
        for (let planeta of planetas) {
        if( planeta.luas.length > maximo.luas.length) 
            maximo = planeta;
        }
        return maximo;
    }
}

class Lua {

}

/*4)Suponha que você quer modelar o comportamento de um sinalde trânsito. 
Para isso, vamos definir a seguinte interface:
interface Light {
    next( ): Light;
}
Defina as classes Green (verde), Red (vermelho), e Yellow (amarelo) que
implementam a interface Light de tal forma que o método next quando
aplicado a um sinal devolve o sinal que o segue na ordem tradicional de um
semáforo. Note que, conceitualmente, há uma única instância de cada um
dos possíveis sinais, por isso, não faz sentido produzir diversas instâncias
de um mesmo sinal. Defina em cada uma destas classes uma variável de
instância estática para garantir que somente uma única instância de cada
sinal será produzida. Para isso, você deverá definir o seu construtor como privado.*/

interface Light {
    next(): Light;
}

class Green implements Light {
    static light: Light;
    private constructor() {}

    next() {
        return Yellow.light;
        }
}

class Yellow implements Light {
    static light: Light;
    private constructor() {}

    next() {
        return Red.light;
    }
}

class Red implements Light {
    static light: Light;

    next() {
        return Green.light;
    }
}