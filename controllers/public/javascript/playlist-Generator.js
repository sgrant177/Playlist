// THIS IS AN OWL CAROUSEL
// LINKED WITH https://cdnjs.com/
$(document).ready(function () {
    $('.carousel').owlCarousel({
        rtl: false,
        items: 3,
        autoWidth: true,
        autoHeight: true,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        autoplay: true,
        margin: 0,
        nav: true,
        autoplayTimeOut: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            $('.carousel').trigger('next.owl');
        } else {
            $('.carousel').trigger('prev.owl');
        }
        e.preventDefault();
    });

});