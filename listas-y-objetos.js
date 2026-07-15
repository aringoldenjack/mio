var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    let copialista=listaDePersonas;
    //collator nos crea un objeto para ordenar segun NUESTRO abecedario, nos deja tambien establecer mas cualidades al ordenar. INTL contiene herramientas para internacionalizar
    //nuestro codigo
    const collator = new Intl.Collator('es', {ignorePunctuation: true });
    copialista.sort((a, b) => collator.compare(a.apellido, b.apellido));
    
    return copialista;
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    let nombres = [];

    for (let i = 0; i < listaDePersonas.length; i++) {
        nombres.push(listaDePersonas[i].nombre);
    }
    return nombres;
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));
/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
        let promedio = 0;
    for (let i = 0; i < listaDePersonas.length; i++) {
        promedio=+listaDePersonas[i].edad;
    }
    promedio=promedio/listaDePersonas.length;
    return promedio;
}

console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una nueva lista, donde la edad de cada persona se incrementa en 1.
 */
function cumplirAños(listaDePersonas) {
    let copialista=listaDePersonas;
    for (let index = 0; index < copialista.length; index++) {
        copialista[index].edad = copialista[index].edad + 1;
    }
    return copialista;
}

console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    for (let index = 0; index < listaDePersonas.length; index++) {
        if(listaDePersonas[index].edad < 18){
            listaDePersonas.splice(index);
        }
    }
    return listaDePersonas;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    let copialista=listaDePersonas;
    let mayor=0;
    for (let index = 0; index < copialista.length; index++) {
        if(copialista[index].edad>mayor){
            mayor = copialista[index].edad;
        }
    }
    return copialista[edad].mayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * - `listaDeHelados`: una lista, array, con strings para gustos de helado.
 * 
 * Retorna: 
 * - una nueva lista, donde a cada persona se le agrega un campo `heladoFavorito` tomado de la lista de listaDeHelados. Si no hay más helados disponibles, se asigna "vainilla" por defecto.
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    for (let index = 0; index < listaDePersonas.length; index++) {
        const element = listaDePersonas[index].heladoFavorito;
        
    }
    return listaDePersonas;
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));