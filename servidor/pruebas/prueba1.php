<?php

echo "<h1> Hola mundo </h1>";
$num=7;     //las constantes se declaran sin el simbolo dolar

settype($nombre,"String");
$nombre="Luis";
echo "<h2> $nombre </h2>";



for($i=0;$i<=10;$i++){
    if($i%2==0){
        echo $i;
    };
};

echo "</br>";
define ("CLASE","2DAW");        //nombre de variable y valor, para definir una cons
echo "Mi clase es: " .CLASE. "</br>";

function fun1()
{
    echo "Mensaje de funcion";
}

echo fun1();

$variable=3;
echo "Valor de variable: ". $variable;      //concat la string con la var para depurar mejor y encontrar errores

?>

<a href="index.html">Ve a otra página</a>

