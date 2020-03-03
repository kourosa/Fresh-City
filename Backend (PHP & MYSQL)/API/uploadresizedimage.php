<?php

header('Content-type: application/json');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
$data = json_decode(file_get_contents("php://input"));
$img=$data->img;
$companyid=$data->companyid;

$companydir ='./images/'.$companyid.'/';



if (!is_dir($companydir)) {
    mkdir($companydir,0744);
    }
    //  $error = error_get_last();
  
    //  echo json_encode(array(
   
    //     "message3" => $error ,
        
    // ));     
    



if(!$img)
{
        http_response_code(402);
        // show user details
        echo json_encode(array(
            "message" => "No image is sent!",
            
        ));
        exit;
    }
else {
    
     
     
    if (strpos($img, 'data:image/jpeg;base64,') === 0) {
        $img = str_replace('data:image/jpeg;base64,', '', $img);  
        $ext = '.jpg';
    }
    if (strpos($img, 'data:image/png;base64,') === 0) {
        $img = str_replace('data:image/png;base64,', '', $img); 
        $ext = '.png';
    }
     
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file = $companydir.'img'.date("YmdHis").$ext;
     
    if (file_put_contents($file, $data)) {
        http_response_code(200);
        // show user details
        echo json_encode(array(
            "message" => "File Uploaded.",
            "path" => $file
        ));
    } else {
        http_response_code(403);
        // show user details
        echo json_encode(array(
            "message" => "The image could not be saved.!",
            
        ));
    } 
     
  
}
?>
