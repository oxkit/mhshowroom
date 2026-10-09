const money = value => 'RM ' + value.toLocaleString('en-MY');
function priceFor(product, size = 'Queen', fabric = 0) {
  return product.prices ? product.prices[size] : product.basePrice + (product.includedFabrics.includes(product.fabrics[fabric].code) ? 0 : product.fabricAddon);
}
function BedSetVisual({ bed, mattress, fabric, size }) {
  // Photo landmarks: rear deck, front deck and rear/front perspective scale, not physical dimensions.
  const [rear, front, perspective] = { cozy: [247,375,.715], haven: [242,367,.706], aurora: [493,727,.77] }[bed.slug];
  const seam = { essential:610, pure:365, plus:530, coolmax:310, durafirm:480, noir:480, cloud:425 }[mattress.slug];
  const frame = window.showroomImageMeta[bed.setView].bounds;
  const source = mattress.views[0].src, mat = window.showroomImageMeta[source].bounds;
  const tone = bed.premium ? bed.fabrics[fabric] : fabric === 1 ? { hex:'#777b7b', swatch:bed.fabrics[1].swatch } : null;
  const scale = 3, floor = 430, width = ({ Single:105, 'Super Single':120, Queen:163, King:193 })[size] * scale;
  // shortcut: photo perspective and footprints are approximate; replace with measured 3D assets when available.
  const deckDepth = 92, baseTop = floor - bed.baseHeightCm * scale, rearDeck = baseTop - deckDepth;
  const headTop = rearDeck - (bed.headboardHeightCm - bed.baseHeightCm) * scale * perspective;
  const frontTop = baseTop - mattress.thickness * 2.54 * scale;
  const rearTop = rearDeck - mattress.thickness * 2.54 * scale * perspective;
  const band = (key, src, bounds, y, height, fabric) => h(ProductVisual, { key, src, bounds, fabric, alt:key, fit:'none', placement:{ x:(700-width)/2, y, width, height, 'data-band':key, overflow:'hidden' } });
  return h('div', { className:'bed-set-visual', 'data-bed':bed.slug, 'data-mattress':mattress.slug },
    h('svg', { className:'bed-set-composite', viewBox:'0 0 700 460', role:'img', 'aria-label':mattress.name + ' mattress on ' + bed.name },
      band('headboard',bed.setView,[frame[0],frame[1],frame[2],rear-frame[1]],headTop,rearDeck-headTop,tone),
      band('deck',bed.setView,[frame[0],rear,frame[2],front-rear],rearDeck,deckDepth,tone),
      band('base',bed.setView,[frame[0],front,frame[2],frame[1]+frame[3]-front],baseTop,floor-baseTop,tone),
      band('mattress-top',source,[mat[0],mat[1],mat[2],seam-mat[1]],rearTop,frontTop-rearTop),
      band('mattress-front',source,[mat[0],seam,mat[2],mat[1]+mat[3]-seam],frontTop,baseTop-frontTop)),
    h('div',{className:'bed-set-measurements'},
      h('span',null,'Headboard · floor to top',h('strong',null,bed.headboardHeightCm+' cm')),
      h('span',null,'Divan base',h('strong',null,'8″ · 20.32 cm')),
      h('span',null,'Mattress',h('strong',null,mattress.thickness+'″ · '+(mattress.thickness*2.54).toFixed(2)+' cm'))));
}
function RoomIllustration({ sofa, fabric, bed, mattress, bedFabric, size = 'Queen', orientation = 'Left', tv = 55 }) {
  const roomW = bed ? 560 : 400, roomD = bed ? 480 : 350;
  const project = (x, y, z = 0) => [360 + (x - y) * .6, 175 + (x + y) * .29 - z * .75];
  const points = list => list.map(p => project(...p).join(',')).join(' ');
  const poly = (key, list, fill, extra = {}) => h('polygon', { key, points: points(list), fill, ...extra });
  const box = (key, x, y, w, d, height, fill, bottom = 0) => h('g', { key },
    poly('front', [[x,y+d,bottom],[x+w,y+d,bottom],[x+w,y+d,height],[x,y+d,height]], fill),
    poly('side', [[x+w,y,bottom],[x+w,y+d,bottom],[x+w,y+d,height],[x+w,y,height]], fill, { style: { filter: 'brightness(.8)' } }),
    poly('top', [[x,y,height],[x+w,y,height],[x+w,y+d,height],[x,y+d,height]], fill, { style: { filter: 'brightness(1.12)' } }));
  const width = sofa.dimensions[0] * 2.54, depth = sofa.dimensions[1] * 2.54, height = sofa.dimensions[2] * 2.54;
  const x = 30, y = bed ? 180 : 125, tone = sofa.fabrics[fabric].hex, regularDepth = sofa.orientations ? depth * .58 : depth;
  const screenW = tv * 2.54 * 16 / Math.sqrt(337), screenH = screenW * 9 / 16;
  return h('svg', { className: 'room-illustration', viewBox: bed ? '55 0 685 545' : '110 0 525 455', role: 'img', 'aria-label': bed ? 'SOHO room concept with bed set, sofa and TV' : sofa.name + ' in a room with a ' + tv + '-inch TV', 'data-sofa-width': width, 'data-tv-width': screenW },
    poly('floor', [[0,0],[roomW,0],[roomW,roomD],[0,roomD]], '#e2d3be'),
    poly('backwall', [[0,0],[roomW,0],[roomW,0,220],[0,0,220]], '#eee9df'),
    poly('leftwall', [[0,0],[0,roomD],[0,roomD,220],[0,0,220]], '#e3e7df'),
    ...Array.from({ length: Math.floor(roomW / 40) }, (_, i) => h('line', { key: 'plank'+i, x1: project(i*40,0)[0], y1: project(i*40,0)[1], x2: project(i*40,roomD)[0], y2: project(i*40,roomD)[1], stroke: '#c7b79e', opacity: .4 })),
    box('console', 30, 4, 180, 35, 35, '#c0a17a'),
    poly('tv', [[60,1,80],[60+screenW,1,80],[60+screenW,1,80+screenH],[60,1,80+screenH]], '#25364b', { stroke: '#101929', strokeWidth: 4 }),
    h('text', { x: project(60+screenW/2,0,80+screenH/2)[0], y: project(60+screenW/2,0,80+screenH/2)[1], textAnchor: 'middle', fill: '#fff', fontSize: 12 }, tv + '″ TV'),
    poly('rug', [[15,75],[315,75],[315,330],[15,330]], '#f5efe3', { stroke: '#d9ccba', strokeWidth: 2 }),
    box('table', 95, 85, 100, 45, 34, '#b99b74'),
    box('seat', x, y, width, regularDepth, 44, tone, 9),
    sofa.orientations && box('chaise', orientation === 'Left' ? x + width - width*.33 : x, y - (depth-regularDepth), width*.33, depth-regularDepth+5, 44, tone, 9),
    box('arm1', x, y, 12, regularDepth, 63, tone, 9),
    box('arm2', x+width-12, y, 12, regularDepth, 63, tone, 9),
    ...[0,1,2].map(i => box('back'+i,x+i*width/3,y+regularDepth-18,width/3-1,18,height,tone,9)),
    bed && h('g', null, box('bedbase', 345, 45, size === 'King' ? 193 : size === 'Single' ? 105 : size === 'Super Single' ? 120 : 163, 210, bed.baseHeightCm, bed.fabrics[bedFabric].hex || (bedFabric ? '#777b7b' : '#d8cdb7')), box('headboard', 345, 40, size === 'King' ? 193 : size === 'Single' ? 105 : size === 'Super Single' ? 120 : 163, 12, bed.headboardHeightCm, bed.fabrics[bedFabric].hex || (bedFabric ? '#777b7b' : '#d8cdb7')), box('mattress', 350, 54, size === 'King' ? 183 : size === 'Single' ? 95 : size === 'Super Single' ? 110 : 153, 198, bed.baseHeightCm + mattress.thickness*2.54, ['noir','durafirm','cloud','plus','coolmax'].includes(mattress.slug) ? '#44474d' : '#e7e6df',bed.baseHeightCm)),
    h('text', { x: project(roomW/2,roomD+35)[0], y: project(roomW/2,roomD+35)[1], textAnchor: 'middle', fontSize: 12, fill: '#68716a' }, `${(roomW/100).toFixed(1)} m × ${(roomD/100).toFixed(1)} m example room`));
}
function SofaScale({ product, fabric, orientation }) {
  const [tv, setTv] = useState(55);
  return h('section', { className: 'sofa-scale' }, h('div', { className: 'scale-copy' }, h('span', { className: 'eyebrow' }, 'Picture the proportions'), h('h2', null, 'How much room does it take?'), h('p', null, `${product.name} is ${Math.round(product.dimensions[0]*2.54)} cm wide and ${Math.round(product.dimensions[1]*2.54)} cm deep.`), h('p', null, 'Compare it with a familiar TV and a 180 cm console. The room view uses the sofa’s overall measurements.'), h(RadioGroup, { title: 'TV reference size', name: 'tv', options: ['55 inch','65 inch'], value: tv+' inch', onChange: v => setTv(parseInt(v)) }), h('p', { className: 'small-note' }, 'Schematic furniture shapes. TV size is its diagonal; a 55-inch screen is about 122 cm wide. Use the room planner above to check your own space.')), h(RoomIllustration, { sofa: product, fabric, orientation, tv }));
}
function PackageBuilder({ soho = false }) {
  const query = new URLSearchParams(location.hash.split('?')[1] || '');
  const mattresses = products.filter(p=>p.firmness), beds = products.filter(p=>p.category==='Bed frames'), sofas = products.filter(p=>p.category==='Sofas');
  const valid = (key, options, fallback) => options.some(p=>p.slug===query.get(key)) ? query.get(key) : fallback;
  const [mattressSlug,setMattress] = useState(()=>valid('mattress',mattresses,'essential'));
  const [bedSlug,setBed] = useState(()=>valid('bed',beds,'cozy'));
  const [sofaSlug,setSofa] = useState(()=>valid('sofa',sofas,'cove'));
  const [size,setSize] = useState(()=>['Single','Super Single','Queen','King'].includes(query.get('size')) ? query.get('size') : 'Queen');
  const mattress = mattresses.find(p=>p.slug===mattressSlug), bed = beds.find(p=>p.slug===bedSlug), sofa = sofas.find(p=>p.slug===sofaSlug);
  const index = (key,p) => { const n=query.has(key)?Number(query.get(key)):(p.defaultFabric||0); return Number.isInteger(n)&&n>=0&&n<p.fabrics.length ? n : p.defaultFabric||0; };
  const [bedFabric,setBedFabric] = useState(()=>index('bedFabric',bed)), [sofaFabric,setSofaFabric] = useState(()=>index('sofaFabric',sofa));
  const [orientation,setOrientation] = useState(query.get('orientation')==='Right'?'Right':'Left');
  const [copied,setCopied] = useState(false), [fallback,setFallback] = useState(false);
  const total = priceFor(mattress,size)+priceFor(bed,size,bedFabric)+(soho?priceFor(sofa,size,sofaFabric):0);
  const params = new URLSearchParams({ mattress:mattressSlug,bed:bedSlug,size,bedFabric,...(soho?{sofa:sofaSlug,sofaFabric,orientation}:{}) });
  const url = location.href.split('#')[0]+'#'+(soho?'soho':'build-your-bed')+'?'+params;
  useEffect(()=>{history.replaceState(null,'',url);setCopied(false);setFallback(false);document.title=(soho?'SOHO package':'Build Your Bed')+' — MattressHub';},[url]);
  const summary = `${soho?'SOHO package':'Full bed set'} · ${size}\n${mattress.name}: ${money(priceFor(mattress,size))}\n${bed.name} · ${bed.fabrics[bedFabric].code}: ${money(priceFor(bed,size,bedFabric))}\n${soho?`${sofa.name} · ${sofa.fabrics[sofaFabric].code}${sofa.orientations?' · '+orientation+' chaise':''}: ${money(priceFor(sofa,size,sofaFabric))}\n`:''}Listed total: ${money(total)}\nDelivery and final availability to confirm.\n${url}`;
  const select = (label,value,change,choices) => h('label',{className:'builder-select'},label,h('select',{'aria-label':label,value,onChange:e=>change(e.target.value)},...choices.map(([value,label])=>h('option',{key:value,value},label))));
  return h(React.Fragment,null,h('div',{className:'intro'},h('a',{href:'#'},'← All products'),h('span',null,soho?'SOHO package':'Full bed set')),
    h('div',{className:'builder-heading'},h('span',{className:'eyebrow'},soho?'One room. Your way.':'Made for each other'),h('h1',null,soho?'Build your SOHO.':'Build Your Bed.'),h('p',null,soho?'A place to rest, lounge and live. Bring your bed set and sofa together.':'Match a SonoFlex mattress with a SonoFrame bed. One size, your fabric, a clear total.'),h('a',{className:'text-link',href:'#'+(soho?'build-your-bed':'soho')+'?'+params},soho?'Build a bed set only →':'Add a sofa · explore SOHO →')),
    h('div',{className:'package-layout'},h('section',{className:'package-preview','aria-label':'Package preview'},soho?h(RoomIllustration,{sofa,fabric:sofaFabric,bed,mattress,bedFabric,size,orientation}):h(BedSetVisual,{bed,mattress,fabric:bedFabric,size}),h('p',{className:'photo-note'},soho?'Room concept illustration. Bed footprint is approximate; sofa dimensions are scaled. TV, console, rug and table are styling references, not included.':'Heights use the supplied measurements. Perspective, footprint and fabric colours are approximate; confirm the finished set in store.'),soho&&h('div',{className:'package-product-previews'},h(BedSetVisual,{bed,mattress,fabric:bedFabric,size}),h(ProductVisual,{src:sofa.cutout,fabric:sofa.fabrics[sofaFabric],mirror:orientation==='Right',alt:sofa.name}))),
      h('aside',{className:'package-options','aria-label':'Package options'},h(RadioGroup,{title:'Choose your size',name:'package-size',options:mattress.sizes,value:size,onChange:setSize}),
        select('Mattress',mattressSlug,setMattress,mattresses.map(p=>[p.slug,`${p.name} · ${p.firmness}/10 · ${money(priceFor(p,size))}`])),
        select('Bed frame',bedSlug,v=>{setBed(v);setBedFabric(beds.find(p=>p.slug===v).defaultFabric||0);},beds.map(p=>[p.slug,`${p.name} · ${money(priceFor(p,size))}`])),
        select('Bed fabric',bedFabric,v=>setBedFabric(Number(v)),bed.fabrics.map((f,i)=>[i,`${f.family||''} ${f.name} · ${f.code}`])),
        h('div',{className:'builder-swatch',style:bed.fabrics[bedFabric].swatch?{backgroundImage:`url("${bed.fabrics[bedFabric].swatch}")`}:{backgroundColor:'#e6dec5'}},h('span',null,bed.fabrics[bedFabric].code)),
        soho&&h(React.Fragment,null,select('Sofa',sofaSlug,setSofa,sofas.map(p=>[p.slug,`${p.name} · ${money(priceFor(p,size,sofaFabric))}`])),select('Sofa fabric',sofaFabric,v=>setSofaFabric(Number(v)),sofa.fabrics.map((f,i)=>[i,`${f.family} ${f.name} · ${f.code}${sofa.includedFabrics.includes(f.code)?'':' +RM 250'}`])),sofa.orientations&&h(RadioGroup,{title:'Choose your chaise',name:'package-chaise',options:sofa.orientations,value:orientation,onChange:setOrientation})),
        h('div',{className:'package-total','aria-live':'polite'},h('div',null,h('span',null,mattress.name+' · '+size),h('strong',null,money(priceFor(mattress,size)))),h('div',null,h('span',null,bed.name+' · '+size),h('strong',null,money(priceFor(bed,size)))),soho&&h('div',null,h('span',null,sofa.name),h('strong',null,money(priceFor(sofa,size,sofaFabric)))),h('div',{className:'total-row'},h('span',null,'Package total'),h('strong',{'data-total':total},money(total))),h('p',{className:'small-note'},'Sum of selected items. Delivery, availability and any bed-fabric surcharge to confirm. No package discount applied.')),
        h(Button,{variant:'solid',full:true,onClick:async()=>{try{await navigator.clipboard.writeText(window.mhTranslate(summary));setCopied(true);}catch{setFallback(true);}}},copied?'Package copied':'Copy package for a quote'),fallback&&h('textarea',{readOnly:true,value:window.mhTranslate(summary),rows:8,'aria-label':'Package summary'}))));
}
