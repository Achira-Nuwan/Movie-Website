


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      duration: 200, // Animation duration in milliseconds
      dist: -100,    // Perspective zoom effect
      shift: 5,      // Spacing between items
      padding: 50,   // Padding between items
      numVisible: 5, // Number of items visible
      indicators: true // Show indicators (dots)
    });
  });
