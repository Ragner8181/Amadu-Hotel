// ---------- Nav scroll state ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Hero: generate tower windows ----------
const windowGrid = document.getElementById('windowGrid');
if (windowGrid) {
  const cols = 6, rows = 16;
  const startX = 135, startY = 75;
  const cellW = 25, cellH = 32;
  const winW = 14, winH = 18;
  let html = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = Math.random() > 0.42;
      const x = startX + c * cellW;
      const y = startY + r * cellH;
      const delay = (Math.random() * 6).toFixed(2);
      if (lit) {
        html += `<rect class="win" x="${x}" y="${y}" width="${winW}" height="${winH}" rx="1" style="animation-delay:${delay}s"></rect>`;
      } else {
        html += `<rect x="${x}" y="${y}" width="${winW}" height="${winH}" rx="1" fill="#0F0A1A" opacity="0.6"></rect>`;
      }
    }
  }
  windowGrid.innerHTML = html;
}

// ---------- Hero: scatter stars ----------
const starsWrap = document.getElementById('stars');
if (starsWrap) {
  let html = '';
  for (let i = 0; i < 60; i++) {
    const top = Math.random() * 55;
    const left = Math.random() * 100;
    const delay = (Math.random() * 4).toFixed(2);
    html += `<span style="top:${top}%; left:${left}%; animation-delay:${delay}s"></span>`;
  }
  starsWrap.innerHTML = html;
}

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
  '.room-card, .amenity, .note-card, .about-photo, .loc-map, .contact-form'
);
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  io.observe(el);
});

// ---------- Mock contact form ----------
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const dates = data.get('dates') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent(`Reservation enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nDates: ${dates}\n\n${message}`
    );
    window.location.href = `mailto:reservations@amaduhotel.example?subject=${subject}&body=${body}`;
  });
}
