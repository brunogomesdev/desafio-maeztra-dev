function verificarSequenciaValida(string) {
    const pilha = [];
  
    for (const char of string) {    // Percorre a string para cada caractere (char)
      switch (char) {
        case '(':
        case '{':
        case '[':
          pilha.push(char);
          break;
        case ')':
        case '}':
        case ']':
          if (pilha.length === 0) return "Não é uma Sequência Válida";     // Se a pilha estiver vazia a sequência é inválida
          const topo = pilha.pop();
          if (      // Verifica os pares, se abertura bate com o fechamento
            (topo === '(' && char !== ')') ||
            (topo === '{' && char !== '}') ||
            (topo === '[' && char !== ']')
          ) {
            return "Não é uma Sequência Válida";
          }
          break;
      }
    }
  
    return pilha.length === 0 ? "É uma Sequência Válida" : "Não é uma Sequência Válida";

}

console.log("{ [ ( ) ( ) { } [ ] ] { } }", verificarSequenciaValida("{ [ ( ) ( ) { } [ ] ] { } }"));
console.log("{ [ ( ( ) ] }", verificarSequenciaValida("{ [ ( ( ) ] }"));
console.log("{ } [ ] ( )", verificarSequenciaValida("{ } [ ] ( )"));
console.log("( ( ) { } [ [ ] )", verificarSequenciaValida("( ( ) { } [ [ ] )"));
console.log("[ { } ( [ ) ] ]",verificarSequenciaValida("[ { } ( [ ) ] ]"));