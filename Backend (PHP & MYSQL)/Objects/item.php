<?php
class Item{
 
    // database connection and table name
    private $conn;
    private $table_name = "items";
    // object properties
    public $itemid;
    public $category;
    public $subcategory;
    public $compnay;
    public $companyid;
    public $description;
    public $imageurl;
    public $price;
    public $dprice;
    public $discount;
    public $expiry;
    public $rate;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // create new item record
function create(){
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
            category = :category,
            subcategory = :subcategory, 
            company =:company,
            companyid =:companyid,
            description = :description,
            imageurl = :imageurl, 
            price =:price,
            dprice =:dprice,
            expiry =:expiry,
            discount=:discount,
            rate =:rate";
 
    // prepare the query
    $stmt = $this->conn->prepare($query);
    // sanitize
    $this->rate=5;
    $this->category=htmlspecialchars(strip_tags($this->category));
    $this->subcategory=htmlspecialchars(strip_tags($this->subcategory));
    $this->company=htmlspecialchars(strip_tags($this->company));
    $this->companyid=htmlspecialchars(strip_tags($this->companyid));
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->imageurl=htmlspecialchars(strip_tags($this->imageurl));
    $this->price=htmlspecialchars(strip_tags($this->price));
    $this->dprice=htmlspecialchars(strip_tags($this->dprice));
    $this->discount=htmlspecialchars(strip_tags($this->discount));
    $this->expiry=htmlspecialchars(strip_tags($this->expiry));
    $this->rate=htmlspecialchars(strip_tags($this->rate));
    // bind the values
    $stmt->bindParam(':category', $this->category);
    $stmt->bindParam(':subcategory', $this->subcategory);
    $stmt->bindParam(':company', $this->company);
    $stmt->bindParam(':discount', $this->discount);
    $stmt->bindParam(':expiry', $this->expiry);
    $stmt->bindParam(':companyid', $this->companyid);
    $stmt->bindParam(':description', $this->description);
    $stmt->bindParam(':imageurl', $this->imageurl);
    $stmt->bindParam(':price', $this->price);   
    $stmt->bindParam(':dprice', $this->dprice);
    $stmt->bindParam(':rate', $this->rate);

    if($stmt->execute()){
        return true;
    }
 
    return false;
}
 
function companyItemExists(){

    // query to check if item exists
    $query = "SELECT itemid,company, expiry,discount, companyid, category, subcategory, description, imageurl,price, dprice, rate 
    FROM " . $this->table_name . "
            WHERE companyid = :companyid";
 
    // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // sanitize
    $this->companyid=htmlspecialchars(strip_tags($this->companyid));
    // bind given company value
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
 
    // return false if email does not exist in the database
    return false;
}

function getAllItem(){
    // query to check if company exists
    $query = "SELECT itemid,datecreated,company,companyid,discount,expiry, category, subcategory, description, imageurl,price, dprice, rate 
    FROM " . $this->table_name . " ORDER BY discount DESC";
 
    // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // execute the query
    $stmt->execute();
    // get number of rows
    $num = $stmt->rowCount();
 
    // if email exists, assign values to object properties for easy access and use for php sessions
    if($num>0){

        // get record details / values
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        // return true because company exists in the database
        return $result ;
    }
 
    // return false if company does not exist in the database
    return false;
}




function getAllItemByDiscount(){

    // query to check if company exists
    $query = "SELECT itemid,company,companyid,discount,expiry, category, subcategory, description, imageurl,price, dprice, rate 
    FROM " . $this->table_name . " ORDER BY discount DESC";
 
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

function getAllItemByDate(){
    // query to check if company exists
    $query = "SELECT itemid,datecreated,company,companyid,discount,expiry, category, subcategory, description, imageurl,price, dprice, rate 
    FROM " . $this->table_name . " ORDER BY datecreated DESC";
 
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
        // return true because company exists in the database
        return $result ;
    }
 
    // return false if company does not exist in the database
    return false;
}


function remove(){

    // query to check if company exists
     $query = "DELETE FROM " . $this->table_name . " WHERE itemid = " . $this->itemid;
   //  $query = "DELETE FROM " . $this->table_name . " WHERE id = 72";
   
   // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // execute the query
    $stmt->execute();
    // get number of rows
    return $stmt->rowCount();

}



function update(){

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
    WHERE itemid = :itemid";
    

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
$this->itemid=htmlspecialchars(strip_tags($this->itemid));

// bind the values
$stmt->bindParam(':category', $this->category);
$stmt->bindParam(':subcategory', $this->subcategory);
$stmt->bindParam(':description', $this->description);
$stmt->bindParam(':imageurl', $this->imageurl);
$stmt->bindParam(':price', $this->price);   
$stmt->bindParam(':dprice', $this->dprice);
$stmt->bindParam(':expiry', $this->expiry);
$stmt->bindParam(':discount', $this->discount);
$stmt->bindParam(':itemid', $this->itemid);


if($stmt->execute())
{
return true;
}

return false;
}

}
?>


