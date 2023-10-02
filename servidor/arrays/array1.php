<?php
//crear array y guardar numeros, mostrarlo
$numeros=array (1,2,3);
echo "mostrar datos: <br/>";
/////////////////////echo $numeros;         NO SE MUESTRA CON ECHO ASI UN ARRAY,SOLO PARA VARIABLES NORMALES
print_r($numeros);                      //////con la funcion pront_r nos imprime indice y valor,solo en produccion/depuracion
var_dump($numeros);                     ///////var_dump nos saca info de variables,objetos,arrays. solo en produccion

//crear array y guardar strings

$nombres=array(
    0=>"luis",
    1=>"andres",
    2=>"guille"
);

echo "mostrar datos: <br/>";
print_r($nombres);


echo "MOSTRANDO VALORES CON BUCLE FOR<br/>";
for($i=0;$i<count($nombres);$i++)           /////////si se pone <= intentará mostrar 4 elementos y solo hay 3
{
    echo $nombres[$i];
}

echo "<br/>MOSTRANDO VALORES DE UN ARRAY NUMERICO CON BUCLE FOR EACH <br/>";

foreach ($nombres as $element)      //para recorrer el array sin saber el numero exacto de elementos
{
    echo $element. "<br/>";     //// element es una variable que solo existe en el foreach
}

/////$numeros.unset($numeros[0]);

echo "<br/>RECORRER UN ARRAY ASOCIATIVO CON FOR EACH<br/>";
$datos["Nombre"] = "Luis Tabares";
$datos ["Telefono"] = "675829394";
$datos["Ciudad"] = "Badajoz";


foreach($datos as $recorrer)
    echo "<br/>".$recorrer."<br/>";

echo "RECORRER ARRAY CON INDICEY VALOR<br/>";
foreach($datos as $indice => $recorrido)        //////indice es el nombre de la variable para guardar el indice y recorrido el valor para cada posicion de indice
    echo "<br/>".$indice.": ".$recorrido;

echo "<br/><br/><br/>";


//////////array multidimensional

$multi[0]["nombre"]="Guillermo Castro Hernandez";
$multi[0]["telefono"]="857295869";
$multi[1]["nombre"]="Sergio";
$multi[2]["nombre"]="Luis";
$multi[2]["telefono"]="74437";



foreach($multi as $index) 
    echo $index["nombre"]."<br/>";
    echo $index["telefono"]."<br/>";

?>

