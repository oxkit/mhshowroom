// Google Analytics 4: the same property as mattresshub.co (Shopify Google & YouTube app,
// ordinarykind@gmail.com, G-7665ZR8LK8), so a visit can be followed from showroom to store.
// It loads only on the live showroom and never for automated browsers, so tests and previews
// send nothing. window.mhTrack(name, params) always dispatches an 'mh:track' event, which the
// tests listen to; on the live site it also sends the event to GA4.
(() => {
  const id = 'G-7665ZR8LK8';
  const live = location.hostname === 'showroom.mattresshub.co' && !navigator.webdriver;
  if (live) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id, { linker: { domains: ['mattresshub.co', 'showroom.mattresshub.co'] }, showroom_language: window.showroomLanguage });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(tag);
  }
  window.mhTrack = (name, params = {}) => {
    params = { ...params, language: window.showroomLanguage || 'en' };
    window.dispatchEvent(new CustomEvent('mh:track', { detail: { name, params } }));
    if (live) window.gtag('event', name, params);
  };
  const productSlug = () => (location.pathname.match(/\/products\/([^/]+)/) || [])[1];
  // Taps that matter, found by the elements' own classes, so the components stay unchanged.
  document.addEventListener('click', e => {
    const el = e.target.closest('a, button');
    if (!el) return;
    const tiles = ['help_me_choose', 'build_your_bed', 'soho', 'room_tour'];
    if (el.matches('.ways-to-shop .shop-tile')) return window.mhTrack('ways_to_shop', { tile: tiles[[...document.querySelectorAll('.ways-to-shop .shop-tile')].indexOf(el)] });
    const href = el.getAttribute('href') || '';
    const source = el.closest('.sticky-buy') ? 'phone_bar' : el.closest('.package-options') ? 'package' : el.closest('.selection') ? 'product' : 'other';
    if (/^https:\/\/mattresshub\.co\/cart\?showroom=1/.test(href)) return window.mhTrack('buy_direct', { source, product: productSlug(), package: (href.match(/[?&]ref=([^&]+)/) || [])[1] });
    if (href.startsWith('https://wa.me/')) return window.mhTrack('whatsapp', { source, product: productSlug() });
    if (el.matches('.finder-launch')) return window.mhTrack('finder_open', { place: el.closest('.finder-prompt') ? 'product_page' : 'catalogue' });
    if (el.matches('[slot="ar-button"]')) return window.mhTrack('ar_view', { product: productSlug() });
  }, true);
  // Codex's budget planner already announces its steps.
  window.addEventListener('mh:value-room', e => window.mhTrack('budget_planner', { action: e.detail.action, mode: e.detail.mode, size: e.detail.size }));
})();
