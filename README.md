# Dolly Dolphin — Imported Food Commerce Platform

> **Brand:** *Dolly Dolphin* — “Premium Ocean Seafood”, a member of the **DOCANNED family**. The visual identity (ocean‑blue + coral‑pink, the dolphin‑forms‑a‑D mark, rounded type) is applied from the supplied Branding Kit. See [15 — Branding Analysis](docs/step-1/15-branding-analysis.md) — including the one open brand‑architecture question ([D‑08](docs/step-1/decisions/decision-log.md)): whether the ocean/dolphin brand is the platform master brand or the flagship seafood house‑brand within a broader imported‑food platform.
> **Live interface preview:** https://claude.ai/artifact/QbHb1ywdeErZmbuhKJCTAv (private — clickable Consumer / Admin / Manager preview).
> **This repository currently contains STEP 1 only:** an approval‑ready product architecture, UX architecture, design system, and interface preview. **No production code has been written yet** — see the [Development Gate](#development-gate).

A premium **imported‑food** e‑commerce platform for Chinese consumers, delivered primarily through a **WeChat Mini Program**, with an **Admin** operations platform and a **Manager** analytics platform.

The platform launches with **imported seafood and meat**, but it is deliberately architected as a **general imported‑food commerce platform** — categories, product attributes, filters, inventory, batch tracking, and logistics are all configuration, not hard‑coded assumptions. Adding *Dairy*, *Frozen Vegetables*, *Sauces*, *Snacks*, or *Bakery* later is a data operation, not a rebuild.

> **Core principle:** We are **not** building "a seafood app that later happens to sell meat and canned food." We are building **"an imported‑food platform that initially specializes in seafood and meat."**

---

## How to review this Step 1 package

Read the documents in order. Each is self‑contained; together they form the stakeholder approval package.

| #  | Document | What it answers |
|----|----------|-----------------|
| 00 | [Overview](docs/step-1/00-overview.md) | Executive summary, scope, how to read this package |
| 01 | [Product Vision](docs/step-1/01-product-vision.md) | What we are building and for whom |
| 02 | [Business Model](docs/step-1/02-business-model.md) | How the business works end‑to‑end |
| 03 | [Platform Structure Map](docs/step-1/03-platform-structure-map.md) | The three surfaces and their shared core |
| 04 | [Product & Category Architecture](docs/step-1/04-product-category-architecture.md) | The universal food product model (the heart of the platform) |
| 05 | [Consumer Sitemap](docs/step-1/05-consumer-sitemap.md) | Every consumer screen |
| 06 | [Admin Sitemap](docs/step-1/06-admin-sitemap.md) | Every admin module |
| 07 | [Manager Sitemap](docs/step-1/07-manager-sitemap.md) | Every manager dashboard |
| 08 | [Consumer User Flows](docs/step-1/08-consumer-user-flows.md) | Discovery → cart → checkout → after‑sales |
| 09 | [Supply Chain Flows](docs/step-1/09-supply-chain-flows.md) | Supplier → import → batch → warehouse → shelf |
| 10 | [Order & Fulfillment Architecture](docs/step-1/10-order-fulfillment-architecture.md) | Mixed‑temperature orders, splitting, packaging |
| 11 | [Batch & Traceability Architecture](docs/step-1/11-batch-traceability-architecture.md) | Full farm/vessel‑to‑customer traceability |
| 12 | [Roles & Permissions](docs/step-1/12-roles-permissions.md) | RBAC model + full permission matrix |
| 13 | [Core Data Model](docs/step-1/13-core-data-model.md) | Conceptual entities and relationships (ERD) |
| 14 | [UX Architecture](docs/step-1/14-ux-architecture.md) | Navigation, patterns, adaptive PDP |
| 15 | [Branding Analysis](docs/step-1/15-branding-analysis.md) | Dolly Dolphin Branding Kit analysis + brand‑architecture (D‑08) |
| 16 | [Design System](docs/step-1/16-design-system.md) | Tokens, components, badges, charts |
| 17 | [Consumer Interface Preview](docs/step-1/17-consumer-interface-preview.md) | Consumer screens (spec + preview) |
| 18 | [Admin Interface Preview](docs/step-1/18-admin-interface-preview.md) | Admin screens (spec + preview) |
| 19 | [Manager Interface Preview](docs/step-1/19-manager-interface-preview.md) | Manager dashboards (spec + preview) |
| 20 | [Future Scalability](docs/step-1/20-future-scalability.md) | How new categories are added without a rebuild |
| 21 | [Approval Checklist](docs/step-1/21-approval-checklist.md) | Sign‑off sheet |

**Decisions & assumptions:** every `[DECISION REQUIRED]` and `[ASSUMPTION]` is consolidated in the [Decision Log](docs/step-1/decisions/decision-log.md).

## Interface preview

A clickable, high‑fidelity interface preview of the Consumer, Admin, and Manager surfaces lives in [`preview/index.html`](preview/index.html) and is published (private) at **https://claude.ai/artifact/QbHb1ywdeErZmbuhKJCTAv**. It is a **visual prototype for approval** — not production code — and every colour, font, and spacing value is a CSS token carrying the **Dolly Dolphin** Branding Kit, so the whole platform can be re‑skinned or themed by editing one file ([`preview/assets/tokens.css`](preview/assets/tokens.css)).

## Development Gate

| Step | Scope | Status |
|------|-------|--------|
| **STEP 1** | Product Architecture + UX + UI Preview → **Approval** | ✅ **This package — awaiting approval** |
| STEP 2 | Technical Architecture + Database + APIs → Approval | ⛔ Not started |
| STEP 3 | Consumer WeChat Mini Program | ⛔ Gated on Step 1 + 2 |
| STEP 4 | Admin Platform | ⛔ Gated |
| STEP 5 | Manager Platform | ⛔ Gated |
| STEP 6 | Supply Chain + Inventory + Procurement + Batch | ⛔ Gated |
| STEP 7 | Payment + Logistics + Notifications | ⛔ Gated |
| STEP 8 | Testing + UAT + Launch | ⛔ Gated |

**No production development begins until this Step 1 package is approved.**
