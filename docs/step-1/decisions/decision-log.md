# Decision Log — Step 1

This log consolidates every **`[DECISION REQUIRED]`** (needs the product owner's input) and **`[ASSUMPTION]`** (a reasonable default taken to keep the project moving; overridable) made across the Step 1 package.

For each decision: **the decision · options · advantages/disadvantages · recommendation · impact on future scalability.**

---

## Decisions requiring input

### D‑01 — Branding Kit & brand identity — ✅ RESOLVED (kit supplied & applied)
**Decision:** What is the platform's brand identity (name, logo, colour, type, tone)?
**Resolution:** The **Dolly Dolphin** Branding Kit (*Dolly_dolphin.pdf*, 2024.04) was supplied and **applied** across the design system and interface preview:
- **Colours:** 海洋蓝 Ocean Blue `#4AA6E0` · 珊瑚粉 Coral Pink `#FF8FAE` · 纯净白 White `#FFFFFF` (+ derived deep‑ocean navy for depth/dark theme).
- **Logo:** leaping dolphin forming a **"D"** (coral upper / ocean lower, white dolphin) + rounded wordmark. The real vector logo is used top‑left; the preview embeds the supplied artwork.
- **Type:** English = **Bold Rounded Sans** (web: Baloo 2 + Nunito); Chinese = **思源黑体 / 苹方** (Source Han Sans / PingFang → web: Noto Sans SC).
- **Tone / values:** Premium Ocean Seafood · Ecological Circulation · Sustainable Wild‑Catch · Professional Cold Chain · Global Fisheries.
**Scalability impact:** None. Brand tokens are decoupled from structure; **functional temperature colours (frozen/chilled/ambient) are kept separate from brand colours** by design, so the ocean‑blue brand does not collide with the "frozen" tag. Full read‑out in [15 — Branding Analysis](../15-branding-analysis.md) and [16 — Design System](../16-design-system.md). One open follow‑on: **D‑08** (brand architecture).

### D‑02 — Delivery model at launch
**Decision:** Which fulfillment model does launch support?
**Options:**
1. **Instant local delivery** (Pupu‑style, 30–60 min, dark stores in one city).
2. **Next‑day cold‑chain** in selected cities (regional cold hubs).
3. **Nationwide parcel** (cold‑chain express for frozen/chilled + standard parcel for ambient).
**Advantages / disadvantages:** (1) best UX, highest ops cost, city‑by‑city rollout; (2) balances reach and cost; (3) widest reach, longest lead times, hardest cold‑chain assurance.
**Recommendation:** Architect for **all three** (the model already does — see [10](../10-order-fulfillment-architecture.md)); **launch with (2) next‑day cold‑chain in 1–3 tier‑1 cities plus (3) nationwide parcel for ambient‑only orders.** This proves cold‑chain and reach without committing to dark‑store capex.
**Scalability impact:** High. The order/fulfillment model treats delivery method as a per‑shipment strategy, so adding (1) later is configuration, not redesign.

### D‑03 — Warehouse footprint at launch
**Decision:** Single warehouse or multi‑warehouse from day one?
**Options:** (1) One combined facility with frozen + chilled + ambient zones; (2) multiple facilities / regions.
**Recommendation:** **Launch single‑facility, multi‑zone**; keep the multi‑warehouse model in the data layer so orders can already reference warehouse + zone. Turn on multi‑warehouse allocation when a second facility opens.
**Scalability impact:** High but pre‑solved — inventory is keyed on *Warehouse → Storage Zone → Batch* regardless of how many warehouses exist.

### D‑04 — Membership model
**Decision:** Paid membership tier, points/loyalty only, or both?
**Options:** (1) Paid tier with member prices + perks (Costco/Sam's‑style); (2) free points/tiers earned by spend; (3) both.
**Recommendation:** **Launch with (2) free tiered loyalty + member price on selected SKUs**; keep the paid‑tier fields in the model so (1) can be switched on later. Member price is already a first‑class field on pricing.
**Scalability impact:** Medium. Pricing supports base price + member price + promotional price simultaneously, so any model is a configuration.

### D‑05 — Depth of consumer‑facing traceability at launch
**Decision:** How much batch/traceability do we expose to shoppers on day one?
**Options:** (1) Trust badges only (origin, certification, cold‑chain); (2) badges + "this batch" summary (origin, production/expiry, import batch); (3) full scan‑to‑trace journey.
**Recommendation:** **Launch (2)**; full (3) is a differentiator to phase in. The batch model already captures everything (1)–(3) need.
**Scalability impact:** None — surfacing is a UI decision over existing data.

### D‑06 — Consumer identity & login
**Decision:** WeChat‑only login, or WeChat + phone (OTP)?
**Recommendation:** **WeChat login as primary** (native to the Mini Program) with phone binding for order/CS continuity. Standard for the channel.
**Scalability impact:** Low; the User model separates identity from profile.

### D‑07 — Age/compliance gating & restricted goods
**Decision:** Will the catalog ever include age‑restricted or specially‑regulated imported goods (e.g., certain alcohol, health foods)?
**Recommendation:** **Keep a compliance‑gating flag on category/product now, unused at launch** if the launch catalog is food‑only. Cheap to include, expensive to retrofit.
**Scalability impact:** High for future categories — pre‑solving avoids a redesign when regulated goods appear.

### D‑08 — Brand architecture (master brand vs. house‑brand) — OPEN
**Decision:** Is **Dolly Dolphin** the platform's **master brand**, or the flagship **seafood house‑brand** within a broader imported‑food platform?
**Context:** The supplied identity is explicitly **seafood/ocean‑forward** — "Premium Ocean Seafood", a leaping dolphin, "frozen sardines" as the hero product — and the kit itself references a **"DOCANNED family."** The platform, by the brief's core principle, is a **general imported‑food marketplace**. A seafood‑signifying master brand risks re‑introducing the "seafood app" perception *at the brand layer* even though the architecture is category‑general.
**Options:**
1. **Dolly Dolphin = master brand.** Embrace the ocean identity platform‑wide; keep consumer messaging broad ("全球甄选/进口精选", not "seafood only"); let categories live under it.
2. **DOCANNED (or a new parent) = master brand; Dolly Dolphin = seafood house‑brand.** The platform carries a category‑neutral parent identity; Dolly Dolphin becomes the flagship seafood line within it.
3. **Endorsed brand.** Parent + "by Dolly Dolphin" endorsement during transition.
**Advantages / disadvantages:** (1) fastest, uses the asset we have, strong recall — but a dolphin/"ocean seafood" master brand fights the "not a seafood platform" goal as the catalog broadens; (2) cleanest long‑term fit for a broad pantry — but needs a parent identity we don't yet have; (3) balances both, more complexity.
**Recommendation:** **Use the Dolly Dolphin visual system for Step 1 (it is the supplied kit) while treating this as an explicit brand‑architecture decision for the owner.** Lean toward **(2)/(3)** as the catalog broadens (the "DOCANNED family" hint suggests a parent already exists). **This affects naming and consumer messaging only — not the architecture**, which stays category‑general regardless.
**Scalability impact:** Brand‑layer only. The product/category/attribute architecture is unaffected by the outcome.

---

## Assumptions taken (overridable)

| ID | Assumption | Rationale | Reverse cost |
|----|-----------|-----------|--------------|
| A‑01 | Brand is **Dolly Dolphin** (supplied Branding Kit) | Provided kit — "Premium Ocean Seafood", part of the DOCANNED family. Master‑brand vs. seafood house‑brand is the open decision **D‑08**. | Low — visual is tokenized |
| A‑02 | Primary market is **Mainland China**, language **Simplified Chinese**, currency **CNY (¥)** | Chinese consumers via WeChat. | Low; i18n kept in the model for future markets |
| A‑03 | Consumer channel is a **WeChat Mini Program**; Admin & Manager are **responsive web** | Stated in brief. | High — foundational |
| A‑04 | Payment is **WeChat Pay** at launch | Native to the channel. | Medium |
| A‑05 | Prices shown **VAT‑inclusive**, fees itemised at checkout | Chinese consumer norm. | Low |
| A‑06 | Three storage classes: **Frozen (≤ −18 °C), Chilled (0–4 °C), Ambient** | Covers the launch catalog; extensible. | Low — storage classes are data |
| A‑07 | Taxonomy depth: **Category → Subcategory → Product Type → Product → SKU → Batch**, with consumers seeing 2–3 levels | Balances shopper simplicity with catalog richness. | Low — levels are data |
| A‑08 | Reviews are **on** and tied to verified purchase | Trust for premium imports. | Low |
| A‑09 | Content hub (recipes, origin stories, education) is **in scope for the design**, lightweight at launch | Supports discovery + trust. | Low |
| A‑10 | One shared **RBAC** system spans Admin and Manager | Simplicity, one audit trail. | Medium |
| A‑11 | Measurement/nutrition uses **metric + per‑100g** (China GB nutrition label convention) | Regulatory fit. | Low |
| A‑12 | Design system ships **light theme first**; dark theme tokens defined for Admin/Manager comfort | Consumer food UX is light; ops tools benefit from dark. | Low |
| A‑13 | **Design language = Western / US premium e‑commerce; all UI content = Simplified Chinese** (owner direction) | Owner prefers a clean, spacious Western aesthetic over dense domestic‑app styling, with Chinese copy for the CN market. **朴朴/Pupu is a UX‑pattern reference only, not a visual one.** Refinements per owner feedback: **type = editorial serif + grotesque** (Fraunces/Noto Serif SC + Hanken Grotesk/Noto Sans SC), overriding the kit's rounded sans for on‑screen text; **icons = inline SVG line set** (no emoji); **product imagery = the real signature product photo + original line‑motif placeholders** (no third‑party/stock). Brand colours, logo and tone unchanged. | Low — styling & copy, not architecture |

---

## How decisions are resolved

Mark each decision **Approved**, **Amended** (with the chosen option), or **Deferred** on the [Approval Checklist](../21-approval-checklist.md). Amendments that change *launch configuration* (D‑02, D‑03, D‑04) do not change the architecture — they change which capabilities are switched on at launch.
