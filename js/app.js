
$(document).ready(function(){
    var flag = true
    $('.eye').click(function(){  
        if(flag){
            flag = false
            $(this).removeClass('fas fa-eye').addClass('fa-solid fa-eye-slash');
            $('.convert-password').attr( "type", "text" );
            
        } else{
            flag = true
            $(this).removeClass('fa-solid fa-eye-slash').addClass('fas fa-eye');
            $('.convert-password').attr( "type", "password" );
           
        }
    });
    $('#logo').click(function(){
        location.reload();
    });
}); 