# 15 — Branding Analysis

Analysis of the supplied Branding Kit — **`Dolly_dolphin.pdf`** (Adobe Illustrator, 2024.04) — and how it maps onto the platform's design system.

## 1. The brand at a glance

| | |
|--|--|
| **Name** | **Dolly Dolphin** |
| **Mascot** | **DOLLY**, a leaping dolphin — "a dolphin yearning for the boundless free ocean" |
| **Family** | "a vital member of the **DOCANNED family**" |
| **Positioning line** | **"Premium Ocean Seafood"** |
| **Category heritage** | Premium **imported frozen seafood**; **frozen sardines** as the hero/core product |
| **Ethos** | "The ocean breeds life, the dolphin conveys warmth." Ecological circulation; respect for ocean balance; sustainably wild‑caught; authentic ocean flavour via professional cold chain; an **expanding product portfolio** |

**Brand story (verbatim, kit p.2):** *"…Born from the sea, we specialize in importing premium frozen seafood from across the globe, with frozen sardines series as our core products… we keep moving forward with an expanding product portfolio…"*

## 2. Logo

- **Construction (kit p.3):** **dolphin (海豚) + the letter "D" (DOLLY's initial).** A leaping white dolphin sits inside a rounded **"D"‑shaped badge**, split **coral‑pink (upper) / ocean‑blue (lower)**, with a white water swoosh.
- **Lockup:** icon **＋** rounded wordmark "Dolly Dolphin" (stacked), wordmark in ocean‑blue.
- **Clear space / ratio (kit p.4):** 1A clear space; lockup ≈ 13A wide × 3H tall.
- **Usage in this package:** the **real supplied artwork** is used top‑left in the preview (extracted from the kit); the icon badge is used as the app‑header mark. *Production* should embed the original **vector** logo rather than the raster extraction.

## 3. Colour

| Role | Name | HEX | Notes |
|------|------|-----|-------|
| Primary | 海洋蓝 Ocean Blue | **`#4AA6E0`** | Brand blue — wordmark, chrome, accents, chart series |
| Accent | 珊瑚粉 Coral Pink | **`#FF8FAE`** | Logo top, highlights, badges, price emphasis |
| Base | 纯净白 Pure White | **`#FFFFFF`** | "简洁·现代·易读" — clean, modern, readable |
| Derived | Deep Ocean Navy | `#0E2E4E` (approx.) | Not a named kit swatch; **derived** from the packaging's premium navy for depth, dark surfaces, and the dark theme. Documented as a derivation. |

**Colour discipline (important):** the brand blue is used for **brand identity**; the **functional temperature colours** (Frozen / Chilled / Ambient) are **deliberately kept distinct** from it so "cold‑chain blue" never reads as "brand blue." See [16 — Design System](16-design-system.md).

## 4. Typography

| Script | Kit spec | Web implementation (this preview) |
|--------|----------|-----------------------------------|
| English / Latin | **"Bold Rounded Sans"** (rounded, friendly, heavy) | **Fraunces** (editorial serif, display) + **Hanken Grotesk** (grotesque, UI) |
| Chinese | **思源黑体 / 苹方** (Source Han Sans / PingFang) — "简洁·现代·易读" | **Noto Serif SC** (display) + **Noto Sans SC** (UI) |

> **Type direction — owner override ([A‑13](decisions/decision-log.md)):** the running UI type is an **editorial serif + grotesque** pairing (premium, deliberately *not* rounded/"cartoonish"), which **overrides the kit's "Bold Rounded Sans"** for on‑screen text at the owner's request. The kit's rounded wordmark is preserved **in the supplied logo artwork**, and all brand **colours, logo, and tone are unchanged**. Production confirms/licenses the final faces.

## 5. Brand values (kit p.5) → platform expression

| Kit value (品牌价值观) | Where it surfaces on the platform |
|------------------------|-----------------------------------|
| **生态循环 Ecological Circulation** | Sustainability & origin stories (content hub); trust messaging |
| **可持续野生捕捞 Sustainable Wild‑Catch** | Wild/farmed attribute; provenance on the PDP |
| **专业冷链 Professional Cold Chain** | Temperature tags, cold‑chain assurance, per‑shipment fulfillment ([10](10-order-fulfillment-architecture.md)) |
| **全球渔场 Global Fisheries** | Country‑of‑origin discovery; "global sourcing" trust pillar |

These map almost 1:1 onto the platform's four trust pillars ([01 §5](01-product-vision.md)), so the brand and the product promise reinforce each other.

## 6. Packaging (kit p.6)

Deep‑navy stand‑up pouch, "PREMIUM FROZEN SARDINES", the Dolly Dolphin badge, a white dolphin illustration, and icon trio (**sustainably wild‑caught · professional cold chain · authentic ocean flavour**), "KEEP FROZEN", "NET WT 1KG". Confirms: **deep navy** as the premium application colour, white space, and the value icons — all reflected in the tokens.

## 7. The one strategic tension — [DECISION REQUIRED · D‑08]

The kit is **seafood/ocean‑forward** (dolphin mascot, "Premium Ocean Seafood", frozen sardines hero). The platform, by its **core principle**, is a **general imported‑food marketplace** and must *not read as a seafood app*. These meet at the **brand layer**:

> A dolphin / "ocean seafood" **master brand** can, as the catalog broadens into meat, canned, dairy and dry goods, re‑introduce the very "seafood app" perception the architecture works to avoid.

Crucially, the kit itself hints at the resolution: Dolly Dolphin is *"a vital member of the **DOCANNED family**."* That suggests a **parent/portfolio brand may already exist.**

**Options** (full detail in the [Decision Log · D‑08](decisions/decision-log.md)):
1. **Dolly Dolphin = master brand** — embrace the ocean identity platform‑wide; keep messaging broad.
2. **DOCANNED (or a parent) = master brand; Dolly Dolphin = flagship seafood house‑brand.**
3. **Endorsed brand** — parent "＋ by Dolly Dolphin" during transition.

**Recommendation:** apply the **Dolly Dolphin** visual system now (it is the supplied kit and is production‑ready), and treat master‑brand‑vs‑house‑brand as an explicit owner decision, leaning toward **(2)/(3)** as the catalog broadens. **This is a naming/messaging decision only — the architecture is category‑general regardless of the outcome.**

## 8. Design‑language direction — [ASSUMPTION · A‑13]

Per the owner's direction, the **visual design language is Western / US premium e‑commerce** (clean, spacious, editorial, imagery‑forward) rather than dense domestic‑app styling, while **all UI content is Simplified Chinese** for the China market. **朴朴/Pupu is retained as a UX‑pattern reference only** (what flows exist), not a visual reference (how they look). This shapes layout, spacing, and type treatment in [16 — Design System](16-design-system.md) and the [previews](17-consumer-interface-preview.md).

## 9. How the kit becomes the system

Every value above is encoded as a **design token** in [`preview/assets/tokens.css`](../../preview/assets/tokens.css): brand colours, derived navy, functional temperature colours (separated), neutrals, status, type stacks, radii, and elevation — defined for both light and dark themes. **Re‑skinning or theming the entire platform is a one‑file edit.** The component vocabulary that consumes these tokens is [16 — Design System](16-design-system.md).

## 10. Production checklist (for Step 2+)
- [ ] Embed the **original vector** logo (SVG) and full lockup set (horizontal, stacked, icon‑only, mono, reversed).
- [ ] Confirm & license the exact **brand fonts**; finalise the CJK weight ramp.
- [ ] Confirm the **deep‑navy** value (sampled/derived here) against brand guidelines.
- [ ] Resolve **D‑08** (brand architecture) before consumer launch messaging is finalised.
- [ ] Produce favicon / Mini Program icon / splash from the icon badge.
