$(function () {
    const davorAnim = $('#davor').css('opacity', '0');
    const angelaAnim = $('#angela').css('opacity', '0');
    const jocoAnim = $('#joco').css('opacity', '0');
    const ourWork = $('#our-work').css('opacity', '0');
    /* -------- Fixed navbar ------------*/
    $(window).scroll(function () {
        const scroll = $(this).scrollTop();
        const topDist = $("#about-us").position();
        if (scroll > topDist.top) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }

        /* ------------------- Animate Sections ------------------- */
        const team = $('.myarrow-down').position();
        if (scroll > team.top && $(window).width() > 800) {
            davorAnim.css('opacity', '1');
            angelaAnim.css('opacity', '1');
            jocoAnim.css('opacity', '1');
            animateCss(davorAnim, 'bounceInLeft', '.2s'); 
            animateCss(angelaAnim, 'bounceInRight', '1s'); 
            animateCss(jocoAnim, 'bounceInRight', '2s'); 
        } else if($(window).width() < 800){
            davorAnim.css('opacity', '1');
            angelaAnim.css('opacity', '1');
            jocoAnim.css('opacity', '1');
        }
        const ourWorkHr = $('.showOurWork').position();
        if(scroll > ourWorkHr.top && $(window).width() > 800) {
            ourWork.css('opacity', '1');
            animateCss(ourWork, 'fadeInUp', '.2s');
        } 
        else if($(window).width() < 800){
            ourWork.css('opacity', '1');
        }
    });

    /* Smooth scrolling */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* Contact button animate scroll */
    $('#contact-today').click(function () {
        $("html, body").animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });
    $('.myarrow-down').click(function () {
        $("html, body").animate({
            scrollTop: $('.contact-us').offset().top
        }, 1000);
    });

    /* ----------- slick slider configuration --------------- */
    $('.my-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    /* ------------------- Filtering items adding active class --------------- */
    $(".filterListItem").on('click', function () {
        $(".filterListItem").removeClass("active");
        $(this).addClass("active");
    });
    //    /* ------------ Filtering items -------------- */
    $(".filter-button").click(function () {
        const value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    /* --------------------- Back to top function ---------------------- */
    if ($('#back-to-top').length) {
        const scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 900);
        });
    }

    /* ------------ Animate CSS Custom Function------------------- */
     function animateCss (element, animation, delay) {
        $(element).addClass('animated ' + animation + ' delay-' + delay);
    }
})
