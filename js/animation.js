jQuery(document).ready(function(){jQuery(window).load(function(){jQuery(".animated").fadeTo(0,0),jQuery(".animated").each(function(){var a=jQuery(this).offset().top,e=(jQuery(this).attr("data-delay"),jQuery(window).scrollTop());e+300>a&&(jQuery(this).fadeTo(1,500),$anim=jQuery(this).attr("data-animation"))})}),jQuery(window).scroll(function(){jQuery(".animated").each(function(){var a=jQuery(this).offset().top,e=jQuery(this).attr("data-delay"),t=jQuery(window).scrollTop();t+500>a&&jQuery(this).delay(e).queue(function(){jQuery(this).fadeTo(1,500),$anim=jQuery(this).attr("data-animation"),jQuery(this).addClass($anim).clearQueue()})})})});