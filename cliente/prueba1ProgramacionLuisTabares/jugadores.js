let ficheros = ["d1.csv","d2.csv"]
ficheros.forEach(f => {cargarFicheros(f)})

//leer fichero
function cargarFicheros (fichero)
{
    fetch(fichero)      //para cargar el fichero
    .then(respuesta => respuesta.text())    //saca el texto
    .then(obtenerDatos)                 //pasa el texto a la funcion1
}


//////opcion 1

function obtenerDatos(entrada){

    if (!entrada) throw 'El fichero está vacío.'
    const equipos=(entrada.split(","))
    for(let i=0;i<equipos.lenght;i++)
    {
        console.log(equipos[i])
    }
   
}
