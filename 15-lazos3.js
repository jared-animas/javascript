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

//Ejemplo de ciclo  for donde se ejecuta una cantidad determinanda de veces
let i = 0;
let ciudadSeleccionada = '';
const presupuestoDisponible = 620;

for (let i = 0; i < datos.length; i++) {
    if (presupuestoDisponible >= datos[i].precio) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
}
if (ciudadSeleccionada == undefined) {
    console.log("No puedes viajar");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}
