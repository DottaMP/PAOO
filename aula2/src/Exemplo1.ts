//Criar pasta src (onde vai o .ts) e uma pasta dist(onde vai o .js).
//Criar o json pelo comando tsc --init
//tsconfig.json: o tsc "observa" o arquivo que fornece as opções de compilação.
// outDir (js) é onde são depositadas os resultados do transpilação dos arquivos que estão em "rootDir" (ts).
//Abrir o tsconfig.json e no outDir configurar para gerar todas as saídas colocando o ./dist 
            // no rootDir colocar o ./src. Tirar o comentário deles.

// números inteiros "normais" de 64 bits    
function sum(a: number, b: number): number{ //o tipo devolve um número, o devolve fica no final
    return a+b;
}

console.log(sum(10,20)); 

// números inteiros maiores 
function sumbigint(a: bigint, b: bigint): bigint{ //o tipo devolve um número, o devolve fica no final
    return a+b;
}

console.log(sumbigint(10n,20n)); // precisa colocar o n para falar que é bigint

//Sempre inserir o console.log
//no terminal dentro da pasta do programa, colocar tsc nomeDoArquivo.ts
//Será criado um arquivo de mesmo nome .js
//no terminal colocar node nomeDoArquivo.js para executar o programa.
//para compilar automaticamente usa-se no terminal o comando tsc -w para abrir o terminal node.