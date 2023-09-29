"use strict"
console.log("cargado")

/*analisis
datos de entrad: [number]
datos de salida: diaMax string, diaMin String y boolean

*/

/*ejemplos

datos de entrada
185.50
250.36
163.45
535.20
950.22
450.38
-1

datos de salida

SABADO JUEVES SI


1
2
3
4
5
6
11
12
13
14
15
16
-1

datos de salida
DOMINGO MARTES SI
DOMINGO MARTES SI

ej2

300
1
1
1
1
2
-1

MARTES MIERCOLES NO

*/

/*

ANDAMIO (que lea datos y genere una salida)

*/


let ficheros = ["datos_entrada.txt","datos_entrada2.txt","datos_entrada3.txt"]
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
    const listaVentas=(entrada.split("\r\n"))
    let ventas = []
    for(let i=0;i<listaVentas.length;i++)
    {
        if(listaVentas[i] === '-1'){        //para comparar en tipo y valor
            break
        }

        ventas[i]=+listaVentas[i]
    }

    console.log(ventas)
    
    //calcular el maximo dia de venta y el minimo
    let supera="SI"
    const semana=["MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"]
    let total=0,media=0
    let ventasMax=ventas[0] // Number
    let ventasMin=ventas[0] // Number
    let diaMax=semana[0] // String
    let diaMin=semana[0] // String
   

    for(let i=0;i<ventas.length;i++)
    {
        //typeof(ventas[i])
            
        if(ventas[i]>ventasMax)        
        {
            ventasMax=ventas[i]
            diaMax=ventasMax
            diaMax=semana[i]
        }
        
        if(ventas[i]<ventasMin)
        {
            ventasMin=ventas[i]
            diaMin=ventasMin
            diaMin=semana[i]
        }

        
        total+=ventas[i]        //acumular el sumatorio
      
    }
    
    media=total/ventas.length       //para controlar entre cuantos elementos hay que hacer la media
    console.log("La media es"+media)
    
    if(ventas[5]>media)
    {
        supera="SI"
    }else if(ventasMin==ventasMax){
        supera="EMPATE"
    }
    else{
        supera="NO"
    }

    console.log(diaMax,diaMin,supera)

   
 }



//console.log(`${diaMax} ${diaMin} ${superaTexto}`)


/*
    4.Parseo 
    String a number
*/
