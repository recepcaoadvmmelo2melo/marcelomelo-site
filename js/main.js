(function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if(menuToggle && menu){
    menuToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, {threshold:.14});
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll('.js-whatsapp').forEach(link => {
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({event:'whatsapp_click', page:'divorcio'});
    });
  });

  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({event:'form_submit', page:'divorcio'});
    });
  }

  const cookie = document.querySelector('.cookie-banner');
  const accept = document.querySelector('.cookie-accept');
  if(localStorage.getItem('mm_cookie_ok') === '1' && cookie){ cookie.classList.add('hide'); }
  if(accept && cookie){ accept.addEventListener('click', () => { localStorage.setItem('mm_cookie_ok','1'); cookie.classList.add('hide'); }); }
})();
