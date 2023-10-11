<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vista de jesuitas</title>
</head>
<body>
    <form action="jesuitaObjetos.php" method=POST>
        <label for="firma">Firma:</label>
        <input type="text" name="firma"></input></br>
        <input type="submit"></input>
        <br>
    </form>
    <?php
        $firmaJesuita= $_POST["firma"];
         $servidor="localhost";
         $user = "root";
         $password= "";
         $bd= "jesuitis";
         $sql= "SELECT nombre,firma FROM jesuita where firma like '%$firmaJesuita%';";
         //objeto para reelizar la conexion a bbdd
         $conexion=new mysqli($servidor,$user,$password,$bd);

       // echo $sql;
        $resultado= $conexion->query($sql);
        //$fila=mysqli_fetch_array($resultado);
        //para preguntra en un tipo text, se hace por empty
        
       // if(isset($_POST))
        //echo "Nombre a buscar: ".$nombreJesuita;
        // if($resultado->num_rows==0)
        //     echo "<h1>No hay Jesuitas</h1>";
       
        // while($fila=$resultado->fetch_array())
        // {
        //      if($fila["firma"]== $firmaJesuita)
        //         echo "<p>".$fila["nombre"]."<br>".$fila["firma"]."</p>";
        //     /*if($fila=mysqli_fetch_array($resultado)=false)
        //         echo "No existe en la bbdd";*/
        // }

        while ($fila = $resultado->fetch_array()) {
            echo "<p>" . $fila["nombre"] . "<br>" . $fila["firma"] . "</p>";
        }
        
        $conexion->close();
    ?>
    <br><a href="jesuitaObjetos.php">Reinciar busqueda</a>
</body>
</html>