// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola" ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3 ;

// Crea una variable booleana:
const nuevoBool = true ;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1 ;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str ;
  
}

function suma(x, y) {
  var suma = x + y ;
  return suma ;
  
}

function resta(x, y) {
  var resta = x - y ;
  return resta ;
  
}

function multiplica(x, y) {
  var multiplica = x * y ;
  return multiplica ;
  
}

function divide(x, y) {
  var divide = x / y ;
  return divide ;
  
}

function sonIguales(x, y) {
  if (x === y) {
    return true ;
  }
  else {
    return false ;
  }
  
}

function tienenMismaLongitud(str1, str2) {
 if (str1.length === str2.length)  {
   return true ;
 }
 else {
   return false ;
 }
  
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true ;
  }
  else {
    return false ;
  }
  
}

function mayorQueCincuenta(num) {
  if (num > 50) { 
    return true ;
  }
  else {
    return false ;
  }
  
}

function obtenerResto(x, y) {
 var obtenerResto = x % y ;
 return obtenerResto
  
}

function esPar(num) {
  if ( num % 2 === 0 )  {
    return true ;
  }
  else {
    return false ;
  }


  
}

function esImpar(num) {
 if ( num % 2 === 1 ) {
   return true ;
 }
 else {
   return false ;
 }
  
}

function elevarAlCuadrado(num) {
  var elevarAlCuadrado = num * num ;
  return elevarAlCuadrado ;
  
}

function elevarAlCubo(num) {
  var elevarAlCubo = num * num * num ;
  return elevarAlCubo ;
  
}

function elevar(num, exponent) {
  var elevar = Math.pow (num, exponent) ;
  return elevar ;
  
}

function redondearNumero(num) {
  var redondearNumero = Math.round (num) ;
  return redondearNumero ;
  
}

function redondearHaciaArriba(num) {
  var redondearHaciaArriba = Math.ceil (num) ;
  return redondearHaciaArriba ;
  
}

function numeroRandom() {
  var numeroRandom = Math.random (0,1) ;
  return numeroRandom

  
}

function esPositivo(numero) {
  if (numero === 0) {
    return false
  }
  else if (numero>0) {
    return "Es positivo" ;
  }
  else {
    return "Es negativo" ;
  }
 
  
}

function agregarSimboloExclamacion(str) {
var agregarSimboloExclamacion = str + "!" ;
return agregarSimboloExclamacion ;
}

function combinarNombres(nombre, apellido) {
  var combinarNombres = nombre + " " + apellido ;
  return combinarNombres ;
}

function obtenerSaludo(nombre) {
  var obtenerSaludo = "Hola" + " " + nombre + "!" ;
  return obtenerSaludo ;
  
}

function obtenerAreaRectangulo(alto, ancho) {
 var obtenerAreaRectangulo = alto * ancho ;
 return obtenerAreaRectangulo ;
  
}


function retornarPerimetro(lado){
 var retornarPerimetro = lado * 4 ;
 return retornarPerimetro ;
  
}


function areaDelTriangulo(base, altura){
 var areaDelTriangulo = base * altura / 2 ;
 return areaDelTriangulo ;

}


function deEuroAdolar(euro){
  var deEuroAdolar = euro * 1.20 ;
  return deEuroAdolar ;
  
}


function esVocal(letra){
  if (letra === "a"|| letra === "e" ||letra=== "i" ||letra === "o" ||letra === "u" ) {
    return "Es vocal"  ;
  }
  else {
    return "Dato incorrecto" ;
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
