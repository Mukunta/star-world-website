$('#year').text(new Date().getFullYear());

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