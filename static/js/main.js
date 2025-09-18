document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = mainNav.querySelector('.nav-links');

  function closeMenu(){
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded','false');
  }
  function openMenu(){
    navLinks.classList.add('open');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded','true');
  }

  navToggle.addEventListener('click', function(e){
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if(expanded) closeMenu(); else openMenu();
  });

  // Close when clicking outside the nav panel
  document.addEventListener('click', function(e){
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeMenu();
  });
});
