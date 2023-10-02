<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visualizar imagenes en filas de 3</title>
    <link rel="stylesheet" href="images.css">
</head>
<body>
    <h1>Visualizar imagenes en filas de 3</h1>
    <?php

    require_once "pract1.php";

    echo "<h2>V1 visualizacion de imagenes por indice numerico</h2>";
    v1recorrer($verimgs);
    echo "<br/><h2>V2 visualizacion de imagenes por indice asociativo</h2></br>";

    recorrer($listadoImg);
    
    ?>
</body>
</html>