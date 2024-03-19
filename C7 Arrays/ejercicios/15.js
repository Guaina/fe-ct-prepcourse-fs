function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let numeroMasGrande = Math.max(...array);  
  if(array.length <= 1){
    return 0;
  }else{
    for(let i = 0; i < array.length; i++){
      if(array[i] === numeroMasGrande){
      return i;
      }
    }
  }

}

module.exports = encontrarIndiceMayor;
