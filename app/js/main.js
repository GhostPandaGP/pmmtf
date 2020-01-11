$(function(){

    $('.header-menu__icon').on('click', function(){
        $('.header-menu__list-items').slideToggle();
    });
    $('.header-menu__list-item').on('click', function(){
        $('.header-menu__list-items').slideToggle();
    });


    //slick slider
    $('.first-block__slider-items').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });



    //counter
    function counter(string, number, timeout, infinity = false){
        var count = setInterval(function(){
            let c = parseInt($(string).text());
            $(string).text((++c).toString());
            if (c === number) {
                clearInterval(count);
                // if (infinity){
                //     $(string).text((++c).toString());
                // }
            }
        }, timeout);
    }
    counter('[data-scroll="in"] .advantages-number__hour', 48, 60);
    counter('[data-scroll="in"] .advantages-number__speaker', 30, 70);
    counter('[data-scroll="in"] .advantages-number__member', 600, 3);
    // counter('[data-scroll="in"] .advantages-number__benefit', 1000,  1, true);
    counter('[data-scroll="in"] .advantages-number__benefit', 999,  1);



    //split animation
    Splitting();

    ScrollOut({
        threshold: .2,
        once: true
    });


    //anichange
    $('.faq-item__title').click(function() {
        $(this).next().slideToggle( "slow" );
        // $(this).addClass('faq-item__title-rotate');
        if ( $(this).hasClass('faq-item__title-rotate')) {
            $(this).removeClass('faq-item__title-rotate');
        } else {
            $(this).addClass('faq-item__title-rotate');
        }
    });

    //popups
// Inline popups
    $('#inline-popups').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

});