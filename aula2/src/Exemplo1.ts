//Criar pasta src (onde vai o .ts) e uma pasta dist(onde vai o .js).
//Criar o json pelo comando tsc --init
//tsconfig.json: o tsc "observa" o arquivo que fornece as opções de compilação.
// outDir (js) é onde são depositadas os resultados do transpilação dos arquivos que estão em "rootDir" (ts).
//Abrir o tsconfig.json e deixar da seguinte maneira: "outDir": "./dist",   | "rootDir": "./src", | no "target": "es2020", | Não esquecer de tirar os comentários deles.

//Observações: //Sempre inserir o console.log
//no terminal dentro da pasta do programa, colocar tsc nomeDoArquivo.ts
//Será criado um arquivo de mesmo nome .js
//no terminal colocar node nomeDoArquivo.js para executar o programa.
//para compilar automaticamente usa-se no terminal o comando tsc -w para abrir o terminal node.


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

// função fatorial
function fat(n: bigint): bigint{ //o tipo devolve um número, o devolve fica no final
    let f=1n;
    for(let i =2n; i<=n; ++i)
        f *= i;
    return f;
}
console.log(fat(50n)); // precisa colocar o n para falar que é bigint

// função recursiva fatorial
function rfat(n: bigint): bigint{ //o tipo devolve um número, o devolve fica no final
    return n == 0n // se o n for igual a zero o resultado é 1 se for diferente é n* o fatorial -1
        ? 1n
        :n * rfat(n-1n);
}
console.log(fat(50n)); // precisa colocar o n para falar que é bigint
