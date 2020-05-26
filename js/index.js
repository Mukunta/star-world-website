$('#year').text(new Date().getFullYear());

$('body').scrollspy({ target: '#main-nav' });;

// Add Smooth Scrolling
$('#main-nav a, #home-heading a').on('click', function(e) {
    if(this.hash !== '') {
    // Prevent default behaviour
    e.preventDefault();

    // Store hash 
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 900, function() {
    // Add hash to URL after scroll
    window.location.hash = hash;
    });
    }
});

// Ekko Light Box Init
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// Slick Slider Init
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
  });