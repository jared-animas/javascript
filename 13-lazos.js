const ciudadesDisponibles = ["Bogota", "Medellin", "Bucaramanga", "Cali", "Cartagena", "Barranquilla",];
const PrecioCiudad = ["500", "400", "380", "200", "520", "600",];
const presupuestoDisponible = 390;


//Ejemplo de ciclo while donde se ejecuta 0 o mas veces
let i =0;
while (PrecioCiudad[i]>presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log("No puedes viajar");
}else {
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);
}
