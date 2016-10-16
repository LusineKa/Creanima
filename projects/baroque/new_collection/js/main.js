var hg = window.innerHeight / 2.75;
var parallelism = (function($) { var _ = {
    

		// Settings
			settings: {

				// Popup overlay color.
					popupOverlayColor: '#1a1f2c',

				// Popup overlay opacity.
					popupOverlayOpacity: 0.75,

				// Mobile only.

					// If true, mobile mode will get some automatic styling.
						autoStyleMobile: true,

				// Desktop only.

					// If true, reel will be vertically centered.
						centerVertically: true,

					// Delay (in ms) before showing the reel.
						introDelay: 500,

					// Speed (in ms) at which to fade in reel.
						introSpeed: 800,

					// Height (in px) of item_images.
						item_imageHeight: hg,

					// Default width (in px) of width.
						item_imageWidth: 300,

					// Margin (in px) to preserve at the bottom of the viewport.
						marginBottom: 0,

					// Margin (in px) to preserve at the top of the viewport.
						marginTop: 0,

					// Nudge the reel by this value (in px) after it's been vertically centered.
						verticalNudge: -50,

					// Maximum number of rows.
						maxRows: 2,

					// Minimum number of rows.
						minRows:1,

					// Padding (in px) between item_images (0 = no padding).
						padding: 2,

					// Padding color.
						paddingColor: 'bisque',

					// If true, reel scroll will reset on page refresh.
						resetScroll: true,

					// Scales the scroll delta (1 = normal, 2 = double, 0.5 = half, etc.).
						scrollFactor: 1,

					// Scroll amount when using keys.
						scrollKeyAmount: 50,

					// Determines where scrollwheel events should be captured ('window' or 'reel').
						scrollWheelTarget: 'window',

					// Scroll amount when using scroll zones.
						scrollZoneAmount: 10,

					// Time (in ms) to wait between scrolls when the cursor is in a scroll zone.
						scrollZoneDelay: 20,

					// Width of scroll zones.
						scrollZoneWidth: 40,

					// Delay (in ms) before showing thumbnails.
						thumbDelay: 1200,

					// Spread (in ms) to randomly stagger thumbnails (0 = don't stagger).
						thumbDelaySpread: 1500,

					// Speed (in ms) at which to fade in thumbnails.
						thumbSpeed: 750,

					// If true, page will blur slightly when the popup is displayed.
						useBlurFilter: true,

					// If true, the left/right arrow keys will scroll the reel.
						useScrollKeys: true,

					// If true, moving the cursor to the leftmost/rightmost edges of the reel will scroll it.
						useScrollZones: true

			},

		// Touch device?
			isTouch: false,

		// IE version.
			IEVersion: 99,

		// Object cache.
			objects: {},

	/******************************/
	/* Methods                    */
	/******************************/

		// Initializes desktop mode.
			initDesktop: function() {

				var $SZ = $(''), $SZLeft, $SZRight;

				var	windowHeight = _.objects.window.height() - _.settings.marginTop - _.settings.marginBottom,
					windowWidth = _.objects.window.width(),
					item_imageHeight = _.settings.item_imageHeight,
					item_imageCount = _.objects.item_images.length,
					item_imagesWidth = 0,
					rows = 0,
					rowWidth,
					SZIntervalId;

				// Window.
					_.objects.window._parallelism_update = function() {
						var i, j, x, y, t;

						// Calculate number of rows we can fit on the screen.
							rows = Math.min(Math.max(Math.floor(windowHeight / item_imageHeight) - 0, 1), _.settings.maxRows);

						// Reduce row count if we have more than we need.
							while ( rows > _.settings.minRows && (item_imagesWidth / rows) < windowWidth )
								rows--;

						// Get average row width.
							rowWidth = Math.ceil( (item_imagesWidth / rows) * 1.1 );

						// Resize item_images.
							var w = 0, iw;
							var rowStart = 0, rowPos = 0, rowEnded = false;

							_.objects.item_images.each(function(i) {
								var $item_image = $(this);

								iw = $item_image.data('width');

								// Determine end row conditions.

									// Current item_image would push us past the row width.
										if (w + iw >= rowWidth) {

											rowEnded = true;
											rowEnd = i - 1;

										}

									// Current item_image is the last item_image.
										else if (i + 1 >= item_imageCount) {

											w += iw;
											rowEnded = true;
											rowEnd = i;

										}

								// Did the row end?
									if (rowEnded) {

										var pt = 0;

										// Rescale the row's item_images.
											_.objects.item_images.slice(rowStart, rowEnd + 1).each(function(j) {
												var $item_image = $(this);
												var p = (($item_image.data('width')/ w) * 100.00);

												if (pt + p > 100.00
												||	( (rowStart + j) == rowEnd && pt + p < 100.00))
													 p = 100.00 - pt;

												$item_image.css('width', p + '%');
												pt += p;

											});

										w = 0;
										rowStart = i;
										rowPos++;
										rowEnded = false;

									}

								w += iw;

							});

						// Resize reel.
							_.objects.reel
								.css('height', (item_imageHeight * rows) + (_.settings.padding * 2))
								.css('width', rowWidth);

						// Reposition main (if applicable).
							_.objects.main
								.css('height', (item_imageHeight * rows) + (_.settings.padding * 2));

							if (_.settings.centerVertically)
								_.objects.main
									.css('bottom', '1%')
									.css('margin-top', '0')

						// Resize/reposition SZs.
							window.setTimeout(function() {

								$SZ
									.css('height', _.objects.main.outerHeight())
									.css('top', _.objects.main.offset().top);

							}, _.settings.introDelay);

					};

					_.objects.window.resize(function() {

						// Update window dimensions.
							windowWidth = _.objects.window.width();
							windowHeight = _.objects.window.height() - _.settings.marginTop - _.settings.marginBottom;

						// Row count changed? Re-update.
							if (Math.max(Math.floor(windowHeight / item_imageHeight) - 1, 1) != rows)
								_.objects.window._parallelism_update();

						// Update scroll zones.
							$SZ._parallelism_update();

					});

				// Reel.
					_.objects.reel
						.css('overflow-y', 'hidden')
						.css('margin', '0 auto')
						.css('border', 'solid ' + _.settings.padding + 'px ' + _.settings.paddingColor)
						.css('box-shadow', '0 0 0 ' + _.settings.padding + 'px ' + _.settings.paddingColor);

					if (_.IEVersion < 9)
						_.objects.reel.show();
					else if (_.IEVersion < 10) {

						_.objects.reel.fadeTo(0,0.0001);

						window.setTimeout(function() {
							_.objects.reel.fadeTo(_.settings.introSpeed, 1);
						}, _.settings.introDelay);

					}
					else {

						_.objects.reel.css('opacity', 0);

						window.setTimeout(function() {
							_.objects.reel
								.h5u_xcss('transition', 'opacity ' + (_.settings.introSpeed / 1000.00) + 's ease-in-out')
								.css('opacity', 1);
						}, _.settings.introDelay);

					}

				// item_images.
					_.objects.item_images
						.css('box-shadow', '0px 0px 0px ' + _.settings.padding + 'px ' + _.settings.paddingColor)
						.css('border', 'solid ' + _.settings.padding + 'px ' + _.settings.paddingColor);

					_.objects.item_images.each(function(i) {

						var	$item_image = $(this), $img = $item_image.find('img');
						var w, h;

						w = parseInt($item_image.data('width'));

						if (!w)
							w = _.settings.item_imageWidth;

						h = _.settings.item_imageHeight;

						// Add to total width.
							item_imagesWidth += w;

						// item_image.
							$item_image
								.css('position', 'relative')
								.css('width', w)
								.css('height', h);

						// Image?
							if ($img.length > 0) {

								var $item_imageInner, $h2;

								// img.
									$img
										.css('position', 'absolute')
										.css('width', '100%')
										.css('height', 'auto')
										.css('min-height', '100%')
										.css('top', 0)
										.css('left', 0)
										.attr('title', $item_image.text());

								// inner (for fade effect).
									$item_image.wrapInner('<div class="inner" />');
									$item_imageInner = $item_image.children('.inner');
									$item_imageInner
										.css('position', 'relative')
										.css('display', 'block')
										.css('-webkit-backface-visibility', 'hidden')
										.css('width', '100%')
										.css('height', '100%');

									if (_.IEVersion < 9)
										$item_imageInner.show();
									else if (_.IEVersion < 10) {

										$item_imageInner.hide();

										window.setTimeout(function() {
											$item_imageInner.fadeIn(_.settings.thumbSpeed);
										}, _.settings.thumbDelay + Math.floor(Math.random() * _.settings.thumbDelaySpread));

									}
									else {

										$item_imageInner.css('opacity', 0);

										$item_imageInner.h5u_xcss('transition', 'opacity ' + (_.settings.thumbSpeed / 1000.00) + 's ease-in-out');

										window.setTimeout(function() {
											$item_imageInner.css('opacity', 1);
										}, _.settings.thumbDelay + Math.floor(Math.random() * _.settings.thumbDelaySpread));

									}

									$img.attr('src', $img.attr('src'));

							}

					});

				// Main.
					if (_.isTouch)
						_.objects.main
							.css('overflow-x', 'auto')
							.css('overflow-y', 'hidden')
							.h5u_xcss('overflow-scrolling', 'touch');
					else
						_.objects.main.css('overflow', 'hidden');

				// Scrolling.

					// Scroll Wheel.

						if (_.IEVersion < 9)
							_.objects.main.css('overflow-x', 'scroll');
						else {

							var scrollHandler = function(e) {
								var	delta = (e.detail ? e.detail * -10 : e.wheelDelta) * _.settings.scrollFactor;
								_.objects.main.scrollLeft( _.objects.main.scrollLeft() - delta );
								$SZ._parallelism_update();
								e.preventDefault();
								e.stopPropagation();
							};

							var st;

							if (_.settings.scrollWheelTarget == 'reel')
								st = _.objects.main[0];
							else
								st = _.objects.window[0];

							st.addEventListener('DOMMouseScroll', scrollHandler, false);
							st.addEventListener('mousewheel', scrollHandler, false);

						}

						if (_.settings.resetScroll)
							window.setTimeout(function() {
								_.objects.main.scrollLeft(0);
							}, 0);

					// Scroll Zones.
						if (!_.isTouch && _.settings.useScrollZones) {

							_.objects.body.append('<div class="SZRight" style="right: 0;" />');
							_.objects.body.append('<div class="SZLeft" style="left: 0;" />');

							$SZLeft = _.objects.body.children('.SZLeft');
							$SZRight = _.objects.body.children('.SZRight');
							$SZ = $SZLeft.add($SZRight);

							$SZ
								.css('position', 'fixed')
								.css('width', _.settings.scrollZoneWidth)
								.css('height', 100)
								.css('z-index', 100)
								.css('background', 'rgba(255,255,255,0)') // Required due to a weird IE bug (affects <=10)
								.css('top', 0);

							$SZ._parallelism_update = function() {

								if (_.objects.main.scrollLeft() == 0)
									$SZLeft.hide();
								else
									$SZLeft.show();

								if (_.objects.main.scrollLeft() + $(window).width() >= _.objects.reel.outerWidth())
									$SZRight.hide();
								else
									$SZRight.show();

							};

							$SZRight.bind('mouseenter', function(e) {

								SZIntervalId = window.setInterval(function() {
									_.objects.main.scrollLeft( _.objects.main.scrollLeft() + (_.settings.scrollZoneAmount * _.settings.scrollFactor) );
									$SZ._parallelism_update();
								}, _.settings.scrollZoneDelay);
								return false;

							});

							$SZLeft.bind('mouseenter', function(e) {

								SZIntervalId = window.setInterval(function() {
									_.objects.main.scrollLeft( _.objects.main.scrollLeft() - (_.settings.scrollZoneAmount * _.settings.scrollFactor) );
									$SZ._parallelism_update();
								}, _.settings.scrollZoneDelay);
								return false;

							});

							$SZ.bind('mouseleave', function(e) {
								window.clearInterval(SZIntervalId);
							});

						}
						else
							$SZ._parallelism_update = function() {};

					// Scroll Keys.
						if (_.settings.useScrollKeys) {

							_.objects.window.keydown(function(e) {
								if ($('.gallery_lightbox').is(':visible'))
									return;

								switch (e.keyCode)
								{
									case 39:
										window.clearInterval(SZIntervalId);
										_.objects.main.scrollLeft( _.objects.main.scrollLeft() + (_.settings.scrollKeyAmount * _.settings.scrollFactor) );
										$SZ._parallelism_update();
										return false;

									case 37:
										window.clearInterval(SZIntervalId);
										_.objects.main.scrollLeft( _.objects.main.scrollLeft() - (_.settings.scrollKeyAmount * _.settings.scrollFactor) );
										$SZ._parallelism_update();
										return false;

									default:
										break;
								}
							});

						}

				// Poptrox.
					_.objects.reel.poptrox({
						onPopupClose: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.removeClass('overlayed'); }) : null),
						onPopupOpen: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.addClass('overlayed'); }) : null),
						overlayColor: _.settings.popupOverlayColor,
						overlayOpacity: _.settings.popupOverlayOpacity,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.thumb a.image',
						usePopupCaption: true,
						usePopupCloser: false,
						usePopupDefaultStyling: false,
						usePopupNav: true
					});

				// Trigger resize event.
					_.objects.window.trigger('resize');

			},

		// Initializes mobile mode.
			initMobile: function() {

				// Auto styling?
					if (_.settings.autoStyleMobile) {

						// item_images.
							_.objects.item_images
								.css('border', 'solid ' + Math.ceil(_.settings.padding / 2) + 'px ' + _.settings.paddingColor);

							_.objects.item_images.filter('.thumb')
								.css('margin-top', (-1 * Math.ceil(_.settings.padding / 2)) + 'px')
								.filter(':nth-child(2n)')
									.css('border-right', 0);

					}

				// item_images.
					_.objects.item_images.each(function() {

						var $item_image = $(this), $img = $item_image.find('img');

						$img
							.css('opacity', 0);

						$item_image
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', 'center center')
							.css('background-size', 'cover');


					});

				// Poptrox.
					_.objects.reel.poptrox({
						onPopupClose: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.removeClass('overlayed'); }) : null),
						onPopupOpen: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.addClass('overlayed'); }) : null),
						overlayColor: _.settings.popupOverlayColor,
						overlayOpacity: _.settings.popupOverlayOpacity,
						popupSpeed: 0,
						selector: '.thumb a.image',
						useBodyOverflow: false,
						usePopupCaption: false,
						usePopupCloser: false,
						usePopupDefaultStyling: false,
						usePopupLoader: false,
						usePopupNav: false,
						windowMargin: 0
					});

			},

		// Main init method
			init: function() {

				// Skel.
					skel
						.breakpoints({
							desktop: '(min-width: 737px)',
							mobile: '(max-width: 736px)'
						})
						.viewport({
							breakpoints: {
								desktop: {
									width: 1200,
									scalable: false
								}
							}
						});

					_.isTouch = skel.vars.touch;
					_.IEVersion = skel.vars.IEVersion;

				// jQuery.
					$.fn.h5u_xcss = function(k, v) {
						return $(this)
							.css('-webkit-' + k, v)
							.css('-moz-' + k, v)
							.css('-o-' + k, v)
							.css('-ms-' + k, v)
							.css(k, v);
					};

				$(function() {

					// Objects.
						_.objects.window = $(window),
						_.objects.wrapper = $('#wrapper'),
						_.objects.body = $('body'),
						_.objects.main = $('#main'),
						_.objects.reel = $('#reel'),
						_.objects.item_images = _.objects.main.find('.item_image');

					// Mode.
						_.objects.window.on('load', function() {

							skel
								.on('+desktop', function() {
									_.initDesktop();
								})
								.on('+mobile', function() {
									_.initMobile();
								})
								.on('-desktop -mobile', function() {
									window.setTimeout(function() {
										location.reload(true);
									}, 50);
								});

						});

				});

			}

}; return _; })(jQuery);
parallelism.init();

