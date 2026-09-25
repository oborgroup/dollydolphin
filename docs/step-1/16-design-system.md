# 16 — Design System

The component vocabulary built on the [Dolly Dolphin Branding Kit](15-branding-analysis.md). Every value here is a **token** in [`preview/assets/tokens.css`](../../preview/assets/tokens.css) — the single source of truth. Change a token, and Consumer, Admin, and Manager all update. **Design language:** Western / US premium e‑commerce (clean, spacious, editorial); **content:** Simplified Chinese ([A‑13](decisions/decision-log.md)).

## 1. Colour

### Brand (from the kit)
| Token | Value (light) | Use |
|-------|---------------|-----|
| `--brand` | `#4AA6E0` 海洋蓝 | Identity: wordmark, links, marks, chart series |
| `--brand-deep` | `#1C74B8` | Accessible fills — primary buttons, bold CTAs (white text) |
| `--brand-strong` | `#0E2E4E` | Deep‑ocean navy — hero, dark surfaces, device frame |
| `--brand-ink` | `#1B6FB0` | Brand‑coloured text/labels on light |
| `--accent` | `#FF8FAE` 珊瑚粉 | Accent, badges, logo top |
| `--accent-ink` | `#C43E63` | Accent text on light (contrast‑safe) |
| `--price` | `#E5486B` | Price & promotions (coral family) |

### Functional — temperature (NOT brand; encodes storage class)
| Token | Value | Meaning |
|-------|-------|---------|
| `--frozen` | `#1E63A8` | ❄️ Frozen ≤ −18 °C |
| `--chilled` | `#12938F` | 🧊 Chilled 0–4 °C |
| `--ambient` | `#BE7C33` | 🌡️ Ambient / shelf‑stable |

> **Rule — the decisive one:** temperature colours are **separate from the brand blue** by design. Ocean‑blue is *brand*; deep‑blue‑with‑a‑snowflake is *frozen*. This keeps a seafood‑blue brand from colliding with a cold‑chain‑blue function, and lets any future frozen category inherit the same tag. ([04](04-product-category-architecture.md))

### Status (reserved — never used as a brand accent)
`--success #2E9E6B` · `--warning #C98A00` · `--danger #D24B3E` · `--info` (= frozen blue). Always paired with an icon + label, never colour alone.

### Neutrals (clean, cool — "纯净白 · 简洁·现代·易读")
Warm‑free, ocean‑tinted: `--bg #F1F6FB` · `--surface #FFFFFF` · `--surface-2/3` · `--line #DFE8F0` · `--ink #13232F` · `--ink-2` · `--muted` · `--muted-2`.

### Chart tokens
`--chart-surface` · `--grid` · `--series` (single‑hue magnitude = brand) · `--series-fill` · `--series-end`. Charts read colour from **theme tokens**, so they're legible in both themes ([dataviz alignment](19-manager-interface-preview.md)).

## 2. Theming (light + dark)

Tokens are defined on bare `:root` (full light palette), redefined under `@media (prefers-color-scheme: dark)` (guarded so an explicit light choice wins) **and** `:root[data-theme="dark"]` (explicit toggle). Dark is **stepped for dark** (deep‑ocean surfaces, lifted brand/ink), not auto‑inverted. `color-scheme` is set so native controls follow. The preview's **◐ 主题 / Theme** control cycles system → light → dark.

## 3. Typography

| Role | Stack | Notes |
|------|-------|-------|
| Display / brand | `--font-display` = **Baloo 2** → Noto Sans SC → serif fallback | Rounded, per the kit's "Bold Rounded Sans"; Latin uses Baloo 2, CJK falls through to Noto Sans SC per glyph |
| UI / body | `--font-ui` = **Nunito** → **Noto Sans SC** → PingFang SC → system | Readable rounded sans + Source Han Sans for Chinese |
| Mono / data | `--font-mono` | Batch codes, SKU codes |

**Scale (Western‑premium, generous):** display 28–44px; H2 26px; H3 19–22px; body 15px/1.6; small 12–13px; micro 10–11px. `text-wrap: balance` on headings; `tabular-nums` wherever figures align.

## 4. Spacing, radius, elevation
- **Spacing scale:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 44. Western‑premium ⇒ **generous** section rhythm and card padding.
- **Radius:** xs 7 · sm 10 · md 14 · lg 20 · xl 28 · pill — rounded, matching the brand's friendly geometry.
- **Elevation:** three soft, ocean‑tinted shadows (`--sh-1/2/3`) — used **by role**, not everywhere.

## 5. Components

| Component | Spec (tokens) |
|-----------|---------------|
| **Buttons** | Primary = `--brand-deep` fill + white; secondary = surface + line; accent = `--accent-soft`/`--accent-ink`. Pill or 10–14px radius, generous padding. |
| **Inputs / selects** | `--surface-2` fill, `--line` border, 10px radius; label in `--muted` uppercase‑ish; clear focus ring (`--brand-ink`). |
| **Cards** | `--surface` + `--line` + `--sh-1`, radius lg. Card styling applied **by role**, not to every block. |
| **Product cards** | Imagery‑forward (1:1 image), origin **flag**, **temperature tag**, name, price stack (price + member badge), one‑tap add. Roomy. |
| **Badges / trust** | Brand‑soft chips (origin‑direct, certification, cold‑chain, traceable). |
| **Temperature tags** | Frozen/Chilled/Ambient using **functional** colours + icon + label. |
| **Status indicators** | Pills: ok / warn / crit / frozen / chilled / ambient — colour **and** text. |
| **Navigation** | Consumer = 5‑tab bottom bar; Admin = left module rail; Manager = role‑scoped shell. Active = `--brand-deep`. |
| **Tables** | Hairline rows, zebra `--surface-2`, sticky header, pill status cells, batch/zone context; horizontal scroll wrapper. |
| **Dashboard / KPI cards** | Label + big number (`tabular-nums`) + delta (success/danger) + optional **sparkline**. Big‑number tiles only where the figure is the point. |
| **Charts** | Single‑hue magnitude bars (colour is not the encoding — length is); area/line trend with faint grid, emphasized endpoint; zone bars use **functional** colours (a real dimension). All labels name values the chart reaches. |
| **Filters** | Chips (term), range sliders (measure), toggles (boolean) — **generated from attributes** ([14](14-ux-architecture.md)). |
| **Modals / sheets** | Surface + `--sh-3`, radius lg/xl; confirmations built into the page. |
| **Forms** | The **adaptive product editor** renders a category's attribute fields grouped by section — one editor, any category. |

## 6. The three surfaces — one system, three characters

| Surface | Character | How the system expresses it |
|---------|-----------|-----------------------------|
| **Consumer** | Premium · simple · appetizing · trustworthy | Big imagery, airy spacing, editorial hero, trust badges, restrained chrome, coral warmth |
| **Admin** | Efficient · structured · information‑dense | Left rail, dense tables, adaptive editor, status pills, alert→action; still spacious/legible |
| **Manager** | Data‑driven · executive · clear | KPI tiles, sparklines, single‑hue charts, role‑scoped least‑information dashboards ending in actions |

All three share the **same tokens** — the difference is density and which components lead.

## 7. Accessibility
- Contrast: brand fills use `--brand-deep` (not the light brand blue) so white text passes; status never colour‑only.
- Tap targets ≥ 44px on consumer; visible focus ring everywhere; `prefers-reduced-motion` respected.
- CJK legibility: Noto Sans SC weights 400/500/700; comfortable line‑height (1.6).

## 8. Motion
Restrained (Western‑premium ⇒ calm): purposeful state changes (tab switch, theme toggle), no decorative motion. Pages render complete at rest.

## 9. What's a token vs. what's a component
- **Tokens** (colour, type, spacing, radius, elevation) live in `tokens.css`.
- **Components** consume tokens via `var(--…)` and never hard‑code brand values.
- Consequence: the **[D‑08](decisions/decision-log.md) brand‑architecture** outcome, or a full re‑skin, is a token edit — components don't change.
