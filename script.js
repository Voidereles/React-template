$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#header a').addClass('nav-link-dark');
        $('#headerImg').attr("src", "images/logo-bfece249803f3d440ef27a70c60f54f1.png");
        $('.mobile-nav-toggle>span').addClass('mobile-nav-toggle--span');
        $('.mobile-nav-toggle').addClass('mobile-nav-toggle--scrolled');

    } else {
        $('#header').removeClass('header-scrolled');
        $('#header a').removeClass('nav-link-dark');
        $('#headerImg').attr("src", "images/logo-white-512a641e90600644922a2327e20c5067.png");
        $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
        $('.mobile-nav-toggle').removeClass('mobile-nav-toggle--scrolled');
    }
});

// if ($(window).scrollTop() > 100) {
//     $('#header').addClass('header-scrolled');
//     $('#header a').addClass('nav-link-dark');
//     $('#headerImg').attr("src", "images/logo-bfece249803f3d440ef27a70c60f54f1.png");
// }

if ($('.main-nav').length && $('.main-nav').attr('display') != 'none') {
    var $mobile_nav = $('.main-nav').clone().prop({
        class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('nav').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><span></span><span></span><span></span></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-overly').toggle();
        $('.mobile-nav-toggle>span').addClass('mobile-nav-toggle--span');
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-overly').hide();
            }
        }
    });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
    $(".mobile-nav, .mobile-nav-toggle").hide();
    $('.mobile-nav-overly').hide();
}

$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})



$(document).ready(function () {
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 10);
    $("#countdown").countdown(myDate, function (event) {
        $(this).html(
            event.strftime(
                '<div class="col-3"> <div class="time text-slate-dark">%D</div> <span class="text text-slate">Days</span> </div> <div class="col-3"> <div class="time text-slate-dark">%H</div><span class="text text-slate">Hours</span> </div> <div class="col-3"> <div class="time text-slate-dark">%M</div><span class="text text-slate">Minutes</span> </div> <div class="col-3"> <div class="time text-slate-dark">%S</div><span class="text text-slate">Seconds</span> </div>'
            )
        );
    });

});
// Set the date we're counting down to
// var countDownDate = new Date();
// countDownDate.setDate(countDownDate.getDate() + 10);

// // Update the count down every 1 second
// var x = setInterval(function () {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     $(".sale-timer__days").prepend(days);
//     $(".sale-timer__hours").prepend(hours);
//     $(".sale-timer__minutes").prepend(minutes);
//     $(".sale-timer__seconds").prepend(seconds);

//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdownSale").innerHTML = "EXPIRED";
//     }
// }, 1000);