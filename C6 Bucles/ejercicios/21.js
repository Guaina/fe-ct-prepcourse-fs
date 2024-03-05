function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let i = 1;
  while (i < numero) {
    let resultado = Math.pow(2, i);
    if(resultado === numero){
      return true;
    }else{
      i++;
    }    
  }
  return false;
}

module.exports = esPotenciaDeDos;
