function ComfortScene({ product, settled }) {
  const sofa = Boolean(product.feel);
  // Illustrative displacement only; replace with measured profiles when product tests are available.
  const sink = settled ? (sofa ? 15 : (11 - product.firmness) * 4) : 0;
  return h('div', { className: 'comfort-scene', 'data-firmness': product.firmness },
    h('div', { className: 'comfort-card-title' }, h('strong', null, product.name), h('span', null, sofa ? product.feel : `${product.firmness} / 10`)),
    h('svg', { viewBox: sofa ? '0 0 360 235' : '0 75 360 160', role: 'img', 'aria-label': `${product.name}: ${sofa ? product.feel : product.firmness + ' out of 10 firmness'}. Illustrative ${settled ? 'settled' : 'unloaded'} cushioning.` },
      h('path', { d: sofa ? `M24 148 H70 Q100 148 126 ${148 + sink} Q185 ${148 + sink + 3} 228 ${148 + sink} Q270 148 300 148 H336 V204 H24Z` : `M24 148 Q48 148 68 ${148 + sink} Q180 ${151 + sink} 304 ${148 + sink} Q320 148 336 148 V204 H24Z`, fill: '#d7c7a7', stroke: '#a58a51', strokeWidth: 2, className: 'comfort-surface' }),
      h('path', { d: 'M24 148H336', stroke: '#a58a51', strokeDasharray: '4 5', opacity: .5 }),
      h('path', { d: 'M25 210H335', stroke: '#1a2440', strokeWidth: 5, strokeLinecap: 'round' }),
      h('g', { className: 'comfort-person', style: { transform: `translateY(${sink}px)`, opacity: settled ? 1 : .25 } }, sofa ? [
        h('circle', { key: 'head', cx: 143, cy: 49, r: 15, fill: '#1a2440' }),
        h('path', { key: 'body', d: 'M142 75L145 124Q146 138 161 138H213L227 187H252M151 91L188 119H216', fill: 'none', stroke: '#1a2440', strokeWidth: 18, strokeLinecap: 'round', strokeLinejoin: 'round' })
      ] : [
        h('circle', { key: 'head', cx: 91, cy: 130, r: 15, fill: '#1a2440' }),
        h('path', { key: 'body', d: 'M116 134Q145 119 180 133L221 132L263 139H292', fill: 'none', stroke: '#1a2440', strokeWidth: 17, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { key: 'arm', d: 'M131 126L157 140H186', fill: 'none', stroke: '#7182a3', strokeWidth: 6, strokeLinecap: 'round' })
      ]), h('text', { x: 180, y: 230, textAnchor: 'middle', fill: '#77776d', fontSize: 10 }, 'Illustration · not measured sink depth')),
    !sofa && h('div', { className: 'firmness-scale', 'aria-label': `Firmness ${product.firmness} out of 10` }, ...Array.from({ length: 10 }, (_, i) => h('span', { key: i, className: i < product.firmness ? 'filled' : '' }, i + 1))),
    !sofa && h('div', { className: 'scale-labels' }, h('span', null, 'Softer'), h('span', null, 'Firmer · 10 = floor-like')));
}
function FeelGuide({ product }) {
  const [settled, setSettled] = useState(true);
  const [comparison, setComparison] = useState(product.slug === 'cloud' ? 'durafirm' : 'cloud');
  const candidates = products.filter(p => p.firmness && p.slug !== product.slug);
  const other = candidates.find(p => p.slug === comparison);
  const sofa = Boolean(product.feel);
  return h('section', { className: 'feel-guide', 'aria-label': 'Comfort feel guide' },
    h('div', { className: 'feel-heading' }, h('div', null, h('span', { className: 'eyebrow' }, 'Get a sense of the feel'), h('h2', null, sofa ? 'A little give. A supportive sit.' : 'See how the feel compares.'), h('p', null, sofa ? 'Cove, Luxe and Oasis all have a medium firm feel, with foam cushioning over a zigzag spring seat.' : 'The same illustrated sleeper. Two firmness ratings. Compare the feel before you choose.')),
      h('button', { type: 'button', className: 'settle-button', 'aria-pressed': settled, onClick: () => setSettled(!settled) }, settled ? (sofa ? 'Stand up' : 'Lift sleeper') : (sofa ? 'Take a seat' : 'Let sleeper settle'))),
    !sofa && h('label', { className: 'compare-label' }, 'Compare with', h('select', { 'aria-label': 'Compare with', value: comparison, onChange: e => setComparison(e.target.value) }, ...candidates.map(p => h('option', { key: p.slug, value: p.slug }, `${p.name} · ${p.firmness}/10`)))),
    h('div', { className: `comfort-comparison ${sofa ? 'single' : ''}` }, h(ComfortScene, { product, settled }), other && !sofa && h(ComfortScene, { product: other, settled })),
    h('p', { className: 'feel-note' }, sofa ? 'Feel confirmed by MattressHub. Movement is a visual guide, not a measured cushion test. Try the seat in person to judge your comfort.' : 'Firmness ratings supplied by MattressHub; 10 is firmest, like a floor. Body position and sinking are illustrative, not pressure measurements or predictions for your body. Your weight and sleeping position affect the feel.'));
}
