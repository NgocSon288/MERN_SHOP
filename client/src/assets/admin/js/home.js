import $ from 'jquery'
$(window).scroll(function () {
    $('.slideanim').each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
            $(this).addClass("slide");
        }
        else {
            $(this).remove("slide");
        }

    });

    $('.slideanim1').each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
            $(this).addClass("slide1");
        }
        else {
            $(this).remove("slide1");
        }

    });

    $('.slideanim2').each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
            $(this).addClass("slide2");
        }
        else {
            $(this).remove("slide2");
        }

    });

    $('.slideanim3').each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
            $(this).addClass("slide3");
        }
        else {
            $(this).remove("slide3");
        }

    });

    $('.slideanim4').each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 650) {
            $(this).addClass("slide4");
        }
        else {
            $(this).remove("slide4");
        }

    });

    // $('#slides-shop').superslides({
	// 	inherit_width_from: '.cover-slides',
	// 	inherit_height_from: '.cover-slides',
	// 	play: 5000,
	// 	animation: 'fade',
	// });

	// $(".cover-slides ul li").append("<div class='overlay-background'></div>");
}); 