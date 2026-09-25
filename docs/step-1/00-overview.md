# 00 — Overview

*Step 1 · Imported Food Commerce Platform · Prepared for stakeholder / product‑owner approval*

---

## 1. What Step 1 is

Step 1 delivers an **approval‑ready product architecture and interface preview** — the blueprint the whole programme is built from. It is deliberately **not** production code. Its job is to let a stakeholder look at one coherent package and answer a single question:

> *"Yes — build this."*

The workflow this package completes:

```
Business Model → Platform Architecture → Sitemap → User Flows
   → UX Architecture → Design System → Interface Preview → APPROVAL
```

Only after approval does the programme proceed to Step 2 (technical architecture, database, APIs) and beyond.

## 2. The one principle everything is measured against

Every decision in this package was tested against a single rule:

> **Build an imported‑food platform that *initially specializes* in seafood and meat — not a seafood app that later bolts on other food.**

Concretely, that means:

- **Categories** are data, created and reorganised in the Admin — not code branches.
- **Product attributes** are defined by reusable **Attribute Sets** bound to categories — seafood's *Fishing Area* and meat's *Marbling Grade* are the *same mechanism*, not two systems.
- **Filters** are generated from attributes — no category has bespoke filter code.
- **Storage temperature** (frozen / chilled / ambient) is a **property of a SKU/batch**, not a category — so a future "Frozen Vegetables" category inherits cold‑chain behaviour for free, and "Sauces" inherits ambient behaviour for free.
- **The product detail page, search, inventory, batch tracking, and logistics** all read from the same universal model.

If a proposed feature would only make sense for seafood, it was reworked until it made sense for *any* imported food.

## 3. Scope of the three surfaces

| Surface | Audience | Character | Primary platform |
|---------|----------|-----------|------------------|
| **Consumer** | Chinese shoppers | Premium, simple, appetizing, trustworthy | WeChat Mini Program |
| **Admin** | Operations, merchandising, warehouse, procurement, CS staff | Efficient, structured, information‑dense | Web (desktop) |
| **Manager** | GM and functional managers | Data‑driven, executive, decision‑oriented | Web (desktop / tablet) |

All three are **views onto one shared core** — Products, Categories, Supply Chain, Compliance, Inventory, Orders, Logistics, Users. See [03 — Platform Structure Map](03-platform-structure-map.md).

## 4. Reference product

**朴朴超市 / Pupu Supermarket** is the **UX‑pattern** reference for consumer flows (homepage rhythm, category navigation, product cards, cart, checkout, delivery, coupons, membership) — interaction inspiration only, never its branding, layout, or copy.

Per the owner's direction ([A‑13](decisions/decision-log.md)), the **visual design language is Western / US premium e‑commerce** — clean, spacious, editorial — rather than dense domestic‑app styling; **all UI content is Simplified Chinese** for the China market. So Pupu informs *what* patterns exist, not *how* they look. The brand identity comes from the Dolly Dolphin Branding Kit (see [15 — Branding Analysis](15-branding-analysis.md)).

Two things intentionally differ from a domestic grocery app like Pupu, because our business is *imported* food:

1. **Provenance and trust are first‑class** — country of origin, certification, cold‑chain assurance, and batch traceability appear in discovery and on the product page, not buried in fine print.
2. **The product model is import‑ and compliance‑aware** — import batch, customs, shelf life, and storage requirements are structured data, not free text.

## 5. The Branding Kit — applied

The brief names an **uploaded Branding Kit** as the source of truth. It has been supplied (*Dolly_dolphin.pdf*) and **applied** across the design system and preview: **ocean‑blue `#4AA6E0` + coral‑pink `#FF8FAE` + white**, the **leaping‑dolphin‑forms‑a‑“D”** mark, rounded **Bold Rounded Sans** type (**思源黑体 / 苹方** — Source Han Sans / PingFang — for Chinese), and the tagline **"Premium Ocean Seafood."** Every visual value is a CSS token, so re‑skinning or theming the whole platform is a one‑file edit. Full read‑out in [15 — Branding Analysis](15-branding-analysis.md) and [16 — Design System](16-design-system.md).

> **[DECISION REQUIRED · D‑08]** The supplied identity is **seafood/ocean‑forward** ("Premium Ocean Seafood", a leaping dolphin, "frozen sardines" as the hero product), while the platform is a **general imported‑food marketplace**. Decide the **brand architecture**: is *Dolly Dolphin* the platform **master brand**, or the flagship **seafood house‑brand** inside a broader platform (the kit itself references a **"DOCANNED family"**)? This affects **naming and consumer messaging only — not the architecture.** Options and a recommendation are in [15 — Branding Analysis](15-branding-analysis.md) and the [Decision Log](decisions/decision-log.md).

## 6. How to read this package

- **Executives / product owner:** 00 → 01 → 02 → 03 → 21, then click through `preview/index.html`.
- **Architects:** 03 → 04 → 10 → 11 → 13 → 20.
- **Operations / supply chain:** 02 → 09 → 10 → 11 → 06 → 12.
- **Design:** 14 → 15 → 16 → 17 → 18 → 19.

## 7. Deliverables in this package

- **21 architecture & design documents** (`docs/step-1/`).
- **A consolidated decision log** (`docs/step-1/decisions/decision-log.md`).
- **A clickable interface preview** covering all three surfaces (`preview/index.html`).
- **A tokenized design system** carrying the **Dolly Dolphin** Branding Kit (`preview/assets/tokens.css`).

## 8. What this package deliberately does *not* do

- No database schema, API contracts, or technology selection — that is **Step 2**.
- No real product data, pricing, or supplier contracts.
- No payment, WeChat, or logistics‑carrier integration.
- No production font licensing or exact vector‑logo integration (the preview faithfully *reconstructs* the mark from the kit; production embeds the supplied vector and licensed fonts).
- No resolution of the brand‑architecture question (D‑08) — surfaced, not decided.

## 9. Open decisions at a glance

The full list lives in the [Decision Log](decisions/decision-log.md). The ones that most affect architecture:

| ID | Decision | Why it matters now |
|----|----------|--------------------|
| D‑08 | Brand architecture (Dolly Dolphin master brand vs. seafood house‑brand) | Naming & consumer messaging (kit already applied); architecture unaffected |
| D‑02 | Delivery model at launch (instant local vs. next‑day cold‑chain vs. nationwide parcel) | Shapes order, fulfillment, and shipping‑fee architecture |
| D‑03 | Single‑warehouse launch vs. multi‑warehouse from day one | Shapes inventory & order‑splitting logic |
| D‑04 | Membership model (paid tier vs. points‑only) | Shapes pricing, checkout, account |
| D‑05 | Depth of consumer‑facing traceability at launch | Shapes PDP and batch surfacing |

None of these block the *architecture* — all are accommodated by design. They affect *launch configuration*, which is exactly what Step 1 exists to surface before build.
