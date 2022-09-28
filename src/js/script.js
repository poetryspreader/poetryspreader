window.addEventListener("DOMContentLoaded", function() {

    const colors = ["#FFA07A", "#3CB371", "#008B8B", "#6A5ACD", "#c786d3"],
    logoBox = document.querySelector(".logo__box"),
    logoText = document.querySelectorAll('.logo__barcode');

    var i = 0;

    // * LOGO

    // ? logo color changing 
    function colorChange() {
        logoBox.style.backgroundColor = colors[i];
        i++;
        if (i >= colors.length) i = 0;
        setTimeout(colorChange, 2000);
    }
    colorChange();

    // ? logo box animation
    function logoBoxAnimation() {
        setTimeout(function() {
            logoBox.classList.add('logo__box-heightDown');
            logoText.forEach((item) => {
                item.classList.add('logo__barcode-colorSwipe');
            });
        },0);
        setTimeout(function() {
            logoBox.classList.remove('logo__box-heightDown');
            logoText.forEach((item) => {
                item.classList.remove('logo__barcode-colorSwipe');
            });
        },5000);
        setTimeout(logoBoxAnimation,10000);
    }
    logoBoxAnimation();
    
    
    // ? logo width hover
    function widthHover() {
        logoBox.classList.remove('logo__barcode-widthHover');
        logoBox.addEventListener('mouseover', function(){
            logoText.forEach((large) => {
                large.classList.add('logo__barcode-widthHover');
            });
        });
        logoBox.addEventListener('mouseout', function(){
            logoText.forEach((small) => {
                small.classList.remove('logo__barcode-widthHover');
            });
        });
    }
    widthHover();
    

    // change randomly and directly rgb numbers
    // function test() {
    //     let color = [255,255,255],
    //         randomColor = Math.floor(Math.random() * 3),
    //         randomDirection = Math.floor(Math.random() * 2),
    //         step = 0;
    //         if (true) {
    //             for(step=0;step < 5; step++) {

    //             }

        // } else {
            // downStreak();
            // function downStreak() {
            //     randomRgb[randomColor] -=2;
            //     logoBox.style.backgroundColor = `rgb(${randomRgb[0]},${randomRgb[1]},${randomRgb[2]})`;
            //     console.log(step);
            //     step++;
            //     if (step > 5) {step = 0; return};
            //     setTimeout(downStreak,2000);
            // }
        // }
    //         setTimeout(test, 2000);
    //         }
    //     }
    // test();


    // * NAV TOGGLER

    function promoToggler(item, i) {
        $(item).on("click", function(e) {
            // console.log($('[data-modal=promo__new]'));
            $(this).siblings().removeClass('header__nav-item-active');
            $('.promo').children().removeClass("promo__modal-active");
            $('.header__nav').children().eq(i).addClass('header__nav-item-active');
            $('.promo').children().eq(i).addClass('promo__modal-active');

        });
    }
    promoToggler('[data-modal=promo__new]', 0);
    promoToggler('[data-modal=promo__photos]', 1);
    promoToggler('[data-modal=promo__web]', 2);
    promoToggler('[data-modal=promo__forms]', 3);

    // * BUTTONS

    $(".buttons__unit").each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(".buttons__slider_1").eq(i).toggleClass('buttons__slider_1-active');
            $(".buttons__slider_2").eq(i).toggleClass('buttons__slider_2-active');
        });
    });

    // * FORM

    const form = document.getElementById('form');
    $(".form").addEventListener('submit',formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')) {

            }
        }
    }

    function formAddError(input) {
        input.parentElement.addClass("_error");
        input.addClass("_error");
    }
    function formRemoveError(input) {
        input.parentElement.removeClass("_error");
        input.removeClass("_error");
    }

    //функция теста email 
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]&\w{2,8})+$/.test(input.value);
    }
});

