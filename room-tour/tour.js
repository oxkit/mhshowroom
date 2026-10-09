/* Explore the Room. Reuses the showroom's product data, photograph renderer and
   calibrated bed assembly. Concept and first build: Codex, room-tour-prototype. */
(() => {
  // The tour's own words, in the showroom's three languages. Kept here rather than in
  // i18n.js so its short labels (Room, Sleep) never translate showroom text by fragment.
  const words = `
A little room to imagine|一点想象的空间|Ruang kecil untuk berimaginasi
The Quiet Room|静谧之屋|Bilik Tenang
A place to lounge.|一处休憩之地。|Tempat untuk bersantai.
A place to land.|一处安歇之所。|Tempat untuk berehat.
Interactive room tour|互动房间导览|Lawatan bilik interaktif
Room scene. Use left and right arrow keys to change viewpoint.|房间场景。使用左右方向键切换视角。|Pemandangan bilik. Gunakan kekunci anak panah kiri dan kanan untuk menukar sudut pandangan.
Explore Cove sofa|探索 Cove 沙发|Terokai sofa Cove
Explore Haven bed frame|探索 Haven 床架|Terokai rangka katil Haven
Explore Cloud mattress|探索 Cloud 床垫|Terokai tilam Cloud
Room overview|房间全景|Gambaran keseluruhan bilik
Reset to room overview|返回房间全景|Kembali ke gambaran keseluruhan bilik
Whole room|整个房间|Seluruh bilik
Photographic room concept · 2.5D|摄影房间概念 · 2.5D|Konsep bilik fotografi · 2.5D
Room viewpoints|房间视角|Sudut pandangan bilik
Room|房间|Bilik
Lounge|客厅|Ruang rehat
Sleep|卧室|Tidur
Closer|细节|Lebih dekat
Play tour|播放导览|Main lawatan
Pause tour|暂停导览|Jeda lawatan
About this viewpoint|关于此视角|Tentang sudut pandangan ini
00 / Welcome home|00 / 欢迎回家|00 / Selamat pulang
01 / The lounge|01 / 客厅|01 / Ruang rehat
02 / The sleep space|02 / 睡眠空间|02 / Ruang tidur
03 / A little closer|03 / 再靠近一点|03 / Lebih dekat lagi
A slower pace.<br>A softer place.|慢一点的节奏。<br>软一点的角落。|Rentak lebih perlahan.<br>Ruang lebih lembut.
Stay a little<br>longer.|不妨<br>多待一会儿。|Duduklah<br>lebih lama.
End the day<br>right here.|在这里<br>结束一天。|Akhiri hari<br>di sini.
Comfort is in<br>the details.|舒适，<br>藏在细节里。|Keselesaan ada<br>pada perinciannya.
Bring three everyday pieces together. Move through the room, then explore what makes each one yours.|把三件日常家具放在一起。在房间里走一走，再看看每一件如何成为你的选择。|Satukan tiga perabot harian. Terokai bilik ini, kemudian lihat apa yang menjadikan setiap satunya milik anda.
Cove’s tufted back, slim arms and spring-supported seat make this the spot to pause between everything else.|Cove 的拉扣靠背、纤细扶手和弹簧支撑坐垫，让这里成为忙碌间隙的歇脚处。|Sandaran berbutang, lengan nipis dan tempat duduk berspring Cove menjadikannya tempat untuk berhenti seketika.
The clean lines of Haven meet the softer feel of Cloud. Explore the frame and mattress as one bed set, in your size and fabric.|Haven 的简洁线条，配上 Cloud 的柔软触感。按你的尺寸和面料，把床架和床垫作为一套来探索。|Garis kemas Haven bertemu rasa lembut Cloud. Terokai rangka dan tilam sebagai satu set katil, mengikut saiz dan fabrik anda.
Cloud’s 13-inch profile sits above Haven’s upholstered divan. The original product imagery keeps the SonoFlex finish in view.|Cloud 的 13 英寸厚度落在 Haven 的软包底座上。原始产品图像保留了 SonoFlex 的外观细节。|Profil 13 inci Cloud terletak di atas divan berupholsteri Haven. Imej produk asal mengekalkan kemasan SonoFlex.
Build this room|打造这个房间|Bina bilik ini
Explore Cove|探索 Cove|Terokai Cove
Build this bed|组合这张床|Bina katil ini
Explore Cloud layers|探索 Cloud 的结构层|Terokai lapisan Cloud
Sofa · Cream reference|沙发 · 奶油色参考|Sofa · Rujukan krim
Bed frame · Queen|床架 · Queen|Rangka katil · Queen
Mattress · Queen|床垫 · Queen|Tilam · Queen
Width|宽度|Lebar
Depth|深度|Kedalaman
Height|高度|Ketinggian
Shown together|一同展示|Ditunjukkan bersama
Bed size|床尺寸|Saiz katil
Headboard, floor to top|床头板，地面至顶部|Kepala katil, lantai ke atas
Mattress profile|床垫厚度|Ketebalan tilam
Divan base|底座|Tapak divan
Cloud firmness|Cloud 软硬度|Kekerasan Cloud
Confirm colour with an actual swatch.|请以实物色卡确认颜色。|Sahkan warna dengan sampel sebenar.
Explore sizes, fabrics and listed prices in the showroom.|在展厅中查看尺寸、面料和标价。|Terokai saiz, fabrik dan harga senarai di bilik pameran.
viewpoints|个视角|sudut pandangan
Previous viewpoint|上一个视角|Sudut pandangan sebelumnya
Next viewpoint|下一个视角|Sudut pandangan seterusnya
Real product imagery. An imagined setting.|真实产品图像，想象中的场景。|Imej produk sebenar. Suasana rekaan.
About this room|关于这个房间|Tentang bilik ini
This 2.5D room uses the showroom’s Cove, Haven and Cloud product photographs. The room, lighting, rug and accessories are illustrative. Camera movement stays within the photographed views; it is not a 360° scan or a measured floor plan. Haven’s 117 cm headboard, 20.32 cm base and Cloud’s 13″ thickness use the showroom’s proportions. Use a product’s room planner to check your space, and confirm finished dimensions and fabrics before ordering. Styling accessories are not included.|这个 2.5D 房间使用展厅中 Cove、Haven 和 Cloud 的产品照片。房间、灯光、地毯和饰品仅作示意。视角移动仅限于拍摄角度，并非 360° 扫描或实测平面图。Haven 的 117 厘米床头板、20.32 厘米底座和 Cloud 的 13 英寸厚度沿用展厅比例。请使用产品页的空间规划器检查你的空间，并在下单前确认成品尺寸和面料。装饰饰品不包括在内。|Bilik 2.5D ini menggunakan foto produk Cove, Haven dan Cloud dari bilik pameran. Bilik, pencahayaan, permaidani dan aksesori adalah ilustrasi. Pergerakan kamera kekal dalam sudut foto; ia bukan imbasan 360° atau pelan lantai yang diukur. Kepala katil Haven 117 cm, tapak 20.32 cm dan ketebalan 13″ Cloud menggunakan nisbah bilik pameran. Gunakan perancang ruang produk untuk menyemak ruang anda, dan sahkan dimensi siap dan fabrik sebelum memesan. Aksesori hiasan tidak termasuk.
Motion begins only when you choose a view.|只有在你选择视角时画面才会移动。|Pergerakan bermula hanya apabila anda memilih sudut pandangan.
Reduced motion: views change instantly. Automatic tour is off.|已减少动态效果：视角即时切换，自动导览已关闭。|Gerakan dikurangkan: sudut pandangan bertukar serta-merta. Lawatan automatik dimatikan.
Automatic tour is off because reduced motion is enabled.|已开启减少动态效果，因此自动导览已关闭。|Lawatan automatik dimatikan kerana gerakan dikurangkan diaktifkan.
Play the four viewpoints once, about 22 seconds.|依次播放四个视角一次，约 22 秒。|Mainkan empat sudut pandangan sekali, kira-kira 22 saat.
MattressHub showroom home|MattressHub 展厅首页|Laman utama bilik pameran MattressHub
All products|所有产品|Semua produk
`.trim().split('\n').map(line => line.split('|'));
  const table = new Map(words.map(([en, ...rest]) => [en, rest]));
  const language = window.showroomLanguage;
  const t = text => language === 'en' ? text : table.get(text)?.[language === 'zh' ? 0 : 1] ?? window.mhTranslate(text);
  document.documentElement.lang = { en: 'en', zh: 'zh-Hans', ms: 'ms' }[language];
  // Translate the static page once: text nodes keep their surrounding spaces.
  if (language !== 'en') {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: node => node.parentElement.closest('script, [translate=no], option') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    for (let node; (node = walker.nextNode());) { const text = node.nodeValue.trim(); if (text && table.has(text)) node.nodeValue = node.nodeValue.replace(text, t(text)); }
    document.querySelectorAll('[aria-label]').forEach(el => el.setAttribute('aria-label', t(el.getAttribute('aria-label'))));
  }
  const languageSelect = document.querySelector('#language');
  languageSelect.value = language;
  languageSelect.addEventListener('change', () => { try { localStorage.setItem('mh-language', languageSelect.value); } catch {} location.reload(); });

  const products = Object.fromEntries(window.showroomProducts.map(p => [p.slug, p]));
  const { cove, haven, cloud } = products;
  ReactDOM.createRoot(document.querySelector('#sofa-product')).render(h(ProductVisual, { src: cove.cutout, alt: 'Cove sofa, original cream reference photograph' }));
  ReactDOM.createRoot(document.querySelector('#bed-product')).render(h(BedSetVisual, { bed: haven, mattress: cloud, size: 'Queen', fabric: haven.defaultFabric }));
  // Links keep the pictured selection: Queen, Creamy LGE 008 on Haven and Cove.
  const frames = {
    room: { box: [0, 0, 1600, 900], chapter: '00 / Welcome home', title: 'A slower pace.<br>A softer place.', copy: 'Bring three everyday pieces together. Move through the room, then explore what makes each one yours.', label: 'Room overview', cta: 'Build this room', href: 'soho/?mattress=cloud&bed=haven&sofa=cove&size=Queen&bedFabric=1&sofaFabric=0' },
    lounge: { box: [63, 295, 780, 495], chapter: '01 / The lounge', title: 'Stay a little<br>longer.', copy: 'Cove’s tufted back, slim arms and spring-supported seat make this the spot to pause between everything else.', label: 'Cove · SonoLounge', cta: 'Explore Cove', href: 'products/cove/?fabric=0' },
    sleep: { box: [833, 230, 743, 600], chapter: '02 / The sleep space', title: 'End the day<br>right here.', copy: 'The clean lines of Haven meet the softer feel of Cloud. Explore the frame and mattress as one bed set, in your size and fabric.', label: 'Haven + Cloud · Queen', cta: 'Build this bed', href: 'build-your-bed/?mattress=cloud&bed=haven&size=Queen&bedFabric=1' },
    detail: { box: [918, 400, 590, 430], chapter: '03 / A little closer', title: 'Comfort is in<br>the details.', copy: 'Cloud’s 13-inch profile sits above Haven’s upholstered divan. The original product imagery keeps the SonoFlex finish in view.', label: 'Cloud · SonoFlex Signature', cta: 'Explore Cloud layers', href: 'products/cloud/?size=Queen' }
  };
  const order = Object.keys(frames);
  const viewport = document.querySelector('#viewport'), world = document.querySelector('#world');
  const tourButton = document.querySelector('#tour'), reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 'room', timer = null, roots = [];
  const validHash = () => order.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'room';
  function camera(instant = false) {
    const [x, y, w, height] = frames[current].box;
    const scale = Math.min(viewport.clientWidth / w, viewport.clientHeight / height);
    const translation = (view, scene, desired) => scene <= view ? (view - scene) / 2 : Math.min(0, Math.max(view - scene, desired));
    const left = translation(viewport.clientWidth, 1600 * scale, (viewport.clientWidth - w * scale) / 2 - x * scale);
    const top = translation(viewport.clientHeight, 900 * scale, (viewport.clientHeight - height * scale) / 2 - y * scale);
    world.classList.toggle('instant', instant);
    world.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
    // shortcut: photo planes support guided framing only; use measured models before enabling orbit.
    world.style.setProperty('--hotspot-scale', Math.min(2.5, Math.max(.75, .84 / scale)));
  }
  function selection(stop) {
    roots.forEach(root => root.unmount()); roots = [];
    const container = document.querySelector('#selection');
    if (stop === 'room') {
      container.innerHTML = '<div class="selection-list"></div>';
      for (const [p, target, caption] of [[cove, 'lounge', 'Sofa · Cream reference'], [haven, 'sleep', 'Bed frame · Queen'], [cloud, 'detail', 'Mattress · Queen']]) {
        const button = document.createElement('button'); button.className = 'product-item'; button.dataset.stop = target;
        button.innerHTML = `<span class="product-thumb"></span><span><span class="item-name">${p.name}</span><small>${t(caption)}</small></span><span class="item-arrow" aria-hidden="true">↗</span>`;
        button.setAttribute('aria-label', { en: `View ${p.name} in the room`, zh: `在房间中查看 ${p.name}`, ms: `Lihat ${p.name} dalam bilik` }[language]);
        container.firstChild.append(button);
        const root = ReactDOM.createRoot(button.firstChild); roots.push(root);
        root.render(h(ProductVisual, { src: p.setView || p.cutout || p.views[0].src, alt: '' }));
      }
    } else {
      const rows = stop === 'lounge' ? [['Width', Math.round(cove.dimensions[0] * 2.54) + ' cm'], ['Depth', Math.round(cove.dimensions[1] * 2.54) + ' cm'], ['Height', Math.round(cove.dimensions[2] * 2.54) + ' cm']]
        : stop === 'sleep' ? [['Shown together', 'Haven + Cloud'], ['Bed size', 'Queen'], ['Headboard, floor to top', haven.headboardHeightCm + ' cm']]
        : [['Mattress profile', cloud.thickness + '″ / ' + (cloud.thickness * 2.54).toFixed(2) + ' cm'], ['Divan base', haven.baseHeightCm + ' cm'], ['Cloud firmness', cloud.firmness + ' / 10']];
      container.innerHTML = `<dl class="spec">${rows.map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
      if (stop !== 'detail') {
        const fabric = stop === 'lounge' ? cove.fabrics[0] : haven.fabrics[haven.defaultFabric];
        const detail = document.createElement('div'); detail.className = 'fabric-detail';
        detail.innerHTML = `<img src="${fabric.swatch}" alt="${fabric.code} fabric swatch"><p>${fabric.name} · ${fabric.code}<small>${t('Confirm colour with an actual swatch.')}</small></p>`;
        container.append(detail);
      }
    }
  }
  function show(stop, { automatic = false, instant = false, writeHash = true } = {}) {
    if (!frames[stop]) return;
    if (!automatic) pause();
    current = stop;
    const frame = frames[stop];
    document.querySelector('#chapter').textContent = t(frame.chapter);
    document.querySelector('#story-title').innerHTML = t(frame.title);
    document.querySelector('#story-copy').textContent = t(frame.copy);
    document.querySelector('#scene-label').textContent = t(frame.label);
    document.querySelector('#progress').textContent = `${String(order.indexOf(stop) + 1).padStart(2, '0')} / 04 ${t('viewpoints')}`;
    const link = document.querySelector('#primary-link'); link.innerHTML = t(frame.cta) + ' <span aria-hidden="true">↗</span>'; link.href = frame.href;
    document.querySelectorAll('.stops [data-stop]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.stop === stop)));
    document.querySelectorAll('.hotspot').forEach(b => {
      const visible = stop === 'room' || b.dataset.stop === stop || (stop === 'sleep' && b.dataset.stop === 'detail');
      b.hidden = !visible;
      b.setAttribute('aria-current', String(b.dataset.stop === stop));
    });
    viewport.dataset.view = stop;
    // The page has a base element, so keep its own path when writing the view.
    if (writeHash) history.replaceState(null, '', location.pathname + location.search + '#' + stop);
    selection(stop); camera(instant);
  }
  function pause() {
    clearTimeout(timer); timer = null;
    tourButton.setAttribute('aria-pressed', 'false');
    tourButton.innerHTML = `<span aria-hidden="true">▶</span> ${t('Play tour')}`;
  }
  function advance() {
    const next = order.indexOf(current) + 1;
    if (next >= order.length) { pause(); return; }
    show(order[next], { automatic: true });
    timer = setTimeout(advance, 5500);
  }
  function motionPreference() {
    pause(); camera(true);
    tourButton.disabled = reducedMotion.matches;
    tourButton.title = t(reducedMotion.matches ? 'Automatic tour is off because reduced motion is enabled.' : 'Play the four viewpoints once, about 22 seconds.');
    document.querySelector('#motion-note').textContent = t(reducedMotion.matches ? 'Reduced motion: views change instantly. Automatic tour is off.' : 'Motion begins only when you choose a view.');
  }
  document.addEventListener('click', event => {
    const target = event.target.closest('[data-stop]');
    if (target) show(target.dataset.stop);
  });
  document.querySelector('#reset').addEventListener('click', () => show('room'));
  document.querySelector('#previous').addEventListener('click', () => show(order[(order.indexOf(current) + order.length - 1) % order.length]));
  document.querySelector('#next').addEventListener('click', () => show(order[(order.indexOf(current) + 1) % order.length]));
  viewport.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); show(order[(order.indexOf(current) + (event.key === 'ArrowRight' ? 1 : -1) + order.length) % order.length]);
    }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') pause(); });
  tourButton.addEventListener('click', () => {
    if (timer) return pause();
    if (reducedMotion.matches) return;
    show('room', { automatic: true });
    tourButton.setAttribute('aria-pressed', 'true');
    tourButton.innerHTML = `<span aria-hidden="true">Ⅱ</span> ${t('Pause tour')}`;
    timer = setTimeout(advance, 5500);
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  addEventListener('hashchange', () => show(validHash(), { writeHash: false }));
  new ResizeObserver(() => camera(true)).observe(viewport);
  reducedMotion.addEventListener('change', motionPreference);
  show(validHash(), { instant: true, writeHash: false });
  motionPreference();
})();
