# Programação Avançada Orientada a Objetos    

### 1º Semestre/2022 utilizando a *linguagem TypeScript (ts)*!    

Quebrando os códigos na Fatec, 4º semestre do curso de *Análise e Desenvolvimento de Sistemas*, Programação Avançada Orientada a Objetos (*PAOO*).  

#### Preparando o ambiente:    
- Download: node LTS
  - Para confirmar se baixou: *node --version*
- No terminal instalar o TypeScript: *npm install -g typescript*
  - Para confirmar se baixou: *tsc --version*
- Criar a pasta *src* (onde vai o .ts) e uma pasta *dist* (onde vai o .js).
    
#### Primeiros passos (VS CODE): 
- Criar o json pelo comando *tsc --init*
  - Será criado o arquivo *tsconfig.json* - o tsc "observa" o arquivo que fornece as opções de compilação.
- Abrir o *tsconfig.json* e deixar da seguinte maneira: *"outDir": "./dist"*,   | *"rootDir": "./src"*, | no *"target": "es2020"*, | **Não esquecer de tirar os comentários deles.**
  - outDir (js) é onde são depositadas os resultados da transpilação dos arquivos que estão em "rootDir" (ts).

#### Observações:
- No terminal, **dentro da pasta do programa**, inserir *tsc nomeDoArquivo.ts* ou tsc -w para "assistir" e compilar automaticamente.
  - Será criado um arquivo de mesmo nome *.js* e o terminal *node* ficará aberto (não fechar, abrir um novo).
- No novo terminal dentro da pasta *dist* (.js) colocar *node nomeDoArquivo.js* para executar o programa.


