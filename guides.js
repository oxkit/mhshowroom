// Guide language travels with the link, including when storage is blocked.
try { localStorage.setItem('mh-language', document.documentElement.dataset.guideLanguage); } catch {}
document.querySelector('[data-video]')?.addEventListener('click', event => {
  event.preventDefault();
  const slot = document.querySelector('.guide-player');
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/eLAztzPlb1I?rel=0';
  frame.title = event.currentTarget.title;
  frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  slot.replaceChildren(frame); slot.hidden = false;
  event.currentTarget.hidden = true;
  frame.focus();
});
