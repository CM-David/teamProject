$(document).ready(function() {
    $(".title").lettering('words');
  });
  
  $(document).ready(function() {
    animation();
  }, 1000);
  
  $('.button').click(function() {
    animation();
  });
  
  function animation() {
      var words = new TimelineMax();
    words.staggerFromTo(".title span", 0.5,
      {ease: Back.easeOut.config(3.4), rotation: "-40deg", y:-20, x:0},
      {ease: Back.easeOut.config(3.4), rotation: "0deg", y:0, x:0}, 0.05);
  
      var title = new TimelineMax();
    title.fromTo(".title", 0.6, 
      {ease: Back.easeOut.config(3.4), rotation: "40deg", y: 50, opacity: 0},
      {ease: Back.easeOut.config(3.4), rotation: "0deg", y: 0, opacity: 1});
  }