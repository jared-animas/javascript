const ciudadDestino = "Medellin";
const ciudadesDisponibles = ["Bogota", "Medellin", "Bucaramanga", "Cali", "Cartagena", "Barranquilla",];

let valorPasaje = 0;

//Ejemplo utilizando if anidados
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    if (ciudadDestino === "Bogota") {
        valorPasaje = 1000;
    } else if (ciudadDestino === "Lima") {
        valorPasaje = 1500;
    } else if (ciudadDestino === "Bucaramanga") {
        valorPasaje = 2000;
    } else if (ciudadDestino === "Cali") {
        valorPasaje = 3000;
    } else if (ciudadDestino === "Cartagena") {
        valorPasaje = 4000;
    } else if (ciudadDestino === "Barranquilla") {
        valorPasaje = 5000;
    } else if (ciudadDestino === "Medellin") {
        valorPasaje = 6000;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);
} else {
    console.log("Ciudad no disponible para viajar");
}

//Ejemplo usando switch
switch (ciudadDestino) {
    case "Bogota":
        valorPasaje = 1000;
        break;
    case "Lima":
        valorPasaje = 1500;
        break;
    case "Bucaramanga":
        valorPasaje = 2000;
        break;
    case "Cali":
        valorPasaje = 3000;
        break;
    case "Cartagena":
        valorPasaje = 4000;
        break;
    case "Barranquilla":
        valorPasaje = 5000;
        break;
    case "Medellin":
        valorPasaje = 6000;
        break;
    default:
        console.log("Ciudad no disponible para viajar");
        break;
}
if (valorPasaje > 0) {
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}
