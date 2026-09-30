// Shared product catalog for the Dolly Dolphin demo.
// Illustrative data — real Member's Mark seafood packaging (authorized-reseller catalog).
module.exports = [
  {
    id: 'sockeye', cat: 'salmon', brand: "MEMBER'S MARK", name: '阿拉斯加红鲑鱼 带皮去骨',
    sub: 'Alaskan Sockeye Salmon · Skin-on, Boneless', img: '/images/salmon-sockeye.jpg',
    flag: '🇺🇸 阿拉斯加', temp: '冷冻', tempClass: 'frozen', spec: '907g · 野生捕捞', price: 168, member: 152,
    originCountry: '美国 · 阿拉斯加', net: '907 g', shelf: '18 个月', stock: '现货 126',
    species: '红鲑 Sockeye', method: '可持续野生捕捞', sea: 'FAO 67 白令海 / 阿拉斯加湾', batch: 'US-2026-0417'
  },
  {
    id: 'atlantic', cat: 'salmon', brand: "MEMBER'S MARK", name: '大西洋三文鱼柳 独立包装',
    sub: 'Atlantic Salmon Fillet Portions', img: '/images/salmon-atlantic.jpg',
    flag: '🇨🇱 智利', temp: '冷冻', tempClass: 'frozen', spec: '1.13kg · 分切装', price: 128, member: 116,
    originCountry: '智利', net: '1.13 kg', shelf: '18 个月', stock: '现货 210',
    species: '大西洋鲑 Salmo salar', method: '海水养殖', sea: 'FAO 87 东南太平洋', batch: 'CL-2026-0417'
  },
  {
    id: 'pesto', cat: 'salmon', brand: "MEMBER'S MARK", name: '香蒜青酱三文鱼排',
    sub: 'Garlic Pesto Salmon Side', img: '/images/salmon-pesto.jpg',
    flag: '🇺🇸 美国', temp: '冷冻', tempClass: 'frozen', spec: '680g · 调味即烤', price: 98, member: 89,
    originCountry: '美国', net: '680 g', shelf: '12 个月', stock: '现货 88',
    species: '大西洋鲑 Salmo salar', method: '海水养殖 · 调味', sea: 'FAO 21 西北大西洋', batch: 'US-2026-0512'
  },
  {
    id: 'marinated', cat: 'salmon', brand: "MEMBER'S MARK", name: '香草腌制三文鱼',
    sub: 'Marinated Alaskan Salmon', img: '/images/salmon-marinated.jpg',
    flag: '🇺🇸 阿拉斯加', temp: '冷冻', tempClass: 'frozen', spec: '454g · 调味即烤', price: 88, member: 79,
    originCountry: '美国 · 阿拉斯加', net: '454 g', shelf: '12 个月', stock: '现货 64',
    species: '红鲑 Sockeye', method: '野生捕捞 · 腌制', sea: 'FAO 67 白令海', batch: 'US-2026-0530'
  },
  {
    id: 'crab', cat: 'crab', brand: "MEMBER'S MARK", name: '雪蟹腿与蟹钳 熟制',
    sub: 'Snow Crab Legs & Claws · Cooked', img: '/images/crab-snow.jpg',
    flag: '🇨🇦 加拿大', temp: '冷冻', tempClass: 'frozen', spec: '907g · 即食', price: 398, member: 359,
    originCountry: '加拿大', net: '907 g', shelf: '12 个月', stock: '现货 42',
    species: '雪蟹 Snow Crab', method: '野生捕捞 · 熟冻', sea: 'FAO 21 西北大西洋', batch: 'CA-2026-0418'
  },
  {
    id: 'rawshrimp', cat: 'shrimp', brand: "MEMBER'S MARK", name: '特大生虾 去壳留尾',
    sub: 'Jumbo Raw Shrimp · Peeled, Tail-on', img: '/images/shrimp-raw.jpg',
    flag: '🇻🇳 越南', temp: '冷冻', tempClass: 'frozen', spec: '907g · 21–25/磅', price: 139, member: 129,
    originCountry: '越南', net: '907 g', shelf: '18 个月', stock: '现货 156',
    species: '白对虾 Vannamei', method: '养殖 · 生冻', sea: 'FAO 71 西太平洋', batch: 'VN-2026-0788'
  },
  {
    id: 'scampi', cat: 'shrimp', brand: "MEMBER'S MARK", name: '蒜香黄油风味大虾',
    sub: 'Shrimp Scampi', img: '/images/shrimp-scampi.jpg',
    flag: '🇺🇸 美国', temp: '冷冻', tempClass: 'frozen', spec: '907g · 一煎即食', price: 119, member: 108,
    originCountry: '美国', net: '907 g', shelf: '12 个月', stock: '现货 96',
    species: '白对虾 Vannamei', method: '养殖 · 调味', sea: 'FAO 71 西太平洋', batch: 'US-2026-0640'
  },
  {
    id: 'scallops', cat: 'shell', brand: "MEMBER'S MARK", name: '北大西洋海扇贝',
    sub: 'North Atlantic Sea Scallops', img: '/images/scallops.jpg',
    flag: '🇺🇸 北大西洋', temp: '冷冻', tempClass: 'frozen', spec: '454g · 15–25/磅', price: 158, member: 145,
    originCountry: '美国 · 北大西洋', net: '454 g', shelf: '12 个月', stock: '现货 73',
    species: '海扇贝 Sea Scallop', method: '野生捕捞', sea: 'FAO 21 西北大西洋', batch: 'US-2026-0311'
  },
  {
    id: 'cod', cat: 'fish', brand: "MEMBER'S MARK", name: '去皮鳕鱼柳',
    sub: 'Cod Skinless Fillet', img: '/images/cod.jpg',
    flag: '🇮🇸 冰岛', temp: '冷冻', tempClass: 'frozen', spec: '907g · 去皮去骨', price: 118, member: 108,
    originCountry: '冰岛', net: '907 g', shelf: '18 个月', stock: '现货 118',
    species: '大西洋鳕 Gadus morhua', method: '野生捕捞', sea: 'FAO 27 东北大西洋', batch: 'IS-2026-0205'
  },
  {
    id: 'ptilapia', cat: 'fish', brand: "MEMBER'S MARK", name: '帕玛森芝士罗非鱼柳',
    sub: 'Parmesan Encrusted Tilapia', img: '/images/tilapia-parmesan.jpg',
    flag: '🇺🇸 美国', temp: '冷冻', tempClass: 'frozen', spec: '680g · 焗烤即食', price: 78, member: 70,
    originCountry: '美国', net: '680 g', shelf: '12 个月', stock: '现货 140',
    species: '罗非鱼 Tilapia', method: '养殖 · 调味', sea: 'FAO 77 东太平洋', batch: 'US-2026-0705'
  }
];
