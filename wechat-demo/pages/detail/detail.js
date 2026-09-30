const products = require('../../data/products.js');
const app = getApp();

Page({
  data: { p: null },
  onLoad(query) {
    const p = products.find(x => x.id === query.id) || products[0];
    this.setData({ p });
  },
  add() {
    app.addToCart(this.data.p);
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },
  buy() {
    app.addToCart(this.data.p);
    wx.showToast({ title: '演示：进入结算', icon: 'none' });
    setTimeout(() => wx.switchTab({ url: '/pages/cart/cart' }), 700);
  },
  goCart() { wx.switchTab({ url: '/pages/cart/cart' }); }
});
