'use strict';

window.onscroll = function () {
    var top = cost.getBoundingClientRect().top - 200;
    console.log(top);
    if (top <= 0) {
        $('.chart__pic-1').fadeOut(200);
        $('.chart__pic-2').fadeIn(200);
    } else {
        $('.chart__pic-2').fadeOut(200);
        $('.chart__pic-1').fadeIn(200);
    }
};