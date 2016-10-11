jQuery(document).ready(function () {
    jQuery(window).load(function () {
        jQuery(".animated").fadeTo(0, 0), jQuery(".animated").each(function () {
            var a = jQuery(this).offset().top, e = (jQuery(this).attr("data-delay"), jQuery(window).scrollTop());
            e + 300 > a && (jQuery(this).fadeTo(1, 500), $anim = jQuery(this).attr("data-animation"))
        })
    }), jQuery(window).scroll(function () {
        jQuery(".animated").each(function () {
            var a = jQuery(this).offset().top, e = jQuery(this).attr("data-delay"), t = jQuery(window).scrollTop();
            t + 500 > a && jQuery(this).delay(e).queue(function () {
                jQuery(this).fadeTo(1, 500), $anim = jQuery(this).attr("data-animation"), jQuery(this).addClass($anim).clearQueue()
            })
        })
    })

    var index_of_slider ;
    var switcher_color = function(){
        index_of_slider = $('.slider li.flex-active-slide').index();
        switch (index_of_slider) {
            case 0:
                $('.overlay-mask').css('background-color','rgba(2,106,212,.8)');
                break;
            case 1:
                $('.overlay-mask').css('background-color','rgba(255,200,80,.8)');
                break;
            case 2:
                $('.overlay-mask').css('background-color','rgba(174,220,46,0.8)');
                break;
        };
    };
    switcher_color();
    $(".slider").bind("DOMSubtreeModified", function() {
        switcher_color();
    });

    $('.ovelay-icon[data-link]').click(function() {
         var srcSite = $(this).data('link');
        $('.modal-body iframe').attr('src',srcSite);
        $('#portfolio').modal({show:true})
    });

    $('.modal-header button').click(function () {
        $('.modal-body iframe').attr('src',null);
    });
});
