// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Shaanxi") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, you got it! They are in Xi’an City of Shaanxi Province, which used to be the capital city of the Qin Dynasty (221 - 207 BC) when the Terracotta Warriors were made.");
      }

      if ($(this).attr("id") == "Beijing") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, although Beijing is the capital city of China.");
      }

      if ($(this).attr("id") == "Hunan") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Hunan is a city with a lot of delicious food.");
      }if ($(this).attr("id") == "Shanghai") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Shanghai is the biggest city in China.");
      }if ($(this).attr("id") == "Shandong") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Shandong Province is the hometown of Confucius.");
      }

  $("#feedback").css("backgroundColor","yellow");$('#myModal').modal("show");

   });
}); //end main jQuery function