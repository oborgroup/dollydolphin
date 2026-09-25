# 18 — Admin Interface Preview

**Live (clickable):** https://claude.ai/artifact/QbHb1ywdeErZmbuhKJCTAv → **运营后台** tab
**Source:** [`preview/index.html`](../../preview/index.html)

Character: **efficient, structured, information‑dense** — organised around the imported‑food business. Design language Western/clean; content **Simplified Chinese**; brand applied from tokens.

## 1. Screens shown interactively (8 modules)

| # | Screen | What it demonstrates |
|---|--------|----------------------|
| 1 | **仪表盘 Operations Dashboard** | KPI tiles with sparklines (GMV, orders, margin, **临期货值/expiring value**), **品类占比** category‑mix bars (single‑hue, Seafood "首发聚焦" highlighted), and an **actionable alert list** (each links to the record: 降价/补货/查看/质检) |
| 2 | **商品编辑 Product Editor** | The **adaptive editor**: 基本信息 + **品类属性（来自「肉类」属性集）** with the note that switching category swaps the block to Seafood/Canned fields — one editor, any category; SKUs with **储存/storage class** pills; food & compliance + publishing asides |
| 3 | **批次与库存 Batches & Inventory** | Batch table: product, **batch code**, origin flag, **storage zone** pill (冷冻/冷藏/常温), expiry (临期 in red), available, **stock state** (可售/待检/临期) — FEFO view, new receipt |
| 4 | **分类与属性集 Categories & Attribute Sets** | Category tree + the **「肉类」attribute set** (filterable flags per attribute) + the note that the *same mechanism* serves seafood/canned — the universal‑model proof, as configuration |
| 5 | **采购与进口 Procurement** | PO pipeline (待审批/在途/已到货) + an import batch's **landed‑cost build‑up** (商品 + 运费 + 关税 + 操作费 → 到岸成本) and an FX‑impact alert |
| 6 | **订单 Orders** | Order detail with **temperature split** into two fulfillment groups (batch‑stamped) + payment breakdown + a fulfillment step tracker |
| 7 | **物流 Logistics** | Shipments table (cold‑chain vs. standard, carrier, region, window, status) + a cold‑chain SLA exception alert with a re‑route action |
| 8 | **角色与权限 Roles & Permissions** | The **RBAC permission matrix** (resources × roles) with full / approval / scoped / read‑only markers and a legend |

## 2. Full required screen inventory (14) — status

| # | Screen | In preview | Specified in |
|---|--------|:----------:|--------------|
| 1 | Dashboard | ✅ shown | [06](06-admin-sitemap.md) |
| 2 | Products | ◻︎ spec | 06 — list/search/filter/bulk/status |
| 3 | Product editor | ✅ shown | 06, [04](04-product-category-architecture.md) |
| 4 | Categories | ✅ shown | 06 |
| 5 | Inventory | ✅ shown | 06, [11](11-batch-traceability-architecture.md) |
| 6 | Batch management | ✅ shown | 06, 11 |
| 7 | Suppliers | ✅ shown (in Procurement) | 06, [09](09-supply-chain-flows.md) |
| 8 | Procurement | ✅ shown | 06, 09 — PO, import batch, landed cost |
| 9 | Orders | ✅ shown | 06, [10](10-order-fulfillment-architecture.md) |
| 10 | Logistics | ✅ shown | 06, 10 |
| 11 | Customers | ◻︎ spec | 06 |
| 12 | Marketing | ◻︎ spec | 06 |
| 13 | Finance | ◻︎ spec | 06 — margin by SKU/batch/order/category |
| 14 | Roles & permissions | ✅ shown | 06, [12](12-roles-permissions.md) |

Ten of the fourteen modules render interactively. The remaining four (Products list, Customers, Marketing, Finance) are standard CRUD/analytics surfaces fully defined in the sitemap; the left‑nav shows the **full module set** so the whole surface is legible. All can be built out on request.

## 3. Imported‑food specifics visible
- **Adaptive editor** proves the "universal product model" — the single most important architectural claim ([04](04-product-category-architecture.md)).
- **Batch is everywhere:** batch codes, storage zones, expiry, and stock states run through inventory (and feed orders/finance/traceability).
- **Alerts are actionable** and imported‑food‑specific: expiring batches, low stock vs. reorder point, cold‑chain SLA, import‑batch arrival → inspection.
- **Role chips** (运营管理员 / 商品运营 / 仓储主管) hint at [RBAC](12-roles-permissions.md) scoping.

## 4. Notes
- Data is illustrative. Tables/editors show realistic imported‑food records (Norwegian salmon, AU ribeye, Spanish tuna, Argentine shrimp, NZ lamb).
- The same tokens/dark‑theme apply; Admin benefits from the dark theme for long operational sessions ([A‑12](decisions/decision-log.md)).
