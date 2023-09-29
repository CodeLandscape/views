//definir la funcion forma 1


function funcion1(param1,param2)
{
    let suma= param1 + param2
    return suma
}

console.log(funcion1(1,1))

//definir la funcion forma 2

//let mifuncion = function(arg1,arg2){return arg1-arg2}


    mifuncion = function(arg1,arg2){return arg1-arg2}

console.log(mifuncion(6,3))


let variable = 7
variable= "hola"
variable= funcion1(3,4)

console.log(variable)

let sumar = function (a,b) {return a+b}
let restar = function (a,b) {return a-b}

function operar(operacion,valor1,valor2)
{
    let resul= operacion(valor1,valor2)
    console.log(resul)
}

operar(sumar,4,5)
operar(restar,10,5)

//callback, funcion que pasamos a otra funcion para que la llame cuando termine

//consultaBD(param1,param2,callback)

//funciones flecha


let fun3 = (p1,p2) => {return p1*7}

console.log(fun3(3))

