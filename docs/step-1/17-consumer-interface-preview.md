# 17 — Consumer Interface Preview

**Live (clickable):** https://claude.ai/artifact/QbHb1ywdeErZmbuhKJCTAv → **消费者端** tab
**Source:** [`preview/index.html`](../../preview/index.html) · tokens in [`preview/assets/tokens.css`](../../preview/assets/tokens.css)

Character: **premium, simple, appetizing, trustworthy.** Design language: **Western / US premium e‑commerce** (spacious, imagery‑forward, editorial); content **Simplified Chinese**; brand **Dolly Dolphin** applied from tokens. Delivery channel: **WeChat Mini Program** (the same design works as a standalone app/PWA).

## 1. Screens shown interactively (5 hero screens)

| # | Screen | What it demonstrates |
|---|--------|----------------------|
| 1 | **首页 Home** | Editorial hero, category quick‑nav, trust strip (four brand pillars), imagery‑forward product cards with origin flag + temperature tag + member price |
| 2 | **分类/列表 Category / Listing** | Dynamic filters (incl. **temperature** and **origin**), sort, large product cards — filters generated from attributes |
| 3 | **商品详情 Product Detail** | Universal blocks (gallery, price/member, trust badges, key facts, delivery) **＋** a category section (Provenance) generated from the attribute set, with the adaptive note |
| 4 | **购物车 Cart** | Items **grouped by temperature** (冷冻组 / 常温组), per‑group packaging & fee, member savings, honest totals |
| 5 | **订单与追踪 Orders & Tracking** | One order → **two shipments** (cold‑chain + standard) tracked independently, with a batch‑aware status timeline |

## 2. Full required screen inventory (16) — status

| # | Screen | In preview | Specified in |
|---|--------|:----------:|--------------|
| 1 | Home | ✅ shown | [05](05-consumer-sitemap.md) |
| 2 | Category | ✅ shown | 05 |
| 3 | Product listing | ✅ shown | 05 |
| 4 | Product detail | ✅ shown | 05, [14](14-ux-architecture.md) |
| 5 | Search | ◻︎ spec | 05, [10 §search](14-ux-architecture.md#5-search-architecture-ux-view) — same listing+filters surface |
| 6 | Cart | ✅ shown | 05 |
| 7 | Checkout | ◻︎ spec | 05, [08](08-consumer-user-flows.md) — address + per‑group method/window + coupons/points + pay |
| 8 | Address | ◻︎ spec | 05 — address book (list/add/edit/default) |
| 9 | Payment | ◻︎ spec | 05 — WeChat Pay + result (success/retry/pending) |
| 10 | Orders | ✅ shown | 05 |
| 11 | Order detail | ✅ shown (card) | 05 |
| 12 | Tracking | ✅ shown | 05 — per‑shipment |
| 13 | Account (我的) | ◻︎ spec | 05 |
| 14 | Membership | ◻︎ spec | 05 — tier, points, member price threaded through PDP/cart |
| 15 | Coupons | ◻︎ spec | 05 — applied in cart/checkout |
| 16 | After‑sales | ◻︎ spec | 05, [08 §6](08-consumer-user-flows.md), [11](11-batch-traceability-architecture.md) — batch auto‑attached |

"◻︎ spec" screens are fully defined in the sitemap and flows; the interactive preview renders the five that best prove the architecture. All can be built out on request.

## 3. Imported‑food specifics visible in the preview
- **Provenance early:** origin flags on cards; "原产地直采 / ASC 认证 / 全程冷链 / 批次可溯" trust badges on the PDP.
- **Temperature legible before payment:** tag on card → PDP key facts → **cart groups by fulfillment temperature** → per‑group fee.
- **Adaptive PDP:** the Provenance block is generated from the Seafood attribute set; the on‑screen note explains how it becomes Cut/Grade (meat) or Net/Drain weight (canned) — same page, no code.
- **Multiple shipments per order**, each tracked; batch codes shown (NO‑2026‑0417, etc.).

## 4. Notes
- Product imagery is represented by tasteful gradient placeholders (no licensed photography in Step 1).
- Prices are illustrative, ¥, VAT‑inclusive style; member price shown alongside.
- The **◐ 主题** control demonstrates the light/dark theming from one token file.
