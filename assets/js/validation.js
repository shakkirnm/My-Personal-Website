function nameValidation(){
    var name=$('#nameText').val();
    var letters= /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    if(name==""){
        $('#nameSpan').html("Filed is required")
        return false;
    }
    else if(name.match(letters)){
        $('#nameSpan').html("")
        return true;
    }
    else if(name==" "){
       $('#nameSpan').html("Don't use Space at first letter")
        return false;
    }
    else{
        $('#nameSpan').html("Use only charactors") ;
        return false;
    }
}

function emailValidation(){
    var email=$('#emailText').val();
    var letters= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        $('#emailSpan').html("Filed is required")
        return false;
    }else if(email==" "){
        $('#emailSpan').html("Don't use Space at first letter");
        return false;
    }
    else if(email.match(letters)){
        $('#emailSpan').html("")
        return true;
    }else{
        $('#emailSpan').html("Enter valid E-mail")
        return false;
    }
}

function mobileValidation(){
    var mobile=$('#mobileText').val();
    var letters=/^\d{10}$/;
    if(mobile==""){
        $('#mobileSpan').html("Filed is required")
        return false;
    }else if(mobile.match(letters)){
        $('#mobileSpan').html("")
        return true;
    }else{
        $('#mobileSpan').html("Enter valid mobile number")
        return false;
    }

}

function messageValidation(){
    var message=$('#messageText').val();
    if(message==""){
        $('#messageSpan').html("Filed is required")
        return false;
    }else if(message==" "){
        $('#messageSpan').html("Don't use Space at first letter")
        return false;

    }else if(message.length<=20){
        $('#messageSpan').html("Enter minimum 20 character")
        return false;
    }else if(message.length>20){
        $('#messageSpan').html("")
        return true;
    }else{
        $('#messageSpan').html=""
        return true;
    }
}



$('#nameText').keyup(function(){
    nameValidation();
});
$('#emailText').keyup(function(){
    emailValidation();
});
$('#mobileText').keyup(function(){
    mobileValidation();
})
$('#messageText').keyup(function(){
    messageValidation();
})