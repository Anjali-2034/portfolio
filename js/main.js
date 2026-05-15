import Lenis from 'lenis';
import { projects, about } from './data.js';

// ── Lenis smooth scroll ──────────────────────────────────────────────────────
const lenis = new Lenis({
  lerp: 0.072,
  smoothWheel: true,
  wheelMultiplier: 0.82,
});
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { duration: 1.55, easing: t => 1 - Math.pow(1 - t, 5) });
  });
});

// ── Scroll progress + nav + hero parallax ────────────────────────────────────
const progressBar = document.querySelector('.scroll-progress');
const nav         = document.getElementById('nav');
const navLinks    = document.querySelectorAll('.nav-links a');
const sectionIds  = ['work', 'contact'];

lenis.on('scroll', ({ scroll }) => {
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = `${Math.min((scroll / docH) * 100, 100)}%`;

  nav.classList.toggle('scrolled', scroll > 55);

  let active = '';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && scroll >= el.offsetTop - 180) active = id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${active}`);
  });

  // Hero parallax — scroll contribution
  if (heroParallaxReady && scroll < window.innerHeight * 1.2) {
    heroSY = scroll * 0.12;
    applyHeroParallax();
  }

  // Film horizontal scroll
  tickFilm(scroll);
});

// ── Triple-layer cursor: dot · ring · ambient glow ───────────────────────────
const dot   = document.querySelector('.cursor-dot');
const ring  = document.querySelector('.cursor-ring');
const glow  = document.querySelector('.cursor-glow');
const label = document.getElementById('cursor-label');

let tx = 0, ty = 0;
let rx = 0, ry = 0;
let gx = 0, gy = 0;
let heroParallaxReady = false;

let heroMX = 0, heroMY = 0;
let heroSY = 0;

function applyHeroParallax() {
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.style.transform = `translate(${heroMX}px, ${heroMY + heroSY}px)`;
}

document.addEventListener('mousemove', e => {
  tx = e.clientX; ty = e.clientY;

  if (heroParallaxReady) {
    heroMX = (e.clientX / window.innerWidth  - 0.5) * 16;
    heroMY = (e.clientY / window.innerHeight - 0.5) * 10;
    applyHeroParallax();
  }
});
document.addEventListener('mousedown', () => ring?.classList.add('clicking'));
document.addEventListener('mouseup',   () => ring?.classList.remove('clicking'));

(function cursorLoop() {
  rx += (tx - rx) * 0.115;
  ry += (ty - ry) * 0.115;
  gx += (tx - gx) * 0.055;
  gy += (ty - gy) * 0.055;

  if (dot)  { dot.style.left  = `${tx}px`; dot.style.top  = `${ty}px`; }
  if (ring) { ring.style.left = `${rx}px`; ring.style.top = `${ry}px`; }
  if (glow) { glow.style.left = `${gx}px`; glow.style.top = `${gy}px`; }
  if (label) { label.style.left = `${tx}px`; label.style.top = `${ty}px`; }

  requestAnimationFrame(cursorLoop);
})();

function addCursorHover(el) {
  el.addEventListener('mouseenter', () => ring?.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring?.classList.remove('hovered'));
}
document.querySelectorAll('[data-magnetic], a, button').forEach(addCursorHover);

// ── Context-aware cursor label ────────────────────────────────────────────────


// ── Magnetic pull ─────────────────────────────────────────────────────────────
function setupMagnetic(el) {
  el.addEventListener('mousemove', e => {
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) * 0.28;
    const dy = (e.clientY - (r.top  + r.height / 2)) * 0.28;
    el.style.transform  = `translate(${dx}px, ${dy}px)`;
    el.style.transition = 'transform 0.18s ease-out';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform  = '';
    el.style.transition = 'transform 0.55s var(--ease-out)';
    el.addEventListener('transitionend', () => { el.style.transition = ''; }, { once: true });
  });
}
document.querySelectorAll('[data-magnetic]').forEach(setupMagnetic);

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.10, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ── Hero name: character-by-character staggered reveal ───────────────────────
function splitHeroName() {
  const el = document.querySelector('.hero-name');
  if (!el) return;

  const name = about.name;
  el.style.animation = 'none'; // cancel the CSS fade-up, use char animation instead
  el.innerHTML = '';
  el.setAttribute('aria-label', name);

  [...name].forEach((ch, i) => {
    const span = document.createElement('span');
    if (ch === ' ') {
      span.className = 'char space';
    } else if (i === 2) {
      span.className = 'char char--italic'; // "j" in Anjali
    } else {
      span.className = 'char';
    }
    if (ch !== ' ') span.textContent = ch;
    span.style.transitionDelay = `${0.32 + i * 0.042}s`;
    el.appendChild(span);
  });

  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      el.querySelectorAll('.char').forEach(c => c.classList.add('visible'));
      setTimeout(() => { heroParallaxReady = true; }, 900);
    })
  );
}

// ── Hero subtitle: wipe-up reveal ────────────────────────────────────────────
function revealHeroSub() {
  const sub = document.getElementById('hero-sub');
  if (!sub) return;
  setTimeout(() => sub.classList.add('revealed'), 960);
}

// ── Hero CTA cleanup ─────────────────────────────────────────────────────────
function heroCtaCleanup() {
  const cta = document.querySelector('.hero-cta');
  if (!cta) return;
  cta.addEventListener('animationend', () => {
    cta.style.opacity   = '1';
    cta.style.transform = 'none';
    cta.style.animation = 'none';
  }, { once: true });
}

// ── Stats counter ─────────────────────────────────────────────────────────────
function animateCount(el, target, suffix, duration = 1300) {
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const count  = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (!isNaN(count)) animateCount(el, count, suffix);
    countIO.unobserve(el);
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

// ── Film: horizontal scroll ───────────────────────────────────────────────────
const filmTrack   = document.getElementById('film-track');
const filmWrapper = document.querySelector('.film-wrapper');
const filmCounter = document.getElementById('film-counter');
const filmDotsEl  = document.getElementById('film-dots');

let filmPanels    = [];
let filmDots      = [];
let filmPanelCount = 0;
function setFilmHeight() {
  if (!filmWrapper || !filmPanelCount) return;
  const h = (filmPanelCount - 1) * 0.65 * window.innerHeight + window.innerHeight;
  filmWrapper.style.height = `${h}px`;
}

function tickFilm(scroll) {
  if (!filmWrapper || !filmPanelCount) return;
  const wrapTop  = filmWrapper.offsetTop;
  const wrapH    = filmWrapper.offsetHeight;
  const scrollable = wrapH - window.innerHeight;
  const raw = scroll - wrapTop;
  const progress = Math.max(0, Math.min(1, raw / scrollable));
  const translateX = -(filmPanelCount - 1) * window.innerWidth * progress;

  if (filmTrack) filmTrack.style.transform = `translateX(${translateX}px)`;

  const activeIdx = Math.round(progress * (filmPanelCount - 1));
  if (filmCounter) {
    filmCounter.textContent = `${String(activeIdx + 1).padStart(2,'0')} / ${String(filmPanelCount).padStart(2,'0')}`;
  }
  filmDots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));

  filmPanels.forEach((p, i) => {
    p.classList.toggle('panel--active', i === activeIdx);
    p.classList.toggle('panel--prev',   i === activeIdx - 1);
    p.classList.toggle('panel--next',   i === activeIdx + 1);
  });
}

// ── Project modal ─────────────────────────────────────────────────────────────
const modalEl        = document.getElementById('project-modal');
const modalBackdrop  = document.getElementById('modal-backdrop');
const modalClose     = document.getElementById('modal-close');
const modalDecoNum   = document.getElementById('modal-deco-num');
const modalPnum      = document.getElementById('modal-pnum');
const modalTitle     = document.getElementById('modal-title');
const modalContribs  = document.getElementById('modal-contributions');
const modalImpact    = document.getElementById('modal-impact');
const modalTagsEl    = document.getElementById('modal-tags');
const modalLink      = document.getElementById('modal-link');
const modalImages    = document.getElementById('modal-images');

function openModal(proj) {
  if (!modalEl) return;

  const num = String(proj.id).padStart(2, '0');
  if (modalDecoNum)  modalDecoNum.textContent  = num;
  if (modalPnum)     modalPnum.textContent      = num;
  if (modalTitle)    modalTitle.textContent     = proj.title;

  if (modalContribs) {
    modalContribs.innerHTML = '';
    (proj.details?.contributions ?? []).forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      modalContribs.appendChild(li);
    });
  }

  if (modalImpact) {
    modalImpact.innerHTML = '';
    (proj.details?.impact ?? []).forEach(imp => {
      const li = document.createElement('li');
      li.textContent = imp;
      modalImpact.appendChild(li);
    });
  }

  if (modalTagsEl) {
    modalTagsEl.innerHTML = (proj.tags ?? [])
      .map(t => `<span class="modal-tag">${t}</span>`)
      .join('');
  }

  if (modalImages) {
    modalImages.innerHTML = '';
    const imgs = proj.details?.images ?? [];
    if (imgs.length) {
      modalImages.classList.add('has-images');
      imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = proj.title + ' screenshot';
        img.className = 'modal-img';
        img.loading = 'lazy';
        modalImages.appendChild(img);
      });
    } else {
      modalImages.classList.remove('has-images');
    }
  }

  if (modalLink) {
    if (proj.link && proj.link !== '#') {
      modalLink.href = proj.link;
      modalLink.classList.remove('hidden');
    } else {
      modalLink.classList.add('hidden');
    }
  }

  modalEl.setAttribute('aria-hidden', 'false');
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
  lenis.stop();

  setTimeout(() => modalClose?.focus(), 60);
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lenis.start();
}

if (modalClose)   modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalEl?.classList.contains('active')) {
    closeModal();
  }
});

function buildFilm() {
  if (!filmTrack) return;

  filmPanelCount = projects.length;

  projects.forEach((proj) => {
    const panel = document.createElement('article');
    panel.className = 'film-panel';
    panel.setAttribute('aria-label', proj.title);
    panel.style.cursor = 'none';

    panel.innerHTML = `
      <div class="film-left">
        <div class="film-pnum">${String(proj.id).padStart(2,'0')}</div>
        <h3 class="film-title">${proj.title}</h3>
        <p class="film-card-overview">${proj.details?.overview ?? ''}</p>
        <button class="film-explore-btn" aria-label="Explore ${proj.title}">Explore <span aria-hidden="true">→</span></button>
      </div>
    `;

    // Both panel click and explore button open the modal
    panel.addEventListener('click', () => openModal(proj));
    addCursorHover(panel);

    filmTrack.appendChild(panel);
    filmPanels.push(panel);
  });

  // Build dots
  if (filmDotsEl) {
    projects.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'film-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Jump to project ${i + 1}`);
      d.addEventListener('click', () => {
        const wrapTop  = filmWrapper.offsetTop;
        const wrapH    = filmWrapper.offsetHeight;
        const scrollable = wrapH - window.innerHeight;
        const target = wrapTop + (i / (filmPanelCount - 1)) * scrollable;
        lenis.scrollTo(target, { duration: 1.2, easing: t => 1 - Math.pow(1 - t, 4) });
      });
      filmDotsEl.appendChild(d);
      filmDots.push(d);
    });
  }

  setFilmHeight();
  window.addEventListener('resize', setFilmHeight);
  filmCounter.textContent = `01 / ${String(filmPanelCount).padStart(2,'0')}`;
}

// ── View-mode switcher ────────────────────────────────────────────────────────
function buildViewToggle() {
  const btns = document.querySelectorAll('.vt-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      document.body.classList.remove('view--manager', 'view--engineer', 'view--designer');
      document.body.classList.add(`view--${view}`);
    });
  });
}



// ── Keyboard shortcuts overlay ────────────────────────────────────────────────
function setupKeyboard() {
  const overlay = document.getElementById('kbd-overlay');
  let gMode = false;

  function openOverlay()  { overlay?.classList.add('active'); overlay?.setAttribute('aria-hidden','false'); }
  function closeOverlay() { overlay?.classList.remove('active'); overlay?.setAttribute('aria-hidden','true'); }

  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;

    if (e.key === '?') {
      overlay?.classList.contains('active') ? closeOverlay() : openOverlay();
      gMode = false;
      return;
    }
    if (e.key === 'Escape') { closeOverlay(); gMode = false; return; }

    if (e.key === 'g' || e.key === 'G') {
      if (gMode) { gMode = false; launchConfetti(); return; }
      gMode = true; return;
    }

    if (gMode) {
      gMode = false;
      const map = { w: 'work', W: 'work', c: 'contact', C: 'contact' };
      const id  = map[e.key];
      if (id) {
        const el = document.getElementById(id);
        if (el) lenis.scrollTo(el, { duration: 1.4, easing: t => 1 - Math.pow(1 - t, 5) });
      }
    }
  });

  // Close on backdrop click
  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay();
  });
}

// ── Toast on footer enter ─────────────────────────────────────────────────────
function setupToast() {
  const toast  = document.getElementById('toast');
  const footer = document.querySelector('footer');
  if (!toast || !footer) return;

  let shown = false;
  const toastIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !shown) {
        shown = true;
        setTimeout(() => {
          toast.classList.add('visible');
          setTimeout(() => toast.classList.remove('visible'), 3800);
        }, 300);
      }
    });
  }, { threshold: 0.5 });

  toastIO.observe(footer);
}


// ── Confetti easter egg (press G twice) ───────────────────────────────────────
function launchConfetti() {
  const colors = ['#B7A7E8', '#6B5BD2', '#E8C96A', '#EDE7FF', '#9ADCBE'];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  for (let i = 0; i < 48; i++) {
    const dot = document.createElement('div');
    dot.className = 'confetti-dot';
    const size = 4 + Math.random() * 7;
    const dur  = 1.4 + Math.random() * 1.4;
    dot.style.cssText = [
      `width:${size}px`, `height:${size}px`,
      `background:${colors[i % colors.length]}`,
      `left:${15 + Math.random() * 70}vw`,
      `top:-12px`,
      `animation:confetti-fall ${dur}s ease-in forwards`,
      `animation-delay:${Math.random() * .4}s`,
    ].join(';');
    document.body.appendChild(dot);
    dot.addEventListener('animationend', () => dot.remove(), { once: true });
  }
}

// ── Boot ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildFilm();
  buildViewToggle();

  splitHeroName();
  revealHeroSub();
  heroCtaCleanup();

  setupKeyboard();
  setupToast();

  // Back-to-top
  document.getElementById('footer-top')?.addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 1.4, easing: t => 1 - Math.pow(1 - t, 5) });
  });

  // Page-load cascade
  requestAnimationFrame(() => {
    setTimeout(() => document.body.classList.add('loaded'), 120);
  });
});
