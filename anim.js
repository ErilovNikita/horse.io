$(document).ready(function(){

  $(".trigger-open").on("click", function(){

    $(".nav-bar").stop().animate({
      left : "0",
      opacity: "1"
    }, 500);

  });

  $(".trigger-close").on("click", function(){

    $(".nav-bar").stop().animate({
      left: "-400px",
      opacity: "0"
    }, 500)
  })

});
