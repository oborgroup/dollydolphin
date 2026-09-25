# 08 — Consumer User Flows

Core consumer journeys. Each is category‑agnostic and temperature‑aware where it matters.

## 1. Discovery → Purchase (the spine)

```mermaid
flowchart TD
    A([Open Mini Program]) --> B{Entry intent}
    B -->|Browse| C[Home rails / trust strip]
    B -->|Search| D[Search: history, hot, suggestions]
    B -->|Category| E[Category tree]
    C --> F[Product Listing]
    D --> F
    E --> F
    F --> G[Apply sort + dynamic filters]
    G --> H[Product Detail — adaptive]
    H --> I{Decision}
    I -->|Add to cart| J[Cart]
    I -->|Buy now| K[Checkout]
    I -->|Not now| F
    J --> K
    K --> L[Address + delivery method/window per fulfillment group]
    L --> M[Coupons + points + member price]
    M --> N[Pay — WeChat Pay]
    N -->|Success| O[Order confirmed]
    N -->|Fail/Pending| N2[Retry / pending state] --> N
    O --> P[Orders → track per shipment]
```

**Imported‑food specifics baked into the spine:**
- **Trust strip & badges** appear during discovery and on the PDP (origin, certification, cold‑chain, wild/farmed).
- **Storage tag** (Frozen/Chilled/Ambient) is visible from the card onward.
- **Cart groups items by fulfillment group** so mixed‑temperature orders are legible before payment.
- **Delivery method, window, and fee are computed per fulfillment group** (a frozen group and an ambient group may ship differently). See [10](10-order-fulfillment-architecture.md).

## 2. Adaptive Product Detail

```mermaid
flowchart TD
    P[PDP loads product + category] --> Q[Render universal blocks]
    Q --> Q1[Gallery, price/member price, promo]
    Q --> Q2[Trust badges]
    Q --> Q3[Key facts: origin, weight, package, storage, shelf life, availability]
    Q --> Q4[Delivery estimate for this item's temperature]
    P --> R{Category attribute set}
    R -->|Seafood| R1[Provenance: species, fishing area, wild/farmed, catch]
    R -->|Meat| R2[Cut & Grade: cut, grade, marbling, farm, processing]
    R -->|Canned| R3[Can & Packing: can size, net/drain weight, medium, ingredients]
    R -->|Future cat| R4[Its configured sections]
    Q4 --> S[Ingredients · Allergens · Nutrition · Prep]
    R1 & R2 & R3 & R4 --> S
    S --> T[Traceability summary — batch/origin  (D-05)]
    T --> U[Reviews + Recommendations]
    U --> V[Sticky: qty · Add · Buy now]
```

The PDP renders **universal blocks always** and **category‑specific sections from the attribute set** — one page, any category.

## 3. Cart with mixed temperatures

```mermaid
flowchart TD
    C[Cart] --> G1[Group: ❄️ Frozen]
    C --> G2[Group: 🧊 Chilled]
    C --> G3[Group: 🌡️ Ambient]
    G1 --> N1[Packaging & delivery note + fee]
    G2 --> N2[Packaging & delivery note + fee]
    G3 --> N3[Standard delivery + fee]
    N1 & N2 & N3 --> H[Coupons applicable · free-shipping nudge]
    H --> I[Subtotal + est. fees + member savings]
    I --> J([Checkout])
```

## 4. Checkout → Payment → Confirmation

```mermaid
flowchart LR
    A[Cart] --> B[Address select/add]
    B --> C[Per-group delivery method & window]
    C --> D[Coupons + points]
    D --> E[Summary: items, per-group fees, savings, total, fapiao]
    E --> F[WeChat Pay]
    F -->|ok| G[Confirmed → Orders]
    F -->|fail| H[Retry]
    F -->|pending| I[Pending → auto-resolve]
```

## 5. Orders, tracking, reorder

```mermaid
flowchart TD
    O[Orders list: All/To pay/To ship/To receive/To review/After-sales] --> D[Order detail]
    D --> T{Shipments}
    T -->|Cold-chain shipment| T1[Cold-chain tracking + window]
    T -->|Standard shipment| T2[Standard tracking]
    D --> R[Reorder → cart]
    D --> A[Open after-sales]
```

A single order may have **multiple shipments** with **independent tracking** (cold‑chain vs. standard). The UI shows each shipment's status rather than one blended status.

## 6. After‑sales / quality issue

```mermaid
flowchart TD
    A[Order/item] --> B{Issue type}
    B -->|Refund only| C[Reason + amount]
    B -->|Return + refund| D[Reason + return method]
    B -->|Quality issue| E[Reason + photos + batch auto-attached]
    C & D & E --> F[Submit request]
    F --> G[CS review → approve/deny/partial]
    G --> H[Resolution: refund / replacement / pickup]
    E --> I[(Batch flagged → traceability review)]
```

**Quality issues auto‑attach the batch**, feeding the Manager CS/Warehouse quality signals and enabling a traceability review ([11](11-batch-traceability-architecture.md)).

## 7. Account, membership, coupons

```mermaid
flowchart TD
    M[Me] --> M1[Membership: tier, points, benefits]
    M --> M2[Coupons & vouchers]
    M --> M3[Addresses]
    M --> M4[Favourites]
    M --> M5[History]
    M --> M6[Reviews]
    M --> M7[Notifications & settings]
    M --> M8[Customer service]
    M --> M9[Content hub]
    M1 --> P[Member price applied at PDP/cart/checkout]
    M2 --> P2[Coupons applied in cart/checkout]
```

## 8. Entry & identity

```mermaid
flowchart LR
    A([Enter via WeChat]) --> B{Session}
    B -->|Known| C[Personalised home]
    B -->|New/guest| D[Browse allowed]
    D --> E[On checkout/account: WeChat login]
    E --> F[Bind phone for order/CS continuity]
```

> **[ASSUMPTION · A‑02/D‑06]** WeChat login is primary, with phone binding for continuity; guests may browse, login is required to purchase.

## Flow design principles
1. **Temperature is legible before payment** (cards → cart groups → per‑group checkout).
2. **The PDP adapts** to the category via attribute sets — never a category‑specific screen.
3. **Multiple shipments per order are normal**, each tracked independently.
4. **Quality issues connect to batches** for traceability and quality management.
5. **Membership, coupons, and points** thread through PDP, cart, checkout, and account.
