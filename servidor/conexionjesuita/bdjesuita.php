<?php


    $conexion=mysqli_connect("localhost","root","","jesuitis");

    $sql= "SELECT nombre,firma FROM jesuita";
    $resultado= mysqli_query($conexion,$sql);
    $fila=mysqli_fetch_array($resultado);


?>