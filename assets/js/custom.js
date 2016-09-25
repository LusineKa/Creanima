jQuery(document).ready(function($){
    //cache some jQuery objects
    var modalTrigger = $('.cd-modal-trigger'),
        transitionLayer = $('.cd-transition-layer'),
        transitionBackground = transitionLayer.children(),
        modalWindow = $('.cd-modal');

    var frameProportion = 1.78, //png frame aspect ratio
        frames = transitionLayer.data('frame'), //number of png frames
        resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function(){
        if( !resize ) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
        }
    });

    //open modal window
    modalTrigger.on('click', function(event){
        window.location.hash = $(this).attr("href");
        event.preventDefault();
        var modalId = $(event.target).attr('href');
        transitionLayer.addClass('visible opening');
        var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 800;
        setTimeout(function(){
            $('body').css('overflow','hidden');
            modalWindow.addClass('visible');
            transitionLayer.removeClass('opening');
            $('#main-navbar-top').fadeOut();

        }, delay);
    });

    if(window.location.hash == "#themplates"){
        $('#main-navbar-top').hide();
        modalWindow.css('transition','none').addClass('visible');
        transitionLayer.addClass('visible');
        $('body').css('overflow','hidden');
        event.preventDefault();
    }

    //close modal window
    modalWindow.on('click', '.modal-close', function(event){
        window.location.hash = "";
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow.removeClass('visible');
        transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
            $('body').css('overflow','auto');
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            $('#main-navbar-top').fadeIn();
        });
    });

    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if( windowWidth/windowHeight > frameProportion ) {
            layerWidth = windowWidth;
            layerHeight = layerWidth/frameProportion;
        } else {
            layerHeight = windowHeight*1.2;
            layerWidth = layerHeight*frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth*frames+'px',
            'height': $(document).height + 'px',
        });

        resize = false;
    }
    $(function () {
        // We can attach the `fileselect` event to all file inputs on the page
        $(document).on('change', ':file', function () {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        // We can watch for our custom `fileselect` event like this
        $(document).ready(function () {
            $(':file').on('fileselect', function (event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }

            });
        });

    });

    $(function(){
        if (/iPhone|iPod|iPad/.test(navigator.userAgent))
            $('.cd-modal').wrap(function(){
                var $this = $(this);
                return $('<div />').css({
                    width: $this.attr('width'),
                    height: $this.attr('height'),
                    overflow: 'scroll',
                    '-webkit-overflow-scrolling': 'touch'
                });
            });
    })
});
