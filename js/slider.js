const width = $(window).width();
const sliders = $('.team__list');
if (width < 992) {
    sliders.addClass('slider');
}

$(document).ready(function () {
    $('.slider').bxSlider({
        responsive: false,
        pager: false
    });
});