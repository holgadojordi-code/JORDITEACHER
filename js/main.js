// ===== DROPDOWN NAVIGATION =====
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const targetId = btn.dataset.target;
    const drop = document.getElementById(targetId);
    const isOpen = drop.classList.contains('open');

    // Close all dropdowns
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));

    if (!isOpen) {
      drop.classList.add('open');
      btn.classList.add('open');
    }
    e.stopPropagation();
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));
});

// Close dropdown on link click
document.querySelectorAll('.dropdown a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('open'));
    document.getElementById('mainNav').classList.remove('open');
  });
});

// ===== BURGER MENU =====
document.getElementById('burger').addEventListener('click', e => {
  document.getElementById('mainNav').classList.toggle('open');
  e.stopPropagation();
});

// ===== SIDEBAR ACTIVE LINK ON SCROLL =====
const temes = document.querySelectorAll('article[id]');
const sideLinks = document.querySelectorAll('.sidebar a[href^="#"]');

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sideLinks.forEach(l => {
        l.style.background = '';
        l.style.color = '';
        l.style.fontWeight = '';
      });
      const active = document.querySelector(`.sidebar a[href="#${entry.target.id}"]`);
      if (active) {
        active.style.background = '#dbeafe';
        active.style.color = '#1a4f8a';
        active.style.fontWeight = '700';
      }
    }
  });
}, { rootMargin: '-20% 0px -75% 0px' });

temes.forEach(t => io.observe(t));
