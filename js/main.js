(function ($) {
    "use stict";
   
    placeholderToggle();
    setMenu();
    setPrettyPhoto();


    $('.contact-form [type="submit"]').on('click', function () {
        SendMail();
    });

    $(window).on('load', function () {
        isotopeSetUp();
        imageSliderSettings();
        animateElement();

        $('#toggle').on("click", multiClickFunctionStop);
        $('.site-content, #toggle').addClass('all-loaded');
        $('.doc-loader').fadeOut();
        $('body').removeClass('wait-preloader');
    });

    $(window).on('resize', function () {
        animateElement();
    });

    $(window).on('scroll', function () {
        animateElement();
    });
    
    $(document).ready(function () {
        $("#white_bg, #intro").delay(12000).fadeOut();
        e.preventDefault();
    });
    
    mq = window.matchMedia("(height: 1366px)");
    mqIpad = window.matchMedia("(max-width: 1020px)");
    mqDesktop = window.matchMedia("(min-width: 1025px)");
    
    if (mqDesktop.matches) {
        $(".header-logo>img").on('click', function () {
        $(".intr-img2, #white_bg, #intro").css("display", "block").fadeIn();
    });
    }
    
    if (mq.matches) {
        $("#white_bg, #intro").delay(1500).fadeOut();
         e.preventDefault();
    }
    
    if (mqIpad.matches) {
        $("#white_bg, #intro").delay(1500).fadeOut();
         e.preventDefault();
    }
    
    /*$(".menu-holder-front").mouseover( function () {
        $(".header-logo>img").attr("src","../images/septembre_colors_2_copy.png");
    });
    
    $(".menu-holder-front").mouseout( function () {
        $(".header-logo>img").attr("src","../images/septembre_grey_2_copy.png");
    });
    */
    
    $(".intr-img2").mouseover( function () {
        $(".bg-intro").css("display", "block").fadeIn();
        //$(".intr-img2").attr("src","../images/septembre_grey.png");
    });
    
    $(".intr-img2").mouseout( function () {
        $(".bg-intro").css("display", "none").fadeOut();
       // $(".intr-img2").attr("src","../images/septembre_colors_2.png");
    });
    
    $("#intro").on('click', function () {
        $("#white_bg, #intro").css("display", "none");
    });
    $("#intro").onTouchMove(function () {
        $("#white_bg, #intro").css("display", "none");
    });

    
//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

    function placeholderToggle() {
        $('input, textarea').on('focus', function () {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        $('input, textarea').on('blur', function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }

    function animateElement(e) {
        $(".animate").each(function (i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window - 20) > top_of_object) {
                $(this).addClass('show-it');
            }
        });
    }

    function multiClickFunctionStop(e) {
        e.preventDefault();
        $('#toggle').off("click");
        $('#toggle').toggleClass("on");

        $('html, body, .sidebar, .menu-holder-back, .menu-holder-front, .site-content').toggleClass("open").delay(500).queue(function (next) {
            $(this).toggleClass("done");
            next();
        });
        $('#toggle').on("click", multiClickFunctionStop);
    }

    function setMenu() {
        $('.main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8,
            markCurrentItem: true
        });
    }

    function isotopeSetUp() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            transitionDuration: 0,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }

    function setPrettyPhoto() {
        $('a[data-rel]').each(function () {
            $(this).attr('rel', $(this).data('rel'));
        });
        $("a[rel^='prettyPhoto']").prettyPhoto({
            slideshow: false, /* false OR interval time in ms */
            overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            default_width: 1280,
            default_height: 720,
            deeplinking: false,
            social_tools: false,
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        });
    }
    
       function imageSliderSettings() {
        $(".simple-image-slider-wrapper").each(function () {
            var id = $(this).attr('id');
            var speed_value = $(this).data('speed');
            var auto_value = $(this).data('auto');

            if (auto_value === true)
            {
                var mySwiper = new Swiper('#' + id, {
                    speed: 700,
                    autoplay: {
                        delay: speed_value
                    },
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination-' + id,
                        clickable: true
                    }
                });
                $('#' + id).hover(function () {
                    mySwiper.autoplay.stop();
                }, function () {
                    mySwiper.autoplay.start();
                });
            } else {
                var mySwiper = new Swiper('#' + id, {
                    speed: 700,
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination-' + id,
                        clickable: true
                    }
                });
            }
        });
    }
    
})(jQuery);