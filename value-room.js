/* Your Space: shared catalogue, prices, bed renderer and Shopify cart mapping.
   No second product catalogue. Exact mattress footprints confirmed by owner 2026-10-09. */
window.mhValueRoom = (() => {
  const e = React.createElement, {useState, useEffect, useRef} = React;
  const mattresses = window.showroomProducts.filter(p => p.category === 'Mattresses');
  const beds = window.showroomProducts.filter(p => p.category === 'Bed frames');
  const dimensions = {Single:[91,190], 'Super Single':[107,190], Queen:[152,190], King:[183,190]};
  const words = {
    promise:['DEALER PRICE. FOR EVERYONE.','人人享有经销商价格。','HARGA PENGEDAR. UNTUK SEMUA.'],
    title:['See what your budget brings home.','看看你的预算，能带回怎样的家。','Lihat apa yang bajet anda boleh bawa pulang.'],
    intro:['Match your mattress and bed frame, with every price in view.','床垫与床架一起搭，每一笔价格都清清楚楚。','Padankan tilam dan rangka katil, dengan harga yang jelas.'],
    start:['Build my space','打造我的空间','Bina ruang saya'], all:['Shop all products','浏览所有产品','Lihat semua produk'],
    queenSet:['Queen bed set from','Queen 床组起价','Set katil Queen dari'],
    yourSpace:['Your space, your budget.','你的空间，你的预算。','Ruang anda, bajet anda.'],
    sub:['Start simple. Change what matters to you.','从简单开始，把预算花在你在意的地方。','Mulakan dengan asas. Pilih apa yang penting bagi anda.'],
    budgetStep:['Your budget','你的预算','Bajet anda'], choiceStep:['Make it yours','自由搭配','Jadikan milik anda'], finalStep:['Bring it home','带回家','Bawa pulang'],
    what:['What are we furnishing?','你想添置什么？','Apa yang anda perlukan?'], mattressOnly:['Just a mattress','只要床垫','Tilam sahaja'], bedSet:['A full bed set','床垫 + 床架','Set katil lengkap'],
    size:['Your size','选择尺寸','Saiz anda'], budget:['Your product budget','你的产品预算','Bajet produk anda'], budgetHint:['For the selected products, before delivery and any applicable tax.','仅用于所选产品，不含运费及适用税费。','Untuk produk pilihan, sebelum penghantaran dan cukai yang berkenaan.'],
    see:['See my options','查看我的选择','Lihat pilihan saya'], simple:['We start with the lowest-priced combination in this size. You decide what is worth adding.','先从这个尺寸中价格最低的组合开始。是否升级，由你决定。','Kami bermula dengan gabungan harga terendah bagi saiz ini. Anda tentukan apa yang berbaloi untuk ditambah.'],
    mattress:['Mattress','床垫','Tilam'], frame:['Bed frame','床架','Rangka katil'], fabric:['Fabric','面料','Fabrik'],
    choose:['Choose what matters.','选择你在意的。','Pilih apa yang penting.'], deltaHint:['Every price difference is relative to your current selection.','价差均以你当前的选择为比较基准。','Setiap beza harga dibandingkan dengan pilihan semasa anda.'],
    selected:['Selected','已选','Dipilih'], samePrice:['Same price','价格相同','Harga sama'], over:['above budget','超出预算','melebihi bajet'], left:['within your budget','低于预算','di bawah bajet'],
    exactBudget:['Right on your budget','刚好符合预算','Tepat pada bajet'], productTotal:['Your product total','产品总价','Jumlah produk anda'],
    review:['Review my selection','查看我的搭配','Semak pilihan saya'], editBudget:['Edit budget','修改预算','Ubah bajet'], back:['Back to choices','返回搭配','Kembali ke pilihan'],
    firm:['Firmness','软硬度','Kekerasan'], firmNote:['10 is firmest. Comfort is personal.','10 为最硬。舒适感因人而异。','10 paling keras. Keselesaan bergantung pada individu.'],
    sizeSingle:['Single','单人','Single'], sizeSuper:['Super Single','加大单人','Super Single'], sizeQueen:['Queen','Queen 双人','Queen'], sizeKing:['King','King 双人','King'],
    day:['Daylight','日间','Siang'], evening:['Evening','夜间','Malam'], room:['Room view','房间视图','Paparan bilik'], inside:['Look inside','看看里面','Lihat di dalam'],
    insideTitle:['Know what you are paying for.','看清每一层的价值。','Kenali apa yang anda bayar.'], construction:['Construction illustration. Key materials shown.','结构示意图，展示主要材料。','Ilustrasi binaan. Bahan utama ditunjukkan.'],
    pictureNote:['Real product imagery in an illustrative room. Styling is not included.','真实产品图像，房间仅作示意。装饰品不包括在内。','Imej produk sebenar dalam bilik ilustrasi. Hiasan tidak termasuk.'],
    renderNote:['Colour is a visual guide. Confirm your fabric with an actual swatch.','颜色效果仅供参考，请以实物色卡确认面料。','Warna sebagai panduan visual. Sahkan fabrik dengan sampel sebenar.'],
    roomLabel:['Your selected mattress and bed frame','你所选的床垫及床架','Tilam dan rangka katil pilihan anda'],
    fullPrice:['Selected fabric included in the listed frame price.','所选面料已包含在床架标价内。','Fabrik pilihan termasuk dalam harga rangka yang disenaraikan.'],
    fit:['Will it fit?','尺寸合适吗？','Adakah ia muat?'], after:['After I buy?','购买之后呢？','Selepas membeli?'], close:['Close','关闭','Tutup'],
    fitTitle:['A good fit starts with centimetres.','合不合适，看厘米。','Padanan yang tepat bermula dengan sentimeter.'],
    fitIntro:['Compare your existing frame’s usable mattress space with the selected mattress. Measure the inside, not the outer frame.','将现有床架可放置床垫的空间，与所选床垫比较。请量内部空间，而非床架外缘。','Bandingkan ruang tilam yang boleh digunakan pada rangka anda dengan tilam pilihan. Ukur bahagian dalam, bukan luar rangka.'],
    width:['Inside width (cm)','内部宽度（厘米）','Lebar dalaman (cm)'], length:['Inside length (cm)','内部长度（厘米）','Panjang dalaman (cm)'],
    measured:['Selected mattress','所选床垫','Tilam pilihan'], existing:['Your frame space','你的床架空间','Ruang rangka anda'],
    exact:['Dimensions match.','尺寸一致。','Dimensi sepadan.'], fits:['Fits within these dimensions.','可放入此尺寸的空间。','Muat dalam dimensi ini.'], notFit:['This mattress exceeds the space entered.','这张床垫超出你输入的空间。','Tilam ini melebihi ruang yang dimasukkan.'],
    invalid:['Enter both measurements between 50 and 300 cm.','请输入 50 至 300 厘米之间的宽度和长度。','Masukkan kedua-dua ukuran antara 50 hingga 300 cm.'],
    gap:['Total gap','总空隙','Jumlah ruang baki'], excess:['Exceeds by','超出','Lebihan sebanyak'], widthWord:['width','宽','lebar'], lengthWord:['length','长','panjang'],
    fitNote:['A dimension comparison, not an installation guarantee. Check frame tolerances, support, access and finished measurements before ordering.','此为尺寸比较，不是安装保证。下单前请确认床架公差、支撑、搬运通道及成品尺寸。','Perbandingan dimensi, bukan jaminan pemasangan. Semak toleransi rangka, sokongan, laluan masuk dan ukuran siap sebelum memesan.'],
    setFit:['Matched SonoFrame size: the base is selected for the same mattress size. Outer dimensions and access still need checking.','搭配的 SonoFrame 底座采用相同床垫尺寸。仍需确认床架外部尺寸及搬运通道。','Saiz SonoFrame dipadankan dengan saiz tilam yang sama. Dimensi luar dan laluan masuk masih perlu diperiksa.'],
    afterTitle:['Know who helps after delivery.','送达之后，也知道找谁。','Tahu siapa yang membantu selepas penghantaran.'],
    warranty:['Mattress warranty','床垫保修','Waranti tilam'], warrantyCopy:['Read the selected mattress’s warranty coverage and claim conditions before buying. Bed frames have no published warranty term.','购买前请阅读所选床垫的保修范围及申请条件。床架目前没有公布保修期限。','Baca perlindungan dan syarat tuntutan waranti tilam pilihan sebelum membeli. Rangka katil tidak mempunyai tempoh waranti yang diterbitkan.'],
    terms:['View this mattress on the store','前往商店查看此床垫','Lihat tilam ini di kedai'], delivery:['Delivery and setup','配送与安装','Penghantaran dan pemasangan'],
    deliveryCopy:['Shopify confirms delivery, applicable tax and availability for your address. Ask us about access, stairs, assembly or disposal before ordering.','Shopify 会根据你的地址确认配送、适用税费及库存。下单前可咨询搬运通道、楼梯、安装及旧家具处理。','Shopify mengesahkan penghantaran, cukai berkenaan dan ketersediaan untuk alamat anda. Tanya tentang laluan masuk, tangga, pemasangan atau pelupusan sebelum memesan.'],
    ask:['Ask MattressHub','咨询 MattressHub','Tanya MattressHub'], comfort:['Want to try the feel?','想亲自感受吗？','Mahu cuba keselesaannya?'],
    comfortCopy:['Contact us to check which models are available to view or try, and where. Online illustrations cannot reproduce physical comfort.','请联系我们，确认哪些型号可到场查看或试躺，以及地点。网上示意无法代替真实触感。','Hubungi kami untuk menyemak model yang boleh dilihat atau dicuba serta lokasinya. Ilustrasi dalam talian tidak dapat menggantikan rasa sebenar.'],
    tradeoff:['If compression is the upgrade, why aren’t all premium mattresses boxed?','压缩真是升级，为什么高端床垫没全装进盒子？','Kalau tilam mampat lebih bagus, kenapa bukan semua tilam premium dibuat begitu?'],
    tradeoffCopy:['The mattress has to survive compression and recover properly. Demand the foam density, spring construction and written cover for failed recovery. A slick unboxing video proves none of that.','压得下去，还得恢复到位。泡棉密度多少？弹簧怎么做？拆开恢复不了，保修管不管？要白纸黑字，别只看拆箱有多爽。','Boleh mampat, belum tentu pulih sempurna. Minta ketumpatan buih, butiran spring dan jaminan bertulis jika gagal mengembang semula. Video unboxing cantik tak jawab semua itu.'],
    compareNote:['Pay for comfort and support you can verify. Make the seller prove the value.','钱花在用料与支撑上。值不值，让卖家拿出依据。','Anda bayar untuk tidur selesa. Biar bahan dan sokongan buktikan nilainya.'],
    finalTitle:['Your bed. Every item accounted for.','你的床组，每一项都清楚。','Katil anda. Setiap item jelas.'],
    noBundle:['Sum of selected products. No package discount applied. Delivery and applicable tax are confirmed on Shopify.','所选产品价格相加，未套用配套折扣。运费及适用税费在 Shopify 确认。','Jumlah harga produk pilihan. Tiada diskaun pakej dikenakan. Penghantaran dan cukai berkenaan disahkan di Shopify.'],
    buy:['Add to cart on mattresshub.co','加入 mattresshub.co 购物车','Tambah ke troli di mattresshub.co'], cartNote:['Opens your selection in the mattresshub.co cart in a new tab. Shopify checks current price and availability.','将在新标签页打开 mattresshub.co 购物车。Shopify 会检查当前价格及库存。','Membuka pilihan anda dalam troli mattresshub.co pada tab baharu. Shopify menyemak harga dan ketersediaan semasa.'],
    buyShort:['Add to cart','加入购物车','Tambah ke troli'],
    share:['Share my selection','分享我的搭配','Kongsi pilihan saya'], copied:['Link copied','链接已复制','Pautan disalin'], shareLink:['Copy this selection link','复制此搭配链接','Salin pautan pilihan ini'],
    stay:['Keep within my budget','保持在预算内','Kekal dalam bajet saya'], stayNote:['Returns to the lowest-priced options in your selected size.','恢复为所选尺寸中价格最低的组合。','Kembali ke pilihan harga terendah bagi saiz yang dipilih.'],
    noRush:['Change your mind as often as you like.','慢慢挑，随时改。','Ubah pilihan sekerap yang anda mahu.'],
    allSizes:['Sizes use actual centimetres, not just a size name.','尺寸以实际厘米为准，不只看名称。','Saiz menggunakan sentimeter sebenar, bukan sekadar nama.'],
    hook:['KNOW THIS BEFORE YOU KA-CHING!','他们不说 你不会知道的事','JANGAN DAH BELI, BARU MENYESAL.'],
    guide:['Read the buying checklist','付款前，这份清单先看完','Baca senarai semak sebelum beli'],
    watch:['Watch FAILED Unboxing','看拆箱翻车现场','Tengok unboxing GAGAL'], abroad:['Buying from Pinduoduo?','拼多多买大件？','Beli perabot di Pinduoduo?'],
    videoKicker:['MATTRESS-IN-A-BOX / SOFA-IN-A-BOX','盒装床垫 / 压缩沙发','TILAM / SOFA DALAM KOTAK'],
    abroadKicker:['PINDUODUO / OVERSEAS BUYING','拼多多 / 海外网购','PINDUODUO / BELIAN LUAR NEGARA'],
    videoTitle:['THEY SAVE ON SHIPPING.\nYOU HAVE TO TAKE THE RISK.','他们省运费。\n风险你来扛。','MEREKA JIMAT KOS HANTAR.\nANDA PULA TANGGUNG RISIKO.'],
    videoPain:['Doesn’t expand properly? Feels wrong? Who takes it back, and who pays?','拆了不回弹？睡了不舒服？谁来收，谁买单？','Dah buka, tak kembang elok? Tidur tak selesa? Siapa ambil balik, siapa bayar?'],
    videoSetup:['You still have to lift it, open it and set it up unless setup is included. Check that before you pay.','不包安装，就得自己搬、自己拆、自己摆。别付了钱，才发现这些也归你。','Kalau tak termasuk pemasangan, anda sendiri kena angkat, buka dan susun. Jangan dah bayar, baru tahu semuanya kena buat sendiri.'],
    videoNote:['An unboxing compilation by @robbie-ranks, in English. It shows handling mishaps, not a durability test.','@robbie-ranks 的英语拆箱合集，展示搬运与拆封失误，并非耐用性测试。','Kompilasi unboxing @robbie-ranks dalam bahasa Inggeris. Menunjukkan kesilapan semasa mengendalikan tilam, bukan ujian ketahanan.'],
    videoSource:['Watch on YouTube','在 YouTube 观看','Tonton di YouTube'], lookActual:['See inside your selected mattress','看看你所选床垫的内部','Tengok isi tilam pilihan saya'],
    abroadTitle:['CHEAP TO BUY.\nEXPENSIVE TO FIX?','下单图便宜。\n出事才知贵。','INGAT DAPAT MURAH.\nKALAU ROSAK, SIAPA SUSAH?'],
    abroadIntro:['That bargain can become your problem the moment it arrives.','大件买错，省下的钱够不够收拾烂摊子？','Tersalah beli perabot, duit yang konon dijimatkan boleh habis untuk urus masalah.'],
    abroadSize:['It arrives. It doesn’t fit.','货到了，尺寸对不上。','Dah sampai. Baru tahu saiz tak kena.'],
    abroadSizeCopy:['“Queen” won’t close a gap or fix an overhang. Match the centimetres. Our Queen: 152 × 190 cm.','都叫 Queen，不代表一样大。别买回来才发现留条缝、凸一截。我们的 Queen：152 × 190 厘米。','Sama-sama nama Queen, belum tentu sama ukuran. Jangan nanti tilam terjulur atau ada ruang kosong. Queen kami: 152 × 190 cm.'],
    abroadCost:['Still cheap after the shipping bill?','运费一加，还叫捡便宜？','Campur semua caj. Masih murah?'],
    abroadCostCopy:['Freight. Tax. Local delivery. Stairs. Assembly. Add every applicable charge. Still a bargain?','运费、税费、送货、上楼、安装，哪些另收费？全部算完，再看省了多少。','Kos hantar, cukai, angkat naik rumah, pemasangan. Mana yang kena bayar asing? Kira harga sampai rumah, bukan harga iklan sahaja.'],
    abroadClaim:['Damaged on arrival. Who pays now?','坏了要退，运费谁出？','Barang rosak. Nak pulangkan, siapa bayar?'],
    abroadClaimCopy:['Ship a whole sofa back overseas? Get it in writing: who handles the claim, who collects it, and who pays.','真要跨国退货，整张沙发谁来收，运费谁来出？让卖家把售后和费用责任写清楚。','Kalau satu sofa kena hantar balik ke luar negara, siapa ambil dan siapa tanggung kos? Minta penjual tulis siapa urus tuntutan dan pemulangan.'],
    abroadFoot:['Get the delivered total and the claims process in writing. Then compare the deal.','到家一共多少钱？出了问题找谁？白纸黑字拿到手，再付款。','Berapa jumlah sampai rumah? Kalau ada masalah, cari siapa? Dapatkan hitam putih sebelum bayar.'],
    abroadCta:['See my bed set & price','我的床组，一共多少钱？','Tengok set katil & harganya']
  };
  const t = key => words[key][{en:0,zh:1,ms:2}[window.showroomLanguage] || 0];
  const tr = text => window.mhTranslate(text);
  const find = slug => window.showroomProducts.find(p => p.slug === slug);
  function normalise(input) {
    const s = {...input};
    s.mode = s.mode === 'mattress' ? 'mattress' : 'set';
    s.size = Object.hasOwn(dimensions, s.size) ? s.size : 'Queen';
    s.mattress = mattresses.some(p=>p.slug===s.mattress) ? s.mattress : 'essential';
    s.bed = beds.some(p=>p.slug===s.bed) ? s.bed : 'cozy';
    const b=find(s.bed), f=Number(s.fabric);
    s.fabric=Number.isInteger(f)&&f>=0&&f<b.fabrics.length ? f : b.defaultFabric||0;
    const budget=Number(s.budget); s.budget=Number.isFinite(budget)&&budget>=0&&s.budget!=='' ? Math.min(5000,Math.round(budget)) : 1200;
    s.step=[0,1,2].includes(Number(s.step)) ? Number(s.step) : 0;
    return {mode:s.mode,size:s.size,mattress:s.mattress,bed:s.bed,fabric:s.fabric,budget:s.budget,step:s.step};
  }
  const total = s => priceFor(find(s.mattress),s.size)+(s.mode==='set'?priceFor(find(s.bed),s.size,s.fabric):0);
  function fit(size,w,l) {
    if(!Object.hasOwn(dimensions,size)||![w,l].every(n=>Number.isFinite(Number(n))&&Number(n)>=50&&Number(n)<=300))return null;
    const [mw,ml]=dimensions[size]; return {width:Number(w)-mw,length:Number(l)-ml,fits:Number(w)>=mw&&Number(l)>=ml};
  }
  const sizeText = size => t({Single:'sizeSingle','Super Single':'sizeSuper',Queen:'sizeQueen',King:'sizeKing'}[size]);
  const button = (label, action, cls='', attrs={}) => e('button',{type:'button',className:cls,onClick:action,...attrs},label);
  const event = (action,s) => window.dispatchEvent(new CustomEvent('mh:value-room',{detail:{action,mode:s.mode,size:s.size,mattress:s.mattress,bed:s.mode==='set'?s.bed:null,language:window.showroomLanguage}}));
  function Scene({s,inside=false,night=false,small=false}) {
    const mattress=find(s.mattress),bed=find(s.bed);
    return e('div',{className:`vr-scene ${inside?'is-inside':''} ${night?'is-night':''} ${small?'is-small':''}`,'data-mattress':s.mattress,'data-bed':s.mode==='set'?s.bed:'none'},
      e('div',{className:'vr-architecture','aria-hidden':true},e('div',{className:'vr-floor'}),e('div',{className:'vr-window'}),e('div',{className:'vr-sunlight'}),e('div',{className:'vr-art'},e('i'),e('i')),e('div',{className:'vr-pendant'}),e('div',{className:'vr-rug'}),e('div',{className:'vr-table'})),
      e('div',{className:`vr-furniture ${s.mode==='mattress'?'only-mattress':''}`,key:s.mattress+s.bed+s.fabric+s.mode},s.mode==='set'?e(BedSetVisual,{bed,mattress,size:s.size,fabric:s.fabric}):e(ProductVisual,{src:mattress.views[0].src,alt:mattress.name})),
      inside&&e('div',{className:'vr-cutaway',key:s.mattress},e('img',{src:mattress.views[1].src,alt:`${mattress.name}: ${t('construction')}`}),e('div',{className:'vr-layer-copy'},e('span',{className:'vr-kicker'},'SONOFLEX SIGNATURE'),e('h3',null,mattress.name),e('ol',null,...mattress.layers.map((layer,i)=>e('li',{key:layer,style:{'--i':i}},e('span',null,String(i+1).padStart(2,'0')),e('strong',null,tr(layer))))))),
      !small&&e('div',{className:'vr-scene-caption'},inside?t('construction'):t('pictureNote')));
  }
  function RealityCheck({onInside,onReview}) {
    const [open,setOpen]=useState(null),ref=useRef(null),id=React.useId();
    useEffect(()=>{if(open&&!ref.current.open)ref.current.showModal();else if(!open&&ref.current.open)ref.current.close();},[open]);
    return e(React.Fragment,null,e('div',{className:'vr-hook'},e('div',{className:'vr-hook-heading'},e('span',{className:'vr-warning-mark','aria-hidden':true},'!'),e('strong',null,t('hook'))),e('div',{className:'vr-hook-actions'},button('▷ '+t('watch'),()=>setOpen('video')),button(t('abroad'),()=>setOpen('abroad')))),
      e('dialog',{ref,className:'vr-dialog vr-warning '+(open==='video'?'vr-warning-video':''),onClose:()=>setOpen(null),onClick:ev=>{if(ev.target===ref.current)setOpen(null);},'aria-labelledby':id},
        e('div',{className:'vr-dialog-head'},e('div',null,e('span',{className:'vr-warning-kicker'},t(open==='video'?'videoKicker':'abroadKicker')),e('h2',{id},...t(open==='video'?'videoTitle':'abroadTitle').split('\n').map((line,i)=>e('span',{key:i},line)))),button('×',()=>setOpen(null),'vr-close',{'aria-label':t('close')})),
        e('div',{className:'vr-warning-body'},open==='video'?e('div',{className:'vr-video-content'},
          e('div',{className:'vr-player'},e('iframe',{className:'vr-video',src:'https://www.youtube-nocookie.com/embed/eLAztzPlb1I?rel=0',title:t('watch'),allow:'encrypted-media; picture-in-picture; fullscreen',allowFullScreen:true,referrerPolicy:'strict-origin-when-cross-origin'}),e('div',{className:'vr-hook-source'},e('small',null,t('videoNote')),e('a',{href:'https://www.youtube.com/shorts/eLAztzPlb1I',target:'_blank',rel:'noopener'},t('videoSource')))),
          e('div',{className:'vr-video-copy'},e('h3',null,t('videoPain')),e('p',null,t('videoSetup')),e('details',{className:'vr-tradeoff'},e('summary',null,t('tradeoff')),e('p',null,t('tradeoffCopy')),e('small',null,t('compareNote'))))):
          e(React.Fragment,null,e('p',{className:'vr-warning-intro'},t('abroadIntro')),e('ol',{className:'vr-overseas-list'},...['Size','Cost','Claim'].map(key=>e('li',{key},e('h3',null,t('abroad'+key)),e('p',null,t('abroad'+key+'Copy'))))),e('small',null,t('abroadFoot'))),e('p',{className:'vr-guide-link'},e('a',{href:guideUrl(open==='video'?'mattress-in-a-box-malaysia':'pinduoduo-furniture-malaysia')},t('guide'),' →'))),
        e('div',{className:'vr-warning-footer'},open==='abroad'?(onReview?button(t('abroadCta')+' ↗',()=>{setOpen(null);onReview();},'vr-primary vr-wide'):e('a',{className:'vr-primary vr-wide',href:showroomUrl('your-space')},t('abroadCta'),' ↗')):
          onInside?button(t('lookActual')+' ↗',()=>{setOpen(null);onInside();},'vr-primary vr-wide'):e('a',{className:'vr-primary vr-wide',href:showroomUrl('your-space','step=1&view=inside')},t('lookActual'),' ↗'))));
  }
  function Teaser() {
    const s=normalise({size:'Queen',budget:1200});
    return e(React.Fragment,null,e('section',{className:'vr-teaser'},e('div',{className:'vr-teaser-copy'},e('span',{className:'vr-kicker'},t('promise')),e('h1',null,t('title')),e('p',null,t('intro')),e('div',{className:'vr-teaser-actions'},e('a',{className:'vr-primary',href:showroomUrl('your-space')},t('start'),e('span',{'aria-hidden':true},'↗')),e('a',{href:'#catalogue',onClick:ev=>{ev.preventDefault();document.getElementById('catalogue').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}},t('all')))),
      e('a',{className:'vr-teaser-scene',href:showroomUrl('your-space'),'aria-label':t('start')},e(Scene,{s,small:true}),e('div',{className:'vr-teaser-price'},e('span',null,t('queenSet')),e('strong',null,money(total(s))),e('small',null,'Essential + Cozy')))),e(RealityCheck));
  }
  function Room() {
    const [s,set]=useState(()=>normalise(Object.fromEntries(routeQuery()))),[tab,setTab]=useState('mattress'),[inside,setInside]=useState(()=>routeQuery().get('view')==='inside'),[night,setNight]=useState(false),[panel,setPanel]=useState(null),[copied,setCopied]=useState(false),[fallback,setFallback]=useState(false);
    const [w,setW]=useState(''),[l,setL]=useState(''),dialog=useRef(null),heading=useRef(null);
    const mattress=find(s.mattress),bed=find(s.bed),amount=total(s),remaining=s.budget-amount;
    const params=new URLSearchParams({...s}),shareURL=showroomUrl('your-space',params);
    useEffect(()=>{history.replaceState(null,'',shareURL);setCopied(false);setFallback(false);},[shareURL]);
    useEffect(()=>{if(panel&&!dialog.current.open)dialog.current.showModal();else if(!panel&&dialog.current.open)dialog.current.close();},[panel]);
    const update = patch => set(old=>normalise({...old,...patch}));
    const changeStep = step => {update({step});event('step-'+step,s);requestAnimationFrame(()=>{heading.current?.focus({preventScroll:true});if(matchMedia('(max-width:760px)').matches)heading.current?.closest('.vr-controls').scrollIntoView({behavior:'instant',block:'start'});});};
    const cheapest = () => {const m=[...mattresses].sort((a,b)=>priceFor(a,s.size)-priceFor(b,s.size))[0],b=[...beds].sort((a,b)=>priceFor(a,s.size)-priceFor(b,s.size))[0];update({mattress:m.slug,bed:b.slug,fabric:b.defaultFabric||0});};
    const selectedItems=[window.mhStore.item(mattress,{size:s.size,pack:s.mode==='set'?'Bed set':undefined}),...(s.mode==='set'?[window.mhStore.item(bed,{size:s.size,fabric:s.fabric,pack:'Bed set'})]:[])];
    const cart=window.mhStore.url(selectedItems,s.mode==='set'?'Bed set':undefined);
    const f=fit(s.size,w,l),[mw,ml]=dimensions[s.size];
    const fitExtent=Math.max(mw,ml,f?Number(w):mw+14,f?Number(l):ml+14);
    const share=async()=>{event('share',s);try{await navigator.clipboard.writeText(shareURL);setCopied(true);}catch{setFallback(true);}};
    const selectProduct=p=>{update(p.category==='Mattresses'?{mattress:p.slug}:{bed:p.slug,fabric:p.defaultFabric||0});event('select-'+p.slug,s);};
    function options() {
      if(tab==='fabric'&&s.mode==='set')return e('div',{className:'vr-fabrics'},e('div',{className:'vr-fabric-sample',style:{background:bed.fabrics[s.fabric].hex|| (s.fabric?'#777b7b':'#e7dfc9'),backgroundImage:bed.fabrics[s.fabric].swatch?`url("${bed.fabrics[s.fabric].swatch}")`:undefined}},e('span',null,bed.fabrics[s.fabric].code)),e('label',null,t('fabric'),e('select',{value:s.fabric,onChange:ev=>update({fabric:Number(ev.target.value)})},...bed.fabrics.map((f,i)=>e('option',{key:f.code,value:i},`${f.code} · ${tr(f.name)}`)))),e('p',null,t('fullPrice')),e('small',null,t('renderNote')));
      return e('div',{className:'vr-options',role:'group','aria-label':tab==='frame'?t('frame'):t('mattress')},...(tab==='frame'&&s.mode==='set'?beds:mattresses).map(p=>{
        const picked=p.slug===(tab==='frame'?s.bed:s.mattress),difference=priceFor(p,s.size)-priceFor(tab==='frame'?bed:mattress,s.size);
        return e('button',{type:'button',key:p.slug,'data-product':p.slug,'aria-pressed':picked,onClick:()=>selectProduct(p)},e(ProductVisual,{src:p.views[0].src,alt:p.name}),e('span',{className:'vr-option-text'},e('strong',null,p.name),e('small',null,p.firmness?`${p.thickness}″ · ${t('firm')} ${p.firmness}/10`:tr(p.premium?'Pet-friendly premium fabric':'Upholstered bed frame')),e('span',{className:'vr-option-price'},money(priceFor(p,s.size)))),e('span',{className:'vr-delta'},picked?t('selected'):difference===0?t('samePrice'):(difference>0?'+':'−')+money(Math.abs(difference)),!picked&&amount+difference>s.budget&&e('small',null,t('over'))));
      }));
    }
    return e('div',{className:'vr-page'},e('div',{className:'vr-heading'},e('div',null,e('span',{className:'vr-kicker'},t('promise')),e('h1',null,t('yourSpace')),e('p',null,t('sub'))),e('a',{className:'vr-all',href:showroomUrl()},t('all'),' ↗')),
      e('nav',{className:'vr-steps','aria-label':t('yourSpace')},...['budgetStep','choiceStep','finalStep'].map((key,i)=>e('button',{key,type:'button','aria-current':s.step===i?'step':undefined,onClick:()=>changeStep(i)},e('span',null,'0'+(i+1)),t(key)))),
      e('div',{className:'vr-layout'},e('div',{className:'vr-stage-column'},e('div',{className:'vr-stage-top'},e('div',null,e('span',{className:'vr-kicker'},s.mode==='set'?'SONOFLEX SIGNATURE + SONOFRAME':'SONOFLEX SIGNATURE'),e('h2',null,mattress.name,s.mode==='set'?' + '+bed.name:''),e('span',{className:'vr-size-note'},sizeText(s.size),' · ',mw,' × ',ml,' cm')),button(night?t('day'):t('evening'),()=>setNight(!night),'vr-light',{'aria-pressed':night})),
        e(Scene,{s,inside,night}),e('div',{className:'vr-view-controls'},button(inside?t('room'):t('inside'),()=>{setInside(!inside);event('inside',s);},'vr-view-button',{'aria-pressed':inside}),button(t('fit'),()=>{setPanel('fit');event('fit',s);},'vr-view-button'),button(t('after'),()=>{setPanel('after');event('aftercare',s);},'vr-view-button')),
        e('div',{className:'vr-stage-message'},e('span',{className:'vr-feel-number'},mattress.firmness,e('small',null,'/10')),e('div',null,e('strong',null,t('firm')),e('span',null,t('firmNote'))),e('span',{className:'vr-material'},tr(mattress.layers[0])))),
      e('section',{className:'vr-controls','aria-label':t('choiceStep')},e('h2',{ref:heading,tabIndex:-1},t(s.step===0?'what':s.step===1?'choose':'finalTitle')),
        s.step===0?e(React.Fragment,null,e('div',{className:'vr-segment',role:'group','aria-label':t('what')},...['mattress','set'].map(mode=>button(t(mode==='set'?'bedSet':'mattressOnly'),()=>{update({mode});setTab('mattress');},'',{key:mode,'aria-pressed':s.mode===mode}))),
          e('label',{className:'vr-field'},t('size'),e('select',{value:s.size,onChange:ev=>update({size:ev.target.value})},...Object.keys(dimensions).map(size=>e('option',{key:size,value:size},`${sizeText(size)} · ${dimensions[size].join(' × ')} cm`)))),
          e('label',{className:'vr-field vr-budget-label'},t('budget'),e('span',{className:'vr-budget-input'},e('span',null,'RM'),e('input',{type:'number',min:0,max:5000,step:1,value:s.budget,onChange:ev=>update({budget:ev.target.value}),inputMode:'numeric'}))),
          e('input',{className:'vr-budget-slider',type:'range',min:0,max:5000,step:50,value:s.budget,'aria-label':t('budget'),onChange:ev=>update({budget:ev.target.value}),style:{'--progress':s.budget/50+'%'}}),e('small',{className:'vr-muted'},t('budgetHint')),e('p',{className:'vr-start-note'},t('simple')),button(t('see')+' ↗',()=>changeStep(1),'vr-primary vr-wide')):
        s.step===1?e(React.Fragment,null,e('p',{className:'vr-muted'},t('deltaHint')),e('div',{className:'vr-segment vr-tabs',role:'group','aria-label':t('choose')},...(s.mode==='set'?['mattress','frame','fabric']:['mattress']).map(key=>button(t(key),()=>setTab(key),'',{'aria-pressed':tab===key,key}))),options(),button(t('review')+' ↗',()=>changeStep(2),'vr-primary vr-wide'),button(t('editBudget'),()=>changeStep(0),'vr-text-button')):
        e(React.Fragment,null,e('div',{className:'vr-receipt'},...[[mattress,'mattress'],...(s.mode==='set'?[[bed,'frame']]:[])].map(([p,key])=>e('div',{key:p.slug},e('span',null,e('small',null,t(key)),e('strong',null,p.name),e('small',null,sizeText(s.size),key==='frame'?' · '+bed.fabrics[s.fabric].code:'')),e('b',null,money(priceFor(p,s.size)))))),e('p',{className:'vr-muted'},t('noBundle')),e('a',{href:cart,className:'vr-primary vr-wide',target:'_blank',rel:'noopener',onClick:()=>event('shopify-cart',s)},t('buy'),' ↗'),e('p',{className:'vr-muted vr-cart-note'},t('cartNote')),button(copied?t('copied'):t('share'),share,'vr-share'),fallback&&e('label',{className:'vr-field'},t('shareLink'),e('textarea',{readOnly:true,value:shareURL,rows:3})),button(t('back'),()=>changeStep(1),'vr-text-button')),
        e('div',{className:'vr-tally','aria-live':'polite'},e('div',null,e('span',null,t('productTotal')),e('strong',{'data-value-total':amount},money(amount))),e('p',{className:remaining<0?'over':'under'},remaining===0?t('exactBudget'):money(Math.abs(remaining))+' '+t(remaining<0?'over':'left')),e('div',{className:'vr-budget-track','aria-hidden':true},e('i',{style:{width:Math.min(100,s.budget?amount/s.budget*100:100)+'%'}}))),
        remaining<0&&e('div',{className:'vr-over-help'},button(t('stay'),cheapest,'vr-text-button'),e('small',null,t('stayNote'))))),
      e('div',{className:'vr-cart-bar'},e('div',{className:'vr-cart-selection'},e('strong',null,mattress.name,s.mode==='set'?' + '+bed.name:''),e('span',null,sizeText(s.size),s.mode==='set'?' · '+bed.fabrics[s.fabric].code:'')),e('div',{className:'vr-cart-price','aria-live':'polite'},e('span',null,t('productTotal')),e('strong',null,money(amount))),e('a',{href:cart,target:'_blank',rel:'noopener','aria-label':t('buy'),onClick:()=>event('shopify-cart',s)},e('span',null,t('buyShort'),' ↗'),e('small',null,'mattresshub.co'))),
      e('dialog',{ref:dialog,className:'vr-dialog',onClose:()=>setPanel(null),onClick:ev=>{if(ev.target===dialog.current)setPanel(null);},'aria-labelledby':'vr-dialog-title'},e('div',{className:'vr-dialog-head'},e('h2',{id:'vr-dialog-title'},t(panel==='fit'?'fitTitle':'afterTitle')),button('×',()=>setPanel(null),'vr-close',{'aria-label':t('close')})),panel==='fit'?e(React.Fragment,null,e('p',null,t('fitIntro')),e('div',{className:'vr-fit-fields'},e('label',null,t('width'),e('input',{type:'number',min:50,max:300,value:w,onChange:ev=>setW(ev.target.value),inputMode:'decimal'})),e('label',null,t('length'),e('input',{type:'number',min:50,max:300,value:l,onChange:ev=>setL(ev.target.value),inputMode:'decimal'}))),
        e('div',{className:'vr-fit-diagram','data-fit':f?String(f.fits):'unset'},e('div',{className:'vr-frame-outline',style:{width:(f?Number(w):mw+14)/fitExtent*82+'%',height:(f?Number(l):ml+14)/fitExtent*82+'%'}},e('span',null,t('existing'))),e('div',{className:'vr-mattress-outline',style:{width:mw/fitExtent*82+'%',height:ml/fitExtent*82+'%'}},e('strong',null,sizeText(s.size)),e('span',null,mw+' × '+ml+' cm'))),
        e('div',{className:'vr-fit-result','aria-live':'polite'},f?e(React.Fragment,null,e('strong',null,t(!f.fits?'notFit':f.width===0&&f.length===0?'exact':'fits')),e('p',null,...[['width','widthWord'],['length','lengthWord']].map(([axis,key])=>e('span',{key:axis},t(key)+': '+t(f[axis]<0?'excess':'gap')+' '+Number(Math.abs(f[axis]).toFixed(1))+' cm',e('br'))))):e('p',null,t('invalid'))),s.mode==='set'&&e('p',null,t('setFit')),e('small',null,t('fitNote'))):e(React.Fragment,null,...[['warranty','warrantyCopy'],['delivery','deliveryCopy'],['comfort','comfortCopy']].map(([title,copy])=>e('section',{key:title},e('h3',null,t(title)),e('p',null,t(copy)),title==='warranty'&&e('a',{href:'https://mattresshub.co/products/'+window.mhStore.handles[mattress.slug],target:'_blank',rel:'noopener'},t('terms'),' ↗'))),e('a',{className:'vr-primary',href:'https://wa.me/601121789076',target:'_blank',rel:'noopener'},t('ask'),' ↗'))),
      e(RealityCheck,{onInside:()=>{setInside(true);update({step:1});document.querySelector('.vr-stage-column').scrollIntoView({behavior:'instant',block:'start'});},onReview:()=>changeStep(2)}));
  }
  return {Room,Teaser,dimensions,normalise,total,fit,words};
})();
