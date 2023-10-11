/////Luis Tabares

const ficheros = ["test1.txt"];
ficheros.forEach(f => { cargarFicheros(f) });
// Leer fichero
function cargarFicheros(fichero) {
    fetch(fichero) // para cargar el fichero
        .then(respuesta => respuesta.text()) // saca el texto
        .then(procesarVentas) // pasa el texto a la funcion procesarVentas
        .catch(error => console.error("Error al cargar el archivo:", error)); // excepcion
}

//funcion principal del programa
function procesarVentas(entrada) {
    const ventasPorAnio = {}; //aqui vamos a dar la salida
    if (!entrada) throw 'El fichero está vacío.'
    const lineas = entrada.split("\n");

    lineas.forEach(linea => {
        const palabras = linea.split("\t");
        if (palabras.length === 3) {
            const fecha = palabras[0];
            const anio = fecha.split("/")[2];
            const ventas = parseFloat(palabras[2].replace("€", "").replace(",", "").replace(".", "").replace(",", "."));

            if (ventasPorAnio[anio]) {
                ventasPorAnio[anio].ventas += ventas;
                ventasPorAnio[anio].referencias.push(palabras[1]);
            } else {
                ventasPorAnio[anio] = {
                    ventas: ventas,
                    referencias: [palabras[1]]
                };
            }
        }
    });

    // Calcular y mostrar las ventas totales y las referencias vendidas por año, ordenados a partir del año 2000
    const aniosOrdenados = Object.keys(ventasPorAnio).sort((a, b) => parseInt(a) - parseInt(b));
    aniosOrdenados.forEach((anio) => {
        const anioConSigla = `20${anio}`;
        const ventasYReferencias = ventasPorAnio[anio];

        ventasYReferencias.ventas = parseFloat((ventasYReferencias.ventas / 100).toFixed(2));

        const salidaPorAnio = `Año:${anioConSigla}:${ventasYReferencias.ventas}\nReferencias vendidas: [${ventasYReferencias.referencias.join(', ')}]`;

        console.log(salidaPorAnio);
        return salidaPorAnio;
    });
}
