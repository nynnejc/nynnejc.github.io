$(document).ready(function() {
      
    $(".galleryimage").click(function( event ) {
        $(".nextimagediv").first().show().removeClass("nextimagediv");
    });



    var imgHTML = '<img class="img galleryimage" src="img">'

    var add_new_img = function( event ) {
    
      var top = Math.round(Math.random()* 800) + "px"
      var left = Math.round(Math.random()* 1000) + "px"

        var img = $(imgHTML).css({
          width: width,
          left: left,
          top: top
        });

        $("#projects").append(img);
    };

    $("#projects").on("click", ".galleryimage", add_new_img);

});