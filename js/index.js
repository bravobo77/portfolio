$(document).ready(function(){

    $(function(){
        $("#slides").superslides({
          inherit_width_from:".slides-container",
          inherit_height_from: ".slides-container",
          play:3000,
          animation:"slide"
        });
    });

    $(".services").owlCarousel({
        margin:20,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
        }
    });  

    $(function(){
        $(".tabs li").click(function(){
        $(".tabs li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".box_wrap").isotope({
          filter:selector,
          animationOptions:{
              duration:750,
              easing:"linear",
              queue:false
            }
        });
      return false;
      });
    });

    $("[data-fancybox]").fancybox();

});