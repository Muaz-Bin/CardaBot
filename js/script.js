(function ($) {
  "use strict";

  // $("html").smoothScroll();

  var copyContainer = $(".copyInput button");

  copyContainer.click(function () {
    var $temp = $("<input>");
    $("body").append($temp);
    console.log($(this).siblings().text());
    $temp.val($(this).siblings().text()).select();
    document.execCommand("copy");
    $temp.remove();
    window.alert("Link Copied!");
  });

  $(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
    var stickyMenu = $(".sticky-menu");
    if ($scrolling >= 400) {
      stickyMenu.addClass("sticky");
    } else {
      stickyMenu.removeClass("sticky");
    }
    if ($scrolling > 300) {
      $("#scrollToTop").fadeIn(1000);
    } else {
      $("#scrollToTop").fadeOut(500);
    }
  });

  $("#scrollToTop").on("click", function (e) {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      1400
    );
    e.preventDefault();
  });

  //initialize AOS js
  AOS.init();
})(jQuery);
