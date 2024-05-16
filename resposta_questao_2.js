function encontrarDuplicados(array) {
    const numerosRepetidos = [];

    // Criação de 2 laços que repetem sobre o array
    for (let i = 0; i < array.length; i++) {    // Repete o índice "i" até o final do array
      for (let j = i + 1; j < array.length; j++) {  // Repete o índice "j" subsequente do "i" até o final do array
        if (array[i] === array[j] && !numerosRepetidos.includes(array[i])) { // Verifica a duplicidade entre os índices
          numerosRepetidos.push(array[i]);
        }
      }
    }
  
    return numerosRepetidos;
}

const meuArray = [4,5,44,98,4,5,6,7];
const duplicados = encontrarDuplicados(meuArray);
console.log(duplicados);