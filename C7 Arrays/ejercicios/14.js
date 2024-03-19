function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let elementosMayoresADiez = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
      elementosMayoresADiez.push(array[i]);
    }
  }
  return elementosMayoresADiez.length;
}

module.exports = contarElementosMayoresA10;
