
(function($) {
    'use strict';
    //========================
    // Loader
    //========================
    $(window).load(function() {
        if ($(".preloader").length > 0)
        {
            $(".preloader").delay(3300).fadeOut("fast");
             $(".preloader").hide();
        }
    });


    //========================
    // WOW INIT
    //========================
    if ($(window).width() > 766)
    {
        var wow = new WOW({
            mobile: false,
            live: true
        });
        wow.init();
    }



    //========================
    // Banner 3
    //========================
    $("#banner").owlCarousel({
        autoPlay: true,
        navigation: false, // Show next and prev buttons
        slideSpeed: 1500,
        paginationSpeed: 500,
        singleItem: true,
        pagination: true,
        stopOnHover: true,
        transitionStyle: "bounce"

    });


    if ($(".mainSlider").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
//             stopAfterLoops:0,
// stopAtSlide:1,
            startheight: 910,
            startwidth: 1170,
            hideThumbs: true,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on"
        });

    }




    //========================
    // Loader 
    //========================
    $(window).load(function() {
        if ($(".loaderWrap").length > 0)
        {
            $(".loaderWrap").delay(500).fadeOut("slow");
        }

        if ($("#folioGrid2").length > 0)
        {

            var $grid = $('#folioGrid2');
            $grid.shuffle({
                itemSelector: '.folioItem2' // the selector for the items in the grid
            });



            /* reshuffle when user clicks a filter item */
            $('#filter li').on('click', function() {

                // set active class
                $('#filter li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
        if ($("#folioGrid1").length > 0)
        {

            var $grid = $('#folioGrid1');
            $grid.shuffle({
                itemSelector: '.fol1' // the selector for the items in the grid
            });



            /* reshuffle when user clicks a filter item */
            $('#filter1 li').on('click', function() {

                // set active class
                $('#filter1 li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }

    });


    //========================================================
    // Related Post Carousel
    //========================================================
    if ($(".articlesSlider").length > 0)
    {
        var owl = $(".articlesSlider");

        owl.owlCarousel({
            items: 2,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [600, 2],
            itemsMobile: [480, 1]
        });

        // Custom Navigation Events
        $(".nexta").click(function() {
            owl.trigger('owl.next');
        });
        $(".preva").click(function() {
            owl.trigger('owl.prev');
        });
    }


    //========================================================
    // Fun Fact
    //========================================================
    $('.ffSection').appear(function() {
        $('.counters').each(function() {
            var $this = $('.timer', this);
            jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                duration: 6000,
                easing: 'swing',
                step: function() {
                    var num = Math.ceil(this.Counter).toString();
                    if (Number(num) > 999) {
                        while (/(\d+)(\d{3})/.test(num)) {
                            num = num.replace(/(\d+)(\d{3})/, '<span>' + '$1' + ',</span>' + '$2');
                        }
                    }
                    $this.html(num);
                }
            });
        });
    });


    //========================================================
    // Skills
    //========================================================
    $('.alSkills').appear(function() {
        $('.singleSkills').each(function() {
            var skl = $(".skills", this).attr('data-skill');
            $(".skillAr", this).animate({'width': skl + '%'}, 2000);
        });
    });

    //=======================================================
    // Portfolio Mixing
    //=======================================================
    if ($('#Grid').length > 0)
    {
        $('#Grid').themeWar();
    }

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $('.venobox').venobox();
        });
    });


    //=======================================================
    // Video Popup
    //=======================================================
    if ($('.vidPopUp').length > 0)
    {
        $('.vidPopUp').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    /***********************************
     * Blog Modal
     ***********************************/
    if ($(".blogSingleModal").length > 0)
    {
        $(".blogSingleModal").animatedModal({
            modalTarget: 'blogPopUpModal',
            animatedIn: 'flipInX',
            animatedOut: 'flipOutY',
            color: '#3498db'

        });
    }


    /***********************************
     * Main Menu
     ***********************************/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40)
        {
            $(".header").addClass('fixedHeader');
        }
        else
        {
            $(".header").removeClass('fixedHeader');
        }

        /************ Menu Active on Scroll **********************/
        Scroll();

    });


    $('a.scrolls').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        return false;
    });
    $('.horizontalmenu .mainMenu ul li.scroll > a').on('click', function() {
        if($(window).width() < 768)
        {
            if($(this).parent().hasClass('has-child'))
            {
                $(this).parent().children('ul').slideToggle('slow');
            }
        }
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        return false;
    });
    $('.verticalMenu .mainMenu ul li.scroll > a').on('click', function() {
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function() {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function(i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.mainMenu li.scroll')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }

    var tt = true;
    $(".menuButtons a").on('click', function(e) {
        e.preventDefault();
        if (tt)
        {
            $(this).addClass('active').fadeOut('fast');
            $('body').addClass('menuOpened');
            tt = false;
        }
        else
        {
            $(this).removeClass('active').fadeIn('fast');
            $('body').removeClass('menuOpened');
            tt = true;
        }
    });
    
    $(".menuButtons2").on('click', function(e){
        e.preventDefault();
        var hh = $(".header").height();
        var wh = $(window).height();
        $(".horizontalmenu .mainMenu > ul").slideToggle('400').css({'height':(wh - hh)+'px'});
        $(this).toggleClass('active');
        $('body').toggleClass('bodyoverflos');
    });
    
    $(".closeBtn").on('click', function(e){
        e.preventDefault();
        $(".menuButtons a").removeClass('active').fadeIn('fast');
            $('body').removeClass('menuOpened');
        tt = true;
    });
    

    //========================
    // Back To Top
    //========================
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        }
        else
        {
            $("#backToTop").removeClass('showit');
        }

    });
    $("body, html").on("click", "#backToTop", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });


 //========================
   // Contact Submit
  //========================
    if ($("#contactForm").length > 0)
    {
        
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var con_name = $("#con_name").val();
            var con_email = $("#con_email").val();
            var con_phone = $("#con_phone").val();
            var con_message = $("#con_message").val();
            var con_company = '';
            if ($("#con_company").length > 0)
            {
                con_company = $("#con_company").val();
            }
			if (con_name == "" || con_email == "" || con_phone == "" || con_message == "") {
            $("#con_submit").html('Submit Again');
       		 }

            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
            	$.ajax({
                    type: "POST",
                    url: '/Home/sendmail',
                    data: { con_name: con_name, con_email: con_email, con_phone: con_phone, con_message: con_message },
                    success: function (data) {
                        $.ajax({
                            type: "POST",
                            url: '/Home/thankmail',
                            data: { con_name: con_name, con_email: con_email, con_phone: con_phone, con_message: con_message },
                            success: function (data) {
                                //alert(data);
                                $("#con_submit").html('Done !');
                                $("#contactForm input, #contactForm textarea").val('');
                                $(".contactSuccess").fadeIn('slow');
                                setTimeout(function () {
                                    $(".contactSuccess").fadeOut('slow');
                                }, 2500);
                                 $("#con_submit").html('Done');
            					 $("#con_name").val("");
             					 $("#con_email").val("");
            					 $("#con_phone").val("");
             					 $("#con_message").val("");
            					 $("#con_submit").html('Send Messege');
            					  // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                            }
                        });
                    }
                });
            }
            else
            {
                $("#con_submit").html('Re-Submit');
                alert("Data you have entered is not proper. Please try again.. ");
                $(document).ajaxStop(function () {
                      window.location.reload();
                    });
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }


    if ($("#subscriptionsforms").length > 0)
    {
        $("#subscriptionsforms").on('submit', function(e) {
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            $("#subs_submit").html('Processing...');
            if (sub_email == '')
            {
                $("#sub_email").addClass('reqError');
                $("#subs_submit").html('Failed!');
            }
            else
            {
                $("#sub_email").removeClass('reqError');
                $.ajax({
                    type: "POST",
                    url: "php/subscription.php",
                    data: {sub_email: sub_email},
                    success: function(data)
                    {
                        $("#subscriptionsforms input").val('');
                        $("#subs_submit").html('Done!');
                        $(".subscriptionSuccess").fadeIn('slow');
                        setTimeout(function() {
                            $(".subscriptionSuccess").fadeOut('slow');
                        }, 2500);
                    }
                });
            }
        });
        $("#sub_email").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }
    $(document).mouseup(function(e) {
        var container = $(".closers");

        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $(".subscriptionSuccess").fadeOut('slow');
        }
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $(".contactSuccess").fadeOut('slow');
        }
    });

    

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
   
})(jQuery);
