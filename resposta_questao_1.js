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