$(function(){
    
    let max =100;
    
    $("textarea").keyup(function(){
        
        let length=$(this).val().length;
        let character = max - length;
        
        
        if(character<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(character);
        }
        
    });

    
});



$('.mdb-select').materialSelect();
