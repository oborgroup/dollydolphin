# Product imagery — sources & status

The Step 1 preview now shows **real product photography** across all product tiles.
The launch catalog is **imported seafood** (salmon · fish · crab · shrimp · shellfish),
sold by Dolly Dolphin as an **authorized reseller** (a Sam's‑Club‑style membership model),
so the genuine retail packaging is shown as a reseller catalog would.

| Asset(s) | What it is | Source / status |
|----------|-----------|-----------------|
| `sardines_pack.png` | The signature **Dolly Dolphin frozen‑sardines packaging** | Extracted from the brand's **own Branding Kit** (`Dolly_dolphin.pdf`) — the operator's own asset |
| `logo.png`, `logo-icon.png` | The **Dolly Dolphin logo / dolphin‑D mark** | Extracted from the brand's own Branding Kit |
| `salmon-sockeye.jpg`, `salmon-atlantic.jpg`, `salmon-pesto.jpg`, `salmon-marinated.jpg` | Salmon SKUs (Alaskan sockeye, Atlantic fillet portions, garlic‑pesto side, marinated) | **Operator‑supplied** product photos of the actual reseller catalog (Member's Mark line) |
| `crab-snow.jpg`, `shrimp-raw.jpg`, `shrimp-cooked.jpg`, `shrimp-scampi.jpg`, `scallops.jpg` | Crab / shrimp / scallop SKUs | Operator‑supplied catalog photos |
| `cod.jpg`, `tilapia.jpg`, `tilapia-parmesan.jpg` | White‑fish SKUs (cod, tilapia, parmesan tilapia) | Operator‑supplied catalog photos |

All product photos are square (900×900), colour‑managed, and consumed via the
`.rp` + `.p-*` tile classes in `preview/index.html` (`/* Real product photos */`).
The one **ambient** cart/inventory line (canned tuna) keeps a clean gradient tile —
it is the sole SKU without a supplied photo and is retained to demonstrate the
**mixed‑temperature** (frozen + chilled + ambient) order/fulfillment flow.

## Launch scope note
The storefront launches **seafood‑only** (salmon · fish · crab · shrimp · shellfish).
Meat, canned goods and processed foods are modeled in the architecture and shown in the
admin as **"即将上线 / coming soon"** categories — they become live by configuration, not
code. See [`docs/step-1/17-consumer-interface-preview.md`](../../../docs/step-1/17-consumer-interface-preview.md).

## To add or replace a photo
Drop a brand‑owned or properly‑licensed square photo into this folder and point the
relevant `.p-*` class at it (in `preview/index.html`, `/* Real product photos */`).
Nothing else changes.
