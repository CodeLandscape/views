let empresa1={
    nombre: "chachi",
    tesoreria: 15500,
    empleados: [
            {nombre: "Luis",
            sueldo: 2000},
            {nombre: "Guille",
            id:2,
            sueldo: 2000},
    ],
    proyectos: [
       {nombre:"pro1",
        esfuerzo: 20,
       presu: 3000,
        empleado: []},
    ],
}

let empleado1 = empresa1.empleados[0]
console.log(empleado1)
let proyecto1 = empresa1.proyectos[1]

asignar(empresa1, empleado1,empresa1.proyectos[0])


let empresa1b={
    nombre: "chachi",
    tesoreria: 15500,
    empleados: [
            {nombre: "Luis",
            sueldo: 2000},
            {nombre: "Guille",
            id:2,
            sueldo: 2000},
    ],
    proyectos: [
        {nombre:"pro1",
        esfuerzo: 20,
        presu: 3000,
        empleados:[empresa1.empleados[0]]},
    ],
}
//console.log(empresa1b.proyectos)


function asignar(empleado,proyecto)
{
    proyecto.empleados.push(empleado)
}

/*
let empleado =
let proyecto=
*/

/*

PRIMERO SE DEFINE STRUC DE DATOS, DEPSUES ALGORITMO Y DEPSUES ORGANIZACION DEL CODIGO
    1 empleado solo puede estar en un proyecto

    empresa: string
    tesoreria: numerb
    empleados: array de objetos
    proyectos : array de objetos

*/ 