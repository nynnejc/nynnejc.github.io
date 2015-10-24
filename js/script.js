$(document).ready(function() {
        $('#pagepiling').pagepiling({
          anchors: ['home', 'projects', 'contact'],
          navigation: false,
          verticalCentered: false,
          
      });
    $(".galleryimage").click(function( event ) {
        $(".nextimagediv").first().show().removeClass("nextimagediv");
    });
});