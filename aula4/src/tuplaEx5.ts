const v = [1, 2, 3, 4, 5, 6];
const w = v.map(x => x*x); //map varre e transforma - chamado de função - arrow function: lambda: o que vc vai 
//fazer com cada elemento do seu Array, para ele compor esse novo Array. No caso será aplicado ao quadrado cada elemento).
console.log(w);
const ns = ['maria', 'ana', 'patricia', 'joana'];
const cs = ns.map (s => s.length); //devolve o cumprimento de cada elemento.
console.log(cs);