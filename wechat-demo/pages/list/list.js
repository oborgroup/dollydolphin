const products = require('../../data/products.js');
const app = getApp();

Page({
  data: {
    tab: 'all',
    filters: [
      { k: 'all', t: '全部' }, { k: 'salmon', t: '三文鱼' }, { k: 'shrimp', t: '虾类' },
      { k: 'crab', t: '蟹类' }, { k: 'shell', t: '贝类' }, { k: 'fish', t: '鱼柳' }
    ],
    list: products
  },
  pick(e) {
    const k = e.currentTarget.dataset.k;
    this.setData({ tab: k, list: k === 'all' ? products : products.filter(p => p.cat === k) });
  },
  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },
  add(e) {
    const p = products.find(x => x.id === e.currentTarget.dataset.id);
    if (p) { app.addToCart(p); wx.showToast({ title: '已加入购物车', icon: 'success' }); }
  }
});
