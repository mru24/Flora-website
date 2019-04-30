$(document).ready(function() {

  // PARALLAX EFFECT
  $('[data-type="parallax"]').each(function() {
    var obj = $(this);
    $(window).scroll(function() {
      var yPos = ($(window).scrollTop()) / obj.data('speed');
      var coords = '50% ' + '-' + yPos + 'px';
      obj.css({ backgroundPosition: coords });
    })
  })

  // SCROLL TO ELEMENT ON PAGE
  $('a[href*="#"]').each(function() {
    $(this).click(function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        $([document.documentElement, document.body]).animate({
          scrollTop: $(""+link).offset().top
        }, 500);
    });
  });

  $(window).scroll(function() {
    // SCROLL TO TOP BUTTON
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 400) {
      $('a.scrollTop').addClass('showScrollTopButton');
    } else {
      $('a.scrollTop').removeClass('showScrollTopButton');
    }
  })
});
