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