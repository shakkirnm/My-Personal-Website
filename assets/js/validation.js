function nameValidation(){
    var name=$('#nameText').val();
    var letters= /^[-a-zA-Z-()\s]+(\s+[-a-zA-Z-()\s]+)*$/;
    if(name==""){
        $('#nameSpan').html("Field is required")
        return false;
    }else if(name.match(letters)){
        $('#nameSpan').html("")
        return true;
    }else{
        $('#nameSpan').html("Use only characters") ;
        return false;
    }
}

function emailValidation(){
    var email=$('#emailText').val();
    var letters= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        $('#emailSpan').html("Field is required")
        return false;
    }else if(email.match(letters)){
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
        $('#mobileSpan').html("Field is required")
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
        $('#messageSpan').html("Field is required")
        return false;

    }else if(message.length<=20){
        $('#messageSpan').html("Enter minimum 20 characters")
        return false;
    }else if(message.length>20){
        $('#messageSpan').html("")
        return true;
    }else{
        $('#messageSpan').html("")
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



  $("#submit-form").submit((e)=>{
      e.preventDefault()
      if(nameValidation() && emailValidation() && mobileValidation() && messageValidation()){
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbzZwayDBDI_7sBpT1l7et0UCF8Cx6CDI7uGbz6tv-_YGRTQesRbhHez9PyHrseXCL6G/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")

          }
      })
    }else{
      nameValidation()
      emailValidation()
      mobileValidation()
      messageValidation()
    }
  })

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});