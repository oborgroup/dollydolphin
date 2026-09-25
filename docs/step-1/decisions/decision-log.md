# Decision Log — Step 1

This log consolidates every **`[DECISION REQUIRED]`** (needs the product owner's input) and **`[ASSUMPTION]`** (a reasonable default taken to keep the project moving; overridable) made across the Step 1 package.

For each decision: **the decision · options · advantages/disadvantages · recommendation · impact on future scalability.**

---

## Decisions requiring input

### D‑01 — Branding Kit & brand identity
**Decision:** What is the platform's brand identity (name, logo, colour, type, tone)?
**Context:** The brief names an uploaded Branding Kit as the source of truth; it is not present in the repository.
**Options:**
1. **Supply the real Branding Kit** and we apply it to the tokenized design system.
2. **Approve the proposed direction** in [16 — Design System](../16-design-system.md) (premium, warm, "global/imported," saffron‑gold + deep‑pine, deliberately not ocean‑blue seafood).
3. **Commission a new identity** as a parallel workstream.
**Advantages / disadvantages:** (1) most accurate, blocks nothing because the system is tokenized; (2) unblocks previews immediately, risk of rework if the real kit diverges; (3) highest quality, adds calendar time.
**Recommendation:** Proceed on **(2)** now — the design system is fully tokenized, so swapping in (1) later is a one‑file change. Confirm the **name** early (working name *OBOR Select*), since it appears in copy and the Mini Program listing.
**Scalability impact:** None. Brand tokens are decoupled from structure; functional colours (cold‑chain blue, ambient sand) are separate from brand colours by design.

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

---

## Assumptions taken (overridable)

| ID | Assumption | Rationale | Reverse cost |
|----|-----------|-----------|--------------|
| A‑01 | Working brand name is **OBOR Select** | Ties to *oborgroup*; evokes trade routes / global sourcing; category‑neutral (not seafood). | Low — find/replace + listing |
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

---

## How decisions are resolved

Mark each decision **Approved**, **Amended** (with the chosen option), or **Deferred** on the [Approval Checklist](../21-approval-checklist.md). Amendments that change *launch configuration* (D‑02, D‑03, D‑04) do not change the architecture — they change which capabilities are switched on at launch.
