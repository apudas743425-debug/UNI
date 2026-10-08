$(document).ready(function () {
  $("#navbar-toggle").click(function () {
    $("#mobile-navbar").toggleClass("hidden");
    $("#navbar-slide").toggleClass("-translate-x-full");
    $("#navbar-slide").toggleClass("translate-x-0");
  });

  $("#mobile-navbar").click(function (e) {
    if ($(e.target).is("#mobile-navbar")) {
      $("#mobile-navbar").addClass("hidden");
      $("#navbar-slide")
        .removeClass("translate-x-0")
        .addClass("-translate-x-full");
    }
  });
});