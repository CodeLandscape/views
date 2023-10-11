let objeto={
    id:7,
    nombre: "Luis",
}

console.log(objeto)

let objeto2= {
    lista: [1,2,3,4],
    cosa: {
        id:7,
        conjunto: new Set(),
        mas_cosas: [
            {nombre: "Paco"},
            {nombre: "Miguel"},
            function (param1){console.log(param1)}
        ],
        fun1: function (p2){console.log("hola mundo")}
    }
}

console.log(objeto2.cosa.mas_cosas[0].nombre)

let refObjeto = objeto
refObjeto.nombre = "Blancanieves"
console.log(objeto.nombre)
objeto2.cosa.fun1()
objeto2.cosa.mas_cosas[2](42)

console.log(JSON.stringify(objeto))
const textJSON = '{"id":7, "nombre":"Blancanieves"}'

