// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "1st: CVC words") {
         $("#feedback").css("color","green");
         $("#feedback").html("CVC words is the 1st! After introducing the beginning letter sounds, we teach our students CVC words, because the letter sounds in these words stay the same. ‘had’ is a CVC word");
      }

      if ($(this).attr("id") == "2nd: CVCe words") {
         $("#feedback").css("color","green");
         $("#feedback").html("CVCe words is the 2nd, so they can make a comparison.");
      }

      if ($(this).attr("id") == "3rd: Beginning Blends") {
         $("#feedback").css("color","green");
         $("#feedback").html("Beginning Blends is the 3rd one!");
      }if ($(this).attr("id") == "4th: Digraphs") {
         $("#feedback").css("color","green");
         $("#feedback").html("<p>Digraph is the 4th one.</p> <p>Digraph：a group of two successive letters whose phonetic value is a single sound, such as ch in cherry.</p>");
      }if ($(this).attr("id") == "5th: Diphthongs and R-Controlled words") {
         $("#feedback").css("color","green");
         $("#feedback").html("<p>Diphthong is the 5th one.</p> <P>Diphthongs and R-Controlled words are the hardest! Students need a lot of reading exprience to master!</P> <P>Diphthong: a gliding monosyllabic speech sound (such as the vowel combination at the end of Saturday) that starts at or near the articulatory position for one vowel and moves to or toward the position of another</P> <P>R-Controlled words: such as car, mark, yard, etc.</P>");
      }

  $("#feedback").css("backgroundColor","yellow");$('#myModal').modal("show");

   });
}); //end main jQuery function