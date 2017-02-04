$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('img').hover(
    function(e) {    // in
        $(img).not(this).css('brightness', '30%');    // make it darker

    },
    function(e) {    // out
        $(img).css('brightness', '100%');             // make it clear again
    }
)
