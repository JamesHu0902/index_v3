(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  function windowSize() {
    if ($(window).width() < 992) {
      $("#logo").attr("src", "images/logo_ch-01.png");
      $("#logo").css("width","10rem")
    } else {
      $("#logo").attr("src", "images/logo_去背_白-02.png");
      $("#logo").css("width", "19rem")
    };
  };

  $(window).resize(function () {
    windowSize()
  });
  windowSize()
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#logo").attr("src", "images/logo_ch-01.png");
      $("#toTop").css('display', 'block');
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      windowSize();
      $("#toTop").css('display', 'none');
    }

    if ($("#mainNav").offset().top > 500)
    {
      $(".inner").css("bottom","-30px");
    }else
    {
      $(".inner").css("bottom", "-350px");
    }
  };



  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
