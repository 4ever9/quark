const myCarousel = document.getElementById('appIndicators')
const whyCarousel = document.getElementById('whyIndicators')
const whyCarouselItems = $('.why-carousel-item')
const appCarouselItems = $('.app-carousel-item')

if (window.location.pathname === '/') {
    const indexProductOther = $(".index-product-other")

    indexProductOther.each(function (i, obj) {
        $(obj).mouseenter(function (e) {
            $(obj).addClass('active')
            $(obj).children('.index-product-normal-img').removeClass('active')
            $(obj).children('.index-product-active-img').addClass('active')
        }).mouseleave(function (e) {
            $(obj).removeClass('active')
            $(obj).children('.index-product-normal-img').addClass('active')
            $(obj).children('.index-product-active-img').removeClass('active')
        })
    })

    myCarousel.addEventListener('slide.bs.carousel', event => {
        appCarouselItems.each(function (i, obj) {
            $(obj).removeClass('active')
            if (event.to === i) {
                $(obj).addClass('active')
            }
        })
    })

    whyCarousel.addEventListener('slide.bs.carousel', event => {
        whyCarouselItems.each(function (i, obj) {
            $(obj).removeClass('active')
            if (event.to === i) {
                $(obj).addClass('active')
            }
        })
    })
}

$('.about-credentials').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});

$('.price-card').each(function (i, obj) {
    $(obj).click(function (e) {
        $('.price-card').removeClass('active')
        $(obj).addClass('active')
    })
})

$('.price-card-first').click(function (e) {
    $('.price-second').removeClass('active')
    $('.price-first').addClass('active')
})

$('.price-card-second').click(function (e) {
    $('.price-first').removeClass('active')
    $('.price-second').addClass('active')
})

$('#wechat-btn').mouseenter(function (e) {
    $('.wechat-layer').addClass('active')
}).mouseleave(function (e) {
    $('.wechat-layer').removeClass('active')
})

$('.bsa').click(function (e) {
    // $('.service-response-wrap').addClass('active')
    // $('.tab-content').addClass('active')
    // console.log()
    const cls = $(this).data('target')
    // $('.tab-content').removeClass('active')
    $('pre').removeClass('active')
    $('.' + cls).addClass('active')
})

$('.service-tab').each(function (i, obj) {
    $(obj).click(function (e) {
        $('.service-tab').removeClass('active')
        $(obj).addClass('active')
        $('.service-tab-content').removeClass('active')
        $('.service-tab-content').eq(i).addClass('active')
        $('.t').removeClass('active')
        $('.t').eq(i).addClass('active')
    })
    $('.service-response-wrap').removeClass('active')
})

$('.sidebar-item').each(function (i, obj) {
    $(obj).mouseenter(function () {
        $(obj).addClass('active')
        $(obj).find('img').eq(0).removeClass('active')
        $(obj).find('img').eq(1).addClass('active')
        $(obj).find('.sidebar-content-wechat').addClass('active')
    }).mouseleave(function () {
        $(obj).removeClass('active')
        $(obj).find('img').eq(0).addClass('active')
        $(obj).find('img').eq(1).removeClass('active')
        $('.sidebar-content-wechat').removeClass('active')
    })
})

$("#up").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
        {
            scrollTop: 0,
        },
        50
    );
});