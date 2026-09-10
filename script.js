const links = [...document.querySelectorAll('.menu a')];
const secoes = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function marcarMenu() {
  let atual = secoes[0]?.id;
  for (const secao of secoes) {
    if (secao.getBoundingClientRect().top <= 120) atual = secao.id;
  }
  links.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === `#${atual}`));
}

document.addEventListener('scroll', marcarMenu, { passive: true });
marcarMenu();
