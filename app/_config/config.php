<?php
error_reporting(1);
switch($_SERVER['SERVER_NAME']){
  case "localhost":
  define("SERVER_HOST","localhost");
  define('SERVER_USER',"root");
  define('SERVER_PASS',"qwerty123");
  define('SERVER_DB',"nertek");
  break;
  case "rastreo.trackware.mx":
   define("SERVER_HOST","localhost");
   define('SERVER_USER',"root");
   define('SERVER_PASS',"root");
   define('SERVER_DB',"kfna_tw");
  break;
}
?>
