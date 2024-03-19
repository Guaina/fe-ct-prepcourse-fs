function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayEnMayuscula = [];
  for(let i = 0; i < array.length; i++){
    let elementoEnMayuscula = array[i].toUpperCase();
    arrayEnMayuscula.push(elementoEnMayuscula)
  }
  return arrayEnMayuscula;
}

module.exports = convertirStringAMayusculas;
