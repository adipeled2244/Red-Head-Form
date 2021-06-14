<!DOCTYPE html>
<html> 
    <head>
        <title> New Product Form</title>
        <link rel="stylesheet" href="css/style2.css">

        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">

    </head>

    <body id="formphp">
        <section>
        <?php
            $proname=$_GET["product_name"];
            $proquantity=$_GET["product_quantity"];  
            
            if($proquantity <=30)
            echo "<h2>Good luck with the new Product:". $proname  ."</h2>";
            else
            echo "<h2>You have a lot of " .$proname ." products to sell : " . $proquantity . ", Good luck! </h2>";
        ?>
        </section>

        </form> 
    </body>
</html> 