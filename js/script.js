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
                $(".search_form").slideToggle(300).prev('.search_button').toggleClass('active');
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
    Drupal.behaviors.inputmask = {
        attach: function () {
            $("#edit-submitted-phone").inputmask("+7(999)999-99-99");
            $("#edit-submitted-phone--2").inputmask("+7(999)999-99-99");
        }
    }
    
    Drupal.behaviors.validation = {
        attach: function (context, settings) {
            if ($("#webform-client-form-10").length) {
                $('input[type="checkbox"]').change(function () {
                    $("#webform-client-form-10").valid();
                });
                $("#webform-client-form-10", context).validate({
                    rules: {
                        'submitted[name]': {
                            required: true
                        },
                        'submitted[phone]': {
                            required: true
                        },
                    },
                    messages: {
                        'submitted[name]': {
                            required: 'Введите ваше имя'
                        },
                        'submitted[phone]': {
                            required: 'Введите ваш телефон'
                        },
                    },
                    errorPlacement: function (error, element) {
                        text = $(error).text();
                        if ($(element).attr('type') == "checkbox") {
                            $(element).parents('.form-item').find('label').addClass('checkboxerror')
                        } else {
                            element.next('.errorlabel').remove();
                            $error = $('<div class="errorlabel">' + text + '</div>')
                            $error.width(element.outerWidth());
                            element.after($error);
                        }
                    },
                    unhighlight: function (element, errorClass, validClass) {
                        if (element.type === "radio") {
                            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                        } else if (element.type === "checkbox") {
                            $(element).parents('.form-item').find('label').removeClass('checkboxerror')
                        } else {
                            $(element).removeClass(errorClass).addClass(validClass);
                            $(element).next('.errorlabel').remove();
                        }
                    }
                });
                Drupal.ajax['edit-webform-ajax-submit-10'].options.beforeSubmit = function (xmlhttprequest, options) {
                    if (!$("#webform-client-form-10").valid()) {
                        return false;
                    }
                };
            }
            if ($("#webform-client-form-15").length) {
                $('input[type="checkbox"]').change(function () {
                    $("#webform-client-form-15").valid();
                });
                $("#webform-client-form-15", context).validate({
                    rules: {
                        'submitted[name]': {
                            required: true
                        },
                        'submitted[email]': {
                            required: true,
                            email: true
                        },
                        'submitted[question]': {
                            required: true
                        },
                    },
                    messages: {
                        'submitted[name]': {
                            required: 'Введите ваше имя'
                        },
                        'submitted[email]': {
                            required: 'Введите вашу электронную почту'
                        },
                        'submitted[question]': {
                            required: 'Введите ваш вопрос'
                        },
                    },
                    errorPlacement: function (error, element) {
                        text = $(error).text();
                        if ($(element).attr('type') == "checkbox") {
                            $(element).parents('.form-item').find('label').addClass('checkboxerror')
                        } else {
                            element.next('.errorlabel').remove();
                            $error = $('<div class="errorlabel">' + text + '</div>')
                            $error.width(element.outerWidth());
                            element.after($error);
                        }
                    },
                    unhighlight: function (element, errorClass, validClass) {
                        console.log('asd');
                        if (element.type === "radio") {
                            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                        } else if (element.type === "checkbox") {
                            $(element).parents('.form-item').find('label').removeClass('checkboxerror')
                        } else {
                            $(element).removeClass(errorClass).addClass(validClass);
                            $(element).next('.errorlabel').remove();
                        }
                    }
                });
                Drupal.ajax['edit-webform-ajax-submit-15'].options.beforeSubmit = function (xmlhttprequest, options) {
                    if (!$("#webform-client-form-15").valid()) {
                        return false;
                    }
                };
            }
            if ($("#webform-client-form-7").length) {
                $('input[type="checkbox"]').change(function () {
                    $("#webform-client-form-7").valid();
                });
                $("#webform-client-form-7", context).validate({
                    rules: {
                        'submitted[name]': {
                            required: true
                        },
                        'submitted[phone]': {
                            required: true
                        },
                    },
                    messages: {
                        'submitted[name]': {
                            required: 'Введите ваше имя'
                        },
                        'submitted[phone]': {
                            required: 'Введите ваш телефон'
                        },
                    },
                    errorPlacement: function (error, element) {
                        text = $(error).text();
                        if ($(element).attr('type') == "checkbox") {
                            $(element).parents('.form-item').find('label').addClass('checkboxerror')
                        } else {
                            element.next('.errorlabel').remove();
                            $error = $('<div class="errorlabel">' + text + '</div>');
                            $(element).parents('.form-item').addClass('error-input');
                            $error.width(element.outerWidth());
                            element.after($error);
                        }
                    },
                    unhighlight: function (element, errorClass, validClass) {
                        console.log('asd');
                        if (element.type === "radio") {
                            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                        } else if (element.type === "checkbox") {
                            $(element).parents('.form-item').find('label').removeClass('checkboxerror')
                        } else {
                            $(element).removeClass(errorClass).addClass(validClass);
                            $(element).next('.errorlabel').remove();
                        }
                    }
                });
                Drupal.ajax['edit-webform-ajax-submit-7'].options.beforeSubmit = function (xmlhttprequest, options) {
                    if (!$("#webform-client-form-7").valid()) {
                        return false;
                    }
                };
            }
        }
    };
}(jQuery));