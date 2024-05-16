function organizarPessoas(numeroPessoas) {
    if (numeroPessoas === 0) {
        return 1; // Um único arranjo possível com 0 pessoas (ninguém na foto).
    } else {
        return numeroPessoas * organizarPessoas(numeroPessoas - 1); // Fórmula fatorial de N para calcular a quantidade de permutações
    }
}

const numeroDePessoas = 5;
const possibilidades = organizarPessoas(numeroDePessoas);

console.log(`Com ${numeroDePessoas} pessoas, existem ${possibilidades} modos distintos de se organizarem para as fotos.`);