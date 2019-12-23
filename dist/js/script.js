$(document).ready(function() {
    $('#form').validate({
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
                required: "Пожалуйста, введите адрес электронной почты",
                email: "Неправильно введен адрес почты"
            }
        },
    });
    
    $('.reviews__slick').slick({
        centerMode: true,
        centerPadding: '60px',
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
        prevArrow: '<button type="button" class="slick-prev"><img src("../img/left.svg")></button>',
        nextArrow: '<button type="button" class="slick-next"><img src("../img/right.svg")></button>'
    });
    
});
