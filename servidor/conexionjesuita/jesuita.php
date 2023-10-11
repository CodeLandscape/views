<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vista de jesuitas</title>
</head>
<body>
    <form action="jesuita.php" method=POST>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre"></input></br>
        <input type="submit"></input>
        <br>
    </form>
    <?php
         $conexion=mysqli_connect("localhost","root","","jesuitis");
       // if(empty $_POST)
        $sql= "SELECT nombre,firma FROM jesuita;";
       // echo $sql;
        $resultado= mysqli_query($conexion,$sql);
        //$fila=mysqli_fetch_array($resultado);
        //para preguntra en un tipo text, se hace por empty
        $nombreJesuita= $_POST["nombre"];
       // if(isset($_POST))
        echo "Nombre a buscar: ".$nombreJesuita;
        if(mysqli_num_rows($resultado)==0)
            echo "<h1>No hay Yisuitas</h1>";
        while($fila=mysqli_fetch_array($resultado))
        {
            if($fila["nombre"]== $nombreJesuita)
                echo "<p>".$fila["nombre"]."<br>".$fila["firma"]."</p>";
            /*if($fila=mysqli_fetch_array($resultado)=false)
                echo "No existe en la bbdd";*/
        }
        mysqli_close($conexion);
    ?>
    <br><a href="jesuita.php">Reinciar busqueda</a>
</body>
</html>