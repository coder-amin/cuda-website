$(document).ready(function(){

    // STICKY MENU JS

    $(".js-services-section").waypoint(function( direction ){
        if (direction == "down") {
            $("nav").addClass("stickyNav");
        } else {
            $("nav").removeClass("stickyNav");
        }
    });

    // MIXITUP FOR PORTFOLIO SECTION
    var mixer = mixitup(".container");
});
function openNav(){
    document.getElementById("cudaMobileNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("cudaMobileNav").style.width = "0";
}