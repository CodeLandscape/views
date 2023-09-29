let ficheros = ["d1.csv","d2.csv"]
ficheros.forEach(f => {cargarFicheros(f)})

//leer fichero
function cargarFicheros (fichero)
{
    fetch(fichero)      //para cargar el fichero
    .then(respuesta => respuesta.text())    //saca el texto
    .then(obtenerDatos)                 //pasa el texto a la funcion1
}
///////opcion 2

function obtenerDatos(entrada){

    if (!entrada) throw 'El fichero está vacío.'
    const equipos=(entrada.split("','"))
    let jugadores= new Array(equipos.length)
    jugadores[0]= equipos[0]
    
    for(let i=1;i<equipos.length;i++)
    {
        jugadores[i]=equipos[i]
        break
    }
    console.log(jugadores)
    //console.log(equipos)
}



/////////////////vAlter
/*
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
}*/
