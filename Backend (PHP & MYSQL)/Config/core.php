<?php
// show error reporting
error_reporting(E_ALL);
 
// set your default time-zone
date_default_timezone_set('Asia/Almaty');
 
// variables used for jwt
$key = "0937293232";
$iss = "http://ponpon.kz";
$aud = "http://ponpon.com";
$iat = 1356999524;
$nbf = 1357000000;
?>