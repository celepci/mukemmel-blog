$(".main_slider").owlCarousel({margin:0,loop:!0,items:1,nav:!1,dots:!0,autoplay:!1,autoplayHoverPause:!0,autoplayTimeout:1e9}),$(".blog-slider").owlCarousel({margin:30,loop:!0,nav:!0,dots:!0,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:15e3,responsiveClass:!0,stagePadding:75,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],responsive:{0:{items:1},320:{items:1,stagePadding:30,margin:20},425:{items:1,stagePadding:40,margin:20},500:{items:1,stagePadding:75},600:{items:1,stagePadding:120},720:{items:2,stagePadding:40,margin:20},850:{items:2,stagePadding:75},992:{items:2,stagePadding:120},1140:{items:3,stagePadding:40,margin:20},1200:{items:3,stagePadding:75}}}),$(".works-slider").owlCarousel({margin:30,loop:!0,nav:!0,dots:!0,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:15e3,responsiveClass:!0,stagePadding:75,navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],responsive:{0:{items:1,margin:20},320:{items:1,stagePadding:30,margin:20},375:{items:1,stagePadding:40,margin:20},500:{items:1,stagePadding:75,margin:20},576:{items:1,stagePadding:100},700:{items:2,margin:20,stagePadding:40},768:{items:2,margin:20},850:{items:2,margin:20},1100:{items:3,margin:20},1140:{items:3}}});var owl=$(".main_slider");function header(){186<$(window).scrollTop()?$(".header").addClass("active"):$(".header").removeClass("active")}function reklam_pos(){var a=$(window).scrollTop(),e=$(".guzel_alan_kare_uzun");if(0<e.length){e.offset().top;var i=$(".content").innerHeight();console.log("y "+a),console.log("content_height "+i),650<a&&a<i-e.height()?e.addClass("fixed"):e.removeClass("fixed")}}owl.owlCarousel(),owl.on("changed.owl.carousel",function(a){$(".main_slider .title").removeClass("animated fadeIn"),setTimeout(function(){$(".main_slider .title").addClass("animated fadeIn")},100)}),jQuery().fancybox&&$(".fancy_img").fancybox({transitionEffect:"slide",animationEffect:"zoom-in-out",loop:!0,buttons:["zoom","share","slideShow","fullScreen","download","thumbs","close"],lang:"tr",i18n:{tr:{CLOSE:"Kapat",NEXT:"Sonraki",PREV:"Önceki",ERROR:"Bir hata oluştu! ",PLAY_START:"Gösteriyi Başlat",PLAY_STOP:"Gösteriyi Durdur",FULL_SCREEN:"Tam Ekran",THUMBS:"Albümü Görüntüle",DOWNLOAD:"İndir",SHARE:"Paylaş",ZOOM:"Yakınlaştır"}},slideShow:{autoStart:!1,speed:4e3}}),$(window).keydown(function(a){27===a.keyCode&&$(".header-nav-content-menu,body,.search_area").removeClass("active")}),$(document).ready(function(){header(),reklam_pos()}),$(window).scroll(function(){header(),1280<$(window).width()&&reklam_pos()}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(".mobil_menu_close,.search_area-close").click(function(){$(".header-nav-content-menu,body,.search_area").removeClass("active")}),$(".search_open").click(function(){$(".search_area,body").addClass("active")}),$(".mobil_menu_open").click(function(){$(".header-nav-content-menu,body").addClass("active")});