<?php
// required headers

// files needed to connect to database
include_once '../Config/database.php';
include_once '../Objects/coupon.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection(); 
 
// instantiate user object
$coupon = new Coupon($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$coupon->userid = $data->userid;
$coupon = $coupon->getUserCoupons();


// check if email exists and if password is correct
if($coupon ){
    // set response code
    http_response_code(200);
     echo json_encode(
            array(
                "message" => "Successful Responce.",
                "items" => $coupon
            )
        );
 
}
// login failed
else{
    // set response code
    http_response_code(401);
    // tell the user login failed
    echo json_encode(array("message" => "Cannot catch items. request failed."));
}
?>