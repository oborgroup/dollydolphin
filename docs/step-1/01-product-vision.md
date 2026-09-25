# 01 — Product Vision

## 1. One sentence

**A premium imported‑food marketplace for Chinese consumers — a trusted single place to discover and buy authentic imported food, delivered with the provenance, freshness, and safety assurance that imported food demands — launching with seafood and meat, and built to grow into the full imported pantry.**

## 2. The problem

Chinese consumers who want imported food today navigate a fragmented, low‑trust landscape:

- **Trust is the core anxiety.** Is this salmon really Norwegian? Was the cold chain unbroken? Is the expiry honest? Is the certification real? Imported food carries a provenance‑and‑safety question that domestic groceries do not.
- **Selection is scattered.** Imported seafood, meat, canned goods, and specialty groceries live across different daigou sellers, marketplaces, and specialty shops — no single premium destination.
- **The experience is inconsistent.** Cold‑chain reliability, clear origin information, and honest freshness vary wildly seller to seller.

## 3. The vision

A single, premium destination — as easy to shop as a top‑tier grocery Mini Program, but built specifically for **imported** food, where:

- **Provenance is visible.** Country of origin, producer, catch/farm method, certification, and import batch are structured, trustworthy, and surfaced — not marketing fluff.
- **Freshness and safety are assured.** Cold‑chain status, storage class, shelf life, and batch/expiry are first‑class, and the platform can trace any item from **supplier → import → batch → warehouse → order → customer**.
- **Discovery is delightful.** A Pupu‑grade shopping experience — fast homepage, clean categories, rich product cards, frictionless cart and checkout, coupons, membership, recommendations.
- **The pantry keeps growing.** Seafood and meat today; canned and processed next; dairy, frozen produce, sauces, snacks, bakery, and dry goods later — all without rebuilding.

## 4. Who it is for

| Segment | What they want | How the platform serves them |
|---------|----------------|------------------------------|
| **Quality‑seeking urban households** | Reliable premium ingredients, honest provenance | Curated imported selection, trust badges, traceability |
| **Home cooks & food enthusiasts** | Interesting cuts, species, origins; recipes | Rich PDP, category depth, content hub, cooking guides |
| **Gifting & occasion buyers** | Premium, giftable, certified | Premium selection, certification, presentation |
| **Convenience‑first shoppers** | Fast, dependable delivery of staples | Best‑sellers, reorder, fast checkout, membership |

> **[ASSUMPTION · A‑02]** Primary market is Mainland China; language Simplified Chinese; currency CNY. Internationalisation fields are retained in the model for later markets.

## 5. Brand promise

> **"Imported food you can trust — sourced globally, handled properly, delivered fresh."**

Four pillars, expressed everywhere from the homepage to the PDP to packaging:

1. **Global sourcing** — authentic, direct, named origins.
2. **Authenticity & compliance** — real certification, import documentation, honest labelling.
3. **Cold‑chain integrity** — the right temperature, end to end, where required.
4. **Traceability** — every item traceable to its batch and origin.

## 6. Positioning

|  | Domestic grocery apps (e.g., Pupu) | Daigou / marketplace sellers | **OBOR Select** |
|--|-----------------------------------|------------------------------|-----------------|
| Selection | Broad, mostly domestic | Narrow, seller‑dependent | **Curated imported, growing** |
| Trust / provenance | Low emphasis | Highly variable | **First‑class, structured** |
| Cold chain | Local, strong | Unreliable | **Assured & visible** |
| Experience | Excellent | Poor | **Premium & consistent** |
| Traceability | Minimal | None | **Batch‑level** |

We borrow Pupu's **experience quality** and pair it with **imported‑food trust** — the combination no incumbent offers.

## 7. What makes the architecture different (and why it matters to the vision)

The vision ("the whole imported pantry, trusted") only survives if the *architecture* refuses to become seafood‑shaped:

- A **universal product model** with configurable, category‑specific attributes (seafood's *fishing area*, meat's *marbling*, canned's *drain weight* are the same mechanism).
- **Storage temperature as a SKU/batch property**, not a category — so cold‑chain "just works" for any future frozen category.
- **Batch & traceability as core**, because *imported* is the differentiator.
- **Mixed‑temperature orders** treated as normal, not exceptional.

See [26 — Most Important Design Principle](00-overview.md#2-the-one-principle-everything-is-measured-against) restated throughout.

## 8. Success looks like (illustrative KPIs to instrument later)

- **Trust:** provenance‑complete PDPs %, cold‑chain‑assured orders %, traceability coverage %.
- **Commerce:** conversion, AOV, repeat rate, member share, category mix breadth (seafood share falling as catalog broadens is a *good* sign).
- **Operations:** on‑time cold‑chain %, expiry write‑off %, order‑split efficiency.

## 9. Non‑goals for Step 1

- Not a technical spec, database, or API design (Step 2).
- Not a marketing plan or unit‑economics model.
- Not a final brand identity (pending Branding Kit).
