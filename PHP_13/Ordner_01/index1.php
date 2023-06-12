<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Einbettung</title>
</head>
<body>
  <h1>Jetzt gehts los</h1>
<p>Die erste Zeile<br>
<?php echo "Die zweite Zeile PHP <br>"; ?>
   Die dritte Zeile <br>
   <?php
       echo "Die vierte Zeile <br>";
       echo "<h2>Und die fünfte Zeile</h2>";
    ?>
   </p>
</body>
</html>