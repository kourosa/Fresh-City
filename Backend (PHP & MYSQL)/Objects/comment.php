<?php
class Comment{
 
    // database connection and table name
    private $conn;
    private $table_name = "comments";
    // object properties
    public $companyid;
    public $username;
    public $comment;
    public $rate;
    public $date;


    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // create new comment record
function create(){
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
            companyid = :companyid,
            username = :username, 
                comment =:comment,
                rate =:rate";
 
    // prepare the query
    $stmt = $this->conn->prepare($query);
    // sanitize
    $this->companyid=htmlspecialchars(strip_tags($this->companyid));
    $this->username=htmlspecialchars(strip_tags($this->username));
    $this->comment=htmlspecialchars(strip_tags($this->comment));
    $this->rate=htmlspecialchars(strip_tags($this->rate));

    // bind the values
    $stmt->bindParam(':companyid', $this->companyid);
    $stmt->bindParam(':username', $this->username);
    $stmt->bindParam(':comment', $this->comment);
    $stmt->bindParam(':rate', $this->rate);
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
 
// check if given comment exist in the database
function getcomments(){

    // query to check if comment exists
    $query = "SELECT *
            FROM " . $this->table_name . "
            WHERE companyid = :companyid";
     $stmt = $this->conn->prepare( $query );
     $this->companyid=htmlspecialchars(strip_tags($this->companyid));
    $stmt->bindParam(':companyid', $this->companyid);

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


}
?>