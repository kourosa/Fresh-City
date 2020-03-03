<?php

header('Content-type: application/json');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

// get database connection
include_once '../Config/database.php';
include_once '../Objects/comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

//json_encode($example);

$comment->companyid = $data->companyid;
$comment->username = $data->username;
$comment->comment = $data->comment;
$comment->rate = $data->rate;




// create the service
if($comment->create()){
    // set response code
    http_response_code(200);
    // display message: user was service
    echo json_encode(array("message" => "comment saved"));
}
 
// message if unable to create service
else{
    echo json_encode(array("message" => "Unable to save comment."));
    // set response code
    http_response_code(400);
    // display message: unable to create service
}
?>
