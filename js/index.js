$(document).ready(function(){

  
  var typed = new Typed('#typed', {
    strings: ["MEET ME?", "THEN CHECK" ,"THIS WEBSITE !"],
    typeSpeed: 30
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

    $(".navbar li a").click(function(e) {
      e.preventDefault();
  
      var targetElement = $(this).attr("href");
      var targetPosition = $(targetElement).offset().top;
      $("html, body").animate({ scrollTop: targetPosition - 100 }, "slow");
  
    });
  
});