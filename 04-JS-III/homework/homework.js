// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  
  return array [0] ;

  }


function devolverUltimoElemento(array) {
  
  return ( array [array.length - 1] ) ;

}


function obtenerLargoDelArray(array) {
  
  return array.length ;

}


function incrementarPorUno(array) {

  var array2 = []
  for(var i= 0 ; i< array.length ; i++) {
  array2 [i] = array [i] + 1  }

  return array2

      
  } 


function agregarItemAlFinalDelArray(array, elemento) {
  
  array.push (elemento) ;
  return array ;
  
}


function agregarItemAlComienzoDelArray(array, elemento) {
 
 array.unshift (elemento)
 return array ;
 
}


function dePalabrasAFrase(palabras) {
  
  
  return palabras.join(" ") ; 

}


function arrayContiene(array, elemento) {

  if (array.includes(elemento)) {
    return true
  }
  else return false
  
}


function agregarNumeros(numeros) {
 
  var suma = 0
  for (var i = 0 ; i < numeros.length ; i++) {
    suma = suma + numeros[i] ;
  }
  return suma ;

}


function promedioResultadosTest(resultadosTest) {
  
  var suma2 = 0
  for (var i = 0 ; i < resultadosTest.length ; i++) {
    suma2 = suma2 + resultadosTest [i] ;
  }
  return suma2 / resultadosTest.length ;
  
}


function numeroMasGrande(numeros) {
  
  var MasGrande = numeros[0] ;
  for (var i = 0 ; i < numeros.length ; i++) {
    if (numeros[i] > MasGrande) {
      MasGrande = numeros[i] ;
    }
  }

  return MasGrande ;

}


function multiplicarArgumentos() {
  
  var mult = 1;
  if (arguments.length < 1) {
    return 0 ;
  }
  else if (arguments.length > 0) {
    for (var i = 0 ; i < arguments.length ; i++) {
  mult = mult * arguments[i] ;
}
  }

return mult ;


}


function cuentoElementos(arreglo){

  var ele = 0 ;
  for (var i = 0 ; i < arreglo.length ; i++) {
    if (arreglo [i] > 18) {
      ele = ele + 1 ;
    }
  }
  return ele ;
  
}


function diaDeLaSemana(numeroDeDia) {
  
 if (numeroDeDia === 1 || numeroDeDia === 7) {
   return "Es fin de semana" ;
 }
 else {
   return "Es dia Laboral" ;
 }
  
  
} 


function empiezaConNueve(n) {

 comienza = n.toString().indexOf(9)
  if (comienza === 0 ){
    return true ;
  }
  else {
    return false ;
  }
  
  
}


function todosIguales(arreglo) {

 
 for (var i = 0 ; i <arreglo.length ; i++) {
   if (arreglo [i + 1] === arreglo [i]){
     return true ;
   }
   else return false ;
 }
  
} 


function mesesDelAño(array) {


var meses = []
for (var i= 0 ; i < array.length ; i++) {
  if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
    meses.push(array[i])
  }
}
  if (meses.length < 3) {
    return "No se encontraron los meses pedidos"
  }
  else {
    return meses
  }



  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  
  var mayor = []
  for (var i = 0 ; i <array.length ; i++) {
    if (array [i] > 100){
      mayor.push(array[i])
    } 
  }
  return mayor
 
}


function breakStatement(numero) {
  
  var increm = [] ;
  var suma = numero ;
  for (var i = 0 ; i < 10 ; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
    increm.push(suma) ;
    } 
  }
  if (i < 10) {
    return "Se interrumpió la ejecución" ;
  }
  else {
    return increm ;
  }
  
  
  
}


function continueStatement(numero) {
  
  var ultimo = [] ;
  var suma = numero ;
  for (var i = 0 ; i < 10 ; i++) {
    if (i === 5) continue ;
    else {
      suma = suma + 2 ;
      ultimo.push(suma)
    }
  }
  return ultimo
  

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
