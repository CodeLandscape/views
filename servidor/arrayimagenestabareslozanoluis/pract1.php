<?php

/////V1
$verimgs=array(
    0=>"imagenes/img1.jpeg",
    1=>"imagenes/img2.jpeg",
    2=>"imagenes/img3.jpeg",
);


function v1recorrer($verimgs){
    for($i=0;$i<count($verimgs);$i++)
    {
        echo "<img src='$verimgs[$i]'>";
    }
}
/////V2
    $listadoImg=[
        ["direccion" =>"imagenes/img1.jpeg", "nombre" =>"Perrete"],
        ["direccion2" =>"imagenes/img2.jpeg", "nombre" =>"Chuchi"],
        ["direccion3" =>"imagenes/img3.jpeg", "nombre" =>"Canido"]
    ];


    function recorrer($listadoImg)
    {
        foreach($listadoImg as $vertodas)
        echo "<figure>";
            echo "<img src='{$vertodas["direccion"]}'>";            ////añadir el resto de echos
            echo "<figcaption>"."{$vertodas["nombre"]}"."</figcaption>";
        echo "</figure>";
    };

    
    
?>