$(document).ready(function() {
    $('#form-consultation').validate({
        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone: {
                required: true
            },
            email:{
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Минимальное количество символов {0}")
            },
            phone: {
                required: "Пожалуйста, введите номер телефона"
            },
            email: {
                required: "Пожалуйста, введите ваш e-mail",
                email: "Неправильно введен адрес почты"
            }
        },
        errorClass: 'consultation__Error'
    });

    $('#form-questions').validate({
        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            text:{
                required: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Минимальное количество символов {0}")
            },
            phone: {
                required: "Пожалуйста, введите номер телефона"
            },
            email: {
                required: "Пожалуйста, введите ваш e-mail",
                email: "Неправильно введен адрес почты"
            },
            text: {
                required: "Пожалуйста, введите сообщение"
            }
        },
        errorClass: 'questions__Error'
    });
    
    $('.reviews__slick').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    
});
