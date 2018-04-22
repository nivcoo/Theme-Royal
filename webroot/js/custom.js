function numericalRating(t){$(t).each(function(){var t=$(this).attr("data-rating");t>=4?$(this).addClass("high"):t>=3?$(this).addClass("mid"):t<3&&$(this).addClass("low")})}function starRating(t){$(t).each(function(){var t=$(this).attr("data-rating");function e(t,e,i,a,n){return'<span class="'+t+'"></span><span class="'+e+'"></span><span class="'+i+'"></span><span class="'+a+'"></span><span class="'+n+'"></span>'}var i=e("star","star","star","star","star"),a=e("star","star","star","star","star half"),n=e("star","star","star","star","star empty"),s=e("star","star","star","star half","star empty"),o=e("star","star","star","star empty","star empty"),r=e("star","star","star half","star empty","star empty"),c=e("star","star","star empty","star empty","star empty"),l=e("star","star half","star empty","star empty","star empty"),d=e("star","star empty","star empty","star empty","star empty");t>=4.75?$(this).append(i):t>=4.25?$(this).append(a):t>=3.75?$(this).append(n):t>=3.25?$(this).append(s):t>=2.75?$(this).append(o):t>=2.25?$(this).append(r):t>=1.75?$(this).append(c):t>=1.25?$(this).append(l):t<1.25&&$(this).append(d)})}!function(t){"use strict";t(document).ready(function(){t(function(){function e(){if(t(window).width()<="1024"){t(".mmenu-init").remove(),t("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr("id").removeClass("style-1 style-2").find("ul").removeAttr("id"),t(".mmenu-init").mmenu({counters:!0},{offCanvas:{pageNodetype:"#wrapper"}});var e=t(".mmenu-init").data("mmenu"),i=t(".hamburger");t(".mmenu-trigger").click(function(){e.open()}),e.bind("open:finish",function(){setTimeout(function(){i.addClass("is-active")})}),e.bind("close:finish",function(){setTimeout(function(){i.removeClass("is-active")})})}t(".mm-next").addClass("mm-fullsubopen")}e(),t(window).resize(function(){e()})}),t(".user-menu").on("click",function(){t(this).toggleClass("active")}),t("#header").not("#header.not-sticky").clone(!0).addClass("cloned unsticky").insertAfter("#header"),t("#navigation.style-2").clone(!0).addClass("cloned unsticky").insertAfter("#navigation.style-2"),t("#logo .sticky-logo").clone(!0).prependTo("#navigation.style-2.cloned ul#responsive");var e=2*t("#header-container").height();t(window).scroll(function(){t(window).scrollTop()>=e?(t("#header.cloned").addClass("sticky").removeClass("unsticky"),t("#navigation.style-2.cloned").addClass("sticky").removeClass("unsticky")):(t("#header.cloned").addClass("unsticky").removeClass("sticky"),t("#navigation.style-2.cloned").addClass("unsticky").removeClass("sticky"))});function i(){var e=t("body").height();t(".content-b").each(function(i){t(this).innerHeight()>e&&t(this).closest(".fullscreen").addClass("overflow")})}function a(){var e=t(window).height();t(".parallax").each(function(i){var a=t(this),n=a.width(),s=a.height(),o=a.attr("data-img-width"),r=a.attr("data-img-height"),c=o/r,l=100;l=l||0;var d=0;a.hasClass("parallax")&&!t("html").hasClass("touch")&&(d=e-s),n>(o=(r=s+d+l)*c)&&(r=(o=n)/c),a.data("resized-imgW",o),a.data("resized-imgH",r),a.css("background-size",o+"px "+r+"px")})}function n(e){var i=t(window).height(),a=t(window).scrollTop(),n=a+i,s=(a+n)/2;t(".parallax").each(function(e){var o=t(this),r=o.height(),c=o.offset().top,l=c+r;if(n>c&&a<l){var d=o.data("resized-imgH"),h=-d+i,p=r<i?d-r:d-i;c-=p,l+=p;var u=0;u=t(".parallax").is(".titlebar")?0+(h-0)*(s-c)/(l-c)*2:0+(h-0)*(s-c)/(l-c);var g=o.attr("data-oriz-pos");g=g||"50%",t(this).css("background-position",g+" "+u+"px")}})}t(window).scroll(function(){t(window).scrollTop()>=600?t("#backtotop").addClass("visible"):t("#backtotop").removeClass("visible")}),t("#backtotop a").on("click",function(){return t("html, body").animate({scrollTop:0},500),!1}),t(".main-search-container, section.fullwidth, .listing-slider .item, .address-container, .img-box-background, .image-edge, .edge-bg").each(function(){var e=t(this).attr("data-background-image"),i=t(this).attr("data-background-color");void 0!==e&&t(this).css("background-image","url("+e+")"),void 0!==i&&t(this).css("background",""+i)}),t(".parallax").prepend('<div class="parallax-overlay"></div>'),t(".parallax").each(function(){var e=t(this).attr("data-background"),i=t(this).attr("data-color"),a=t(this).attr("data-color-opacity");void 0!==e&&t(this).css("background-image","url("+e+")"),void 0!==i&&t(this).find(".parallax-overlay").css("background-color",""+i),void 0!==a&&t(this).find(".parallax-overlay").css("opacity",""+a)}),t(".category-box").each(function(){t(this).append('<div class="category-box-background"></div>'),t(this).children(".category-box-background").css({"background-image":"url("+t(this).attr("data-background-image")+")"})}),t(".img-box").each(function(){t(this).append('<div class="img-box-background"></div>'),t(this).children(".img-box-background").css({"background-image":"url("+t(this).attr("data-background-image")+")"})}),"ontouchstart"in window&&(document.documentElement.className=document.documentElement.className+" touch"),t("html").hasClass("touch")||t(".parallax").css("background-attachment","fixed"),t(window).resize(i),i(),t(window).resize(a),t(window).focus(a),a(),t("html").hasClass("touch")||(t(window).resize(n),t(window).scroll(n),n()),navigator.userAgent.match(/Trident\/7\./)&&t("body").on("mousewheel",function(){event.preventDefault();var t=event.wheelDelta,e=window.pageYOffset;window.scrollTo(0,e-t)});var s={".chosen-select":{disable_search_threshold:10,width:"100%"},".chosen-select-deselect":{allow_single_deselect:!0,width:"100%"},".chosen-select-no-single":{disable_search_threshold:100,width:"100%"},".chosen-select-no-single.no-search":{disable_search_threshold:10,width:"100%"},".chosen-select-no-results":{no_results_text:"Oops, nothing found!"},".chosen-select-width":{width:"95%"}};for(var o in s)s.hasOwnProperty(o)&&t(o).chosen(s[o]);t(".mfp-gallery-container").each(function(){t(this).magnificPopup({type:"image",delegate:"a.mfp-gallery",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,preloader:!0,removalDelay:0,mainClass:"mfp-fade",gallery:{enabled:!0,tCounter:""}})}),t(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"}),t(".mfp-image").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",image:{verticalFit:!0}}),t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),t(".fullwidth-slick-carousel").slick({centerMode:!0,centerPadding:"15%",slidesToShow:3,dots:!0,arrows:!1,responsive:[{breakpoint:1441,settings:{centerPadding:"10%",slidesToShow:3}},{breakpoint:1025,settings:{centerPadding:"10px",slidesToShow:2}},{breakpoint:767,settings:{centerPadding:"10px",slidesToShow:1}}]}),t(".testimonial-carousel").slick({centerMode:!0,centerPadding:"34%",slidesToShow:1,dots:!0,arrows:!1,responsive:[{breakpoint:1025,settings:{centerPadding:"10px",slidesToShow:2}},{breakpoint:767,settings:{centerPadding:"10px",slidesToShow:1}}]}),t(".listing-slider").slick({centerMode:!0,centerPadding:"20%",slidesToShow:2,responsive:[{breakpoint:1367,settings:{centerPadding:"15%"}},{breakpoint:1025,settings:{centerPadding:"0"}},{breakpoint:767,settings:{centerPadding:"0",slidesToShow:1}}]}),t(".simple-slick-carousel").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,dots:!0,arrows:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}]}),t(".simple-fw-slick-carousel").slick({infinite:!0,slidesToShow:5,slidesToScroll:1,dots:!0,arrows:!1,responsive:[{breakpoint:1610,settings:{slidesToShow:4}},{breakpoint:1365,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}]}),t(".logo-slick-carousel").slick({infinite:!0,slidesToShow:5,slidesToScroll:4,dots:!0,arrows:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}]});var r=t(".tabs-nav"),c=r.children("li");r.each(function(){var e=t(this);e.next().children(".tab-content").stop(!0,!0).hide().first().show(),e.children("li").first().addClass("active").stop(!0,!0).show()}),c.on("click",function(e){var i=t(this);i.siblings().removeClass("active").end().addClass("active"),i.parent().next().children(".tab-content").stop(!0,!0).hide().siblings(i.find("a").attr("href")).fadeIn(),e.preventDefault()});var l=window.location.hash,d=t('.tabs-nav a[href="'+l+'"]');0===d.length?(t(".tabs-nav li:first").addClass("active").show(),t(".tab-content:first").show()):d.parent("li").click();var h=t(".accordion");h.each(function(){t(this).toggleClass("ui-accordion ui-widget ui-helper-reset"),t(this).find("h3").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"),t(this).find("div").addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"),t(this).find("div").hide()}),h.find("h3").on("click",function(e){var i=t(this).parent();if(t(this).next().is(":hidden")){var a=t("h3",i);a.removeClass("ui-accordion-header-active ui-state-active ui-corner-top").next().slideUp(300),a.find("span").removeClass("ui-accordion-icon-active"),t(this).find("span").addClass("ui-accordion-icon-active"),t(this).addClass("ui-accordion-header-active ui-state-active ui-corner-top").next().slideDown(300)}e.preventDefault()}),t(".toggle-container").hide(),t(".trigger, .trigger.opened").on("click",function(e){t(this).toggleClass("active"),e.preventDefault()}),t(".trigger").on("click",function(){t(this).next(".toggle-container").slideToggle(300)}),t(".trigger.opened").addClass("active").next(".toggle-container").show(),t(".tooltip.top").tipTip({defaultPosition:"top"}),t(".tooltip.bottom").tipTip({defaultPosition:"bottom"}),t(".tooltip.left").tipTip({defaultPosition:"left"}),t(".tooltip.right").tipTip({defaultPosition:"right"}),t(".like-icon, .widget-button, .like-button").on("click",function(e){e.preventDefault(),t(this).toggleClass("liked"),t(this).children(".like-icon").toggleClass("liked")}),t(".more-search-options-trigger").on("click",function(e){e.preventDefault(),t(".more-search-options, .more-search-options-trigger").toggleClass("active"),t(".more-search-options.relative").animate({height:"toggle",opacity:"toggle"},300)}),t(window).on("load resize",function(){var e=t(window).width(),i=t("#header-container").height();t(".fs-inner-container, .fs-inner-container.map-fixed, #dashboard").css("padding-top",i),e<992?t(".fs-inner-container.map-fixed").insertBefore(".fs-inner-container.content"):t(".fs-inner-container.content").insertBefore(".fs-inner-container.map-fixed")}),t(window).on("load resize",function(){t(".dashboard-stat-content h4").counterUp({delay:100,time:800})}),t(".leave-rating input").change(function(){var e=t(this);t(".leave-rating .selected").removeClass("selected"),e.closest("label").addClass("selected")}),t(".dashboard-nav ul li a").on("click",function(){t(this).closest("li").has("ul").length&&t(this).parent("li").toggleClass("active")}),t(window).on("load resize",function(){var e=window.innerHeight,i=t("#header-container").height();t(window).width()>992?t(".dashboard-nav-inner").css("max-height",e-i):t(".dashboard-nav-inner").css("max-height","")}),t(".tip").each(function(){var e=t(this).attr("data-tip-content");t(this).append('<div class="tip-content">'+e+"</div>")}),t(".verified-badge.with-tip").each(function(){var e=t(this).attr("data-tip-content");t(this).append('<div class="tip-content">'+e+"</div>")}),t(window).on("load resize",function(){var e=t(".verified-badge.with-tip");e.find(".tip-content").css({width:e.outerWidth(),"max-width":e.outerWidth()})}),t(".add-listing-section").each(function(){var e=t(this),i=t(this).find(".switch input");i.is(":checked")&&t(e).addClass("switcher-on"),i.change(function(){!0===this.checked?t(e).addClass("switcher-on"):t(e).removeClass("switcher-on")})}),t(".dashboard-responsive-nav-trigger").on("click",function(e){e.preventDefault(),t(this).toggleClass("active");var i=t("body").find(".dashboard-nav");t(this).hasClass("active")?t(i).addClass("active"):t(i).removeClass("active")}),t(window).on("load resize",function(){var e=t(".message-content").outerHeight();e>t(".messages-inbox ul").height()&&t(".messages-container-inner .messages-inbox ul").css("max-height",e)}),t("table#pricing-list-container").is("*")&&(t(".add-pricing-list-item").on("click",function(e){var i;e.preventDefault(),(i=t("tr.pricing-list-item.pattern").first().clone()).find("input").val(""),i.appendTo("table#pricing-list-container")}),t(document).on("click","#pricing-list-container .delete",function(e){e.preventDefault(),t(this).parent().parent().remove()}),t(".add-pricing-submenu").on("click",function(e){e.preventDefault(),t('<tr class="pricing-list-item pricing-submenu"><td><div class="fm-move"><i class="sl sl-icon-cursor-move"></i></div><div class="fm-input"><input type="text" placeholder="Category Title" /></div><div class="fm-close"><a class="delete" href="#"><i class="fa fa-remove"></i></a></div></td></tr>').appendTo("table#pricing-list-container")}),t("table#pricing-list-container tbody").sortable({forcePlaceholderSize:!0,forceHelperSize:!1,placeholder:"sortableHelper",zIndex:999990,opacity:.6,tolerance:"pointer",start:function(t,e){e.placeholder.height(e.helper.outerHeight())}}));var p=t(".pricing-price").children("input").attr("data-unit");function u(){t(".panel-dropdown").removeClass("active"),t(".fs-inner-container.content").removeClass("faded-out")}t(".pricing-price").children("input").before('<i class="data-unit">'+p+"</i>"),t("a.close").removeAttr("href").on("click",function(){t(this).parent().css({opacity:0,transition:"opacity 0.5s"}).slideUp()}),t(".panel-dropdown a").on("click",function(e){t(this).parent().is(".active")?u():(u(),t(this).parent().addClass("active"),t(".fs-inner-container.content").addClass("faded-out")),e.preventDefault()}),t(".panel-buttons button").on("click",function(e){t(".panel-dropdown").removeClass("active"),t(".fs-inner-container.content").removeClass("faded-out")});var g=!1;t(".panel-dropdown").hover(function(){g=!0},function(){g=!1}),t("body").mouseup(function(){g||u()}),t(".checkboxes.categories input").on("change",function(){t(this).hasClass("all")?(t(this).parents(".checkboxes").find("input").prop("checked",!1),t(this).prop("checked",!0)):t(".checkboxes input.all").prop("checked",!1)}),t('input[type="range"].distance-radius').rangeslider({polyfill:!1,onInit:function(){this.output=t('<div class="range-output" />').insertBefore(this.$range).html(this.$element.val());var e=t(".distance-radius").attr("data-title");t(".range-output").after('<i class="data-radius-title">'+e+"</i>")},onSlide:function(t,e){this.output.html(e)}}),t(".show-more-button").on("click",function(e){if(e.preventDefault(),t(this).toggleClass("active"),t(".show-more").toggleClass("visible"),t(".show-more").is(".visible")){var i=t(".show-more"),a=i.height(),n=i.css("height","auto").height();i.height(a).animate({height:n},400)}else t(".show-more").animate({height:"450px"},400)}),t(window).on("load resize",function(){var e=t(".container").width();t(".listing-nav-container.cloned .listing-nav").css("width",e)}),null!==document.getElementById("listing-nav")&&t(window).scroll(function(){t(window).scrollTop()>t(".listing-nav").not(".listing-nav-container.cloned .listing-nav").offset().top+90?t(".listing-nav-container.cloned").addClass("stick"):t(".listing-nav-container.cloned").removeClass("stick")}),t(".listing-nav-container").clone(!0).addClass("cloned").prependTo("body"),t(".listing-nav a, a.listing-address, .star-rating a").on("click",function(e){e.preventDefault(),t("html,body").scrollTo(this.hash,this.hash,{gap:{y:-20}})}),t(".listing-nav li:first-child a, a.add-review-btn, a[href='#add-review']").on("click",function(e){e.preventDefault(),t("html,body").scrollTo(this.hash,this.hash,{gap:{y:-100}})}),t(window).on("load resize",function(){for(var e=t(".listing-nav li").children(),i=[],a=0;a<e.length;a++){var n=e[a],s=t(n).attr("href");i.push(s)}t(window).scroll(function(){for(var e=t(window).scrollTop(),a=0;a<i.length;a++){var n=i[a],s=t(n).offset().top-150,o=t(n).height();e>=s&&e<s+o?t("a[href='"+n+"']").addClass("active"):t("a[href='"+n+"']").removeClass("active")}})});for(var f=document.querySelectorAll(".payment-tab-trigger > input"),m=0;m<f.length;m++)f[m].addEventListener("change",v);function v(t){for(var e=document.querySelectorAll(".payment-tab"),i=0;i<e.length;i++)e[i].classList.remove("payment-tab-active");t.target.parentNode.parentNode.classList.add("payment-tab-active")}t("#message").hide(),t("#contact input[type=text], #contact input[type=number], #contact input[type=email], #contact input[type=url], #contact input[type=tel], #contact select, #contact textarea").each(function(){}),t("#name, #comments, #subject").focusout(function(){t(this).val()?t(this).removeClass("error").parent().find("mark").removeClass("error").addClass("valid"):t(this).addClass("error").parent().find("mark").removeClass("valid").addClass("error"),t("#submit").prop("disabled",!1).removeClass("disabled")}),t("#email").focusout(function(){var e;t(this).val()&&(e=t(this).val(),new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e))?t(this).removeClass("error").parent().find("mark").removeClass("error").addClass("valid"):t(this).addClass("error").parent().find("mark").removeClass("valid").addClass("error")}),t("#email").focusin(function(){t("#submit").prop("disabled",!1).removeClass("disabled")}),t("#submit").on("click",function(){t("#contact-message").slideUp(200,function(){if(t("#contact-message").hide(),t("#name, #subject, #phone, #comments, #website, #email").triggerHandler("focusout"),t("#contact mark.error").size()>0)return t("#contact input.error:first, #contact textarea.error:first").focus(),!1})}),t("#contactform").submit(function(){if(t("#contact mark.error").size()>0)return!1;var e=t(this).attr("action");return t("#contact #submit").after('<img src="images/loader.gif" class="loader" />'),t("#submit").prop("disabled",!0).addClass("disabled"),t.post(e,t("#contactform").serialize(),function(e){t("#contact-message").html(e),t("#contact-message").slideDown(),t("#contactform img.loader").fadeOut("slow",function(){t(this).remove()}),null!==e.match("success")&&t("#contactform").slideUp("slow")}),!1})})}(this.jQuery),$.scrollTo=$.fn.scrollTo=function(t,e,i){return this instanceof $?(i=$.extend({},{gap:{x:0,y:0},animation:{easing:"swing",duration:600,complete:$.noop,step:$.noop}},i),this.each(function(){$(this).stop().animate({scrollLeft:isNaN(Number(t))?$(e).offset().left+i.gap.x:t,scrollTop:isNaN(Number(e))?$(e).offset().top+i.gap.y:e},i.animation)})):$.fn.scrollTo.apply($("html, body"),arguments)},numericalRating(".numerical-rating"),starRating(".star-rating");