<?php
class Company{
 
    // database connection and table name
    private $conn;
    private $table_name = "companies";
    // object properties
    public $id;
    public $company;
    public $category;
    public $description;
    public $schedule;
    public $address;
    public $phone;
    public $website;
    public $instagram;
    public $fb;
    public $vk;
    public $map;
    public $conditions;
    public $features;
    public $masters;
    public $imagesurl;
    //public $date;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // create new user record
function create(){
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
                id = :id,
                company = :company,  
                category = :category, 
                description = :description,
                address = :address,
                phone = :phone,
                schedule=:schedule,
                website = :website, 
                instagram =:instagram,
                fb =:fb,
                vk =:vk,
                map = :map,
                conditions = :conditions, 
                features =:features,
                masters =:masters,
                imagesurl =:imagesurl ";
 
    // prepare the query
    $stmt = $this->conn->prepare($query);

    //implode
    $this->conditions= implode("@Z$",$this->conditions);
    $this->features= implode("@Z$",$this->features);
    $this->masters= implode("@Z$",$this->masters);  
    $this->imagesurl= implode("@Z$",$this->imagesurl); 
    $this->map= implode("@Z$",$this->map);   
  
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    $this->company=htmlspecialchars(strip_tags($this->company));
    $this->category=htmlspecialchars(strip_tags($this->category));
    $this->schedule=htmlspecialchars(strip_tags($this->schedule));
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->address=htmlspecialchars(strip_tags($this->address));
    $this->phone=htmlspecialchars(strip_tags($this->phone));
    $this->website=htmlspecialchars(strip_tags($this->website));
    $this->instagram=htmlspecialchars(strip_tags($this->instagram));
    $this->fb=htmlspecialchars(strip_tags($this->fb));
    $this->vk=htmlspecialchars(strip_tags($this->vk));
    $this->map=htmlspecialchars(strip_tags($this->map));
    $this->conditions=htmlspecialchars(strip_tags($this->conditions));
    $this->features=htmlspecialchars(strip_tags($this->features));
    $this->masters=htmlspecialchars(strip_tags($this->masters));
    $this->imagesurl=htmlspecialchars(strip_tags($this->imagesurl));

    // bind the values
    $stmt->bindParam(':id', $this->id);
    $stmt->bindParam(':company', $this->company);
    $stmt->bindParam(':category', $this->category);
    $stmt->bindParam(':description', $this->description);
    $stmt->bindParam(':address', $this->address);
    $stmt->bindParam(':phone', $this->phone);
    $stmt->bindParam(':website', $this->website);
    $stmt->bindParam(':schedule', $this->schedule);
    $stmt->bindParam(':instagram', $this->instagram);
    $stmt->bindParam(':fb', $this->fb);
    $stmt->bindParam(':vk', $this->vk);
    $stmt->bindParam(':map', $this->map);
    $stmt->bindParam(':conditions', $this->conditions);
    $stmt->bindParam(':features', $this->features);
    $stmt->bindParam(':masters', $this->masters);
    $stmt->bindParam(':imagesurl', $this->imagesurl);

    // execute the query, also check if query was successful
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
 
// check if given id exist in the database
function idExists(){

    // query to check company if id exists
    $query = "SELECT id, company, category , schedule , description, address, phone, website, instagram, fb, vk, map, conditions, imagesurl,masters,features
            FROM " . $this->table_name . "
            WHERE id = :id
            LIMIT 0,1";
 
    // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
 
    // bind given id value
    $stmt->bindParam(':id', $this->id);

    // execute the query
    $stmt->execute();
 
    // get number of rows
    $num = $stmt->rowCount();
 
    // if id exists, assign values to object properties for easy access and use for php sessions
    if($num>0){

 
        // get record details / values
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        // assign values to object properties
        $this->id = $row['id'];
        $this->company = $row['company'];
        $this->phone = $row['phone'];
        $this->schedule = $row['schedule'];
        $this->description = $row['description'];
        $this->address = $row['address'];
        $this->category = $row['category'];
        $this->website = $row['website'];
        $this->instagram = $row['instagram'];
        $this->fb = $row['fb'];
        $this->vk = $row['vk'];
        $this->map = $row['map'];
        $this->conditions = $row['conditions'];
        $this->masters = $row['masters'];
        $this->features = $row['features'];
        $this->imagesurl = $row['imagesurl'];

        // return true because id exists in the database
        return true;
    }
 
    // return false if id does not exist in the database
    return false;
}

function companyExists(){

    // query to check if id(company) exists
    $query = "SELECT id, company, category , schedule , description, address, phone, website, instagram, fb, vk, map, conditions, imagesurl,masters,features
            FROM " . $this->table_name . "
            WHERE company = :company
            LIMIT 0,1";
 
    // prepare the query
    $stmt = $this->conn->prepare( $query );
 
    // sanitize
    $this->company=htmlspecialchars(strip_tags($this->company));
 
    // bind given id value
    $stmt->bindParam(':company', $this->company);

    // execute the query
    $stmt->execute();
 
    // get number of rows
    $num = $stmt->rowCount();
 
    // if id exists, assign values to object properties for easy access and use for php sessions
    if($num>0){

 
        // get record details / values
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        // assign values to object properties
        $this->id = $row['id'];
        $this->company = $row['company'];
        $this->phone = $row['phone'];
        $this->schedule = $row['schedule'];
        $this->description = $row['description'];
        $this->address = $row['address'];
        $this->category = $row['category'];
        $this->website = $row['website'];
        $this->instagram = $row['instagram'];
        $this->fb = $row['fb'];
        $this->vk = $row['vk'];
        $this->map = $row['map'];
        $this->conditions = $row['conditions'];
        $this->masters = $row['masters'];
        $this->features = $row['features'];
        $this->imagesurl = $row['imagesurl'];

        // return true because id exists in the database
        return true;
    }
 
    // return false if id does not exist in the database
    return false;
}

function update(){
    // update query

    $query = "UPDATE " . $this->table_name . "
            SET
                id = :id,
                company = :company,  
                category = :category, 
                description = :description,
                address = :address,
                phone = :phone,
                schedule=:schedule,
                website = :website, 
                instagram =:instagram,
                fb =:fb,
                vk =:vk,
                map = :map,
                conditions = :conditions, 
                features =:features,
                masters =:masters,
                imagesurl =:imagesurl 
                WHERE id = :id";
                
 
    // prepare the query
    $stmt = $this->conn->prepare($query);

    //implode
    $this->conditions= implode("@Z$",$this->conditions);
    $this->features= implode("@Z$",$this->features);
    $this->masters= implode("@Z$",$this->masters);  
    $this->imagesurl= implode("@Z$",$this->imagesurl);   
    $this->map= implode("@Z$",$this->map);   

    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    $this->company=htmlspecialchars(strip_tags($this->company));
    $this->category=htmlspecialchars(strip_tags($this->category));
    $this->schedule=htmlspecialchars(strip_tags($this->schedule));
    $this->description=htmlspecialchars(strip_tags($this->description));
    $this->address=htmlspecialchars(strip_tags($this->address));
    $this->phone=htmlspecialchars(strip_tags($this->phone));
    $this->website=htmlspecialchars(strip_tags($this->website));
    $this->instagram=htmlspecialchars(strip_tags($this->instagram));
    $this->fb=htmlspecialchars(strip_tags($this->fb));
    $this->vk=htmlspecialchars(strip_tags($this->vk));
    $this->map=htmlspecialchars(strip_tags($this->map));
    $this->conditions=htmlspecialchars(strip_tags($this->conditions));
    $this->features=htmlspecialchars(strip_tags($this->features));
    $this->masters=htmlspecialchars(strip_tags($this->masters));
    $this->imagesurl=htmlspecialchars(strip_tags($this->imagesurl));

    // bind the values
    $stmt->bindParam(':id', $this->id);
    $stmt->bindParam(':company', $this->company);
    $stmt->bindParam(':category', $this->category);
    $stmt->bindParam(':description', $this->description);
    $stmt->bindParam(':address', $this->address);
    $stmt->bindParam(':phone', $this->phone);
    $stmt->bindParam(':website', $this->website);
    $stmt->bindParam(':schedule', $this->schedule);
    $stmt->bindParam(':instagram', $this->instagram);
    $stmt->bindParam(':fb', $this->fb);
    $stmt->bindParam(':vk', $this->vk);
    $stmt->bindParam(':map', $this->map);
    $stmt->bindParam(':conditions', $this->conditions);
    $stmt->bindParam(':features', $this->features);
    $stmt->bindParam(':masters', $this->masters);
    $stmt->bindParam(':imagesurl', $this->imagesurl);

    // execute the query, also check if query was successful
    if($stmt->execute()){
        return true;
    }
 
    return false;
}}
?>