window.addEventListener('scroll', function() {
    var tags = document.querySelectorAll('.animated');
  
    tags.forEach(function(tag) {
      var tagTop = tag.getBoundingClientRect().top;
      var tagBottom = tag.getBoundingClientRect().bottom;
      var screenHeight = window.innerHeight;
  
      if (tagTop < screenHeight && tagBottom >= 0) {
        tag.style.opacity = 1;
        tag.style.transform = 'translateY(0)';
      } else {
        tag.style.opacity = 0;
        tag.style.transform = 'translateY(50px)';
      }
    });
  });
  window.addEventListener('DOMContentLoaded', function() {
    var tags = document.querySelectorAll('.animated-onload');
  
    tags.forEach(function(tag) {
      var tagTop = tag.getBoundingClientRect().top;
      var tagBottom = tag.getBoundingClientRect().bottom;
      var screenHeight = window.innerHeight;
  
      if (tagTop < screenHeight && tagBottom >= 0) {
        tag.style.opacity = 1;
        tag.style.transform = 'translateY(0)';
      } else {
        tag.style.opacity = 0;
        tag.style.transform = 'translateY(50px)';
      }
    });
  });