//tipos de datos
//Alfanumericos
let nombrePasajero = "Jose Perez";
console.log(nombrePasajero);
nombrePasajero = "Pedro Ramirez";
console.log(nombrePasajero);

//numerico
let valorBoleto = 1500;
const tasaEmbarque = 60/100;
var gestionActivo = 120;
console.log(valorBoleto);

//booleano 
let BoletoActivo = true;
console.log(BoletoActivo);

//operaciones aritmeticas
//suma 
let totalBoletos = valorBoleto + gestionActivo + 1500 + 1500;
console.log(totalBoletos);

//Orden de precedencia
totalBoletos = valorBoleto + gestionActivo + 1500 + 1500*tasaEmbarque;
console.log(totalBoletos);

//Orden de precedencia
//()
//* y /
//+ y -
totalBoletos = (valorBoleto + gestionActivo)*tasaEmbarque + 1500 - 1500;
console.log(totalBoletos);

//Concatenacion de texto
nombrePasajero = "Jose";
let apellidoPasajero = "Perez";

let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompleto);

let pasaporte = '1000' + '12';
console.log(pasaporte);

let multiplicacion = parseInt('1000') * parseInt('12');
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASAAA');
console.log(noEsUnNumero);