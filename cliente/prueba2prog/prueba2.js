/*
    recibes por fichero de texto, varias lineas, cada linea representa una venta de la empresa

    3 campos:
        fecha:
        referencia de producto:
        importe de la venta:

        op1
        crear funcion procesarVentas(recibe el txt)
        {
            devuelve via return un informe de ventas que indique el año, total de ventas de ese año y las referencias vendidas
            EJ: año 2000: 45201€
                referencias: aer-360, aer-407
                año 2001: 231012041240
                referencias: aer-345, aer-495
                \t es la separacion de los campos
        }
        op2. se devuelve en un mapa donde la clave sea el año y el valor del mapa sea un objeto con dos atributos: ventas y otro con referencias(es un array)
        op3. si ademas identificas el dia de la semana con mas ventas

        solo la funcion se entrega, en js
*/

let ficheros = ["test1.txt"]
ficheros.forEach(f => {cargarFicheros(f)})

//leer fichero
function cargarFicheros (fichero)
{
    fetch(fichero)      //para cargar el fichero
    .then(respuesta => respuesta.text())    //saca el texto
    .then(procesarVentas)                 //pasa el texto a la funcion1
}



function procesarVentas(entrada)
{
    if (!entrada) throw 'El fichero está vacío.'
    const lineas= (entrada.split("\t"))
     console.log(lineas)
    const datos= []
    for(let i=0;i<lineas.lenght;i++)
    {
        datos[i]= (lineas.split("\n"))
    }
    console.log(datos)
}