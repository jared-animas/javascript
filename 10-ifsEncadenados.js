const ciudadDestino = "Medellin";
const ciudadesDisponibles = ["Bogota", "Medellin", "Bucaramanga", "Cali", "Cartagena", "Barranquilla"];
const edadPasajero = 19;
const acompañado = true;

console.log(`verificando pasajes para ${ciudadDestino}`);
//Verificando que el pasajero cumple las reglas
if (edadPasajero >= 18 || acompañado) {
    //Evaluamos si las ciudad esta disponible para el viaje
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
        console.log("Pasaje disponible para venta");
    }
    else {
        console.log("Cidudad no disponible para viajar");
    }
} else {
    // Si el pasajero es mayor de 16 años y la ciudad a viajar es Medellin se permite el viaje
    if (edadPasajero >= 16 && ciudadDestino === "Medellin") {
        console.log("Pasaje disponible para venta");
    }
    console.log("Pasaje no cumple las reglas");
}
