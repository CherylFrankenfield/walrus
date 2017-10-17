$ (document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".clickable-tiger").click(function(){
    $(".showing").fadeToggle();
    $(".hidden").fadeToggle();
  });

  $(".clickable-panda").click(function() {
    $("#showing-panda").slideToggle();
    $("#hidden-panda").slideToggle();
  });
});
