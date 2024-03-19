function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  let k = -1;  
  for(let i = 1; i < numeros.length; i++){
    k++;
    if(numeros[i] - numeros[k] !== 1){ 
      return numeros[k] + 1;     
      
    }
  }
  return null;
  
}      

    
  



module.exports = encontrarNumeroFaltante;