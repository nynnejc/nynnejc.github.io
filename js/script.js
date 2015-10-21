$(document).ready(function() {
        $('#pagepiling').pagepiling({
          anchors: ['home', 'web-development', 'projects', 'cv', 'photography'],
          navigation: false,
          verticalCentered: false,
          
      });
    $(".galleryimage").click(function( event ) {
        $(".nextimagediv").first().show().removeClass("nextimagediv");
    });
});