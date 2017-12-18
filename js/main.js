"use strict";

// $(document).ready(function () {
//     $('#fullpage').fullpage({
//         verticalCentered: false
//     });
// });

$(document).ready(function () {

    $("#top-menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 700);
    });
});

var menu_selector = "#menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
var links = $('.sidebar__link');

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function () {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            links.removeClass("sidebar__link--active");
            $(this).addClass("sidebar__link--active");
        } else {
            $(this).removeClass("sidebar__link--active");
        }
    });
}

$(document).ready(function () {

    $(document).on("scroll", onScroll);
    $("#menu").on('click', 'a', function (e) {
        e.preventDefault();

        $(document).off("scroll");
        links.removeClass("sidebar__link--active");
        $(this).addClass("sidebar__link--active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function () {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});

$(function () {
    var menu = $('.hamburger__menu');

    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        menu.addClass('hamburger__menu--active');
    });

    $('.close-btn').on('click', function (e) {
        e.preventDefault();
        menu.removeClass('hamburger__menu--active');
    });

    $("#ham-menu").on("click", "a", function (event) {
        event.preventDefault();
        menu.removeClass('hamburger__menu--active');
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        setTimeout(function () {
            $('body,html').animate({
                scrollTop: top
            }, 700);
        }, 500);
    });
});