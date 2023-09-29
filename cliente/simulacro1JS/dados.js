let dado1;
let dado2;


let ficheros = ["d1.txt","d2.txt"]
ficheros.forEach(f => {cargarFicheros(f)})

//leer fichero
function cargarFicheros (fichero)
{
    fetch(fichero)      //para cargar el fichero
    .then(respuesta => respuesta.text())    //saca el texto
    .then(funcion1)                 //pasa el texto a la funcion1
}


function funcion1(entrada)
{
    const caras=(entrada.split(", "))
    for(let i=0;i<caras.length;i++)
    {
        dado1=caras[i]
        break
    }
    let dado2=caras[1]
    let dado1numero=Number.parseInt(dado1)
    let dado2numero=Number.parseInt(dado2)
   console.log(dado1numero)
   console.log(dado2numero)
   let probMin=dado1numero+dado2numero
   console.log("probabilidas minima "+probMin)
}



