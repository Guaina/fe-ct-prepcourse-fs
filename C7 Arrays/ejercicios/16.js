function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

    let elementoXIndice = array.map(function(elemento, indice){
      return elemento * indice;
    });
    return elementoXIndice;

  // let elementosMultiplicadosPorIndice = [];
  // for(let i = 0; i < array.length; i++){
  //   elementosMultiplicadosPorIndice.push(array[i] * i);
  // }
  // return elementosMultiplicadosPorIndice;
}

module.exports = multiplicarElementosPorIndice;
