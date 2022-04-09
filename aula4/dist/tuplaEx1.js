"use strict";
/*tupla: criar um elemento, mesclando mais de um tipo. Exemplo: mesclando um tipo de string e um tipo de número.
Esse elemento então será composto de dois tipos. Podem ser mais de dois componentes dentro da tupla.
Programar em função da interface que foi entregue, sem manipular a api.
Exemplo:
 type Aluno = [string, number]
              [nome:string,nota:number]
              ["jose", 10] : Aluno*/
//funções extratoras (API)
function nome(aluno) {
    return aluno[0];
}
function nota(aluno) {
    return aluno[1];
}
//função construtura
function cria_aluno(nome, nota) {
    return [nome, nota];
}
//function
function media(alunos) {
    if (alunos.length == 0) {
        return undefined;
    }
    let soma = 0;
    for (const aluno of alunos) {
        soma += nota(aluno);
    }
    return soma / alunos.length;
}
const alunos = [cria_aluno("João", 9),
    cria_aluno("Maria", 9),
    cria_aluno("Celso", 9),
    cria_aluno("Joana", 9)];
//["marcio", 41] -> não deve-se fazer desse jeito
console.log(media(alunos));
