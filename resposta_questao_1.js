const num_input = 12345678  // Variavel com o valor a ser testado

function receberInteiroPositivo(valor) {
    // Verifica se o valor é um número
    if (typeof valor !== 'number') {
      throw new Error('O valor deve ser um número.');
    }
  
    // Verifica se o valor é inteiro
    if (!Number.isInteger(valor)) {
      throw new Error('O valor deve ser um inteiro.');
    }
  
    // Verifica se o valor é positivo
    if (valor <= 0) {
      throw new Error('O valor deve ser positivo.');
    }
  
    // Retorna o valor validado
    return valor;
}
  
try {
    const numero = receberInteiroPositivo(num_input);
    console.log('Número positivo:', numero);
  } catch (error) {
    console.error('Erro:', error.message);
}

function verificarSequencia(valor) {
  // Converte o valor para string
  const stringValor = valor.toString();

  // Verifica se a string contém apenas dígitos
  for (const caractere of stringValor) {
    if (!/\d/.test(caractere)) {
      throw new Error('O valor deve conter apenas dígitos.');
    }
  }

  // Verifica se a ordenação é crescente
  let crescente = true;
  for (let i = 0; i < stringValor.length - 1; i++) {
    const digitoAtual = parseInt(stringValor[i]);
    const proximoDigito = parseInt(stringValor[i + 1]);

    if (proximoDigito < digitoAtual) {
      crescente = false;
      break;
    }

    // Permite diferença de 1, mesmo que não seja sequencial (ex: 1, 3, 5)
    if (proximoDigito !== digitoAtual && proximoDigito - digitoAtual > 1) {
      crescente = false;
      break;
    }
  }

  // Verifica se a ordenação é decrescente
  let decrescente = true;
  for (let i = 0; i < stringValor.length - 1; i++) {
    const digitoAtual = parseInt(stringValor[i]);
    const proximoDigito = parseInt(stringValor[i + 1]);

    if (proximoDigito > digitoAtual) {
      decrescente = false;
      break;
    }

    // Permite diferença de 1, mesmo que não seja sequencial (ex: 5, 3, 1)
    if (proximoDigito !== digitoAtual && digitoAtual - proximoDigito > 1) {
      decrescente = false;
      break;
    }
  }

  // Retorna o resultado
  if (crescente) {
    return 'Ordenado Crescente';
  } else if (decrescente) {
    return 'Ordenado Decrescente';
  } else {
    return 'Não Ordenado';
  }
}

const resultado1 = verificarSequencia(num_input);
console.log(num_input, resultado1);