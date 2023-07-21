//Palabra const es una palabra reservada de JS que no se puede reasignar
const valorPasaje = 1500;
console.log(valorPasaje);

const nombrePasajero = "Jose";
console.log(nombrePasajero);
const apellidoPasajero = "Perez";
console.log(apellidoPasajero);

// el siguiente codigo marca error pues no se puede reasignar el valor 
//dentro de la variable nombrePasajero

//      nombrePasajero = nombrePasajero + " " + apellidoPasajero;
//      console.log(nombrePasajero);

//palabra var
// var puede ser reasignada durante la ejecucion del programa
var nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log("Variable con var: "+nombreCompletoPasajero);

//palabra var
// var puede ser reasignada durante la ejecucion del programa
let nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
console.log("Variable con let: "+nombreCompletoDelPasajero);

//bloque de codigo
//
{
    let nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable dentro de un bloque: "+nombreCompletoDelPasajero);
}