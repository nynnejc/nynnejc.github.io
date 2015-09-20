$(document).ready(function() {
        $('#pagepiling').pagepiling({
          anchors: ['home', 'web-development', 'photography', 'illustrations', 'cv'],
          navigation: false,
          verticalCentered: false,
          
      });
    $(".galleryimage").click(function( event ) {
        $(".nextimagediv").first().show().removeClass("nextimagediv");
    });
});