<?php 

function ucgen($sayi){

    for ($i=0; $i <$sayi ; $i++) {
        $j = 0;
        
        while ($j <= $i) {
            $j++;
            echo $j*0; 
        }
        echo  "<br>";
    }
 
}
ucgen(15);

?>