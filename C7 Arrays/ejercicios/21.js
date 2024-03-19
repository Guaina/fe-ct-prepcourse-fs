function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let nuevoArreglo = [];
  if(!(array.includes('Enero')) || !(array.includes('Marzo')) || !(array.includes('Noviembre')) ){
    return 'No se encontraron los meses pedidos';    
  }  
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'Enero'){
      nuevoArreglo.push(array[i]);
    }else if(array[i] === 'Marzo'){
      nuevoArreglo.push(array[i]);
    }else if(array[i] === 'Noviembre'){
      nuevoArreglo.push(array[i])
    }    
  }
  return nuevoArreglo;
}

    

  

module.exports = mesesDelAño;
