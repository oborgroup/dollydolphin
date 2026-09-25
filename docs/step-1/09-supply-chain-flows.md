# 09 — Supply Chain Flows

The inbound side of the business: how goods move from an international supplier to a shelf a consumer can buy from — with cost, batch, compliance, and temperature captured along the way.

## 1. The inbound spine

```mermaid
flowchart LR
    S[Supplier / Producer] --> PO[Purchase Order]
    PO --> IMP[Import Batch<br/>customs · duty · docs]
    IMP --> ARR[Arrival & Inspection]
    ARR --> BAT[Batch created<br/>prod/expiry · origin · landed cost]
    BAT --> WZ[Warehouse → Storage Zone<br/>Frozen/Chilled/Ambient]
    WZ --> INV[Inventory: Available]
    INV --> SHELF[SKU sellable on Mini Program]
```

Every step writes to the [core data model](13-core-data-model.md); every step is operated from [Admin → Procurement / Inventory](06-admin-sitemap.md).

## 2. Procurement → Import → Landed cost

```mermaid
flowchart TD
    A[Select supplier] --> B[Raise Purchase Order<br/>SKUs, qty, unit cost, terms]
    B --> C{Approval}
    C -->|Approved| D[Supplier ships]
    D --> E[Import Batch opened]
    E --> F[Customs & import documentation]
    F --> G[Landed cost build-up]
    G --> G1[+ product cost]
    G --> G2[+ international freight]
    G --> G3[+ duty / tax]
    G --> G4[+ import handling]
    G1 & G2 & G3 & G4 --> H[Landed cost per unit → Batch]
```

**Landed cost is captured per batch.** Because FX, freight, and duty vary shipment to shipment, two batches of the *same* SKU can have different landed costs — so margin is computed **per batch** (and rolls up to per‑order and per‑category in [Finance](06-admin-sitemap.md)).

## 3. Arrival, inspection, and batch creation

```mermaid
flowchart TD
    A[Goods arrive at facility] --> B[Receive against PO/Import Batch]
    B --> C{Inspection}
    C -->|Pass| D[Create/confirm Batch:<br/>lot no · prod/expiry · origin · qty · docs]
    C -->|Issue| Q[Quarantine state]
    D --> E{Storage class}
    E -->|Frozen| F1[Frozen Zone]
    E -->|Chilled| F2[Chilled Zone]
    E -->|Ambient| F3[Ambient Zone]
    F1 & F2 & F3 --> G[Inventory: Available by batch/zone]
    Q --> R[Review → release or reject/write-off]
```

- **Quarantine** and **damaged** are explicit stock states, not deletions — they preserve the audit and traceability trail.
- **Storage class routes the goods** to the correct zone automatically (it's a SKU/batch property).

## 4. Stock states and movements

```mermaid
stateDiagram-v2
    [*] --> Incoming: PO in transit
    Incoming --> Available: arrival + inspection pass
    Incoming --> Quarantine: inspection issue
    Quarantine --> Available: released
    Quarantine --> Expired: rejected/aged
    Available --> Reserved: added to cart/checkout hold
    Reserved --> Allocated: order paid
    Allocated --> [*]: shipped (out of stock pool)
    Reserved --> Available: cart released/expired
    Available --> Damaged: damage event
    Available --> Expired: past expiry (FEFO surfaced)
    Damaged --> [*]: write-off
    Expired --> [*]: write-off
```

Inventory tracks: **Available · Reserved · Incoming · Allocated · Damaged · Expired · Quarantine.** ([13](13-core-data-model.md))

## 5. Replenishment loop

```mermaid
flowchart LR
    A[Inventory + sell-through] --> B{Reorder point?}
    B -->|Below| C[Procurement alert]
    C --> D[Raise PO]
    D --> E[Import Batch → Arrival → Inventory]
    E --> A
    A --> F{Expiring soon?}
    F -->|Yes| G[Expiry alert → mark-down / prioritise FEFO]
```

Reorder points and expiry thresholds drive **Procurement** and **Warehouse** alerts on the [Manager dashboards](07-manager-sitemap.md).

## 6. Supplier & compliance management

```mermaid
flowchart TD
    S[Supplier profile] --> S1[Certifications & validity]
    S --> S2[Terms & lead time]
    S --> S3[Performance: on-time, quality, cost]
    S1 --> A{Certification expiring?}
    A -->|Yes| ALERT[Compliance alert]
    S3 --> SCORE[Supplier scorecard → Procurement dashboard]
```

Supplier certifications and their validity are tracked; expiry raises a compliance alert (important for *imported* food).

## 7. How this connects forward

- The **batch** created here is the same object the [PDP traceability summary](08-consumer-user-flows.md) and the [after‑sales quality review](11-batch-traceability-architecture.md) read from.
- The **storage class** set here is what the [order/fulfillment engine](10-order-fulfillment-architecture.md) uses to split, pack, and price shipments.
- The **landed cost** captured here is what [Finance/Manager](07-manager-sitemap.md) uses for margin.

## Design principles
1. **Batch is the unit of truth** for provenance, dates, cost, and compliance.
2. **Landed cost is per batch**, enabling honest per‑order/category margin.
3. **Stock states are explicit** (quarantine/damaged/expired preserved for audit).
4. **Storage class routes storage and forward logistics** automatically.
5. **Alerts close the loop** (reorder, expiry, compliance) into Procurement/Warehouse.
