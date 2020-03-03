<?php
// required headers

// files needed to connect to database
include_once '../Config/database.php';
include_once '../Objects/user.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// instantiate user object
$user = new User($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));

// set product property values
$user->email = $data->email;
$email_exists = $user->emailExists();

// generate json web token
include_once '../Config/core.php';
include_once '../libs/php-jwt-master/src/BeforeValidException.php';
include_once '../libs/php-jwt-master/src/ExpiredException.php';
include_once '../libs/php-jwt-master/src/SignatureInvalidException.php';
include_once '../libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;

//echo json_encode ($email_exists);

// check if email exists and if password is correct
if($email_exists && password_verify($data->password, $user->password)){
 
    $token = array(
       "iss" => $iss,
       "aud" => $aud,
       "iat" => $iat,
       "nbf" => $nbf,
       "data" => array(
       "email" => $user->email,
       "type" => $user->type,
       "username" => $user->username,
       "id" => $user->id
       )
    );

    // set response code
    http_response_code(200);
 
    // generate jwt
    $jwt = JWT::encode($token, $key);

    echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt,
                "type" => $user->type,
                "username" => $user->username,
                "id" => $user->id

            )
        );
 
}
// login failed
else{
    // set response code
    http_response_code(401);
    // tell the user login failed
    echo json_encode(array("message" => "Login failed."));
}
?>