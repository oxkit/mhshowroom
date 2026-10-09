const products = window.showroomProducts;
const { useEffect } = React;
const categories = ['All products', 'Mattresses', 'Bed frames', 'Sofas'];
function route() { return location.hash.slice(1).split('?')[0]; }
function Image({ src, alt, ...props }) { return h('img', { src, alt, ...props }); }
function RadioGroup({ title, name, options, value, onChange }) {
  return h('fieldset', null, h('legend', null, title), h('div', { className: 'size-grid', style: { gridTemplateColumns: `repeat(${Math.min(options.length, 4)},1fr)` } }, ...options.map(option => h('label', { key: option, className: `size-option ${value === option ? 'selected' : ''}` }, h('input', { type: 'radio', name, value: option, checked: value === option, onChange: () => onChange(option) }), h('span', null, option)))));
}
function Catalogue() {
  const [category, setCategory] = useState('All products');
  return h(React.Fragment, null,
    h('section', { className: 'catalogue-hero' }, h('div', null, h('span', { className: 'eyebrow' }, 'The interactive showroom'), h('h1', null, 'Find your', h('br'), 'kind of comfort.'), h('p', null, 'Explore the layers. Feel out the fabrics. Make room for something that feels like you.'), h('a', { className: 'text-link', href: '#luxe' }, 'Try the sofa room planner ', h(Icon, { type: 'arrow' }))),
      h('a', { className: 'hero-sofa', href: '#luxe', 'aria-label': 'Explore Luxe sofa' }, h(Image, { src: products.find(p => p.slug === 'luxe').views[0].src, alt: 'Luxe sofa in Creamy fabric' }), h('span', null, 'Luxe', h('small', null, 'Room to stretch out.')))),
    h('div', { className: 'catalogue-heading' }, h('div', { role: 'group', 'aria-label': 'Product category', className: 'category-tabs' }, ...categories.map(c => h('button', { key: c, type: 'button', 'aria-pressed': category === c, onClick: () => setCategory(c) }, c))), h('span', { className: 'catalogue-count', 'aria-live': 'polite' }, `${products.filter(p => category === 'All products' || p.category === category).length} products`)),
    h('section', { className: 'catalogue-grid', 'aria-label': 'Products' }, ...products.filter(p => category === 'All products' || p.category === category).map(p => h('a', { key: p.slug, href: '#' + p.slug, className: 'catalogue-card', 'aria-label': `Explore ${p.name}` }, h('div', { className: `card-picture ${p.category === 'Sofas' ? 'sofa-card' : ''}` }, h(Image, { src: p.views[0].src, alt: `${p.series} ${p.name}`, loading: 'lazy' }), h('span', { className: 'card-category' }, p.category)), h('div', { className: 'card-caption' }, h('div', null, h('span', { className: 'eyebrow' }, p.series), h('h2', null, p.name), h('p', null, p.type)), h(Icon, { type: 'arrow' }))))));
}
function SpringDemo() {
  const [pressed, setPressed] = useState(false);
  return h('div', { className: 'spring-demo' },
    h('svg', { viewBox: '0 0 200 180', role: 'img', 'aria-label': 'Illustration of fabric, foam, zigzag springs and seat base' },
      h('rect', { x: 24, y: 141, width: 152, height: 22, rx: 5, fill: '#7182a3' }),
      h('g', { style: { transform: `translateY(${pressed ? 19 : 0}px)`, transition: 'transform .25s ease' } }, h('rect', { x: 24, y: 32, width: 152, height: 17, rx: 7, fill: '#a7c8b8' }), h('rect', { x: 24, y: 49, width: 152, height: 41, fill: '#f6e6b0' })),
      h('polyline', { points: '29,137 39,95 51,137 63,95 75,137 87,95 99,137 111,95 123,137 135,95 147,137 159,95 171,137', fill: 'none', stroke: '#e7bd54', strokeWidth: 5, strokeLinejoin: 'round', style: { transformOrigin: '100px 141px', transform: `scaleY(${pressed ? .6 : 1})`, transition: 'transform .25s ease' } })),
    h('button', { type: 'button', 'aria-pressed': pressed, onClick: () => setPressed(!pressed) }, pressed ? 'Release cushion' : 'Press cushion'), h('small', null, 'Seat construction illustration'));
}
function RoomPlanner({ product, orientation, fabric }) {
  const [roomWidth, setRoomWidth] = useState(400);
  const [roomDepth, setRoomDepth] = useState(350);
  const [rotated, setRotated] = useState(false);
  const [position, setPosition] = useState({ x: 40, y: 40 });
  const svg = useRef(null);
  const drag = useRef(null);
  const width = product.dimensions[0] * 2.54, depth = product.dimensions[1] * 2.54;
  const boxW = rotated ? depth : width, boxD = rotated ? width : depth;
  const clampPosition = (x, y) => ({ x: Math.max(0, Math.min(x, Math.max(0, roomWidth - boxW))), y: Math.max(0, Math.min(y, Math.max(0, roomDepth - boxD))) });
  const pos = clampPosition(position.x, position.y);
  const fits = boxW <= roomWidth && boxD <= roomDepth;
  const coordinate = e => new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.current.getScreenCTM().inverse());
  const base = depth * .58, chaise = width * .33;
  const shape = !product.orientations ? `M0 0H${width}V${depth}H0Z` : orientation === 'Right' ? `M0 0H${width}V${depth}H${width - chaise}V${base}H0Z` : `M0 0H${width}V${base}H${chaise}V${depth}H0Z`;
  const sofaTransform = rotated ? `translate(${pos.x + depth} ${pos.y}) rotate(90)` : `translate(${pos.x} ${pos.y})`;
  return h('div', { className: 'room-planner' },
    h('div', { className: 'planner-heading' }, h('strong', null, 'Make space for ' + product.name), h('span', null, 'Drag the sofa to position it')),
    h('div', { className: 'room-inputs' }, ...[['Room width', roomWidth, setRoomWidth], ['Room depth', roomDepth, setRoomDepth]].map(([label, value, setter]) => h('label', { key: label }, label, h('output', null, `${(value / 100).toFixed(1)} m`), h('input', { type: 'range', min: 200, max: 700, step: 10, value, 'aria-label': label, onChange: e => setter(Number(e.target.value)) }))), h('button', { type: 'button', className: 'rotate-button', 'aria-pressed': rotated, onClick: () => setRotated(!rotated) }, 'Rotate 90°')),
    h('svg', { ref: svg, className: 'room-plan', viewBox: `-25 -25 ${Math.max(roomWidth, boxW) + 50} ${Math.max(roomDepth, boxD) + 50}`, 'aria-label': 'Room footprint planner' },
      h('rect', { x: 0, y: 0, width: roomWidth, height: roomDepth, rx: 4, fill: '#fffdf9', stroke: '#a69e8c', strokeWidth: 2 }),
      h('g', { transform: sofaTransform, tabIndex: 0, role: 'button', 'aria-label': 'Sofa footprint. Drag or use arrow keys to move.', className: 'draggable-sofa',
        onPointerDown: e => { const point = coordinate(e); drag.current = { x: point.x - pos.x, y: point.y - pos.y }; e.currentTarget.setPointerCapture(e.pointerId); },
        onPointerMove: e => { if (!drag.current) return; const point = coordinate(e); setPosition(clampPosition(point.x - drag.current.x, point.y - drag.current.y)); },
        onPointerUp: () => { drag.current = null; }, onPointerCancel: () => { drag.current = null; },
        onKeyDown: e => { const step = { ArrowLeft: [-5, 0], ArrowRight: [5, 0], ArrowUp: [0, -5], ArrowDown: [0, 5] }[e.key]; if (step) { e.preventDefault(); setPosition(clampPosition(pos.x + step[0], pos.y + step[1])); } }
      }, h('path', { d: shape, fill: fabric === 0 ? '#d0c2a8' : '#727975', stroke: fits ? '#1a2440' : '#a73f30', strokeWidth: 3, strokeLinejoin: 'round' }), h('rect', { x: 7, y: 6, width: width - 14, height: 17, rx: 6, fill: '#ffffff40' }), h('text', { x: width / 2, y: Math.min(base, depth) / 2 + 10, textAnchor: 'middle', fontSize: 14, fill: fabric === 0 ? '#1a2440' : '#fff' }, product.name)),
      h('text', { x: roomWidth / 2, y: -9, textAnchor: 'middle', fill: '#686c78', fontSize: 11 }, `${(roomWidth / 100).toFixed(1)} m`)),
    h('div', { className: `fit-status ${fits ? '' : 'does-not-fit'}`, role: 'status' }, fits ? `Fits within this empty room · ${Math.round(roomWidth - boxW)} cm width and ${Math.round(roomDepth - boxD)} cm depth remaining in total.` : 'The sofa footprint exceeds this room. Increase the room dimensions or rotate it.'),
    h('p', { className: 'small-note' }, 'Schematic plan. Outer dimensions are to scale; internal cushion and chaise shapes are illustrative. Allow space for doors, walking routes and other furniture.'));
}
function Product({ product: p }) {
  const query = new URLSearchParams(location.hash.split('?')[1] || '');
  const bounded = (key, count) => { const n = Number(query.get(key)); return Number.isInteger(n) && n >= 0 && n < count ? n : 0; };
  const [fabric, setFabric] = useState(() => bounded('fabric', p.fabrics?.length || 1));
  const [size, setSize] = useState(() => p.sizes?.includes(query.get('size')) ? query.get('size') : p.sizes ? 'Queen' : '');
  const [orientation, setOrientation] = useState(() => p.orientations?.includes(query.get('orientation')) ? query.get('orientation') : p.orientations?.[0]);
  const [view, setView] = useState(0), [detail, setDetail] = useState(0), [family, setFamily] = useState('All');
  const [copied, setCopied] = useState(false), [fallback, setFallback] = useState(false);
  const dialog = useRef(null);
  const selectedFabric = p.fabrics?.[fabric];
  const planner = Boolean(p.views[view]?.planner);
  const photo = p.colourPhotos ? p.colourPhotos[fabric][p.orientations ? p.orientations.indexOf(orientation) : p.category === 'Sofas' ? 0 : view] : p.views[view].src;
  const currentPhoto = photo || p.views[0].src;
  const selectionQuery = new URLSearchParams();
  if (p.fabrics) selectionQuery.set('fabric', fabric);
  if (size) selectionQuery.set('size', size);
  if (orientation) selectionQuery.set('orientation', orientation);
  const selectionUrl = location.href.split('#')[0] + '#' + p.slug + (selectionQuery.size ? '?' + selectionQuery.toString() : '');
  const selection = `${p.series} ${p.name}\n${size ? 'Size: ' + size + '\n' : ''}${selectedFabric ? `Fabric: ${selectedFabric.name} (${selectedFabric.code})\n` : ''}${orientation ? `Chaise: ${orientation} when facing the sofa\n` : ''}${p.dimensions ? 'Dimensions: ' + p.dimensions.join(' × ') + ' inches (W × D × H)\n' : ''}Price and availability: confirm with MattressHub.\n${selectionUrl}`;
  useEffect(() => {
    history.replaceState(null, '', selectionUrl);
    setCopied(false); setFallback(false);
  }, [fabric, size, orientation, p.slug]);
  useEffect(() => { document.title = `${p.name} — MattressHub showroom`; }, [p.slug]);
  async function copy() { try { await navigator.clipboard.writeText(selection); setCopied(true); } catch { setFallback(true); } }
  return h(React.Fragment, null,
    h('div', { className: 'intro' }, h('a', { href: '#' }, '← All products'), h('span', null, p.series, ' / ', p.name)),
    h('div', { className: 'configurator' },
      h('section', { className: `showroom ${p.category === 'Sofas' ? 'sofa-showroom' : ''}`, 'aria-label': p.name + ' preview' },
        h('div', { className: 'showroom-heading' }, h('span', { className: 'eyebrow' }, p.series + ' / ' + p.type), h('h1', null, p.name, h('span', { className: 'gold-dot' }, '.')), h('p', { className: 'stage-headline' }, p.headline)),
        planner ? h(RoomPlanner, { product: p, orientation, fabric }) : h('div', { className: `product-stage ${p.category === 'Sofas' ? 'sofa-stage' : ''} ${view === 1 && p.layers ? 'layer-stage' : ''}` }, h(Image, { key: currentPhoto, className: 'product-image', src: currentPhoto, alt: `${p.name} ${p.referencePhoto ? 'reference photo' : selectedFabric?.name || ''} ${orientation || ''} ${p.views[view].label}` }), h('button', { className: 'zoom-button', type: 'button', onClick: () => dialog.current.showModal(), 'aria-label': 'Enlarge image' }, h(Icon, { type: 'zoom' }))),
        h('div', { className: 'view-toolbar' }, h('div', { role: 'group', 'aria-label': 'Preview mode', className: 'view-buttons' }, ...p.views.map((v, i) => h('button', { key: v.label, type: 'button', 'aria-pressed': view === i, onClick: () => setView(i) }, v.label)))),
        h('p', { className: 'photo-note' }, p.referencePhoto ? 'Reference photo. Your selected fabric is shown in the swatch and summary.' : p.category === 'Sofas' ? 'Chaise left/right is shown as you face the sofa. Colours are a guide.' : 'Images show design and construction; proportions vary by size.')),
      h('aside', { className: 'controls', id: 'configure', 'aria-label': 'Product options' }, h('div', { className: 'product-title' }, h('span', { className: 'eyebrow' }, p.category), h('h2', null, p.name + ', your way.'), h('p', null, p.description)),
        p.layers && h('div', { className: 'layer-selector' }, h('div', { className: 'layer-heading' }, h('strong', null, 'Explore the layers'), h('span', null, p.thickness + '″ thick')), ...p.layers.map((layer, i) => h('button', { key: layer, className: 'layer-button', type: 'button', 'aria-pressed': detail === i, onClick: () => { setDetail(i); setView(1); } }, h('span', null, String(i + 1).padStart(2, '0')), layer, h(Icon, { type: 'arrow' }))), h('p', { className: 'small-note', 'aria-live': 'polite' }, `Selected layer ${detail + 1}: ${p.layers[detail]}`)),
        p.fabrics && h('fieldset', { className: 'fabric-options' }, h('legend', null, 'Choose your fabric'), p.fabrics.length > 2 && h('div', { className: 'family-tabs', role: 'group', 'aria-label': 'Fabric family' }, ...['All', 'Lego', 'Reka', 'Costa'].map((f, i) => h('button', { key: f, type: 'button', 'aria-pressed': family === f, onClick: () => setFamily(f) }, f))),
          h('div', { className: p.fabrics.length > 2 ? 'premium-swatches' : 'swatch-grid' }, ...p.fabrics.map((f, i) => ({ f, i })).filter(({ i }) => family === 'All' || Math.floor(i / 10) === ['Lego', 'Reka', 'Costa'].indexOf(family)).map(({ f, i }) => h('label', { key: f.code, className: `fabric-option ${fabric === i ? 'selected' : ''}`, title: `${f.name} ${f.code}` }, h('input', { type: 'radio', name: 'fabric', checked: fabric === i, onChange: () => setFabric(i) }), h('span', { className: `fabric-swatch ${f.tone || ''}`, style: f.swatch ? { backgroundImage: `url("${f.swatch}")` } : {}, 'aria-hidden': true }, fabric === i && h('span', { className: 'selected-check' }, h(Icon, { type: 'check' }))), h('strong', null, f.name), h('span', { className: 'fabric-code' }, f.code)))),
          h('p', { className: 'fabric-mood', 'aria-live': 'polite' }, `${selectedFabric.name} · ${selectedFabric.code}`)),
        p.orientations && h(RadioGroup, { title: 'Choose your chaise', name: 'orientation', options: p.orientations, value: orientation, onChange: setOrientation }),
        p.sizes && h(RadioGroup, { title: 'Choose your size', name: 'size', options: p.sizes, value: size, onChange: setSize }),
        p.dimensions && h('div', { className: 'dimension-strip' }, ...['Width', 'Depth', 'Height'].map((label, i) => h('div', { key: label }, h('strong', null, Math.round(p.dimensions[i] * 2.54), h('small', null, ' cm')), h('span', null, label + ' · ' + p.dimensions[i] + '″')))),
        h('div', { className: 'selection' }, h('span', { className: 'eyebrow' }, 'Your selection'), h('div', { className: 'selection-line', 'aria-live': 'polite' }, h('strong', null, p.name + (size ? ' · ' + size : '')), h('span', null, [selectedFabric?.code, orientation && orientation + ' chaise'].filter(Boolean).join(' / '))),
          h(Button, { variant: 'solid', full: true, onClick: copy, iconLeft: h(Icon, { type: copied ? 'check' : 'copy' }) }, copied ? 'Selection copied' : 'Copy your selection'),
          p.shop && h('a', { className: 'shop-link', href: p.shop }, 'See price & order on MattressHub ', h(Icon, { type: 'arrow' })),
          h('p', { className: 'small-note', role: 'status' }, copied ? 'Your choices and a link are ready to paste.' : p.shop ? 'Confirm your fabric and orientation again on the store.' : 'Keep your choices handy when asking for a quote.'),
          fallback && h('label', { className: 'copy-fallback' }, 'Select and copy your choices:', h('textarea', { readOnly: true, value: selection, rows: 7, onFocus: e => e.target.select() }))),
        h('p', { className: 'colour-note' }, p.category === 'Bed frames' ? 'Bed frame only. Mattress sold separately. Confirm fabric using actual swatches.' : p.category === 'Sofas' ? 'Dimensions are overall measurements. Check delivery access and walking space before ordering.' : 'Mattress only. Bed frame sold separately.'),
        p.slug === 'cozy' && fabric === 1 && h('p', { className: 'colour-note' }, 'Grey photographs are colour visualisations based on MX 012.'))),
    (p.firmness || p.feel) && h(FeelGuide, { product: p }),
    p.features.length > 0 && h('section', { className: 'construction' }, h('div', { className: 'construction-heading' }, h('div', null, h('span', { className: 'eyebrow' }, 'A closer look'), h('h2', null, 'The details make the difference.'))), h('div', { className: 'construction-body' }, h('div', { className: 'feature-list', role: 'group', 'aria-label': 'Construction details' }, ...p.features.map((f, i) => h('button', { key: f.title, type: 'button', className: 'feature-button', 'aria-pressed': detail === i, onClick: () => setDetail(i), 'aria-controls': 'feature-detail' }, h('span', { className: 'feature-number' }, String(i + 1).padStart(2, '0')), h('strong', null, f.title), h(Icon, { type: 'arrow' })))), h('div', { className: 'feature-detail', id: 'feature-detail', 'aria-live': 'polite' }, p.category === 'Sofas' && detail === 0 ? h(SpringDemo) : h(Image, { src: p.features[detail].image, alt: p.features[detail].title }), h('div', null, h('span', { className: 'eyebrow' }, 'Detail ' + String(detail + 1).padStart(2, '0')), h('h3', null, p.features[detail].title), h('p', null, p.features[detail].text))))),
    h('dialog', { ref: dialog, className: 'image-dialog', 'aria-label': 'Enlarged product image', onClick: e => { if (e.target === dialog.current) dialog.current.close(); } }, h('div', { className: 'dialog-top' }, h('span', null, p.name), h('button', { className: 'dialog-close', type: 'button', onClick: () => dialog.current.close(), 'aria-label': 'Close enlarged image' }, h(Icon, { type: 'close' }))), h(Image, { src: currentPhoto, alt: p.name + ' enlarged product image' })));
}
function Showroom() {
  const [slug, setSlug] = useState(route);
  useEffect(() => { const changed = () => { setSlug(route()); window.scrollTo(0, 0); }; window.addEventListener('hashchange', changed); return () => window.removeEventListener('hashchange', changed); }, []);
  const product = products.find(p => p.slug === slug);
  useEffect(() => { if (!product) document.title = 'MattressHub — The interactive showroom'; }, [product]);
  return h(React.Fragment, null, h('a', { className: 'skip', href: '#main', onClick: e => { e.preventDefault(); document.getElementById('main').focus(); } }, 'Skip to showroom'),
    h('header', { className: 'header' }, h('a', { href: '#', 'aria-label': 'MattressHub showroom home' }, h(Logo)), h('span', { className: 'header-label' }, 'The interactive showroom'), h('a', { className: 'store-link', href: 'https://mattresshub.co' }, 'Visit the store ', h(Icon, { type: 'arrow' }))),
    h('main', { id: 'main', tabIndex: -1 }, product ? h(Product, { key: product.slug, product }) : h(Catalogue), h('footer', null, h('strong', null, 'Dealer price for everyone.'), h('a', { href: '#' }, 'Explore the collection'), h('span', null, 'MattressHub · Better Sleep, Better Life'))));
}
ReactDOM.createRoot(document.getElementById('root')).render(h(Showroom));
