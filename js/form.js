$(document).ready(function ($){
    "use strict";
    $("#name").prop('required', true);
    $("#email").prop('required', true);
    $("#phone").prop('required', true);
    $("#message").prop('required', true);

    
   $("form").submit(function (e){
    e.preventDefault();
       var name = $('#name').val();
       var email = $('#email').val();
       var phone = $('#phone').val();
       var message = $('#message').val();
   
       var database = firebase.database().ref("Clients")
   
       var clients = {
           "Name" : name,
           "E-mail" : email,
           "Phone" : phone,
           "Message" : message
       }
   
       database.push(clients);
   
       alert("Submitted Successfully");
       console.log(clients)
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("phone").value = "";
       document.getElementById("message").value = "";


   
   })

})