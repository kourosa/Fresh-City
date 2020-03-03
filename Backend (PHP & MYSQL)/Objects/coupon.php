<?php
class Coupon{
 
    // database connection and table name
    private $conn;
    private $table_name = "coupons";
    // object properties
    public $couponid;
    public $companyid;
    public $itemid;
    public $userid;        

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


    // create new user record
function create(){
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
            companyid =:companyid,
            userid = :userid,
            itemid = :itemid";
 
    // prepare the query
    $stmt = $this->conn->prepare($query);
    // sanitize
;
    $this->companyid=htmlspecialchars(strip_tags($this->companyid));
    $this->userid=htmlspecialchars(strip_tags($this->userid));
    $this->itemid=htmlspecialchars(strip_tags($this->itemid));

    // bind the values
    $stmt->bindParam(':companyid', $this->companyid);
    $stmt->bindParam(':userid', $this->userid);
    $stmt->bindParam(':itemid', $this->itemid);

    if($stmt->execute()){
        return true;
    }
 
    return false;
}
 
function getUserCoupons(){
  
          $query = "SELECT coupons.userid,coupons.datecreated,items.itemid,items.company, items.description, items.imageurl,items.price, items.dprice, items.expiry 
            FROM items
            JOIN coupons
            ON items.itemid = coupons.itemid 
           WHERE userid = :userid";

    $stmt = $this->conn->prepare( $query );
 
    // sanitize
    $this->userid=htmlspecialchars(strip_tags($this->userid));
    // bind given email value
    $stmt->bindParam(':userid', $this->userid); 
    // execute the query
    $stmt->execute();
    // get number of rows
    $num = $stmt->rowCount();
 
    // if email exists, assign values to object properties for easy access and use for php sessions
    if($num>0){
        // get record details / values
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        // return true because email exists in the database
        return $result ;
    }
 
    // return false if email does not exist in the database
    return false;
}


function getCompanyCoupons(){
  
    $query = "SELECT coupons.userid,coupons.datecreated,items.companyid,items.itemid,items.company, items.description, items.imageurl,items.price, items.dprice, items.expiry 
      FROM coupons
      JOIN items
      ON items.itemid = coupons.itemid 
      WHERE items.companyid = :companyid";

$stmt = $this->conn->prepare( $query );

// sanitize
$this->companyid=htmlspecialchars(strip_tags($this->companyid));
// bind given companyid value
$stmt->bindParam(':companyid', $this->companyid); 
// execute the query
$stmt->execute();
// get number of rows
$num = $stmt->rowCount();


// if company exists, assign values to object properties for easy access and use for php sessions
if($num>0){
  // get record details / values
  $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
  // return true because email exists in the database
  return $result ;
}

// return false if company does not exist in the database
return false;
}


function getAllItem(){

    // query to check if company exists
    $query = "SELECT id,company,companyid,discount,expiry, category, subcategory, description, imageurl,price, dprice, rate 
    FROM " . $this->table_name ;
 
    // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // execute the query
    $stmt->execute();
    // get number of rows
    $num = $stmt->rowCount();
 
    // if company exists, assign values to object properties for easy access and use for php sessions
    if($num>0){

        // get record details / values
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        // return true because email exists in the database
        return $result ;
    }
 
    // return false if company does not exist in the database
    return false;
}


function remove(){

    // query to check if company exists
     $query = "DELETE FROM " . $this->table_name . " WHERE id = " . $this->id;
   //  $query = "DELETE FROM " . $this->table_name . " WHERE id = 72";
   
   // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // execute the query
    $stmt->execute();
    // get number of rows
    return $stmt->rowCount();

}



function update(){

    // query to update if coupon
    $query = "UPDATE " . $this->table_name . "
    SET
    category = :category,
    subcategory = :subcategory, 
    description = :description,
    imageurl = :imageurl, 
    price =:price,
    dprice =:dprice,
    expiry =:expiry,
    discount=:discount
    WHERE id = :id";
    

// prepare the query
$stmt = $this->conn->prepare($query);
// sanitize
$this->category=htmlspecialchars(strip_tags($this->category));
$this->subcategory=htmlspecialchars(strip_tags($this->subcategory));
$this->description=htmlspecialchars(strip_tags($this->description));
$this->imageurl=htmlspecialchars(strip_tags($this->imageurl));
$this->price=htmlspecialchars(strip_tags($this->price));
$this->dprice=htmlspecialchars(strip_tags($this->dprice));
$this->expiry=htmlspecialchars(strip_tags($this->expiry));
$this->discount=htmlspecialchars(strip_tags($this->discount));
$this->id=htmlspecialchars(strip_tags($this->id));

// bind the values
$stmt->bindParam(':category', $this->category);
$stmt->bindParam(':subcategory', $this->subcategory);
$stmt->bindParam(':description', $this->description);
$stmt->bindParam(':imageurl', $this->imageurl);
$stmt->bindParam(':price', $this->price);   
$stmt->bindParam(':dprice', $this->dprice);
$stmt->bindParam(':expiry', $this->expiry);
$stmt->bindParam(':discount', $this->discount);
$stmt->bindParam(':id', $this->id);


if($stmt->execute())
{
return true;
}

return false;
}

}
?>


