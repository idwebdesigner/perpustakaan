//LOADER
jQuery(window).on("load", function () {
   jQuery(".loader").fadeOut(800);

});

function resizebanner() {
   $(".demo-banner").css("height", $(window).height());
}
resizebanner();
$(window).resize(resizebanner);


$(".scroll").on('click', function (event) {
   event.preventDefault();
   $('html,body').animate({
      scrollTop: $(this.hash).offset().top
   }, 1000);
});

if ($(window).width() > 768) {
   $(".parallaxie").parallaxie({
      speed: 0.55,
      offset: 0,
   });
}


$(".same_height").matchHeight({
   property: "height",
});


//Wow Initializing
new WOW().init();
