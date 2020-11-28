$(document).ready(function () {
  // SLICK NAV
  $(function () {
    $("#menu").slicknav();
  });
  // STICKY MENU
  $("#sticker").sticky({
    topSpacing: 1,
    zIndex: 9999,
  });
  // ONE PAGE NAV
  $(".basic_menu").onePageNav();
  // ACTIVE MENU
  // $("ul li:first-child").addClass("active");
  // $("ul > li").on("click", function () {
  //   $("ul li").removeClass("active");
  //   $(this).addClass("active");
  // });
  //  or,
  // $("ul li").click(function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  // });

  // SCROLL UP
  $(function () {
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      scrollDistance: 300, // Distance from top/bottom before showing element (px)
      scrollFrom: "top", // 'top' or 'bottom'
      scrollSpeed: 300, // Speed back to top (ms)
      easingType: "linear", // Scroll to top easing (see http://easings.net/)
      animation: "fade", // Fade, slide, none
      animationSpeed: 200, // Animation speed (ms)
      scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
      scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
      scrollText: '<i class="fas fa-arrow-to-top"></i>', // Text for element, can contain HTML
      scrollTitle: false, // Set a custom <a> title if required.
      scrollImg: false, // Set true to use image
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      zIndex: 2147483647, // Z-Index for the overlay
    });
  });
  // SLICK SLIDER
  $(".slider").slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //      PROGRESSBAR
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  // magnfic popup

  $(".video_btn").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
    },
  });

  // typejs

  const options = {
    strings: ["Designer", "Developer", "Freelancher"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
  };

  const typed = new Typed(".type", options);

  // Progress Skill
  $("#bar1").barfiller({
    barColor: "#16b597",
    tooltip: true,
    duration: 1000,
    animateOnResize: true,
    symbol: "%",
  });
  $("#bar2").barfiller({
    barColor: "#16b545",
    tooltip: true,
    duration: 1000,
    animateOnResize: true,
    symbol: "%",
  });
  $("#bar3").barfiller({
    barColor: "#16b207",
    tooltip: true,
    duration: 1000,
    animateOnResize: true,
    symbol: "%",
  });

  // rProgressbar

  $(".design").rProgressbar({
    percentage: 74,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%",
  });
  $(".development").rProgressbar({
    percentage: 82,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%",
  });
  $(".marketing").rProgressbar({
    percentage: 63,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%",
  });
  $(".product").rProgressbar({
    percentage: 85,
    fillBackgroundColor: "#ff3d4f",
    backgroundColor: "#EEEEEE",
    borderRadius: "2px",
    height: "1.5rem",
    width: "100%",
  });

  // isotope
  const $grid = $(".portfolio_active").isotope({
    itemSelector: ".grid_item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1,
    },
  });
  $(".portfolio_menu").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(".portfolio_menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  // Counting Up

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  // GOOGLE MAP
  function basicmap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(24.249981, 89.920029), // New York
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(24.249981, 89.920029),
        map: map,
        title: 'Hi'
    });
}
if ($('#contact-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
}

  // ANIMATED HEADLINE
  $('.headline_animated').animatedHeadline({
    animationType: 'push'
});

  // Testimonial Slider
  $(".tslider").slick({
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
