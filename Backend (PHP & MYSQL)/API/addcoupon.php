<?php

header('Content-type: application/json');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

// get database connection
include_once '../Config/database.php';
include_once '../Objects/coupon.php';

$database = new Database();
$db = $database->getConnection();

$coupon = new Coupon($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

//json_encode($example);

$coupon->companyid = $data->companyid;
$coupon->itemid = $data->itemid;
$coupon->userid = $data->userid;




// create the service
if($coupon->create()){
    // set response code
    http_response_code(200);
    // display message: user was service
    echo json_encode(array("message" => "coupon saved"));
}
 
// message if unable to create service
else{
    echo json_encode(array("message" => "Unable to save the service or product."));
    // set response code
    http_response_code(400);
    // display message: unable to create service
}
?>
