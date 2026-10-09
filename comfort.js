function comfortMotion(progress) {
  const ease = (start, end) => { const t = Math.max(0, Math.min(1, (progress - start) / (end - start))); return t * t * (3 - 2 * t); };
  return { contact: ease(0, 22) * (1 - ease(65, 88)), load: ease(22, 42) * (1 - ease(68, 100)) };
}
function ComfortScene({ product, progress }) {
  const sofa = Boolean(product.feel);
  const { contact, load } = comfortMotion(progress);
  // Illustrative displacement only; replace with measured profiles when product tests are available.
  const sink = load * (sofa ? 15 : (11 - product.firmness) * 4);
  return h('div', { className: 'comfort-scene', 'data-firmness': product.firmness },
    h('div', { className: 'comfort-card-title' }, h('strong', null, product.name), h('span', null, sofa ? product.feel : `${product.firmness} / 10`)),
    h('svg', { viewBox: sofa ? '0 -30 360 265' : '0 25 360 210', role: 'img', 'aria-label': `${product.name}: ${sofa ? product.feel : product.firmness + ' out of 10 firmness'}. Illustrative comfort sequence.` },
      h('path', { d: sofa ? `M24 148 H70 Q100 148 126 ${148 + sink} Q185 ${148 + sink + 3} 228 ${148 + sink} Q270 148 300 148 H336 V204 H24Z` : `M24 148 Q48 148 68 ${148 + sink} Q180 ${151 + sink} 304 ${148 + sink} Q320 148 336 148 V204 H24Z`, fill: '#d7c7a7', stroke: '#a58a51', strokeWidth: 2, className: 'comfort-surface' }),
      h('path', { d: 'M24 148H336', stroke: '#a58a51', strokeDasharray: '4 5', opacity: .5 }),
      h('path', { d: 'M25 210H335', stroke: '#1a2440', strokeWidth: 5, strokeLinecap: 'round' }),
      h('g', { className: 'comfort-person', transform: sofa ? '' : `translate(0 ${sink * contact - (1 - contact) * 42}) rotate(${(1 - contact) * 24} 180 132)`, opacity: .55 + contact * .45 }, sofa ? [
        h('circle', { key: 'head', cx: 143 + (1 - contact) * 45, cy: 49 - (1 - contact) * 50 + sink * contact, r: 15, fill: '#1a2440' }),
        h('path', { key: 'body', d: `M${143 + (1 - contact) * 45} ${75 - (1 - contact) * 50 + sink * contact} L${150 + (1 - contact) * 48} ${128 - (1 - contact) * 40 + sink * contact} Q${152 + (1 - contact) * 48} ${138 - (1 - contact) * 45 + sink * contact} ${168 + (1 - contact) * 40} ${138 - (1 - contact) * 45 + sink * contact} L213 ${138 + (1 - contact) * 10 + sink * contact} L227 204 H252`, fill: 'none', stroke: '#1a2440', strokeWidth: 18, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { key: 'arm', d: `M${149 + (1 - contact) * 45} ${91 - (1 - contact) * 50 + sink * contact} L${188 + (1 - contact) * 15} ${119 - (1 - contact) * 32 + sink * contact} H216`, fill: 'none', stroke: '#7182a3', strokeWidth: 8, strokeLinecap: 'round' })
      ] : [
        h('circle', { key: 'head', cx: 91, cy: 130, r: 15, fill: '#1a2440' }),
        h('path', { key: 'body', d: 'M116 134Q145 119 180 133L221 132L263 139H292', fill: 'none', stroke: '#1a2440', strokeWidth: 17, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { key: 'arm', d: 'M131 126L157 140H186', fill: 'none', stroke: '#7182a3', strokeWidth: 6, strokeLinecap: 'round' })
      ]), h('text', { x: 180, y: 230, textAnchor: 'middle', fill: '#77776d', fontSize: 10 }, 'Illustration · not measured sink depth')),
    !sofa && h('div', { className: 'firmness-scale', 'aria-label': `Firmness ${product.firmness} out of 10` }, ...Array.from({ length: 10 }, (_, i) => h('span', { key: i, className: i < product.firmness ? 'filled' : '' }, i + 1))),
    !sofa && h('div', { className: 'scale-labels' }, h('span', null, 'Softer'), h('span', null, 'Firmer · 10 = floor-like')));
}
function FeelGuide({ product }) {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const section = useRef(null), introduced = useRef(false), current = useRef(0);
  current.current = progress;
  React.useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const changed = () => { setReduced(media.matches); if (media.matches) setPlaying(false); };
    const hidden = () => { if (document.hidden) setPlaying(false); };
    media.addEventListener('change', changed); document.addEventListener('visibilitychange', hidden);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setPlaying(false);
      else if (!introduced.current) { introduced.current = true; if (!media.matches && !document.hidden) setPlaying(true); }
    }, { threshold: 0.15 });
    observer.observe(section.current);
    return () => { observer.disconnect(); media.removeEventListener('change', changed); document.removeEventListener('visibilitychange', hidden); };
  }, []);
  React.useEffect(() => {
    if (!playing || reduced) return;
    let frame; const start = performance.now(), from = current.current;
    const tick = now => { const next = Math.min(100, from + (now - start) / 90); setProgress(next); if (next < 100) frame = requestAnimationFrame(tick); else setPlaying(false); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, reduced]);
  const [comparison, setComparison] = useState(product.slug === 'cloud' ? 'durafirm' : 'cloud');
  const candidates = products.filter(p => p.firmness && p.slug !== product.slug);
  const other = candidates.find(p => p.slug === comparison);
  const sofa = Boolean(product.feel);
  const phases = [sofa ? 'Sit down' : 'Lie down', 'Settle in', sofa ? 'Seated comfort' : 'Rest', sofa ? 'Stand up' : 'Get up', 'Surface returns'];
  const phase = progress < 22 ? 0 : progress < 42 ? 1 : progress < 65 ? 2 : progress < 88 ? 3 : 4;
  return h('section', { ref: section, className: 'feel-guide', 'data-playing': playing, 'aria-label': 'Comfort feel guide' },
    h('div', { className: 'feel-heading' }, h('div', null, h('span', { className: 'eyebrow' }, 'Get a sense of the feel'), h('h2', null, sofa ? 'A little give. A supportive sit.' : 'See how the feel compares.'), h('p', null, sofa ? 'Cove, Luxe and Oasis all have a medium firm feel, with foam cushioning over a zigzag spring seat.' : 'Watch the same sleeper lie down, settle in and get up. Play both mattresses together to compare.')),
      h('button', { type: 'button', className: 'settle-button', onClick: () => { if (reduced) { setProgress(progress < 42 ? 55 : 0); return; } if (playing) setPlaying(false); else { if (progress >= 100) setProgress(0); setPlaying(true); } } }, reduced ? (progress < 42 ? 'Show settled pose' : 'Show starting pose') : playing ? 'Pause animation' : progress >= 100 ? 'Replay animation' : 'Play animation')),
    h('div', { className: 'comfort-timeline' }, h('div', { className: 'comfort-phases', 'aria-hidden': true }, ...phases.map((name, i) => h('span', { key: name, className: i === phase ? 'active' : '' }, name))), h('label', null, 'Explore the movement', h('input', { type: 'range', min: 0, max: 100, step: 0.1, value: progress, 'aria-label': 'Animation progress', 'aria-valuetext': `${phases[phase]}, ${Math.round(progress)} percent`, onChange: e => { setPlaying(false); setProgress(Number(e.target.value)); } })), h('span', { className: 'motion-status', role: 'status' }, phases[phase]), h('small', null, reduced ? 'Reduced motion: use the slider or switch between still poses.' : 'Plays once. Replay or drag the slider to explore.')),
    !sofa && h('label', { className: 'compare-label' }, 'Compare with', h('select', { 'aria-label': 'Compare with', value: comparison, onChange: e => setComparison(e.target.value) }, ...candidates.map(p => h('option', { key: p.slug, value: p.slug }, `${p.name} · ${p.firmness}/10`)))),
    h('div', { className: `comfort-comparison ${sofa ? 'single' : ''}` }, h(ComfortScene, { product, progress }), other && !sofa && h(ComfortScene, { product: other, progress })),
    h('p', { className: 'feel-note' }, sofa ? 'Feel confirmed by MattressHub. Movement and timing are illustrative, not measured cushion tests. Try the seat in person to judge your comfort.' : 'Firmness ratings supplied by MattressHub; 10 is firmest, like a floor. Movement, timing and sinking are illustrative, not measured pressure or predictions for your body. Your weight and sleeping position affect the feel.'));
}
