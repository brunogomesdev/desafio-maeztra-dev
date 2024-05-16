function anosMaisTrabalhados(dados) {
    // Cria um dicionário para armazenar a quantidade de pessoas trabalhando em cada ano
    const anosTrabalhados = {};
  
    // Repete sobre cada dado na matriz
    for (const [anoInicio, anoFim] of dados) {
      // Para cada ano entre o ano de início e o ano de fim, inclusive:
      for (let ano = anoInicio; ano <= anoFim; ano++) {
        // Se o ano já existir no dicionário, incrementa o valor caso contrário, adiciona o ano e define o valor como 1
        if (anosTrabalhados[ano]) {
          anosTrabalhados[ano]++;
        } else {
          anosTrabalhados[ano] = 1;
        }
      }
    }
  
    // Encontra o ano ou anos com mais pessoas trabalhando
    let anosComMaisTrabalhadores = [];
    let maiorQuantidade = 0;
  
    for (const [ano, quantidade] of Object.entries(anosTrabalhados)) {
      if (quantidade > maiorQuantidade) {
        maiorQuantidade = quantidade;
        anosComMaisTrabalhadores = [ano];
      } else if (quantidade === maiorQuantidade) {
        anosComMaisTrabalhadores.push(ano);
      }
    }
  
    // Retorna o ano ou anos com mais pessoas trabalhando
    return anosComMaisTrabalhadores;
}

const dados = [[1960, 2005], [1945, 2008], [1938, 1999], [1972, 2001]];
const anosComMaisTrabalhadores = anosMaisTrabalhados(dados);
console.log(`Anos com mais pessoas trabalhando: ${anosComMaisTrabalhadores}`);