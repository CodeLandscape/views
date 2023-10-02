<!DOCTYPE html>
<html>
<head>
    <title>Tabla de Factoriales</title>
</head>
<body>

    <table border="1">
        <?php


    /*Recoger las variables por formulario y hacer el factorial mediante la funcion externa*/

            require_once 'funcion.php'; // Incluir el archivo con la función
            
            $inicio = $_GET["num1"];        //asi asignamos las variables del formulario
            $fin = $_GET["num2"];

            echo"<tr>
                <th>Desde Número $inicio  hasta $fin </th>
                <th>Factorial</th>
            </tr>";
            
           
                echo "<tr>";
                echo "<td>".$inicio."</td>";
                echo "<td>".factorial($i)."</td>";
                echo "</tr>";
    
            echo "<tr>
                        <td colspan=2> Luis Tabares</td>
                    </tr>"
        ?>
    </table>
    <a href="factorialConArray.php">Volver al formulario</a>
</body>
</html>
