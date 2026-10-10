// Help me choose: three questions, then one match and one runner-up, scored from
// MattressHub's feel ratings (comfort.json) and Queen prices (prices.json).
// This file also holds the phone Buy bar shared by product and package pages.
function ChatIcon() {
  return h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
    h('path', { d: 'M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z' }), h('path', { d: 'M9 10.5h6M9 13.5h4' }));
}
// On phones, keeps the price and Buy in reach while the page's own Buy button is off screen.
function StickyBuy({ watch, label, price, buyUrl, askUrl }) {
  const [shown, setShown] = useState(false);
  React.useEffect(() => {
    if (!window.IntersectionObserver || !watch.current) return;
    const observer = new IntersectionObserver(([entry]) => setShown(!entry.isIntersecting));
    observer.observe(watch.current);
    return () => observer.disconnect();
  }, []);
  return h('div', { className: 'sticky-buy', 'data-shown': shown },
    h('div', { className: 'sticky-buy-info' }, h('span', null, label), h('strong', null, price)),
    h('a', { className: 'sticky-ask', href: askUrl, target: '_blank', rel: 'noopener', 'aria-label': 'Ask on WhatsApp' }, h(ChatIcon)),
    h('a', { className: 'sticky-buy-now', href: buyUrl, target: '_blank', rel: 'noopener' }, 'Buy now', h(Icon, { type: 'arrow' })));
}
const finderQuestions = [
  { title: 'How do you usually sleep?', help: 'We use it to fine-tune the feel.', options: [
    ['On my side', 'A touch softer', -0.5], ['On my back', 'As you choose', 0], ['On my front', 'A touch firmer', 0.5], ['A mix', 'As you choose', 0]] },
  { title: 'Which feel do you like?', help: 'Our feel ratings go from 1 to 10, where 10 is the firmest.', options: [
    ['Soft', 'Around 4', 4], ['Medium', 'Around 6', 6], ['Firm', '7 to 8', 7.5], ['Extra firm', 'Around 9', 9]] },
  { title: 'Your budget for a Queen?', help: 'Queen prices. You can pick any size after.', options: [
    ['Up to RM 600', '', [0, 600]], ['RM 600 to RM 1,000', '', [600, 1000]], ['RM 1,000 and up', '', [1000, Infinity]]] }
];
function findMattress(answers) {
  const [position, feel, [low, high]] = answers.map((a, i) => finderQuestions[i].options[a][2]);
  const target = feel + position, mattresses = products.filter(p => p.firmness), price = p => p.prices.Queen;
  const feelGap = p => Math.abs(p.firmness - target);
  // Positive above the budget, negative below it.
  const budgetGap = p => price(p) - Math.min(Math.max(price(p), low), high);
  // Over budget costs more than under it, so a match within budget wins unless its feel is two points out.
  const score = p => { const gap = budgetGap(p); return feelGap(p) + (gap > 0 ? 2 + gap / 500 : gap < 0 ? 0.75 - gap / 2000 : 0); };
  const rank = (list, by) => [...list].sort((a, b) => by(a) - by(b) || price(a) - price(b));
  const match = rank(mattresses, score)[0], nearest = rank(mattresses, feelGap)[0];
  // If the budget pulled the match away from the chosen feel, the runner-up is the closest feel.
  const runnerUp = feelGap(nearest) < feelGap(match) ? nearest : rank(mattresses.filter(p => p !== match), score)[0];
  return { match, runnerUp, budgetGap };
}
// Kept out of the shared translations: "Medium" would also rewrite fabric names such as Medium Grey.
const feelWords = { Soft: ['柔软', 'Lembut'], Medium: ['适中', 'Sederhana'], Firm: ['偏硬', 'Tegang'], 'Extra firm': ['特硬', 'Ekstra tegang'] };
const optionLabel = text => feelWords[text] && window.showroomLanguage !== 'en' ? h('span', { translate: 'no' }, feelWords[text][window.showroomLanguage === 'zh' ? 0 : 1]) : text;
const budgetNote = gap => gap > 0 ? 'Above your budget' : gap < 0 ? 'Below your budget' : 'Within your budget';
const compareNote = (p, match) => p.firmness > match.firmness ? 'A little firmer' : p.firmness < match.firmness ? 'A little softer' : p.prices.Queen < match.prices.Queen ? 'Same feel, lower price' : 'Same feel, more premium';
function FeelRating({ value }) {
  return h('div', { className: 'finder-feel' },
    h('div', { className: 'finder-feel-bar', 'aria-hidden': true }, ...Array.from({ length: 10 }, (_, i) => h('span', { key: i, className: i < value ? 'filled' : '' }))),
    h('span', null, 'Feel rating ', String(value), ' out of 10'));
}
// The launcher is a small button by default; pass className and children to use another look (a home tile).
function MattressFinder({ label = 'Help me choose', className = 'finder-launch', children }) {
  const dialog = useRef(null), heading = useRef(null), id = React.useId();
  const [step, setStep] = useState(0), [answers, setAnswers] = useState([]);
  React.useEffect(() => { if (dialog.current?.open) heading.current?.focus(); }, [step]);
  const open = () => { setStep(0); setAnswers([]); dialog.current.showModal(); heading.current?.focus(); };
  const close = () => dialog.current?.close();
  const choose = i => { setAnswers([...answers.slice(0, step), i]); setStep(step + 1); };
  const question = finderQuestions[step];
  const result = step === finderQuestions.length ? findMattress(answers) : null;
  const productLink = p => showroomUrl(p.slug, 'size=Queen');
  return h(React.Fragment, null,
    h('button', { type: 'button', className, onClick: open }, ...(children ? [].concat(children) : [label, h(Icon, { type: 'arrow' })])),
    h('dialog', { ref: dialog, className: 'finder-dialog', 'aria-labelledby': id, onClick: e => { if (e.target === dialog.current) close(); } },
      h('div', { className: 'finder-body' },
        h('div', { className: 'finder-top' }, h('span', { className: 'eyebrow' }, result ? 'Your match' : 'Help me choose'), !result && h('span', { className: 'finder-step' }, `${step + 1} / ${finderQuestions.length}`),
          h('button', { type: 'button', className: 'dialog-close', onClick: close, 'aria-label': 'Close the finder' }, h(Icon, { type: 'close' }))),
        result ? h(React.Fragment, null,
          h('p', { className: 'finder-answers' }, ...answers.map((a, i) => h('span', { key: i }, optionLabel(finderQuestions[i].options[a][0])))),
          h('section', { className: 'finder-match' },
            h(ProductVisual, { src: result.match.views[0].src, alt: result.match.series + ' ' + result.match.name }),
            h('div', { className: 'finder-match-title' }, h('h2', { id, ref: heading, tabIndex: -1 }, result.match.name), h('strong', null, money(result.match.prices.Queen))),
            h('p', { className: 'finder-meta' }, 'Queen', ' · ', result.match.thickness + '″', ' · ', budgetNote(result.budgetGap(result.match))),
            h('p', null, result.match.headline, ' ', result.match.description),
            h(FeelRating, { value: result.match.firmness }),
            h('a', { className: 'buy-direct', href: productLink(result.match), onClick: close }, 'See ', result.match.name, h(Icon, { type: 'arrow' }))),
          h('a', { className: 'finder-runner', href: productLink(result.runnerUp), onClick: close },
            h('span', { className: 'eyebrow' }, compareNote(result.runnerUp, result.match)),
            h('strong', null, result.runnerUp.name, ' · ', 'Feel rating ', String(result.runnerUp.firmness), ' out of 10'),
            h('span', null, 'Queen', ' · ', money(result.runnerUp.prices.Queen), ' · ', budgetNote(result.budgetGap(result.runnerUp))), h(Icon, { type: 'arrow' })),
          h('p', { className: 'small-note' }, 'Suggested from MattressHub\'s feel ratings and Queen prices. Your weight and sleeping position affect the feel.'),
          h('button', { type: 'button', className: 'finder-back', onClick: () => { setAnswers([]); setStep(0); } }, 'Start again')) :
        h(React.Fragment, null,
          h('div', { className: 'finder-progress', 'aria-hidden': true }, ...finderQuestions.map((_, i) => h('span', { key: i, className: i <= step ? 'done' : '' }))),
          h('h2', { id, ref: heading, tabIndex: -1 }, question.title),
          h('p', null, question.help),
          h('div', { className: 'finder-options', role: 'group', 'aria-label': question.title }, ...question.options.map(([text, note], i) => h('button', { key: text, type: 'button', 'aria-pressed': answers[step] === i, onClick: () => choose(i) }, h('strong', null, optionLabel(text)), note && h('span', null, note)))),
          step > 0 && h('button', { type: 'button', className: 'finder-back', onClick: () => setStep(step - 1) }, 'Previous question')))));
}
