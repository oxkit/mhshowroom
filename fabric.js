function ProductVisual({ src, fabric, alt, className = '', mirror = false, fit = 'xMidYMid meet', bounds, placement = {} }) {
  const id = React.useId().replaceAll(':', '');
  const meta = window.showroomImageMeta?.[src];
  if (!meta) return h('img', { src, alt, className });
  const rgb = (fabric?.hex || '#bfb9a8').slice(1).match(/../g).map(v => parseInt(v, 16) / 255);
  // A swatch-based colour/texture impression, not a calibrated photograph of a manufactured variant.
  const matrix = rgb.map(c => `${.2126 * c / .72} ${.7152 * c / .72} ${.0722 * c / .72} 0 0`).join(' ') + ' 0 0 0 1 0';
  return h('svg', { className: `product-visual ${className}`, viewBox: (bounds || meta.bounds).join(' '), role: 'img', 'aria-label': alt, 'data-src': src, 'data-fabric': fabric?.code || '', preserveAspectRatio: fit, ...placement },
    h('defs', null, h('filter', { id: id + 'tone', colorInterpolationFilters: 'sRGB' }, h('feColorMatrix', { type: 'matrix', values: matrix })),
      h('mask', { id: id + 'mask', maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: meta.width, height: meta.height, style: { maskType: 'alpha' } }, h('image', { href: src, width: meta.width, height: meta.height })),
      fabric && h('pattern', { id: id + 'weave', width: 100, height: 100, patternUnits: 'userSpaceOnUse' }, h('image', { href: fabric.swatch, x: -10, y: -10, width: 120, height: 120, preserveAspectRatio: 'xMidYMid slice' }))),
    h('g', { transform: mirror ? `translate(${meta.bounds[0] * 2 + meta.bounds[2]} 0) scale(-1 1)` : undefined },
      h('image', { href: src, width: meta.width, height: meta.height, filter: fabric ? `url(#${id}tone)` : undefined }),
      fabric && h('rect', { x: 0, y: 0, width: meta.width, height: meta.height, fill: `url(#${id}weave)`, mask: `url(#${id}mask)`, opacity: .16, style: { mixBlendMode: 'soft-light' } })));
}
function PetFabric({ fabric }) {
  const [demo, setDemo] = useState('scratch'), [run, setRun] = useState(0);
  const descriptions = {
    scratch: ['Scratch resistant', 'Made to resist everyday scratches.', 'Resistance is not scratch-proofing. Sharp claws and repeated scratching can still damage upholstery.'],
    water: ['Water repellent', 'Watch droplets bead on the fabric surface.', 'Repellent does not mean waterproof. Blot spills promptly; do not leave liquid sitting on the fabric.'],
    clean: ['Easy to clean', 'A small everyday spill, followed by a gentle wipe.', 'Follow the fabric care instructions and test cleaning products on a hidden area first.']
  };
  return h('section', { className: 'pet-fabric', 'aria-label': 'Pet-friendly premium fabric' },
    h('div', { className: 'pet-copy' }, h('span', { className: 'eyebrow' }, 'For a home with paws'), h('h2', null, 'Life happens.', h('br'), 'Your fabric is ready.'), h('p', null, 'Pet-friendly premium fabric for everyday lounging, little spills and four-legged company.'),
      h('div', { className: 'pet-tabs', role: 'group', 'aria-label': 'Fabric demonstrations' }, ...Object.entries(descriptions).map(([key, value]) => h('button', { key, type: 'button', 'aria-pressed': demo === key, onClick: () => { setDemo(key); setRun(run + 1); } }, value[0]))),
      h('h3', null, descriptions[demo][0]), h('p', null, descriptions[demo][1]), h('p', { className: 'pet-care' }, descriptions[demo][2]),
      h('button', { type: 'button', className: 'settle-button', onClick: () => setRun(run + 1) }, 'Replay fabric demo')),
    h('div', { className: 'pet-stage' }, h('div', { className: 'pet-sample', style: { backgroundImage: `url("${fabric.swatch}")` } },
      h('svg', { key: demo + run, className: 'pet-animation ' + demo, viewBox: '0 0 400 280', role: 'img', 'aria-label': descriptions[demo][0] + ' illustration' },
        demo === 'scratch' ? h('g', { className: 'pet-paw' }, h('ellipse', { cx: 170, cy: 108, rx: 36, ry: 29, fill: '#ede2cf', stroke: '#1a2440', strokeWidth: 3 }), ...[140, 163, 186, 209].map((x, i) => h('g', { key: x }, h('ellipse', { cx: x, cy: 77 + Math.abs(i - 1.5) * 7, rx: 13, ry: 18, fill: '#ede2cf', stroke: '#1a2440', strokeWidth: 2 }), h('path', { d: `M${x - 3} ${62 + Math.abs(i - 1.5) * 7} l3 -10 3 10`, fill: '#faf9f4', stroke: '#1a2440', strokeWidth: 1 })))) :
          h(React.Fragment, null, h('g', { className: 'pet-droplets' }, ...[[125, 120, 13], [200, 95, 17], [248, 158, 10], [172, 180, 9]].map(([x, y, r]) => h('g', { key: x }, h('circle', { cx: x, cy: y, r, fill: demo === 'clean' ? '#825b3f' : '#79b7d5', stroke: '#fff9', strokeWidth: 2 }), h('ellipse', { cx: x - r / 3, cy: y - r / 3, rx: r / 4, ry: r / 5, fill: '#ffffffa0' })))),
            demo === 'clean' && h('g', { className: 'pet-cloth' }, h('rect', { x: -95, y: 57, width: 90, height: 160, rx: 16, fill: '#fffdf5', stroke: '#d7c7a7', strokeWidth: 3 }), h('path', { d: 'M-77 72V202M-63 72V202M-49 72V202M-35 72V202', stroke: '#ded6c3', strokeWidth: 2 })))),
      h('span', { className: 'pet-demo-tag' }, 'Illustrative demo')),
      h('div', { className: 'pet-swatch-label' }, h('strong', null, fabric.family + ' · ' + fabric.name), h('span', null, fabric.code)), h('p', { className: 'small-note' }, 'Showing your selected premium fabric. Confirm colour and feel with an actual swatch.')));
}
