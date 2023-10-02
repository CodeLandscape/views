<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar valores</title>
</head>
<body>
    <form method="GET" action= "factorialesv2.php">     
        N1<input type="text" name="num1"/>
        N2<input type="text" name="num2"/>
        <input type="submit" name="enviar"/>
    </form>
    <?php
    //action envia los datos del formulario al php
    require_once 'funcion.php'; // Incluir el archivo con la función
        
    $inicio = $_GET["num1"];        //asi asignamos las variables del formulario
    $fin = $_GET["num2"];
    /*
    if isset(mixed $num1)
    {

    }*/

    echo"<tr>
        <th>Desde Número $inicio  hasta $fin </th>
        <th>Factorial</th>
    </tr>";

    for($i=$inicio;$i<=$fin;$i++)
    {
        echo "<tr>";
        echo "<td>$i</td>";
        echo "<td>" . factorial($i) . "</td>";
        echo "</tr>";
    }
    echo "<tr>
                <td colspan=2> Luis Tabares</td>
            </tr>"


        ?>
</body>
</html>