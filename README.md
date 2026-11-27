# Verdant — Fresh Organic Groceries 

A React + Vite recreation of the Verdant Framer site: home, shop with filters, product pages, weekly boxes, a working basket drawer, FAQ, contact, and policy pages.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs /dist
```

## Deploy to GitHub Pages
1. Push this repo to GitHub (default branch `main`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

Routing uses `HashRouter`, so deep links (`/#/shop`) work on Pages without extra config.

## Notes
- Product data lives in `src/data.js`; edit there to change products, prices and FAQs.
- The source site marks many pages as `[DRAFT]` (About, FAQ detail, Contact details, policies, product specs). Those placeholders are kept as-is; replace them with approved copy.
- Newsletter, contact form and checkout are front-end stubs; connect them to your email provider, form backend and store (Shopify/Razorpay) respectively.
- Only the hero and Avocado Harvest Box images are hotlinked from Framer's CDN; other products use colour placeholders. Add your own images to `public/` and set `image` in `data.js`.
