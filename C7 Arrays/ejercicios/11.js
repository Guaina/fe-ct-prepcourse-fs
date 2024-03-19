function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let elementosDuplicados = [];
  for(let i = 0; i < array.length; i++){
    let elementoPorDos = array[i] * 2;
    elementosDuplicados.push(elementoPorDos);
  }
  return elementosDuplicados;
}

module.exports = duplicarElementos;
