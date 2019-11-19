<?php
error_reporting(1);
switch($_SERVER['SERVER_NAME']){
  case "localhost":
  define("SERVER_HOST","localhost");
  define('SERVER_USER',"root");
  define('SERVER_PASS',"root");
  define('SERVER_DB',"eguerra");
  break;

}
?>
