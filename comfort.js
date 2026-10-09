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
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [playing, setPlaying] = useState(() => !matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false), [pageVisible, setPageVisible] = useState(!document.hidden);
  const [manual, setManual] = useState(null);
  const section = useRef(null), current = useRef(0), cycle = useRef(0);
  current.current = progress;
  React.useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const changed = () => { setReduced(media.matches); if (media.matches) setPlaying(false); };
    const hidden = () => setPageVisible(!document.hidden);
    media.addEventListener('change', changed); document.addEventListener('visibilitychange', hidden);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    observer.observe(section.current);
    return () => { observer.disconnect(); media.removeEventListener('change', changed); document.removeEventListener('visibilitychange', hidden); };
  }, []);
  React.useEffect(() => {
    if (!playing || reduced || !visible || !pageVisible) return;
    let frame, previous = performance.now();
    const tick = now => {
      cycle.current = (cycle.current + Math.min(now - previous, 100)) % 8800; previous = now;
      const t = cycle.current;
      setProgress(t < 1400 ? t / 1400 * 55 : t < 4400 ? 55 : t < 5800 ? 65 + (t - 4400) / 1400 * 35 : 100);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, reduced, visible, pageVisible]);
  React.useEffect(() => {
    if (!manual || playing) return;
    const from = current.current >= 88 && manual.to === 55 ? 0 : current.current;
    cycle.current = manual.to === 55 ? 1400 : 5800;
    if (reduced) { setProgress(manual.to); return; }
    let frame; const start = performance.now();
    const tick = now => { const t = Math.min(1, (now - start) / 1400); setProgress(from + (manual.to - from) * t); if (t < 1) frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [manual, playing, reduced]);
  const [comparison, setComparison] = useState(product.slug === 'cloud' ? 'durafirm' : 'cloud');
  const candidates = products.filter(p => p.firmness && p.slug !== product.slug);
  const other = candidates.find(p => p.slug === comparison);
  const sofa = Boolean(product.feel);
  const phases = [sofa ? 'Sit down' : 'Lie down', 'Settle in', sofa ? 'Seated comfort' : 'Rest', sofa ? 'Stand up' : 'Get up', 'Surface returns'];
  const phase = progress < 22 ? 0 : progress < 42 ? 1 : progress < 65 ? 2 : progress < 88 ? 3 : 4;
  return h('section', { ref: section, className: 'feel-guide', 'data-playing': playing && visible && pageVisible && !reduced, 'aria-label': 'Comfort feel guide' },
    h('div', { className: 'feel-heading' }, h('div', null, h('span', { className: 'eyebrow' }, 'Get a sense of the feel'), h('h2', null, sofa ? 'A little give. A supportive sit.' : 'See how the feel compares.'), h('p', null, sofa ? 'Cove, Luxe and Oasis all have a medium firm feel, with foam cushioning over a zigzag spring seat.' : 'Watch the same sleeper lie down, settle in and get up. Play both mattresses together to compare.')),
      h('div', { className: 'comfort-controls' },
        h('button', { type: 'button', className: 'settle-button', disabled: playing, onClick: () => setManual({ to: progress < 42 || progress >= 88 ? 55 : 100 }) }, progress < 42 || progress >= 88 ? (sofa ? 'Let sitter settle' : 'Let sleeper settle') : (sofa ? 'Lift sitter' : 'Lift sleeper')),
        h('button', { type: 'button', className: 'motion-toggle', 'aria-label': playing ? 'Pause comfort animation' : 'Play comfort animation', 'aria-pressed': playing, disabled: reduced, onClick: () => { setManual(null); setPlaying(!playing); } }, h('svg', { viewBox: '0 0 24 24', width: 20, height: 20, 'aria-hidden': true }, playing ? h('path', { d: 'M7 5V19M17 5V19', stroke: 'currentColor', strokeWidth: 4 }) : h('path', { d: 'M7 4L20 12L7 20Z', fill: 'currentColor' }))))),
    h('div', { className: 'comfort-timeline' }, h('div', { className: 'comfort-phases', 'aria-hidden': true }, ...phases.map((name, i) => h('span', { key: name, className: i === phase ? 'active' : '' }, name))), h('label', null, 'Explore the movement', h('input', { type: 'range', min: 0, max: 100, step: 0.1, value: progress, 'aria-label': 'Animation progress', 'aria-valuetext': `${phases[phase]}, ${Math.round(progress)} percent`, onChange: e => { setPlaying(false); setManual(null); const value = Number(e.target.value); setProgress(value); cycle.current = value <= 55 ? value / 55 * 1400 : 4400 + Math.max(0, value - 65) / 35 * 1400; } })), h('span', { className: 'motion-status', role: 'status' }, phases[phase]), h('small', null, reduced ? 'Reduced motion: use the slider or switch between still poses.' : 'Loops with a 3-second rest at each end. Pause to try settle and lift yourself.')),
    !sofa && h('label', { className: 'compare-label' }, 'Compare with', h('select', { 'aria-label': 'Compare with', value: comparison, onChange: e => setComparison(e.target.value) }, ...candidates.map(p => h('option', { key: p.slug, value: p.slug }, `${p.name} · ${p.firmness}/10`)))),
    h('div', { className: `comfort-comparison ${sofa ? 'single' : ''}` }, h(ComfortScene, { product, progress }), other && !sofa && h(ComfortScene, { product: other, progress })),
    h('p', { className: 'feel-note' }, sofa ? 'Feel confirmed by MattressHub. Movement and timing are illustrative, not measured cushion tests. Try the seat in person to judge your comfort.' : 'Firmness ratings supplied by MattressHub; 10 is firmest, like a floor. Movement, timing and sinking are illustrative, not measured pressure or predictions for your body. Your weight and sleeping position affect the feel.'));
}
