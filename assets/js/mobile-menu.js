/* Mobile menu open/close behavior */
(function(){
  var hamburger = document.getElementById('mobile-hamburger');
  var menu = document.getElementById('mobile-menu');
  var overlay = document.getElementById('mobile-menu-overlay');
  var closeBtn = document.getElementById('mobile-menu-close');

  function openMenu(){
    if(!menu) return;
    menu.classList.add('open');
    overlay.classList.add('open');
    if(hamburger) hamburger.setAttribute('aria-expanded','true');
    menu.setAttribute('aria-hidden','false');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu(){
    if(!menu) return;
    menu.classList.remove('open');
    overlay.classList.remove('open');
    if(hamburger) hamburger.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-hidden','true');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  if(hamburger){ hamburger.addEventListener('click', openMenu); }
  if(closeBtn){ closeBtn.addEventListener('click', closeMenu); }
  if(overlay){ overlay.addEventListener('click', closeMenu); }
  // close on escape
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
})();
