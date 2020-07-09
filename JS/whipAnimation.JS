

jQuery(document).ready(function ($) {
  $(window).load(function () {
      setTimeout(function(){
          $('#preloader').fadeOut('slow', function () {
          });
      },2000); // set the time here
  });  
});