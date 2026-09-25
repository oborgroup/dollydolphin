# 19 — Manager Interface Preview

**Live (clickable):** https://claude.ai/artifact/QbHb1ywdeErZmbuhKJCTAv → **管理驾驶舱** tab
**Source:** [`preview/index.html`](../../preview/index.html)

Character: **data‑driven, executive, clear.** Every dashboard runs **仪表盘 → 指标 → 预警 → 行动** (Dashboard → KPIs → Alerts → Actions). Design language Western/clean; content **Simplified Chinese**.

## 1. What's shown interactively

The **经营总览 Executive Dashboard** (总经理 / General Manager), rendered richly:

| Block | Detail |
|-------|--------|
| **KPI row** | 成交额 GMV · 毛利率 · 会员占比 · 冷链准时率 — big numbers + deltas |
| **成交额趋势 GMV trend** | Area+line chart, single brand hue, faint grid, month axis (2月→9月), **emphasized endpoint ¥322万** — drawn to scale |
| **品类占比 Category mix** | Single‑hue magnitude bars with **direct labels**; **海鲜 "首发聚焦"** highlighted — the "breadth is the strategy" signal |
| **各库区容量 Warehouse capacity** | Zone bars in **functional** colours (冷冻/冷藏/常温) — colour encodes a real dimension |
| **物流准时率 Logistics on‑time** | Cold‑chain vs. standard, labeled |
| **预警与审批 Alerts & approvals** | Routed to the responsible role (临期风险→仓储, PO 待审批→总经理, 质量聚集→客服+溯源, 到岸成本↑→采购+财务) |
| **角色看板 Role dashboards** | Compact least‑information cards for 运营 / 采购 / 仓储 / 物流 / 营销 / 客服 / 财务 / 高管 |

## 2. Full required screen inventory (7) — status

| # | Screen | In preview | Specified in |
|---|--------|:----------:|--------------|
| 1 | Executive dashboard | ✅ shown (rich) | [07](07-manager-sitemap.md) |
| 2 | Operations dashboard | ✅ shown (role card) | 07 |
| 3 | Procurement dashboard | ✅ shown (role card) | 07 |
| 4 | Warehouse dashboard | ✅ shown (role card + zone chart) | 07 |
| 5 | Logistics dashboard | ✅ shown (role card + on‑time) | 07 |
| 6 | Sales dashboard | ✅ shown (GMV trend + category mix) | 07 |
| 7 | Alerts | ✅ shown (routed alert list) | 07 |

Each functional dashboard has its own full page in the [Manager sitemap](07-manager-sitemap.md); the preview renders the Executive view plus a **least‑information card** for every other role to demonstrate the "each role sees only its own signals" principle.

## 3. Chart/data‑viz discipline (why it looks like one system)
- **Category mix = magnitude**, so it uses a **single hue** with direct value labels (colour is not the encoding — length is). This sidesteps categorical‑colour ambiguity entirely and is the correct form.
- **Warehouse zones** use the **functional temperature colours** — a legitimate encoding of a real dimension — with labels.
- **Trend** uses the brand hue with a faint grid, tick labels that name real values, and an emphasized endpoint.
- All chart text takes **theme tokens**, so charts stay legible in light and dark. (Palette validated per the dataviz method.)

## 4. Imported‑food specifics visible
- **Category‑breadth as a headline signal:** "海鲜占比 38% ↓" on the executive KPIs and category mix — the visible proof the platform is broadening beyond seafood.
- **Cold‑chain & expiry as first‑class KPIs:** 冷链准时率, 临期货值/风险, zone utilisation, write‑off rate.
- **Traceability one click from quality signals:** the 质量聚集 alert links a batch to CS + 溯源.
- **Least‑information by role** ([12](12-roles-permissions.md)).

## 5. Notes
- Figures are illustrative and internally consistent across the three surfaces.
- Same tokens and dark theme; the Manager surface benefits from the dark theme in low‑light executive settings.
