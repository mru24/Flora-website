$(document).ready(function() {

  $('a[href*="#"]').each(function() {
    $(this).click(function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        console.log(link);
        $([document.documentElement, document.body]).animate({
          scrollTop: $(""+link).offset().top
        }, 500);
    });
  });
  var $window = $(window);
  $(window).scroll(function() {
    console.log($(window).scrollTop());
  })

});
