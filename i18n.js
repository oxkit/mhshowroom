window.showroomLanguage = (() => { const linked = new URLSearchParams(location.search).get('lang'); if (['en','zh','ms'].includes(linked)) return linked; try { return ['en','zh','ms'].includes(localStorage.getItem('mh-language')) ? localStorage.getItem('mh-language') : 'en'; } catch { return 'en'; } })();
const showroomTranslations = `
The interactive showroom|互动展厅|Bilik pameran interaktif
Find your|寻找属于你的|Temui
kind of comfort.|舒适生活。|keselesaan anda.
Explore the layers. Feel out the fabrics. Make room for something that feels like you.|探索床垫结构、挑选面料，打造属于你的舒适空间。|Terokai lapisan dan fabrik. Cipta ruang yang menepati cita rasa anda.
Try the sofa room planner|试用沙发空间规划器|Cuba perancang ruang sofa
Room to stretch out.|舒展身心的空间。|Ruang untuk bersantai.
All products|所有产品|Semua produk
Mattresses|床垫|Tilam
Bed frames|床架|Rangka katil
Sofas|沙发|Sofa
Build Your Bed|搭配你的床|Bina Katil Anda
The SOHO package|SOHO 配套|Pakej SOHO
Mattress + bed frame|床垫 + 床架|Tilam + rangka katil
Bed set + sofa|全套床组 + 沙发|Set katil + sofa
A few ways to make it yours.|多种搭配，展现你的风格。|Pelbagai pilihan untuk gaya anda.
Pause colour previews|暂停颜色预览|Jeda pratonton warna
Resume colour previews|继续颜色预览|Sambung pratonton warna
Colour visualisation|颜色效果示意|Visualisasi warna
Available finish|可选颜色|Warna tersedia
From |起价 |Dari 
 products| 件产品| produk
Visit the store|前往商店|Lawati kedai
Dealer price for everyone.|人人享有经销商价格。|Harga pengedar untuk semua.
Explore the collection|探索产品系列|Terokai koleksi
Better Sleep, Better Life|好睡眠，好生活|Tidur Lebih Baik, Hidup Lebih Baik
Skip to showroom|跳至展厅|Langkau ke bilik pameran
your way.|你的风格。|gaya anda.
Product view|产品展示|Paparan produk
Inside layers|内部结构|Lapisan dalaman
Angled view|侧面视角|Pandangan bersudut
Front view|正面视角|Pandangan hadapan
Fabric preview|面料预览|Pratonton fabrik
Cream reference|奶油色参考|Rujukan warna krim
Room planner|空间规划器|Perancang ruang
Enlarge image|放大图片|Besarkan imej
Close enlarged image|关闭大图|Tutup imej besar
Explore the layers|探索内部结构|Terokai lapisan
Custom fabrics · +RM250|定制面料 · +RM250|Fabrik pilihan · +RM250
Included premium colours|精选高级配色（已含在售价内）|Warna premium termasuk dalam harga
Creamy or Shadow, included in the sofa price.|Creamy 或 Shadow，已含在沙发售价内。|Creamy atau Shadow, termasuk dalam harga sofa.
Explore custom fabrics · +RM250|探索定制面料 · +RM250|Terokai fabrik pilihan · +RM250
More colours and textures. Add RM250 per sofa.|更多颜色与纹理。每张沙发加 RM250。|Lebih banyak warna dan tekstur. Tambah RM250 bagi setiap sofa.
Choose your fabric|选择面料|Pilih fabrik anda
Choose your size|选择尺寸|Pilih saiz anda
Choose your chaise|选择贵妃位方向|Pilih arah chaise
All|全部|Semua
Single|单人|Single
Super Single|加大单人|Super Single
Queen|双人 Queen|Queen
King|加大双人 King|King
Left|左侧|Kiri
Right|右侧|Kanan
Width|宽度|Lebar
Depth|深度|Kedalaman
Height|高度|Ketinggian
Your selection|你的选择|Pilihan anda
Copy your selection|复制你的选择|Salin pilihan anda
Room studies|房间灵感|Inspirasi bilik
Explore the Room|探索房间|Terokai Bilik
See Cove, Haven and Cloud together in one room. Move between four viewpoints, then make it yours.|在同一个房间里看看 Cove、Haven 和 Cloud。切换四个视角，再打造属于你的组合。|Lihat Cove, Haven dan Cloud bersama dalam satu bilik. Terokai empat sudut pandangan, kemudian jadikannya milik anda.
Step inside the room|走进房间|Masuk ke bilik
The Quiet Room with the Cove sofa, Haven bed frame and Cloud mattress|静谧之屋：Cove 沙发、Haven 床架和 Cloud 床垫|Bilik Tenang dengan sofa Cove, rangka katil Haven dan tilam Cloud
Buy directly on mattresshub.co|在 mattresshub.co 直接购买|Beli terus di mattresshub.co
Opens your cart on mattresshub.co in a new tab.|将在新标签页打开 mattresshub.co 购物车。|Membuka troli anda di mattresshub.co dalam tab baharu.
Buy this bed set on mattresshub.co|在 mattresshub.co 购买此床组|Beli set katil ini di mattresshub.co
Buy this SOHO package on mattresshub.co|在 mattresshub.co 购买此 SOHO 配套|Beli pakej SOHO ini di mattresshub.co
Adds every item to your cart on mattresshub.co, in a new tab.|在新标签页将所有产品加入 mattresshub.co 购物车。|Menambah setiap item ke troli anda di mattresshub.co, dalam tab baharu.
Selection copied|已复制选择|Pilihan disalin
Your choices and a link are ready to paste.|你的选择和链接已准备好粘贴。|Pilihan dan pautan anda sedia untuk ditampal.
Bed frame only. Mattress sold separately. Confirm fabric using actual swatches.|仅含床架。床垫另售。请以实物色卡确认面料。|Rangka katil sahaja. Tilam dijual berasingan. Sahkan fabrik menggunakan sampel sebenar.
Mattress only. Bed frame sold separately.|仅含床垫。床架另售。|Tilam sahaja. Rangka katil dijual berasingan.
Dimensions are overall measurements. Check delivery access and walking space before ordering.|尺寸为整体尺寸。下单前请检查搬运通道和行走空间。|Dimensi ialah ukuran keseluruhan. Semak laluan penghantaran dan ruang berjalan sebelum memesan.
Images show design and construction; proportions vary by size.|图片展示设计和结构；比例随尺寸而异。|Imej menunjukkan reka bentuk dan binaan; nisbah berbeza mengikut saiz.
Colour and texture visualisation. Pattern scale is illustrative; confirm an actual swatch.|颜色与纹理为效果示意。纹理比例仅供参考；请确认实物色卡。|Visualisasi warna dan tekstur. Skala corak adalah ilustrasi; sahkan sampel sebenar.
Cream reference cutout.|奶油色产品参考图。|Imej potongan rujukan warna krim.
Right chaise is a mirrored preview, shown as you face the sofa.|右贵妃位为镜像预览，方向以面对沙发为准。|Chaise kanan ialah pratonton cermin, dilihat ketika menghadap sofa.
Grey photographs are colour visualisations based on MX 012.|灰色图片为基于 MX 012 的颜色效果示意。|Imej kelabu ialah visualisasi warna berdasarkan MX 012.
Creamy / Shadow price|Creamy / Shadow 价格|Harga Creamy / Shadow
Includes RM 250 fabric upgrade|已含 RM 250 面料升级费用|Termasuk naik taraf fabrik RM 250
 price| 价格| harga
Match it · Build Your Bed|搭配床垫与床架|Padankan · Bina Katil Anda
Add a bed set · build a SOHO package|添加床组 · 打造 SOHO 配套|Tambah set katil · bina pakej SOHO
Get a sense of the feel|感受软硬程度|Rasai tahap keselesaan
See how the feel compares.|比较不同的软硬感。|Bandingkan tahap keselesaan.
A little give. A supportive sit.|柔韧适中，稳稳承托。|Sedikit anjal. Sokongan yang selesa.
Watch the same sleeper lie down, settle in and get up. Play both mattresses together to compare.|观察同一位睡者躺下、沉入和起身。同时播放两款床垫以作比较。|Lihat orang yang sama berbaring, mendap dan bangun. Mainkan kedua-dua tilam serentak untuk perbandingan.
Cove, Luxe and Oasis all have a medium firm feel, with foam cushioning over a zigzag spring seat.|Cove、Luxe 和 Oasis 均为中等偏硬，泡棉座垫下配有蛇形弹簧支撑。|Cove, Luxe dan Oasis mempunyai rasa sederhana tegang, dengan kusyen buih di atas tempat duduk spring zigzag.
Let sleeper settle|让睡者躺下|Baringkan pengguna
Lift sleeper|让睡者起身|Bangunkan pengguna
Let sitter settle|让使用者坐下|Dudukkan pengguna
Lift sitter|让使用者起身|Bangunkan pengguna
Pause comfort animation|暂停舒适度动画|Jeda animasi keselesaan
Play comfort animation|播放舒适度动画|Main animasi keselesaan
Lie down|躺下|Berbaring
Settle in|缓缓沉入|Mendap
Rest|休息|Berehat
Get up|起身|Bangun
Surface returns|表面回弹|Permukaan pulih
Sit down|坐下|Duduk
Seated comfort|坐感|Keselesaan duduk
Stand up|站起|Berdiri
Explore the movement|探索动作过程|Terokai pergerakan
Animation progress|动画进度|Kemajuan animasi
Loops with a 3-second rest at each end. Pause to try settle and lift yourself.|每个姿势停留 3 秒并循环播放。暂停后可手动尝试躺下和起身。|Berulang dengan rehat 3 saat pada setiap hujung. Jeda untuk mencuba gerakan secara manual.
Reduced motion: use the slider or switch between still poses.|减少动态效果：使用滑杆或切换静态姿势。|Gerakan dikurangkan: gunakan peluncur atau tukar antara posisi statik.
Compare with|比较对象|Bandingkan dengan
Softer|更柔软|Lebih lembut
Firmer · 10 = floor-like|更硬 · 10 = 如地板般坚硬|Lebih tegang · 10 = seperti lantai
Medium firm|中等偏硬|Sederhana tegang
Illustration · not measured sink depth|示意图 · 非实测下沉深度|Ilustrasi · bukan kedalaman mendapan terukur
Feel confirmed by MattressHub. Movement and timing are illustrative, not measured cushion tests. Try the seat in person to judge your comfort.|坐感由 MattressHub 确认。动作和时间为示意，并非座垫实测。请亲自试坐以判断舒适度。|Rasa disahkan oleh MattressHub. Gerakan dan masa ialah ilustrasi, bukan ujian kusyen terukur. Cuba sendiri untuk menilai keselesaan.
Firmness ratings supplied by MattressHub; 10 is firmest, like a floor. Movement, timing and sinking are illustrative, not measured pressure or predictions for your body. Your weight and sleeping position affect the feel.|软硬度由 MattressHub 提供；10 为最硬，如地板。动作、时间和下沉程度仅作示意，并非实测压力或对你身体的预测。体重和睡姿会影响感受。|Tahap ketegangan dibekalkan oleh MattressHub; 10 paling tegang, seperti lantai. Gerakan, masa dan mendapan ialah ilustrasi, bukan tekanan terukur atau ramalan untuk tubuh anda. Berat dan posisi tidur mempengaruhi rasa.
For a home with paws|为有毛孩的家|Untuk rumah dengan si manja
Life happens.|从容应对日常。|Hidup penuh kejutan.
Your fabric is ready.|面料已准备好。|Fabrik anda bersedia.
Pet-friendly premium fabric for everyday lounging, little spills and four-legged company.|宠物友好高级面料，陪伴日常休闲、小意外和毛孩时光。|Fabrik premium mesra haiwan untuk bersantai, tumpahan kecil dan teman berkaki empat.
Scratch resistant|耐抓|Tahan calar
Water repellent|防泼水|Kalis percikan air
Easy to clean|易清洁|Mudah dibersihkan
Made to resist everyday scratches.|为抵御日常抓痕而设计。|Direka untuk menahan calar harian.
Resistance is not scratch-proofing. Sharp claws and repeated scratching can still damage upholstery.|耐抓不代表完全防抓。尖锐爪子和反复抓挠仍可能损坏面料。|Tahan calar bukan kebal calar. Kuku tajam dan cakaran berulang masih boleh merosakkan upholsteri.
Watch droplets bead on the fabric surface.|观察水滴在面料表面凝聚。|Lihat titisan air berkumpul di permukaan fabrik.
Repellent does not mean waterproof. Blot spills promptly; do not leave liquid sitting on the fabric.|防泼水不等于防水。请及时吸干溢液，不要让液体长时间停留。|Kalis percikan tidak bermakna kalis air sepenuhnya. Serap tumpahan segera; jangan biarkan cecair pada fabrik.
A small everyday spill, followed by a gentle wipe.|日常小溢洒，轻柔擦拭。|Tumpahan kecil harian, diikuti lap lembut.
Follow the fabric care instructions and test cleaning products on a hidden area first.|遵循面料护理说明，并先在隐蔽处测试清洁产品。|Ikut arahan penjagaan fabrik dan uji produk pembersih di kawasan tersembunyi dahulu.
Replay fabric demo|重播面料演示|Main semula demo fabrik
Illustrative demo|效果示意|Demo ilustrasi
Showing your selected premium fabric. Confirm colour and feel with an actual swatch.|展示你选择的高级面料。请以实物色卡确认颜色与手感。|Memaparkan fabrik premium pilihan anda. Sahkan warna dan rasa dengan sampel sebenar.
A closer look|近距离了解|Lihat lebih dekat
The details make the difference.|细节决定不同。|Perincian membuat perbezaan.
Zigzag spring seat|蛇形弹簧座垫|Tempat duduk spring zigzag
Pet-friendly premium fabric|宠物友好高级面料|Fabrik premium mesra haiwan
Adjustable backrests|可调节靠背|Sandaran boleh laras
Stretch-out chaise|舒展贵妃位|Chaise untuk bersantai
Tufted comfort|拉扣靠背的舒适感|Keselesaan berbutang
Press cushion|按压座垫|Tekan kusyen
Release cushion|松开座垫|Lepaskan kusyen
Seat construction illustration|座垫结构示意|Ilustrasi binaan tempat duduk
Full fabric coverage|全包面料|Liputan fabrik penuh
Matching fabric covers the top and sides of the divan.|底座顶部及侧面均采用同款面料包覆。|Fabrik sepadan menutupi bahagian atas dan sisi divan.
8″ divan base|8 英寸底座|Tapak divan 8 inci
An 8-inch divan base. Mattress height is additional.|8 英寸底座，床垫高度另计。|Tapak divan 8 inci. Ketinggian tilam adalah tambahan.
Picture the proportions|看懂尺寸比例|Bayangkan nisbahnya
How much room does it take?|需要多大的空间？|Berapa banyak ruang diperlukan?
Compare it with a familiar TV and a 180 cm console. The room view uses the sofa’s overall measurements.|与常见电视和 180 厘米电视柜比较。房间示意采用沙发整体尺寸。|Bandingkan dengan TV dan konsol 180 cm. Paparan bilik menggunakan ukuran keseluruhan sofa.
TV reference size|电视参考尺寸|Saiz TV rujukan
Schematic furniture shapes. TV size is its diagonal; a 55-inch screen is about 122 cm wide. Use the room planner above to check your own space.|家具形状为示意。电视尺寸为对角线；55 英寸屏幕宽约 122 厘米。请使用上方规划器检查你的空间。|Bentuk perabot adalah skematik. Saiz TV ialah pepenjuru; skrin 55 inci lebarnya kira-kira 122 cm. Gunakan perancang ruang di atas untuk menyemak ruang anda.
Make space for |为它预留空间：|Sediakan ruang untuk 
Drag the sofa to position it|拖动沙发调整位置|Seret sofa untuk melaras kedudukan
Room width|房间宽度|Lebar bilik
Room depth|房间深度|Kedalaman bilik
Rotate 90°|旋转 90°|Putar 90°
The sofa footprint exceeds this room. Increase the room dimensions or rotate it.|沙发占地超出房间。请增大房间尺寸或旋转沙发。|Tapak sofa melebihi bilik ini. Besarkan dimensi bilik atau putarkannya.
Schematic plan. Outer dimensions are to scale; internal cushion and chaise shapes are illustrative. Allow space for doors, walking routes and other furniture.|示意平面图。外部尺寸按比例绘制；内部座垫和贵妃位形状为示意。请为门、通道和其他家具预留空间。|Pelan skematik. Dimensi luar mengikut skala; bentuk kusyen dan chaise ialah ilustrasi. Sediakan ruang untuk pintu, laluan dan perabot lain.
Full bed set|全套床组|Set katil lengkap
SOHO package|SOHO 配套|Pakej SOHO
One room. Your way.|一个空间，你的风格。|Satu ruang. Gaya anda.
Made for each other|相得益彰|Padanan sempurna
Build your SOHO.|打造你的 SOHO。|Bina SOHO anda.
A place to rest, lounge and live. Bring your bed set and sofa together.|休息、放松、生活。让床组与沙发融为一体。|Ruang untuk berehat, bersantai dan hidup. Padankan set katil dan sofa anda.
Match a SonoFlex mattress with a SonoFrame bed. One size, your fabric, a clear total.|搭配 SonoFlex 床垫与 SonoFrame 床架。同一尺寸、自选面料、清晰总价。|Padankan tilam SonoFlex dengan katil SonoFrame. Satu saiz, fabrik pilihan, jumlah yang jelas.
Build a bed set only|只搭配床组|Bina set katil sahaja
Add a sofa · explore SOHO|添加沙发 · 探索 SOHO|Tambah sofa · terokai SOHO
Room concept illustration. Bed footprint is approximate; sofa dimensions are scaled. TV, console, rug and table are styling references, not included.|房间概念示意。床组占地为估算，沙发尺寸按比例。电视、电视柜、地毯和茶几为布置参考，不包含在配套内。|Ilustrasi konsep bilik. Tapak katil adalah anggaran; dimensi sofa mengikut skala. TV, konsol, permaidani dan meja ialah rujukan hiasan, tidak termasuk.
Heights use the supplied measurements. Perspective, footprint and fabric colours are approximate; confirm the finished set in store.|高度依据所提供的尺寸。透视、占地及布料颜色仅供参考；请到店确认实际搭配。|Ketinggian mengikut ukuran yang diberikan. Perspektif, keluasan tapak dan warna fabrik adalah anggaran; sahkan set sebenar di kedai.
Headboard · floor to top|床头板 · 地面至顶部|Kepala katil · lantai ke atas
Divan base|床座|Tapak divan
Mattress|床垫|Tilam
Bed frame|床架|Rangka katil
Bed fabric|床架面料|Fabrik katil
Sofa fabric|沙发面料|Fabrik sofa
Sofa|沙发|Sofa
Package total|配套总价|Jumlah pakej
Sum of selected items. Delivery, availability and any bed-fabric surcharge to confirm. No package discount applied.|总价为所选产品合计。运费、库存和床架面料附加费待确认。尚未应用配套折扣。|Jumlah item dipilih. Penghantaran, ketersediaan dan sebarang caj fabrik katil perlu disahkan. Tiada diskaun pakej dikenakan.
Package copied|已复制配套|Pakej disalin
Copy package for a quote|复制配套以询价|Salin pakej untuk sebut harga
Upholstered bed frame|软包床架|Rangka katil berupholsteri
2.5-seater sofa|2.5 人座沙发|Sofa 2.5 tempat duduk
L-shape sofa|L 型沙发|Sofa bentuk L
Cream|奶油色|Krim
Medium Grey|中灰色|Kelabu sederhana
 inches| 英寸| inci
 inch| 英寸| inci
 example room| 示例房间| bilik contoh
 thick| 厚| tebal
Detail |细节 |Perincian 
Everyday comfort made simple.|让日常舒适更简单。|Keselesaan harian yang ringkas.
Sonoflex Essential delivers reliable support and lasting comfort at an accessible price.|Sonoflex Essential 以亲民价格带来可靠支撑与持久舒适。|Sonoflex Essential memberikan sokongan yang boleh dipercayai dan keselesaan berpanjangan pada harga mampu milik.
Clean. Simple. Timeless.|纯净。简约。经典。|Bersih. Ringkas. Abadi.
A minimalist white design with subtle detailing, created for a fresh and refined bedroom look.|简约白色设计搭配细腻细节，营造清新雅致的卧室。|Reka bentuk putih minimalis dengan perincian halus untuk bilik tidur yang segar dan elegan.
Enhanced cushioning, stability, and everyday comfort.|加强缓冲、稳定支撑与日常舒适。|Kusyen dipertingkat, kestabilan dan keselesaan harian.
12-inch mattress featuring Carbon & Bamboo Duo Fabric, 4-inch high-density foam, and a Bonnell Spring System.|12 英寸床垫，采用 Carbon & Bamboo Duo 面料、4 英寸高密度泡棉及 Bonnell 弹簧系统。|Tilam 12 inci dengan fabrik Carbon & Bamboo Duo, buih berketumpatan tinggi 4 inci dan sistem spring Bonnell.
A cooler, more comfortable sleep.|更清凉，更舒适的睡眠。|Tidur lebih sejuk dan selesa.
CoolSilk Pro™ Fabric, premium high-density foam, and a supportive Bonnell Spring System with reinforced edge support for lasting stability.|CoolSilk Pro™ 面料、高级高密度泡棉及 Bonnell 弹簧系统，配合加强边缘支撑，带来持久稳定。|Fabrik CoolSilk Pro™, buih premium berketumpatan tinggi dan sistem spring Bonnell dengan sokongan tepi diperkukuh untuk kestabilan berpanjangan.
Built for extra-firm support.|专为特硬支撑打造。|Dibina untuk sokongan ekstra tegang.
3-Zone Pocket Springs and Ultra Density Foam to promote proper spinal alignment, stability and lasting support.|3 区独立袋装弹簧与超高密度泡棉，帮助维持脊椎姿态、稳定性与持久支撑。|Spring poket 3 zon dan buih ketumpatan ultra untuk menyokong penjajaran tulang belakang, kestabilan dan sokongan berpanjangan.
Refined comfort.|精致舒适。|Keselesaan halus.
Responsive pocket spring support and premium cushioning, finished in a sophisticated black design for a truly luxurious sleep experience.|灵敏的独立袋装弹簧支撑与高级缓冲层，搭配雅致黑色设计，带来奢适睡眠体验。|Sokongan spring poket responsif dan kusyen premium dengan reka bentuk hitam elegan untuk pengalaman tidur mewah.
Our ultimate comfort mattress.|我们的旗舰舒适床垫。|Tilam keselesaan unggul kami.
Cooling fabric, responsive comfort layers and 5-zone pocket spring support for a luxuriously soft yet supportive sleep experience.|清凉面料、灵敏舒适层与 5 区独立袋装弹簧，柔软奢适且富有支撑。|Fabrik penyejuk, lapisan keselesaan responsif dan sokongan spring poket 5 zon untuk tidur lembut dengan sokongan mantap.
Make room for Cozy.|为 Cozy 留个位置。|Sediakan ruang untuk Cozy.
Soft lines. A padded headboard. A simple place to make your own.|柔和线条，软垫床头。打造简约的专属空间。|Garisan lembut. Kepala katil berkusyen. Ruang ringkas untuk gaya anda.
Your place to unwind.|你的放松空间。|Tempat anda berehat.
A new look for restful nights.|焕新风格，安享好眠。|Gaya baharu untuk malam yang tenang.
An upholstered bed frame with a choice of pet-friendly premium fabrics. Find the finish that feels at home.|软包床架配有多款宠物友好高级面料，选出适合家的风格。|Rangka katil berupholsteri dengan pilihan fabrik premium mesra haiwan. Pilih kemasan yang serasi dengan kediaman anda.
Your little corner of calm.|属于你的宁静角落。|Sudut ketenangan anda.
Stretch out. Stay awhile.|舒展身心，多留片刻。|Regangkan badan. Berehat seketika.
Recline, your way.|随心倚靠。|Bersandar mengikut gaya anda.
A tufted backrest and slim arms.|拉扣靠背搭配纤细扶手。|Sandaran berbutang dan tempat letak tangan ramping.
A wide chaise and plush pillow armrests.|宽敞贵妃位搭配柔软枕式扶手。|Chaise luas dan tempat letak tangan berbantal empuk.
Adjustable backrests and a deep chaise.|可调节靠背与加深贵妃位。|Sandaran boleh laras dan chaise yang dalam.
High-resilience foam and a zigzag spring seat for everyday comfort.|高回弹泡棉与蛇形弹簧座垫，带来日常舒适。|Buih berdaya tahan tinggi dan tempat duduk spring zigzag untuk keselesaan harian.
High-resilience foam and a zigzag spring seat support your everyday sitting comfort.|高回弹泡棉与蛇形弹簧支撑日常坐感。|Buih berdaya tahan tinggi dan tempat duduk spring zigzag menyokong keselesaan duduk harian.
Choose from 30 Lego, Reka and Costa fabrics. Scratch resistant, easy to clean and water repellent. Confirm your choice and any colour surcharge before ordering.|30 款 Lego、Reka 和 Costa 面料可选。耐抓、易清洁、防泼水。下单前请确认选择与颜色附加费。|Pilih daripada 30 fabrik Lego, Reka dan Costa. Tahan calar, mudah dibersihkan dan kalis percikan air. Sahkan pilihan dan caj warna sebelum memesan.
Choose from Lego, Reka and Costa swatches. The premium fabric range is easy to clean and water repellent.|可选 Lego、Reka 和 Costa 色卡。高级面料系列易清洁且防泼水。|Pilih sampel Lego, Reka dan Costa. Rangkaian fabrik premium mudah dibersihkan dan kalis percikan air.
Bamboo fabric|竹纤维面料|Fabrik buluh
high-density foam|高密度泡棉|buih berketumpatan tinggi
high-density comfort foam|高密度舒适泡棉|buih keselesaan berketumpatan tinggi
premium high-density foam|高级高密度泡棉|buih premium berketumpatan tinggi
ultra-density foam|超高密度泡棉|buih ketumpatan ultra
Ultra-density foam|超高密度泡棉|Buih ketumpatan ultra
Protective felt|保护毡层|Felt pelindung
Bonnell spring system|Bonnell 弹簧系统|sistem spring Bonnell
3-zone pocket springs|3 区独立袋装弹簧|spring poket 3 zon
5-zone pocket springs|5 区独立袋装弹簧|spring poket 5 zon
Encasement edge support|包边支撑|Sokongan tepi berbingkai
Poweredge foam box|Poweredge 泡棉护边|Kotak buih Poweredge
support core|支撑核心|teras sokongan
premium knitted fabric|高级针织面料|fabrik rajutan premium
cooling fabric|清凉面料|fabrik penyejuk
comfort layer|舒适层|lapisan keselesaan
foam encasement|泡棉护边|bingkai buih
fabric|面料|fabrik
foam|泡棉|buih
mm MDF support|毫米 MDF 支撑板|mm sokongan MDF
MDF board supports the upholstered divan top.|MDF 板支撑软包底座顶部。|papan MDF menyokong bahagian atas divan berupholsteri.
Selected layer|所选层|Lapisan dipilih
Listed total|标价合计|Jumlah harga senarai
Delivery and final availability to confirm.|运费与最终库存待确认。|Penghantaran dan ketersediaan akhir perlu disahkan.
Delivery and availability to confirm.|运费和库存待确认。|Penghantaran dan ketersediaan perlu disahkan.
Size: |尺寸：|Saiz: 
Fabric: |面料：|Fabrik: 
Price: |价格：|Harga: 
Chaise: |贵妃位：|Chaise: 
Dimensions: |尺寸：|Dimensi: 
when facing the sofa|以面对沙发为准|ketika menghadap sofa
chaise|贵妃位|chaise
MattressHub showroom home|MattressHub 展厅首页|Laman utama bilik pameran MattressHub
Explore |探索 |Terokai 
Language|Language|Language
mattress|床垫|tilam
A 9 mm MDF board supports the upholstered divan top.|9 毫米 MDF 板支撑软包底座顶部。|Papan MDF 9 mm menyokong bahagian atas divan berupholsteri.
A 12 mm MDF board supports the upholstered divan top.|12 毫米 MDF 板支撑软包底座顶部。|Papan MDF 12 mm menyokong bahagian atas divan berupholsteri.
Ask on WhatsApp|在 WhatsApp 咨询|Tanya di WhatsApp
Ask about this package on WhatsApp|在 WhatsApp 咨询此配套|Tanya tentang pakej ini di WhatsApp
Hi MattressHub, I'm interested in this:|你好 MattressHub，我想了解这个：|Hai MattressHub, saya berminat dengan ini:
Buy opens your cart on mattresshub.co. WhatsApp opens a chat with your choices filled in.|“购买”会在 mattresshub.co 打开你的购物车。WhatsApp 会打开聊天，并已填好你的选择。|Beli membuka troli anda di mattresshub.co. WhatsApp membuka sembang dengan pilihan anda sudah diisi.
Buy now|立即购买|Beli sekarang
Help me choose|帮我挑选|Bantu saya pilih
Help me choose a mattress|帮我挑选床垫|Bantu saya pilih tilam
Not sure this is the one?|不确定是不是这款？|Tidak pasti ini pilihan anda?
Close the finder|关闭挑选助手|Tutup pembantu pilihan
How do you usually sleep?|你通常怎么睡？|Bagaimana anda biasa tidur?
We use it to fine-tune the feel.|我们会据此微调推荐的软硬度。|Kami gunakannya untuk memperhalusi tahap ketegangan.
On my side|侧睡|Mengiring
On my back|仰睡|Terlentang
On my front|趴睡|Meniarap
A mix|都有|Campuran
A touch softer|稍软一些|Lembut sedikit
A touch firmer|稍硬一些|Tegang sedikit
As you choose|按你的选择|Ikut pilihan anda
Which feel do you like?|你喜欢什么软硬度？|Tahap ketegangan mana yang anda suka?
Our feel ratings go from 1 to 10, where 10 is the firmest.|我们的软硬度评分从 1 到 10，10 为最硬。|Penarafan kami dari 1 hingga 10, dan 10 paling tegang.
Around 4|约 4|Sekitar 4
Around 6|约 6|Sekitar 6
Around 9|约 9|Sekitar 9
7 to 8|7 至 8|7 hingga 8
Your budget for a Queen?|Queen 尺寸的预算是多少？|Bajet anda untuk saiz Queen?
Queen prices. You can pick any size after.|以上为 Queen 尺寸价格，之后可选择任何尺寸。|Harga saiz Queen. Anda boleh pilih saiz lain kemudian.
Up to RM 600|RM 600 以内|Sehingga RM 600
RM 600 to RM 1,000|RM 600 至 RM 1,000|RM 600 hingga RM 1,000
RM 1,000 and up|RM 1,000 以上|RM 1,000 ke atas
Previous question|上一题|Soalan sebelumnya
Your match|为你推荐|Padanan anda
Feel rating |软硬度 |Penarafan 
 out of 10|/10| daripada 10
Within your budget|在你的预算内|Dalam bajet anda
Above your budget|超出你的预算|Melebihi bajet anda
Below your budget|低于你的预算|Di bawah bajet anda
A little firmer|稍硬一些|Lebih tegang sedikit
A little softer|稍软一些|Lebih lembut sedikit
Same feel, lower price|软硬度相同，价格更低|Rasa sama, harga lebih rendah
Same feel, more premium|软硬度相同，更高端|Rasa sama, lebih premium
See |查看 |Lihat 
Start again|重新开始|Mulakan semula
Suggested from MattressHub's feel ratings and Queen prices. Your weight and sleeping position affect the feel.|根据 MattressHub 的软硬度评分和 Queen 尺寸价格推荐。体重和睡姿会影响实际感受。|Dicadangkan berdasarkan penarafan ketegangan MattressHub dan harga saiz Queen. Berat dan posisi tidur mempengaruhi rasa.
3D layers|3D 结构|Lapisan 3D
Pause the 3D loop|暂停 3D 动画|Jeda animasi 3D
Play the 3D loop|播放 3D 动画|Main animasi 3D
Mattress layers lifting apart and settling back, 3D illustration|床垫各层分开再合拢的 3D 示意动画|Lapisan tilam terpisah dan kembali bercantum, ilustrasi 3D
Rendered 3D illustration. Layer names and order are Cloud's; layer thicknesses, springs and fabrics are illustrative.|3D 渲染示意。各层名称与顺序与 Cloud 一致；各层厚度、弹簧与面料仅作示意。|Ilustrasi 3D. Nama dan susunan lapisan mengikut Cloud; ketebalan lapisan, spring dan fabrik hanya ilustrasi.
`.trim().split('\n').map(line=>line.split('|'));
const translationMap = new Map(showroomTranslations.map(row=>[row[0],row.slice(1)]));
const translationFragments = [...translationMap.keys()].sort((a,b)=>b.length-a.length).map(key=>[key,new RegExp((/^[A-Za-z]/.test(key)?'(?<![A-Za-z])':'')+key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+(/[A-Za-z]$/.test(key)?'(?![A-Za-z])':''),'g')]);
window.mhTranslate = text => {
  if (typeof text !== 'string' || window.showroomLanguage === 'en') return text;
  const column = window.showroomLanguage === 'zh' ? 0 : 1;
  let match = text.match(/^(.*?) is (\d+) cm wide and (\d+) cm deep\.$/);
  if (match) return column === 0 ? `${match[1]} 宽 ${match[2]} 厘米，深 ${match[3]} 厘米。` : `${match[1]} berukuran ${match[2]} cm lebar dan ${match[3]} cm dalam.`;
  match = text.match(/^Fits within this empty room · (\d+) cm width and (\d+) cm depth remaining in total\.$/);
  if (match) return column === 0 ? `适合此空房间 · 总共剩余 ${match[1]} 厘米宽度和 ${match[2]} 厘米深度。` : `Muat dalam bilik kosong ini · Baki keseluruhan ${match[1]} cm lebar dan ${match[2]} cm dalam.`;
  if (translationMap.has(text)) return translationMap.get(text)[column];
  // Replace source fragments once, so translated words are never translated again.
  let parts = [text];
  for (const [key, pattern] of translationFragments) parts = parts.flatMap(part => typeof part !== 'string' ? [part] : part.split(pattern).flatMap((value,i)=>i?[{value:translationMap.get(key)[column]},value]:[value]));
  return parts.map(part=>typeof part==='string'?part:part.value).join('');
};
document.documentElement.lang = {en:'en',zh:'zh-Hans',ms:'ms'}[window.showroomLanguage];
