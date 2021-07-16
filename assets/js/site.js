$( "#nav-icon1" ).click(function() {
  $( this ).toggleClass( "open" );
  $('#header .menu').slideToggle();
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $('.flexslider2').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 227,
    itemMargin: 52,
    minItems: 1,
    maxItems: 4
  });

  $('.flexslider3').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 100,
    itemMargin: 52,
    minItems: 1,
    maxItems: 7
  });

  $( ".popup-link" ).click(function() {
    $( ".popup-wrapper" ).fadeIn( "fast", function() {
    });
  });

  $( ".popup-close" ).click(function() {
    $( ".popup-wrapper" ).fadeOut( "fast", function() {
    });
  });

  $(".logo-slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
                breakpoint: 640,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },

              {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
              {
                    breakpoint: 320,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  }
            ]
});


$(".best-deal-slide").slick({
  dots: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
          breakpoint: 755,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
          ]
});

$(".dropdown a").click(function() {
$(this).next(".submenu").slideToggle("fast");
$(this).parent("li").toggleClass("active");
event.preventDefault();
});

$(".ads-btn").click(function() {
$(this).toggleClass("active");
$(this).parent().next(".ads-banner").slideToggle("fast");
event.preventDefault();
});

$(".close-btn").click(function() {
$(this).closest(".popup-overlay").fadeOut();
event.preventDefault();
});

$( ".datepicker" ).datepicker();


$( "#select-tabs" ).tabs();


$('.right-side-tabs .form-men').click(function() {
  $(this).parent().removeClass("active-tab");
  return false;
});
$('.right-side-tabs .form-women').click(function() {
  $(this).parent().addClass("active-tab");
  return false;
});


});
