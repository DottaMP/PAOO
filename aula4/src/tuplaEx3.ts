//Tupla para 

type Par<A, B> = [A, B];

function primeiro<A, B>(par: Par<A, B>): A {
    return par [0];
}

function segundo<A, B>(par: Par<A, B>): B {
    return par[1];
}

//pode mandar algo do tipo A e B que não sabe qual o tipo, e ele deduz o tipo.
function cria_par<A, B>(a: A, b: B): Par<A, B> {
    return [a, b];
}

const par = cria_par (10, 'maria');
console.log(segundo(par));
const outro = cria_par('maria', 10);
console.log(segundo(outro));

const complexo = cria_par('teste', par);

