$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }]
    });
    $('.burger').click(function() {
        $('.mobile-menu').toggleClass('active');
        $('.mobile-menu .content').toggleClass('active');
    });
    $('.close').click(function() {
      $('.mobile-menu').removeClass('active');
      $('.mobile-menu .content').removeClass('active');
    });
    $('body').click(function(e) {
      var target = $(e.target);
        if(target.hasClass('mobile-menu')) {
          $('.mobile-menu').removeClass('active');
          $('.mobile-menu .content').removeClass('active');
        }
    });
    $('.more-info').click(function() {
      var closeElem = $(this).next();
      closeElem.toggleClass('active');
    })
});
