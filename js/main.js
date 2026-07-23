document.documentElement.classList.add('js');

const SPEEDS = {
  '.line-greeting': 90,
  '.line-script': 90,
  '.line-cta': 35
};

const PAUSE_BETWEEN = 400;

function typeInto(el, speed) {
  return new Promise(resolve => {
    const full = el.dataset.text;
    let i = 0;

    el.textContent = '';
    el.classList.add('is-typing');

    const tick = () => {
      el.textContent = full.slice(0, i);
      i++;
      if (i <= full.length) {
        setTimeout(tick, speed);
      } else {
        el.classList.remove('is-typing');
        el.classList.add('is-done');
        setTimeout(resolve, PAUSE_BETWEEN);
      }
    };

    tick();
  });
}

async function run() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const targets = Object.keys(SPEEDS)
    .map(sel => ({ el: document.querySelector(sel), speed: SPEEDS[sel] }))
    .filter(t => t.el);

  // Stash the original text so we can retype it
  targets.forEach(({ el }) => {
    el.dataset.text = el.textContent.trim();
  });

  if (reduced) return;

  for (const { el, speed } of targets) {
    await typeInto(el, speed);
  }
}

document.addEventListener('DOMContentLoaded', run);