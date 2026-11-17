(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Navbar: solid background after scroll + Back to Top button
  const navbar = $('#navbar'), toTop = $('#toTop');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', scrollY > 30);
    toTop.classList.toggle('show', scrollY > 500);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  // Mobile menu
  const menuBtn = $('#menuBtn'), links = $('#navLinks');
  const setMenu = open => {
    links.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}"></i>`;
  };
  menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));

  // Highlight the active menu item
  const sections = $$('main section[id]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('a', links).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  // Reveal on scroll + animate skill bars
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      const bar = $('.bar span', e.target);
      if (bar) bar.style.width = bar.dataset.level + '%';
      reveal.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  $$('.reveal').forEach(el => reveal.observe(el));

  // Certificate lightbox
  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap');
  const closeLb = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); };
  $$('.cert').forEach(btn => btn.addEventListener('click', () => {
    lbImg.src = btn.dataset.full; lbImg.alt = btn.dataset.caption; lbCap.textContent = btn.dataset.caption;
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); $('#lbClose').focus();
  }));
  $('#lbClose').addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

  $('#year').textContent = new Date().getFullYear();
})();
