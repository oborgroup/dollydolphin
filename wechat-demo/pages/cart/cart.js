const app = getApp();

Page({
  data: { groups: [], subtotal: 0, save: 0, freight: 0, total: 0, count: 0 },
  onShow() { this.build(); },
  build() {
    const cart = app.globalData.cart;
    const frozen = cart.filter(i => i.temp === '冷冻' || i.temp === '冷藏');
    const ambient = cart.filter(i => i.temp === '常温');
    const groups = [];
    if (frozen.length) groups.push({ key: '冷冻', title: '冷链配送', note: '保温箱 + 冰袋 · 次日达', color: 'frozen', items: frozen });
    if (ambient.length) groups.push({ key: '常温', title: '标准快递', note: '普通包装 · 全国配送', color: 'ambient', items: ambient });

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const save = cart.length ? 24 : 0;
    const freight = frozen.length ? 15 : 0;
    this.setData({ groups, subtotal, save, freight, total: subtotal - save + freight, count });
  },
  inc(e) {
    const it = app.globalData.cart.find(x => x.id === e.currentTarget.dataset.id);
    if (it) { it.qty += 1; this.build(); }
  },
  dec(e) {
    const cart = app.globalData.cart;
    const i = cart.findIndex(x => x.id === e.currentTarget.dataset.id);
    if (i < 0) return;
    if (cart[i].qty > 1) { cart[i].qty -= 1; } else { cart.splice(i, 1); }
    this.build();
  },
  checkout() { wx.showToast({ title: '演示：去结算', icon: 'none' }); },
  goHome() { wx.switchTab({ url: '/pages/home/home' }); }
});
