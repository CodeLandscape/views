<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial en PHP</title>
</head>
<body>
    <table border="1">
        <?php
        echo "<th colspan=2> Tabla de factoriales del 1 al 10 </th>";
     
         for($i=1;$i<=10;$i++)
         {
             $resul=1;
             for($j=1;$j<=$i;$j++)
             {
                 $resul= $resul * $j;
             }
             echo "<tr>";
             echo "<td>$i</td>";
             echo "<td>$resul</td>";
             echo "</tr>";
         }
         echo "<td colspan=2>Luis Tabares </td>";
    ?>
   </table>
</body>
</html>