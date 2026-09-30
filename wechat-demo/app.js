// Dolly Dolphin — WeChat Mini Program demo (Step 1 prototype)
App({
  globalData: {
    // Cart is pre-filled so the 购物车 tab demonstrates mixed-temperature grouping.
    cart: [
      { id: 'atlantic', brand: "MEMBER'S MARK", name: '大西洋三文鱼柳', img: '/images/salmon-atlantic.jpg', spec: '1.13kg · CL-2026-0417', price: 120, temp: '冷冻', qty: 1 },
      { id: 'crab', brand: "MEMBER'S MARK", name: '雪蟹腿与蟹钳 熟制', img: '/images/crab-snow.jpg', spec: '907g · CA-2026-0418', price: 152, temp: '冷冻', qty: 1 },
      { id: 'tuna', brand: '', name: '西班牙橄榄油浸金枪鱼罐头', img: '', spec: '185g × 6 · ES-2026-1120', price: 80, temp: '常温', qty: 1 }
    ]
  },
  addToCart(item) {
    const cart = this.globalData.cart;
    const found = cart.find(x => x.id === item.id);
    if (found) {
      found.qty += 1;
    } else {
      cart.push({
        id: item.id, brand: item.brand, name: item.name, img: item.img,
        spec: item.spec, price: item.member || item.price, temp: item.temp, qty: 1
      });
    }
  }
});
