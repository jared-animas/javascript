//ciclo para convertir dos arreglos a un mapa
// for (let i = 0; i < ciudadesDisponibles.length; i++) {
//     console.log("{'ciudad': " + "'"+ciudadesDisponibles[i]+"',");
//     console.log("'precio': " +"'"+ PrecioCiudad[i]+"',}");
// }
const presupuestoDisponible = 620;
const datos = [
    {
        'ciudad': 'Bogota',
        'precio': 500
    },
    {
        'ciudad': 'Medellin',
        'precio': 400
    },
    {
        'ciudad': 'Bucaramanga',
        'precio': 380
    },
    {
        'ciudad': 'Cali',
        'precio': 200
    },
    {
        'ciudad': 'Cartagena',
        'precio': 520
    },
    {
        'ciudad': 'Barranquilla',
        'precio': 600
    }
]

//Ejemplo de ciclo  do while donde se ejecuta 1 o mas veces
let i = 0;
let ciudadSeleccionada = '';
do {
    if (presupuestoDisponible >= datos[i].precio) { 
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
} while (i < datos.length && ciudadSeleccionada == '');
if (ciudadSeleccionada == undefined) {
    console.log("No puedes viajar");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}
