$(function() {
  $("#dog").click(function() {
    $("ul#bark").append("<li>Woof woof!!!</li>");
    $("ul#meow").append("<li>meeeeowwwwww!!!!</li>");
    $("ul#bark").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#meow").children("li").last().click(function() {
      $(this).remove();
    });
  });
  $("#cat").click(function() {
    $("ul#meow").append("<li>Meow...</li>");
    $("ul#bark").append("<li>Woof Woof Woof!!!! Woof Woof!!!</li>");
    $("ul#meow").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#bark").children("li").last().click(function() {
      $(this).remove();
    });
  });
  $("#bgColor").click(function() {
    $("body").toggleClass("backgroundColor");
  });
  $("#image").click(function() {
    $("#image").before('<img id="pic" src="img/catdog.jpg">');
    $("#pic").children("img").first().click(function() {
      $(this).remove();
    });
  });
});
