// effects.js

(function () {
  // wait DOM
  const onReady = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  onReady(() => {
    const html = document.documentElement;
    const NAV = document.querySelector('.navbar');

    /* ---------------- Theme logic ---------------- */
    const THEME_KEY = 'og_theme_pref';

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem(THEME_KEY); // 'dark' | 'light' | null

    const apply = (t) => {
      if (t === 'dark') html.setAttribute('data-theme', 'dark');
      else html.removeAttribute('data-theme');
    };

    apply(stored || (prefersDark ? 'dark' : 'light'));

    /* create or reuse toggle button */
    let btn = document.querySelector('.theme-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.setAttribute('aria-label', 'Alternar tema claro/oscuro');
      document.body.appendChild(btn);
    }

    const updateBtnIcon = () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      btn.textContent = isDark ? '☀' : '🌙';
    };
    updateBtnIcon();

    btn.addEventListener('click', () => {
      const cur = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      // small transition helper
      html.classList.add('theme-transition');
      apply(next === 'dark' ? 'dark' : 'light');
      localStorage.setItem(THEME_KEY, next);
      updateBtnIcon();
      setTimeout(() => html.classList.remove('theme-transition'), 500);
    });

    /* ---------------- Scroll reveal (fade-up) ---------------- */
    const revealElements = document.querySelectorAll('.fade-up');
    if (revealElements.length) {
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      revealElements.forEach(el => obs.observe(el));
    }

    /* ---------------- Navbar scrolled class ---------------- */
    const onScroll = () => {
      if (!NAV) return;
      const y = window.scrollY || window.pageYOffset;
      if (y > 24) NAV.classList.add('scrolled');
      else NAV.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------------- Optional: smooth anchor offset fix ----------------
       If you use anchors from navbar like <a href="#about">, this ensures
       the target isn't hidden beneath the fixed navbar.
    */
    document.querySelectorAll('.navbar a[href^="#"]').forEach(a => {
      a.addEventListener('click', (ev) => {
        ev.preventDefault();
        const targetId = a.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;
        const navHeight = NAV ? NAV.offsetHeight : 64;
        const rectTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: rectTop - navHeight - 12, behavior: 'smooth' });
      });
    });

  });
})();
