$ (document).ready(function() {
  var animals = ["walrus", "tiger", "panda"]
    animals.forEach(function(animal) {
      $(".clickable-" + animal).click(function() {
        $("#showing-" + animal).toggle();
        $("#hidden-" + animal).toggle();

    });
  });
    //
  // $(".clickable").click(function() {
  //   $("#showing-walrus").toggle();
  //   $("#hidden-walrus").toggle();
  // });
  //
  // $(".clickable-tiger").click(function(){
  //   $("#showing-tiger").fadeToggle();
  //   $("#hidden-tiger").fadeToggle();
  // });
  //
  // $(".clickable-panda").click(function() {
  //   $("#showing-panda").slideToggle();
  //   $("#hidden-panda").slideToggle();
  // });
});
