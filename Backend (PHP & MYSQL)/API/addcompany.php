<?php

// required headers

header('Content-type: application/json');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

// get database connection
include_once '../Config/database.php';
include_once '../Objects/company.php';

$database = new Database();
$db = $database->getConnection();

$company = new Company($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

//json_encode($example);
$company->id = $data->id;
$company->type = $data->type;
$company->company = $data->company;
$company->category = $data->category;
$company->description = $data->description;
$company->address = $data->address;
$company->phone = $data->phone;
$company->schedule = $data->schedule;
$company->website = $data->website;
$company->instagram = $data->instagram;
$company->fb = $data->fb;
$company->vk = $data->vk;
$company->map = $data->map;
$company->conditions = $data->conditions;
$company->features = $data->features;
$company->masters = $data->masters;
$company->imagesurl = $data->imagesurl;

//if(true)    echo json_encode(array("message" => $company));
//else
// create the user
if($company->create()){
 
    // set response code
    http_response_code(200);
 
    // display message: user was created
    echo json_encode(array("message" => "Company was Registered."));
}
 
// message if unable to create user
else{
    echo json_encode(array("message" => "Unable to register the company."));
    // set response code
    http_response_code(400);
    // display message: unable to create user
   // echo json_encode(array("message" => "Unable to create user."));
}
?>
