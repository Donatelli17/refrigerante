document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
  
        var colorClass = this.classList[1];
        
        document.body.style.backgroundColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--' + colorClass);
      });
    });
  });

  