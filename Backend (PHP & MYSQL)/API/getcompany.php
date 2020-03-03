<?php
// required headers

// files needed to connect to database
include_once '../Config/database.php';
include_once '../Objects/company.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection(); 
 
// instantiate user object
$company = new Company($db);
 

// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$company->company = $data->company;
$companyExists = $company->companyExists();


// check if email exists and if password is correct
if($companyExists ){
    // set response code
    http_response_code(200);
     echo json_encode(
            array(
                "message" => "GetCompony API,Successful Responce.",               
                "id" => $company->id,
                "company" => $company->company,
                "fb" => $company->instagram,
                "vk" => $company->vk,
                "instagram" => $company->instagram,
                "category" => $company->category,
                "schedule" => $company->schedule,
                "description" => $company->description,
                "address" => $company->address,
                "phone" => $company->phone,
                "website" => $company->website,
                "map" => explode("@Z$", $company->map),
                "conditions" => explode("@Z$", $company->conditions),
                "masters" => explode("@Z$", $company->masters),
                "features" => explode("@Z$", $company->features),
                "imagesurl" => explode("@Z$", $company->imagesurl)

            )
        );
 
}
// login failed
else{
    // set response code
    http_response_code(401);
    // tell the user cant catch data of company failed
    echo json_encode(array("message" => "Something goes wrong,cant catch data of company data."));
}
?>