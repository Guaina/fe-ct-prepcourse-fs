function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let arregloValorAumentado = [];
  
  for(let i = 0; i < 10; i++){
    if(i !== 4){
      num += 2;
      arregloValorAumentado.push(num);
    }
  }
  return arregloValorAumentado;
}

module.exports = continueStatement;
