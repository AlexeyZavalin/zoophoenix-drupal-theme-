(function ($) {
    Drupal.behaviors.slider = {
        attach: function (context, settings) {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                paginationClickable: true,
                pagination: '.swiper-pagination',
                autoplay: 5000,
                pagination: '.s-controls',
                effect: 'slide',
                speed: 500,
                paginationElement: 'div',
                bulletClass: "c-item",
                paginationBulletsClass: "s-controls",
                bulletActiveClass: "c-item_active"
            });
        }
    };
    Drupal.behaviors.search = {
        attach: function (context, settings) {
            var search_trigger = $(".search_button");
            search_trigger.click( function() {
                $(".search_form").slideToggle(300);
            });
        }
    };
    Drupal.behaviors.hamburger = {
        attach: function (context, settings) {
            $('#hamburger').on ('click', function(e) {
                e.preventDefault();
                $('.menu').slideToggle(300);
            });
        }
    }
    Drupal.behaviors.resize = {
        attach: function () {
            $(window).resize( function () {
                if ($(window).width() > 1000) {
                    $('.menu').removeAttr('style');
                }
            })
        }
    }
}(jQuery));