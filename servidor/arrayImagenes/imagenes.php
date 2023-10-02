<?php
$imagenes = [
    ['url' => 'imagenes/img1.jpeg', 'nombre' => 'Imagen 1'],
    ['url' => 'imagenes/img2.jpeg', 'nombre' => 'Imagen 2'],
    ['url' => 'imagenes/img3.jpeg', 'nombre' => 'Imagen 3']
    // Puedes agregar más imágenes si lo deseas
];

foreach ($imagenes as $imagen) {
    echo "<img src='{$imagen['url']}' alt='{$imagen['nombre']}'><br>";
    echo "Nombre: {$imagen['nombre']}<br><br>";
}
?>