window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  var typed = new Typed(".auto-type", {
    strings: [
      "Geospatial Engineer",
      "Web developer",
      "GIS developer",
    ],
    typeSpeed: 150,
    backSpeed: 50,
    loop : true,
  });