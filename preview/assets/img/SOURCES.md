# Product imagery — sources & status

The Step 1 preview shows **one genuine product photo** plus **original placeholder motifs**;
it uses **no third‑party / stock imagery**.

| Asset | What it is | Source / license |
|-------|-----------|------------------|
| `sardines_pack.png` | The signature **Dolly Dolphin frozen‑sardines packaging** — a real product image | Extracted from the brand's **own Branding Kit** (`Dolly_dolphin.pdf`); the operator's own asset |
| *(other product tiles)* | Refined **gradient tiles with an original line‑motif** (fish / cut / shell), drawn inline in the page | Original artwork created for this preview (no third‑party images) |
| `logo.png`, `logo-icon.png` | The **Dolly Dolphin logo / dolphin‑D mark** | Extracted from the brand's own Branding Kit |

## Why placeholders for most products
This environment's network policy blocks stock‑photo hosts, and reusing photos from
third‑party repositories risks copyright. Rather than ship unlicensed images, every
non‑signature product tile is an **original, brand‑coloured line motif** — clearly a
placeholder for photography.

## To finalise with real photography
Drop brand‑owned or properly‑licensed photos (e.g. `salmon.jpg`, `crab.jpg`, …) into this
folder and point the relevant tile at them — the tile classes in `preview/index.html`
(`/* Product tiles */`) are the only place to edit. Nothing else changes.
