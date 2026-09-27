# 17 — Consumer Interface Preview

**Live (clickable):** https://claude.ai/artifact/QbHb1ywdeErZmbuhKJCTAv → **消费者端** tab
**Source:** [`preview/index.html`](../../preview/index.html) · tokens in [`preview/assets/tokens.css`](../../preview/assets/tokens.css)

Character: **premium, simple, appetizing, trustworthy.** Design language: **Western / US premium e‑commerce** (spacious, imagery‑forward, editorial); content **Simplified Chinese**; brand **Dolly Dolphin** applied from tokens. Delivery channel: **WeChat Mini Program** (the same design works as a standalone app/PWA).

## 1. Screens shown interactively (the full 13‑screen consumer set)

The preview now renders **every** consumer screen the brief lists. Highlights:

| # | Screen | What it demonstrates |
|---|--------|----------------------|
| 1 | **首页 Home** | Editorial hero, category quick‑nav, trust strip (four brand pillars), imagery‑forward product cards with origin flag + temperature tag + member price |
| 2 | **分类/列表 Category / Listing** | Dynamic filters (incl. **temperature** and **origin**), sort, large product cards — filters generated from attributes |
| 3 | **商品详情 Product Detail** | Universal blocks (gallery, price/member, trust badges, key facts, delivery) **＋** a category section (Provenance) generated from the attribute set, with the adaptive note |
| 4 | **购物车 Cart** | Items **grouped by temperature** (冷冻组 / 常温组), per‑group packaging & fee, member savings, honest totals |
| 5 | **订单与追踪 Orders & Tracking** | One order → **two shipments** (cold‑chain + standard) tracked independently, with a batch‑aware status timeline |
| 6 | **搜索 Search** | History, hot searches, type‑ahead suggestions with temperature tags — keyword / brand / origin / SKU |
| 7 | **结算 Checkout** | Address, **per‑group** delivery method & window, coupons / points / invoice, itemised totals |
| 8 | **收货地址 Address** | Address book — default / add / edit |
| 9 | **支付 Payment** | WeChat Pay success with **per‑shipment** ETA (cold‑chain vs. standard) |
| 10 | **我的 Account** | Membership header, order‑status row, service grid, content hub |
| 11 | **会员 Membership** | Tier, points, benefits, member‑price rail |
| 12 | **优惠券 Coupons** | Available / used / expired; thresholds, category & cold‑chain‑fee coupons |
| 13 | **售后 After‑sales** | Type selection, **batch auto‑attached** (→ traceability), reason, photo upload |

## 2. Full required screen inventory (16) — status

| # | Screen | In preview | Specified in |
|---|--------|:----------:|--------------|
| 1 | Home | ✅ shown | [05](05-consumer-sitemap.md) |
| 2 | Category | ✅ shown | 05 |
| 3 | Product listing | ✅ shown | 05 |
| 4 | Product detail | ✅ shown | 05, [14](14-ux-architecture.md) |
| 5 | Search | ✅ shown | 05 |
| 6 | Cart | ✅ shown | 05 |
| 7 | Checkout | ✅ shown | 05, [08](08-consumer-user-flows.md) |
| 8 | Address | ✅ shown | 05 |
| 9 | Payment | ✅ shown | 05 |
| 10 | Orders | ✅ shown | 05 |
| 11 | Order detail | ✅ shown (card) | 05 |
| 12 | Tracking | ✅ shown | 05 — per‑shipment |
| 13 | Account (我的) | ✅ shown | 05 |
| 14 | Membership | ✅ shown | 05 |
| 15 | Coupons | ✅ shown | 05 |
| 16 | After‑sales | ✅ shown | 05, [08 §6](08-consumer-user-flows.md), [11](11-batch-traceability-architecture.md) — batch auto‑attached |

All 16 required consumer screens are now rendered interactively (Category and Listing share one screen; Order detail and Tracking sit within Orders).

## 3. Imported‑food specifics visible in the preview
- **Provenance early:** origin flags on cards; "原产地直采 / ASC 认证 / 全程冷链 / 批次可溯" trust badges on the PDP.
- **Temperature legible before payment:** tag on card → PDP key facts → **cart groups by fulfillment temperature** → per‑group fee.
- **Adaptive PDP:** the Provenance block is generated from the Seafood attribute set; the on‑screen note explains how it becomes Cut/Grade (meat) or Net/Drain weight (canned) — same page, no code.
- **Multiple shipments per order**, each tracked; batch codes shown (NO‑2026‑0417, etc.).

## 4. Launch scope — seafood subcategories now, category‑general architecture

The storefront **launches with imported seafood only** — **salmon · fish · crab · shrimp · shellfish** — per owner direction ("focus on seafood subcategories now; meat and other products come later"). This is a **launch‑scope** choice, not an architectural one: the product/category/attribute model stays fully **category‑general**. The preview makes this explicit rather than hiding it:
- **Consumer:** the Home quick‑nav, search, listing, cart and all product cards are seafood.
- **Admin — categories:** 海鲜 (Seafood) is the live, selected category with real subcategories (三文鱼 · 虾 · 蟹 · 贝 · 鱼柳 · 罐头鱼); **肉类 / 罐头食品 / 加工食品 are shown as "即将上线 / coming soon"** future nodes. The adaptive **attribute set** and **product editor** run on the live Seafood set (品种 / 捕捞方式 / 捕捞海域 / 规格), with the on‑screen note showing the *same* editor already models meat (部位/等级/大理石纹) and canned (净含量/沥干重) for the future — **new category = new record + bound attribute set, no code change.**
- **Manager:** the category‑mix chart reads as a **seafood‑subcategory** breakdown (三文鱼 34% → 鱼柳 10%).

## 5. Notes
- **Product imagery — now real photography.** Dolly Dolphin operates as an **authorized reseller** (a Sam's‑Club‑style membership model), so every product tile shows the **genuine retail packaging** of the actual catalog (salmon, crab, shrimp, scallops, cod, tilapia — 12 operator‑supplied square photos), alongside the brand's own **signature frozen‑sardines** asset from the Branding Kit. The **only** gradient tile left is the **ambient canned‑tuna** line, kept to demonstrate the mixed‑temperature flow (no supplied photo for it). No third‑party/stock imagery. See [`preview/assets/img/SOURCES.md`](../../preview/assets/img/SOURCES.md).
- Prices are illustrative, ¥, VAT‑inclusive style; member price shown alongside.
- The **◐ 主题** control demonstrates the light/dark theming from one token file.
