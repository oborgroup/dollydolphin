# 02 — Business Model

## 1. What kind of business this is

A **B2C imported‑food e‑commerce platform**. The operator sources imported food‑grade products, imports and stores them (cold and ambient), and sells them directly to Chinese consumers through a WeChat Mini Program, fulfilled by cold‑chain and standard logistics.

The operator is not merely a storefront — it owns (or closely controls) **procurement, import, storage, and fulfillment**, because that end‑to‑end control is what makes the trust promise credible.

## 2. Value chain (end to end)

```
International            Import &            Storage             Demand &            Fulfillment
suppliers               compliance          (multi-temp)        commerce            & service
   │                       │                    │                   │                    │
Producers,            Procurement,         Frozen / Chilled /   Mini Program       Cold-chain +
importers,      →     purchase orders, →   Ambient warehouses →  discovery,     →   standard
brands               customs, docs        + batches            cart, checkout      delivery,
                                                               membership,          after-sales
                                                               promotions
```

Each stage maps to a module in the [Admin](06-admin-sitemap.md) and a set of entities in the [Data Model](13-core-data-model.md).

## 3. Actors

| Actor | Role |
|-------|------|
| **International suppliers / producers / brands** | Origin of goods; provide product, certification, batch/production data |
| **Importer(s)** | Bring goods across the border; own customs & import documentation |
| **Procurement team** | Select suppliers, raise purchase orders, negotiate cost & terms |
| **Warehouse / cold‑storage team** | Receive, inspect, store by temperature, manage batches, pick & pack |
| **Logistics partners** | Cold‑chain carriers, standard parcel, local delivery |
| **Consumers** | Chinese shoppers on the Mini Program |
| **Customer service & after‑sales** | Orders, refunds, complaints, quality issues |
| **Marketing** | Campaigns, coupons, promotions, homepage, recommendations |
| **Finance** | Revenue, cost of goods, margin, refunds, reconciliation |
| **Management** | GM + functional managers steering the business |

## 4. Revenue & cost model (conceptual)

**Revenue**
- Product sales (core).
- Delivery fees (temperature‑ and region‑dependent).
- Membership (if a paid tier is adopted — see [D‑04](decisions/decision-log.md)).
- Promotional & merchandising levers: coupons, bundles, campaigns.

**Cost**
- Cost of goods (landed cost = product + freight + duty + import handling).
- Cold & ambient storage.
- Cold‑chain and standard logistics.
- Payment processing, platform, marketing, CS, spoilage/expiry write‑offs.

**Margin management** is a first‑class Admin/Manager concern: landed cost is captured per batch, so **gross margin can be computed per SKU, per batch, and per order** — critical when different batches of the same product have different landed costs (FX, freight, duty).

> **[ASSUMPTION · A‑05]** Consumer prices are shown VAT‑inclusive; delivery and any fees are itemised at checkout.

## 5. The two product worlds the business must serve at once

The single most consequential business fact: **the catalog spans temperature‑controlled and ambient goods simultaneously**, and a single order can contain both.

| | **Temperature‑controlled** | **Ambient** |
|--|----------------------------|-------------|
| Examples | Frozen seafood, frozen/chilled meat, frozen prepared food | Canned fish, canned meat, sauces, dry imported foods |
| Storage | Frozen (≤ −18 °C) / Chilled (0–4 °C) zones | Ambient zone |
| Logistics | Cold‑chain, insulated packaging, temperature assurance, delivery windows | Standard parcel |
| Shipping economics | Higher; region/window constrained | Lower; broad reach |
| Product info | Storage temp, cold‑chain requirement, shelf life critical | Shelf life, storage type |

This distinction drives **inventory, warehousing, logistics, delivery, shipping fees, product information, and order fulfillment** — and it is modelled as a **property of the SKU/batch**, so every current and future category inherits the correct behaviour automatically. See [10 — Order & Fulfillment](10-order-fulfillment-architecture.md).

## 6. Business capabilities (what the platform must do)

Grouped as capability areas; each is elaborated in later documents.

1. **Merchandising & catalog** — categories, universal product model, attributes, brands, pricing, content.
2. **Procurement & import** — suppliers, purchase orders, import batches, landed cost, arrivals.
3. **Inventory & storage** — multi‑warehouse, multi‑temperature zones, batches, stock states, expiry.
4. **Batch & traceability** — full chain supplier→customer, compliance documentation.
5. **Commerce** — discovery, search, filters, cart, checkout, payment.
6. **Fulfillment & logistics** — order splitting, packaging, cold‑chain + standard delivery, tracking.
7. **Customer** — accounts, membership, points, coupons, addresses, reviews, after‑sales.
8. **Marketing** — campaigns, coupons, promotions, homepage, recommendations, content.
9. **Finance** — revenue, landed cost, margin, refunds, reconciliation.
10. **Platform** — users, roles, permissions, audit, configuration.

## 7. Operating flows (headline)

- **Inbound:** Supplier → Purchase Order → Import Batch (customs/docs) → Arrival & inspection → Warehouse/Zone → Inventory (batch). ([09](09-supply-chain-flows.md))
- **Outbound:** Discovery → Cart → Checkout → Payment → Allocation (batch/warehouse) → Split by temperature → Pack → Cold‑chain/standard delivery → Delivered → (After‑sales). ([08](08-consumer-user-flows.md), [10](10-order-fulfillment-architecture.md))
- **Traceability (any time):** Order/customer ↔ Batch ↔ Import ↔ Supplier, with compliance docs. ([11](11-batch-traceability-architecture.md))

## 8. Compliance posture

Because the goods are *imported food*, the business must hold and, where appropriate, surface: country of origin, production/import country, import batch, customs information, import documentation, certifications, storage & handling requirements, ingredients, allergens, and nutrition. Compliance data is **structured** and attached to product, batch, and category — not stored as loose text. A **compliance‑gating flag** is reserved for any future specially‑regulated goods ([D‑07](decisions/decision-log.md)).

## 9. Growth model

- **Phase 1 (launch):** Seafood + Meat.
- **Phase 2:** Canned + Processed food.
- **Phase 3+:** Dairy, frozen produce, sauces, condiments, snacks, bakery, dry goods, premium groceries.

Each phase is **catalog and supply‑chain onboarding**, not platform re‑engineering — the explicit success test of the architecture. See [20 — Future Scalability](20-future-scalability.md).

## 10. Key business risks the architecture must de‑risk

| Risk | Architectural mitigation |
|------|--------------------------|
| Broken cold chain | Storage class + cold‑chain requirement on SKU/batch; logistics strategy per shipment; delivery windows |
| Expiry / spoilage loss | Batch‑level expiry tracking; expiring‑inventory alerts; FEFO allocation |
| Trust / authenticity doubt | Structured provenance, certification, traceability |
| Landed‑cost volatility (FX, freight, duty) | Landed cost per batch; margin per batch/order |
| Category expansion stalling | Universal, configurable product/category/attribute/filter model |
| Mixed‑temperature order confusion | Order splitting, per‑shipment packaging & fees |
