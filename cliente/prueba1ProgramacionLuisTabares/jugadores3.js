let ficheros = ["d1.csv", "d2.csv"];
ficheros.forEach(f => cargarFicheros(f));

// Leer fichero
function cargarFicheros(fichero) {
  fetch(fichero)
    .then(respuesta => respuesta.text())
    .then(obtenerDatos);
}

function obtenerDatos(entrada) {
  if (!entrada) throw 'El fichero está vacío.';
  
  const lineas = entrada.split('\n');

  lineas.forEach(linea => {
    
    const elementos = linea.split(',');

    if (elementos.length >= 2) {
      
      const nombreEquipo = elementos[0].trim();

      const jugadores = elementos.slice(1).map(jugador => jugador.trim());

      console.log(nombreEquipo+'Jugadores:', jugadores);
      //console.log('Jugadores:', jugadores);
    }
  });
}