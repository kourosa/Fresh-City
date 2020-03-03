<?php

// required headers

header('Content-type: application/json');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

if( !empty( $_POST ) ){
 $data = json_encode( $_POST );
  if( json_last_error() != JSON_ERROR_NONE ){
   exit;
}
  
if (!isset($_FILES['image']) || !is_uploaded_file($_FILES['image']['tmp_name'])) {
   echo 'No file send...';
   exit;
}
  
$companydir ='./companies/'.$_POST['id'].'/';

if (!is_dir($companydir)) {
    //Create our directory if it does not exist
    mkdir($companydir);
    }
 


$userfile_tmp = $_FILES['image']['tmp_name'];
$userfile_name = $_FILES['image']['name'];

//////

        $file = $_FILES['image']['tmp_name']; 
        $sourceProperties = getimagesize($file);
        $fileNewName = time();
        $folderPath = $companydir;
        $ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        $imageType = $sourceProperties[2];

        switch ($imageType) {
            case IMAGETYPE_PNG:
                $imageResourceId = imagecreatefrompng($file); 
                $targetLayer = imageResize($imageResourceId,$sourceProperties[0],$sourceProperties[1]);
                imagepng($targetLayer,$companydir. $fileNewName. "_thump.". $ext);
                break;

            case IMAGETYPE_GIF:
                $imageResourceId = imagecreatefromgif($file); 
                $targetLayer = imageResize($imageResourceId,$sourceProperties[0],$sourceProperties[1]);
                imagegif($targetLayer,$folderPath. $fileNewName. "_thump.". $ext);
                break;


            case IMAGETYPE_JPEG:
                $imageResourceId = imagecreatefromjpeg($file); 
                $targetLayer = imageResize($imageResourceId,$sourceProperties[0],$sourceProperties[1]);
                imagejpeg($targetLayer,$folderPath. $fileNewName. "_thump.". $ext);
                break;


            default:
                echo "Invalid Image type.";
                exit;
                break;
        }


        if (move_uploaded_file($file, $companydir. $fileNewName. ".". $ext))

        http_response_code(200);
        // show user details
        echo json_encode(array(
            "message" => "File Uploaded.",
            "path" => $companydir. $fileNewName. "_thump.".  $ext
        ));
    }
    else{
        http_response_code(401);
        // tell the user access denied  & show error message
        echo json_encode(array(
            "message" => "Upload Invalid!",
        ));
    }






function imageResize($imageResourceId,$width,$height) {
    $targetWidth =400/$height*$width;
    $targetHeight =400;
    if ($targetWidth/$targetHeight >3/2)$targetWidth=600;
    if ($targetWidth/$targetHeight <4/3)$targetWidth=400*4/3;

    $targetLayer=imagecreatetruecolor($targetWidth,$targetHeight);
    imagecopyresampled($targetLayer,$imageResourceId,0,0,0,0,$targetWidth,$targetHeight, $width,$height);

    return $targetLayer;
}

?>
