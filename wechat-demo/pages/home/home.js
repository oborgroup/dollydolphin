const products = require('../../data/products.js');
const app = getApp();

Page({
  data: {
    feat: products.slice(0, 4),   // 本周精选 · 进口海鲜 (salmon)
    sea: products.slice(4, 8)     // 蟹 · 虾 · 贝
  },
  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id });
  },
  add(e) {
    const p = products.find(x => x.id === e.currentTarget.dataset.id);
    if (p) { app.addToCart(p); wx.showToast({ title: '已加入购物车', icon: 'success' }); }
  },
  goList() { wx.switchTab({ url: '/pages/list/list' }); }
});
