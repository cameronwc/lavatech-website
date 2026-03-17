// Mobile Navigation Toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const body = document.body;

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav-open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
      body.classList.toggle('nav-active', isOpen);
    });

    // Close nav when clicking a link
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('nav-active');
      });
    });
  }

  // Close nav on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('nav-active');
    }
  });

  // Pre-fill service select on contact page from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
      for (var i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value === serviceParam) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  // Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }
})();
