const ciudadDestino = "Medellin";
const ciudadesDisponibles = [
  "Bogota",
  "Medellin",
  "Bucaramanga",
  "Cali",
  "Cartagena",
  "Barranquilla",
];

const edadPasajero = 17;
const acompañado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`verificando pasajes para ${ciudadDestino}`);

// A && B || C
if (
  ciudadesDisponibles.indexOf(ciudadDestino) > -1 &&
  edadPasajero >= 17 &&
  tienePasaporte &&
  !estaCasado
) {
  console.log("Pasaje disponible para venta");
} else {
  console.log("Cidudad no disponible para viajar");
}
