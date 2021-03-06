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
                required: "Введите свое имя",
                minlength: jQuery.validator.format("Минимальное количество символов {0}")
            },
            phone: {
                required: "Введите номер телефона"
            },
            email: {
                required: "Введите ваш e-mail",
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
                required: "Введите свое имя",
                minlength: jQuery.validator.format("Минимальное количество символов {0}")
            },
            phone: {
                required: "Введите номер телефона"
            },
            email: {
                required: "Введите ваш e-mail",
                email: "Неправильно введен адрес почты"
            },
            text: {
                required: "Введите сообщение"
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
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    
    
    const headerMenu = document.querySelector('.header__menu'),
    headerItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.main__hamburger');

    hamburger.addEventListener('click', () => {
        headerMenu.classList.toggle('header__menu_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            headerMenu.classList.toggle('header__menu_active');
        })
    })
    
});
