"use strict";
const alunoNota = [['ana', 10], ['maria', 8], ['jose', 9], ['mari', 4]];
//console.log(alunoNota.map(d => d[0].length))
console.log(alunoNota.filter(d => d[1] >= 5)); //tras apenas os alunos com notas maior ou igual a 5.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
/*vai produziar uma nova lista (intermediária), e essa nova lista vai ser aplicado ao outro método elevado ao quadrado
tomar cuidado quando fica encadeando desse, pois é gerado uma lista intermediária desnecessária.
console.log(nums.map(x => x+1 ).map(x => x*x)); pega o elemento soma 1 e eleva a ele mesmo. Ex: 2+1 = 3*3=9*/
// reduce (foldLeft) - aceita lista - para extrair a informação de alguma coleção. 
console.log(nums.reduce((acc, x) => acc + x, 0)); //o 0 no último argumento é o valor inicial (poderia ser zero ou qualquer outro) (elemento inicial, é bom para caso de lista vazia)
/*releitura: (((((((1+2)+3)+4)+5)+6)+7)+8)
1+2 é o acc, que soma com o 3 que é o x, então 6 é o novo acc, 6 (acc) + 4(x) vira 10 é o acc e assim por diante*/
const ss = ['maria', 'joana', 'vanessa'];
console.log(ss.reduce((acc, s) => acc + s.length, 0));
