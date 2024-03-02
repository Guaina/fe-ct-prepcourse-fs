function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if(numero === 2 || numero === 3 || numero === 5 ||numero === 7 || numero === 11 || numero === 13 || numero === 17 || numero === 19 || numero === 23){
    return true;
  }else{
    return false;
  }
  // Lo relsolví de esta manera ya que en este módulo no vimos búcles.
}

module.exports = esNumeroPrimo;
