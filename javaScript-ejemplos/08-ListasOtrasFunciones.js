
//Definicion de una lista de forma abreviada
const paisesDisponibles = ["Peru","Colombia", "Ecuador"];
console.log(paisesDisponibles);

{
    //push agrega un elemento al final de la lista
    paisesDisponibles.push("Mexico");
    console.log(paisesDisponibles);
}

{
    //unshift agrega un elemento al inicio de la lista
    paisesDisponibles.unshift("Chile");
    console.log(paisesDisponibles);
}

{
    //pop elimina el ultimo elemento de la lista
    paisesDisponibles.pop();
    console.log(paisesDisponibles);
}

{
    //shift elimina el primer elemento de la lista
    paisesDisponibles.shift();
    console.log(paisesDisponibles);
}

{
    //splice elimina un elemento de la lista
    paisesDisponibles.splice(1, 1);
    console.log(paisesDisponibles);
}

{
    //sort ordena la lista
    paisesDisponibles.sort();
    console.log(paisesDisponibles);
}

{
    //reverse inverte la lista
    paisesDisponibles.reverse();
    console.log(paisesDisponibles);
}

    //agregar paises a la lista
    paisesDisponibles.push("Mexico", "Japon");
    paisesDisponibles.unshift("Chile", "Alemania");
    console.log(paisesDisponibles);

{
    //length retorna el numero de elementos de la lista
    console.log(`La cantidad de paises es ${paisesDisponibles.length}`);
}

{
    //filter filtra los elementos de la lista
    const paisesFiltrados = paisesDisponibles.filter(pais => pais.length > 5);
    console.log(`Paises filtrados por longitud mayor a 5 con filter ${paisesFiltrados}`);
}

{
    //find retorna el primer elemento que cumpla la condicion
    const paisesFiltrados = paisesDisponibles.find(pais => pais.length < 5);
    console.log(`Paises filtrados por longitud menor a 5 con find ${paisesFiltrados}`);
}

{
    //findIndex retorna el indice del primer elemento que cumpla la condicion
    const paisesFiltrados = paisesDisponibles.findIndex(pais => pais.length < 5);
    console.log(`indice del elemento menor a 5 con findIndex ${paisesFiltrados}`);
}

{
    //includes retorna true si el elemento existe en la lista
    const paisesFiltrados = paisesDisponibles.includes("Ecuador");
    console.log(`Si existe Ecuador retorna true con includes ${paisesFiltrados}`);
}

{
    //indexOf retorna el indice del primer elemento que cumpla la condicion
    const paisesFiltrados = paisesDisponibles.indexOf("Ecuador");
    console.log(`Si existe Ecuador retorna el indice con indexOf ${paisesFiltrados}`);
}

{
    //slice retorna una copia de la lista
    const paisesFiltrados = paisesDisponibles.slice(0, 2);
    console.log(`Copia de la lista con slice ${paisesFiltrados}`);
}

{
    //splice retorna una copia de la lista
    const paisesFiltrados = paisesDisponibles.splice(3,);
    console.log(`Copia de la lista con splice ${paisesFiltrados}`);
}

{
    //join une los elementos de la lista
    const paisesFiltrados = paisesDisponibles.join("-");
    console.log(`Copia de la lista con join ${paisesFiltrados}`);
}