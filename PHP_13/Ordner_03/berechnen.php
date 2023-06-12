<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ergebnis der Aufloesung</title>
</head>
<body>
<?php
print "<h3>Bildgröße</h3>";
$width = $_GET["width"];
$resolution = $_GET["dpi"];
$widthNew = ($width / $resolution) * 2.54;
$widthNew = round($widthNew, 2); //
echo "<p>Bei einer Breite des Bildes von $width px und einer gewünschten Auflösung von $resolution dpi ergibt sich eine Bildbreite von $widthNew cm</p>";
echo "<pre>"; //
/* sorgt für eine formatierte Ausgabe 
The print_r() function prints the information about a variable in a more human-readable way. */
print_r($_GET);
echo "</pre>";

// echo "Die berechnete Aufloesung beträgt: " . $_GET["width"] . " " . $_GET["dpi"]; 
?>
</body>
</html>