<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vista de jesuitas</title>
</head>
<body>
    <form action="jesuitaObjetosCopia.php" method=POST>
        <label for="nombre">Numero de la visita:</label>
        <input type="text" name="numerovisita"></input></br>
        <input type="submit"></input>
        <br>
    </form>
    <?php
         $servidor="localhost";
         $user = "root";
         $password= "";
         $bd= "jesuitis";
         $sql= "SELECT * FROM visita inner join jesuita where jesuita.idJesuita=visita.idJesuita;";
         //echo $sql;
         //objeto para reelizar la conexion a bbdd
         $conexion=new mysqli($servidor,$user,$password,$bd);

        echo $sql;
        echo "<br>";
        $resultado= $conexion->query($sql);
        //$fila=mysqli_fetch_array($resultado);
        //para preguntra en un tipo text, se hace por empty
        $numVisita= $_POST["numerovisita"];
       // if(isset($_POST))
        echo "Visita a buscar: ".$numVisita;
        if($resultado->num_rows==0)
            echo "<h1>No hay Yisuitas</h1>";
       
        while($fila=$resultado->fetch_array())
        {
            if($fila["idVisita"]== $numVisita)
                echo "<p>".$fila["idVisita"]."<br>".$fila["idJesuita"]."<br>".$fila["nombre"]."<br>".$fila["firma"];
            /*if($fila=mysqli_fetch_array($resultado)=false)
                echo "No existe en la bbdd";*/
        }
        $conexion->close();
    ?>
    <br><a href="jesuitaObjetosCopia.php">Reinciar busqueda</a>
</body>
</html>