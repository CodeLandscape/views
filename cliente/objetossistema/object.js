//////strings

/////sustituir

let cadena = "Hola mundo"
console.log(cadena.replace("Hola","Adios"))

//concatenar
cadena += " cruel"
console.log(cadena)

/////arrays

let lista = []

for(let i=0;i<10;i++)
    lista[i]= Math.floor(Math.random()*100)+1       //floor quita decimalas
console.log(lista)

//recorrerlo

for (let i=0;i<lista.length;i++)
    console.log(lista[i])

// lista.forEach(element => {console.log(element)})
//     if(element>10)
//         console.log(element)

let arrayRaro= []

for(let i=0;i<10;i++){
    if(Math.random()>0.5)
    {

    
        arrayRaro[i] = []
        for(let j=0;j<Math.floor(Math.random()*10);j++)
        {
            arrayRaro[i][j]=42
        } 
    }else
            arrayRaro[42]
    
}

console.log(arrayRaro)

///reducir un array

let suma = lista.reduce((suma,elemento) =>{return suma+=elemento},0)        //valor inicial de suma es 0
console.log(suma)

/////fechas

let hoy = new Date()
console.log(hoy)
    
let mes = 4
let dia = 23
let año= 2023

let fecha= new Date(año,mes-1,dia)      //hay que restar 1 al mes ya que empieza en 0
console.log(fecha)

///formato iso

let fechaISO= "2023-12-21"
//let fechaisotexto= new Date(fechaisotexto)
let trozos = fechaISO.split("-")

console.log(fechaISO)
let fecha2= new Date(trozos[0],trozos[1]-1,trozos[2])
console.log(fecha2)

console.log(fecha2.getDay())        /////empiezan en domingo los dias xDD

///añadir dias a una fecha

fecha2.setDate(fecha2.getDate() +7)
console.log(fecha2)

////conjuntos -Set
///no tiene orden por lo cual  no se itera
let conjunto = new Set()
conjunto.add("Zapato")
conjunto.add(31)
console.log(conjunto)

let iterador=conjunto.values().next().value     /////values devuelve un iterador

while(iterador.hasNext)
    console.log(iterador.next().value)      //////visualiza todos los iteradores

for (let elemento of conjunto)
    console.log(elemento)

conjunto.forEach(elemento => {console.log(elemento)})

/////mapas


let mapa = new Map()

mapa.set("windows", "objeto de cristal")        ////para añadir elementos al mapa
mapa.set("door","esapcio que se usa para salir de clase")
console.log(mapa)

let it=mapa.entries()
while(true)
{
    let valor = it.next().value
    if(!valor) break
        console.log(valor)
}

for (let clave of mapa.keys())
    console.log(clave)
