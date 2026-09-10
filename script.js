const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('menuOpen');
const closeBtn = document.getElementById('menuClose');

function openMenu() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
}
function closeMenu() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}

openBtn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 820) closeMenu();
  });
});

// Copy buttons for code blocks
for (const pre of document.querySelectorAll('pre')) {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.type = 'button';
  btn.textContent = 'Copiar';
  btn.addEventListener('click', async () => {
    const code = pre.querySelector('code')?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(code);
      btn.textContent = 'Copiado';
      setTimeout(() => btn.textContent = 'Copiar', 1200);
    } catch {
      btn.textContent = 'Erro';
      setTimeout(() => btn.textContent = 'Copiar', 1200);
    }
  });
  pre.appendChild(btn);
}

// Active navigation item based on scroll position
const sections = [...document.querySelectorAll('.doc-section')];
const navLinks = [...document.querySelectorAll('.nav a')];
const linkById = new Map(navLinks.map(a => [a.getAttribute('href').slice(1), a]));

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(a => a.classList.remove('active'));
  linkById.get(visible.target.id)?.classList.add('active');
}, { rootMargin: '-18% 0px -68% 0px', threshold: [0.01, 0.25, 0.5] });

sections.forEach(section => observer.observe(section));
