function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    if (numeros.indexOf(numeros[i]) !== i) {
      return numeros[i]; 
    }
  }
 
}

module.exports = encontrarElementoRepetido;