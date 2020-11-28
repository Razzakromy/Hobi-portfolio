"use strict";

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    arrows: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  }); //      PROGRESSBAR

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = winScroll / height * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  } // magnfic popup


  $(".video_btn").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true
    }
  }); // typejs

  var options = {
    strings: ["Designer", "Developer", "Freelancher"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  };
  var typed = new Typed(".type", options); // Progress Skill

  $("#bar1").barfiller({
    barColor: "#16b597",
    tooltip: true,
    duration: 1000,
    animateOnResize: true,
    symbol: "%"
  });
  $("#bar2").barfiller({
    barColor: "#16b545",
    tooltip: true,
    duration: 1000,
    animateOnResize: true,
    symbol: "%"
  });
  $("#bar3").barfiller({
    barColor: "#16b207",
    tooltip: true,
    duration: 1000,
    animateOnResize: true,
    symbol: "%"
  }); // rProgressbar

  $(".design").rProgressbar({
    percentage: 74,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%"
  });
  $(".development").rProgressbar({
    percentage: 82,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%"
  });
  $(".marketing").rProgressbar({
    percentage: 63,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%"
  });
  $(".product").rProgressbar({
    percentage: 85,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%"
  }); // isotope

  var grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".grid-sizer"
    }
  });
  $(".portfolio-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});