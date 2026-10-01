# Dolly Dolphin — H5 (mobile web) demo

A **self-contained mobile web app** of the consumer storefront (Home, Category, Product
Detail, Cart) that opens in **any phone browser — including WeChat's built-in browser** by
tapping a link. No install, no DevTools, no account.

- One file: `index.html` (all CSS + JS inline) + `images/` (real product photos).
- Fully interactive: tab navigation, category filter, product detail, add-to-cart,
  quantity steppers, mixed-temperature cart grouping, live totals.
- Front-end prototype only — no backend, login, WeChat Pay, or real orders (Step 2+).

> This is the **H5** path. The `wechat-demo/` folder is the **native Mini Program** path,
> and `preview/` is the design for approval. All three share the same design + data.

---

## How to open it in WeChat (pick one)

You need a **public link** so WeChat can open it. Two easy options:

### Option A — Make the Claude artifact public (fewest steps)
1. Open the H5 artifact on **claude.ai** (the one titled *Dolly Dolphin*).
2. Click **Share** → set access to **"Anyone with the link"** → **Copy link**.
3. Send that link to yourself in **WeChat** and tap it — it opens in WeChat's browser.

### Option B — GitHub Pages (a permanent public URL)
1. On GitHub, open **`oborgroup/dollydolphin` → Settings → Pages**.
2. Under **Build and deployment → Source**, pick **Deploy from a branch**.
3. Branch: your branch (or `main` after merge); folder: **`/ (root)`** → **Save**.
4. After ~1 minute the URL is:
   **`https://oborgroup.github.io/dollydolphin/h5/`** — paste it into WeChat and tap.
   (GitHub Pages is free for **public** repos; a private repo needs GitHub Pro/Team.)

> **Note for a mainland-China audience:** both `claude.ai` and `github.io` can be slow or
> blocked inside China. They're perfect for **you** to preview and to show people outside the
> GFW. For a real China-side test, host the `h5/` folder on a China server/CDN (that comes
> with the ICP filing in Step 2). The files are static — they run on any web host as-is.

---

## Editing
- Products & prices: the `P = [...]` array near the top of the `<script>` in `index.html`.
- Brand colours: the `:root { --brand … }` tokens at the top of the `<style>`.
- Swap a photo: drop a square image into `images/` and point the product's `img` at it.
