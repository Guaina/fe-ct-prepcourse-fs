const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  // let cantidadDeProps = Object.keys(objeto).length;
  // return cantidadDeProps;

  let cantidadDePropiedades = 0;
  for(var prop in objeto){
    if(prop){
      cantidadDePropiedades += 1;
    }
  }
  return cantidadDePropiedades;

  // let cantidadDePropiedades = [];
  // for(var prop in objeto){
  //   cantidadDePropiedades.push(prop)
  // }
  // return cantidadDePropiedades.length;

};

module.exports = contarPropiedades;
