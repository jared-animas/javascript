const ciudadDestino = "Medellin";
const ciudadesDisponibles = ["Bogota", "Medellin", "Bucaramanga", "Cali", "Cartagena", "Barranquilla"];

//palabra reservada if
//evalua una condicion y retorna un valor booleano
// if (condicion) { codigo a ejecutar si la condicion es verdadera }

console.log("Verificando si la ciudad Medellin esta disponible");
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log(`La ciudad ${ciudadDestino} esta disponible`);
}
else {
    console.log(`La ciudad ${ciudadDestino} no esta disponible`);
}

const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log("El valor es mayor a 1000");
}
else {
    console.log("El valor es menor a 1000");
}

// operadores logicos
// and      =     &&     -- se debe cumplir todas las condiciones
// or       =     ||     -- se debe cumplir al menos una
// not      =     !      -- no se cumple la condicion

const edadPasajero = 19;
const acompañado = true;

// ejemplo de and &&
console.log(`verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18) {
    console.log("El pasaje es valido");
}
else {
    console.log("El pasaje no es valido");
}

// ejemplo de or ||
console.log(`verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 || edadPasajero >= 18) {
    console.log("El pasaje es valido");
}
else {
    console.log("El pasaje no es valido");
}

// ejemplo de not !
console.log(`verificando pasajes para ${ciudadDestino}`);
if (!ciudadesDisponibles.indexOf(ciudadDestino)) {
    console.log("El pasaje es valido");
}
else {
    console.log("El pasaje no es valido");
}

// ejemplo combinado
console.log(`verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || acompañado)) {
    console.log("El pasaje es valido");
}
else {
    console.log("El pasaje no es valido");
}
    