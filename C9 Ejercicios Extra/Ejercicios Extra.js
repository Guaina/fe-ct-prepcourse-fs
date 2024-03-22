/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arregoDeObjeto = Object.entries(objeto);
  return arregoDeObjeto;

}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objetoDeLetras = {};
  let strOrdenado = string.split('').sort((a, b)=>b - a).join('');
  for(let i = 0; i < strOrdenado.length; i++){
    var letra = strOrdenado[i]
    if (letra in objetoDeLetras){
      objetoDeLetras[letra] ++;
    }else{
      objetoDeLetras[letra] = 1;
    }
  }
  return objetoDeLetras;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let mayus = '';
  let minus = '';
  
  for(let i = 0; i < string.length; i++){
  let letras = string[i];
  if(letras === letras.toLowerCase()){
    minus += letras;
  }else{
    mayus += letras;
  }
}
  return mayus + minus;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  let fraseSeparada = frase.split(' ');
  
  for(let i = 0; i < fraseSeparada.length; i++){
    let palabra = fraseSeparada[i].split('').reverse().join('');
    fraseSeparada[i] = palabra;
  }
  
  return fraseSeparada.join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroInvertido = numero.toString().split('').reverse().join('');
  if(numero == numeroInvertido){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let letrasEliminadas = ''
  for(let i = 0; i < string.length; i++){
    let letra = string[i]
    if(letra === 'a' || letra === 'b' || letra === 'c'){      
    }else{
      letrasEliminadas += letra;
    }
  }
  return letrasEliminadas;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  
  arrayOfStrings.sort(function(a, b){
    return a.length - b.length;
  })

  return arrayOfStrings

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  // let set1 = new Set(array1);
  // console.log(set1)
  // let interseccion = array2.filter(num => set1.has(num));
  // return interseccion;
  


  let numerosEnComun = [];
  let arrMasLargo = []
  let arrayMasCorto = []
  if(array1.length > array2.length || array1.length === array2.length){
    arrMasLargo = array1;
    arrayMasCorto = array2
  }else {
    arrMasLargo = array2;
    arrayMasCorto = array1;
  }
  for(let i = 0; i < arrMasLargo.length; i++){
    if(arrayMasCorto.includes(arrMasLargo[i])){
      numerosEnComun.push(arrMasLargo[i])
    }
  }
  return numerosEnComun;
  }
  



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
