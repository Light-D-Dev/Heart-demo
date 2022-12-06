
$(document).ready(function(){
    var flag = true
    $('#eye1').click(function(){  
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
    var flag1 = true
    $('#eye2').click(function(){  
        if(flag1){
            flag1 = false
            $(this).removeClass('fas fa-eye').addClass('fa-solid fa-eye-slash');
            $('.convert-cfpassword').attr( "type", "text" );
           
        } else{
            flag1 = true
            $(this).removeClass('fa-solid fa-eye-slash').addClass('fas fa-eye');
            $('.convert-cfpassword').attr( "type", "password" );
          
        }
    });
    $('#logo').click(function(){
        location.reload();
    });

}); 

const form = document.querySelector("form"),
        emailFeild = form.querySelector(".email-field"),
        emailInput = emailFeild.querySelector(".username"),
        passFeild = form.querySelector(".password-field"),
        passInput = passFeild.querySelector(".password"),
        cfpassFeild = form.querySelector(".cfpassword-field"),
        cfpassInput = cfpassFeild.querySelector(".cfpassword");

// email validition
function checkEmail() {
    const emailPattern = /^[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailFeild.classList.add("invalid");
    }
    emailFeild.classList.remove("invalid");
}
//calling function from submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();

    emailInput.addEventListener("keyup","checkEmail");
});