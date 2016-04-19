$(document).ready(function() {
  $("img").on("mouseenter", function() {
    $("body").css({"background-color": "#21ADC7"})
  });

  $("img").on("mouseleave", function() {
    $("body").css({"background-color": "black"})
  });

  $(".button").on("mouseenter", function() {
    $(this).attr("src", "purplestar.png")
  });

  $(".button").on("mouseleave", function() {
    $(this).attr("src", "whitestar.png")
  })
});
