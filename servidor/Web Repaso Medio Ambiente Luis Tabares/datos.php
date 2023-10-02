<?php
    ///////Luis Tabares--

    //recogemos las variables a traves del formulario
    echo "Nombre: ".$POST["nombre"]."<br/>";
    if (isset($_POST["ciudad"]))     //comprueba si está marcado el campo o no
        echo "Ciudad de Origen: ".$_POST["ciudad"]."<br/>";
    if (isset($_POST["ciudad"]))     //comprueba si está marcado el campo o no
        echo $_POST["ofertas"]."<br/>";
    if (isset($_POST["ofertas"]))        //comprueba si está marcado el campo o no
        echo "Genero: ".$_POST["genero"]."<br/>";
    if (isset($_POST["legal"]))      //comprueba si está marcado el campo o no
        echo $_POST["legal"];
     /////////asignacion del array del checkbox con el mismo name
    $intereses= $_POST["interes"];       //en la declaracion de la variable no se pone [], eso se define en el html
    if (isset($_POST["interes"]))        //comprueba si está marcado el campo o no
    foreach($intereses as $valor)
        echo "<br/>Tu: ".$valor;
?>

