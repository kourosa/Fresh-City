<?php
// required headers

// files needed to connect to database
include_once '../Config/database.php';
include_once '../Objects/item.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection(); 
 
// instantiate user object
$item = new Item($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$item->companyid = $data->companyid;
$items = $item->companyItemExists();


// check if email exists and if password is correct
if($items ){
    // set response code
    http_response_code(200);
     echo json_encode(
            array(
                "message" => "Successful Responce.",
                "items" => $items
            )
        );
 
}
// login failed
else{
    // set response code
    http_response_code(401);
    // tell the user login failed
    echo json_encode(array("message" => "Cannot catch items."));
}
?>