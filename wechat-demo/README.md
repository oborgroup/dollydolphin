# Dolly Dolphin — WeChat Mini Program demo

A **real WeChat Mini Program** (not a web page) of the consumer storefront: Home, Category,
Product Detail, and Cart — with the real product photos, brand colours, and Simplified‑Chinese
content. This is a **Step‑1 prototype** to *see and feel* the app inside WeChat. It has no backend,
login, payment, or real orders yet (those are Step 2+).

> The `preview/` folder in this repo is the **design** (an HTML page for approval). This
> `wechat-demo/` folder is the **thing that actually runs inside WeChat.**

---

## Three ways to see it — from easiest to real

| # | What you get | What you need | Time |
|---|--------------|---------------|------|
| 1 | Running in a **phone simulator on your computer** | WeChat DevTools (free) | ~10 min |
| 2 | Running **inside WeChat on your own phone** (scan a QR) | + a free Mini Program AppID | ~20 min |
| 3 | **Public** in the WeChat store for customers | Chinese company + ICP filing (备案) + food licence | Step 2+ |

You can do **#1 with no account at all.** Start there.

---

## Level 1 — See it in the simulator (no account needed)

1. **Download WeChat DevTools** (微信开发者工具):
   https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
   Pick the **Stable Build** for your Mac or Windows and install it.
2. **Open the tool and log in:** it shows a QR code — open **WeChat on your phone → Scan (扫一扫)**
   and confirm. (Any personal WeChat account works.)
3. Click **+ (新建/导入) → 导入项目 (Import project).**
4. **Directory (目录):** choose this `wechat-demo` folder.
   **AppID:** click **"测试号 / Use test account"** (no registration needed).
   Then click **导入 / Import**.
5. It compiles and the **simulator (phone screen)** appears on the left. Tap around:
   - **首页 (Home)** → tap a product → **商品详情 (Detail)** → **加入购物车 (Add to cart)**
   - **分类 (Category)** → tap the filter chips (三文鱼 / 虾类 / 蟹类 …)
   - **购物车 (Cart)** → see the frozen + ambient groups, change quantities

That's the app running. If anything looks off, in the top toolbar switch the **base library
(调试基础库)** to the latest version and click **编译 (Compile)**.

---

## Level 2 — Run it inside WeChat on your phone (free account)

To open it on a **real phone inside WeChat**, you need a free **AppID**:

1. Go to **https://mp.weixin.qq.com** → **立即注册 (Register) → 小程序 (Mini Program).**
   An **个人 (individual)** account is free and enough for testing. (Selling to customers later
   needs an **企业 / company** account — see Level 3.)
2. After registering, in the WeChat MP console open **开发 → 开发管理 → 开发设置** and copy your
   **AppID (小程序ID)**.
3. In DevTools, top‑left click the project name → **详情 / Detail → 基本信息**, and paste your AppID
   (or re‑import the project and enter the AppID instead of the test account).
4. In DevTools' top toolbar click **预览 (Preview).** A **QR code** appears.
5. On your phone, open **WeChat → Scan (扫一扫)** and scan it. The mini program **opens inside
   WeChat on your phone** — this is the real thing you can hold and show people.
   - The first time, add your WeChat ID as a tester under **成员管理 → 体验成员** if it asks.

> Tip: **真机调试 (Real‑device debug)** in DevTools also opens it on your phone and lets you inspect it live.

---

## Level 3 — Publishing to real customers (Step 2+, for later)

To put this in the WeChat store so anyone in China can use it and **pay**, you'll need:

- A **company** Mini Program account (企业主体) — an individual account can't take payments.
- **ICP filing (备案)** for the mini program (required in China since 2023).
- **Category qualifications (类目资质)** for selling food online — e.g. a **食品经营许可证
  (Food Business Licence)**, and import/cold‑chain paperwork for imported seafood.
- **WeChat Pay (微信支付)** merchant account, then submit the mini program for **review (审核)**.

None of that is needed to test Levels 1–2. It's the real‑launch checklist for when the design
is approved and we build the production app.

---

## What works in this demo vs. what's Step 2+

**Works now (front‑end prototype):**
- Home, Category (with live filter chips), Product Detail, Cart
- Add‑to‑cart, quantity steppers, mixed‑temperature cart grouping, honest totals
- Real product photos, brand colours, Simplified‑Chinese content, native tab bar

**Not in this demo (Step 2+ / production build):**
- Real accounts / WeChat login, real inventory & prices from a server
- WeChat Pay checkout, real orders, delivery & tracking, after‑sales
- The Admin & Manager web platforms (those stay web apps, per the architecture)

---

## Folder map

```
wechat-demo/
├─ app.json            app config: pages + tab bar
├─ app.wxss            brand tokens + shared card styles
├─ app.js              global cart state
├─ data/products.js    the demo catalog (10 real seafood SKUs)
├─ templates/          reusable product‑card template
├─ images/             real product photos + logo
└─ pages/
   ├─ home/            首页
   ├─ list/            分类 / 列表 (with filters)
   ├─ detail/          商品详情 (adaptive provenance block)
   └─ cart/            购物车 (temperature groups + totals)
```

Change a product? Edit `data/products.js`. Change brand colours? Edit the tokens at the top of
`app.wxss` — the same idea as `preview/assets/tokens.css` in the design.
