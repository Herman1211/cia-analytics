# FESH shilo — CIA Analytics

A compact, independent student storefront inspired by **mCaffeine's body-wash collection**. Three products, product details, fragrance filters, price sorting, a persistent bag and a simulated checkout. Desktop-first and responsive on mobile.

This is an academic prototype, not the official mCaffeine website. No payments, genuine orders, deliveries, accounts or backend are implemented. Use **Fill sample details** at checkout; form details are neither stored nor sent anywhere.

## Run

No build or dependencies are needed. Serve the project root with any static server, e.g. `python3 -m http.server 8000`, then visit `http://localhost:8000`. Open through a web server rather than double-clicking index.html, because JavaScript modules require HTTP.

## GitHub Pages

In this repository open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, **main**, **/(root)**, and Save. GitHub provides the website link once deployment completes. A `.nojekyll` file is included. All asset paths are relative for project-site hosting.

After enabling Pages, check the repository Actions tab for a Pages build and deployment run. A saved publishing source alone does not confirm a successful deployment; verify the published site before submitting its link.

## Test the journey

1. Browse all three products; filter Fruity / Fresh & green and sort by price.
2. Open product details, adjust quantity and add to bag.
3. Adjust quantities or remove products in the bag. Refresh to confirm bag persistence.
4. Continue to demo checkout; click **Fill sample details**, tick the demo confirmation, then **Complete demo order**.
5. Verify the receipt total and that the bag is cleared.

`npm test` checks cart pricing, totals, quantity bounds and corrupted storage handling. Keyboard Escape dismisses dialogs; native modal dialogs keep focus in the active step.

## Source snapshot — 26 October 2026

| Product | Size | Demo snapshot price | Original source |
| --- | --- | --- | --- |
| Guava Tini De-Tan Body Wash | 300 ml | ₹449 | https://www.mcaffeine.com/products/guava-tini-de-tan-body-wash |
| Blueberry Blast Body Wash | 300 ml | ₹399 | https://www.mcaffeine.com/products/blueberry-blast-body-wash |
| Forest Dew Nourishing Milky Body Wash | 250 ml | ₹499 | https://www.mcaffeine.com/products/lipid-rich-care-forest-dew-perfume-body-wash |

Names, sizes, listed prices and photographs reference the original product pages. Prices are fixed snapshots, not a live feed; current prices, offers and stock may differ. Descriptions are brief student summaries. Product claims are attributed to the manufacturer and have not been independently verified. Product photography and trademarks belong to mCaffeine. No invented ratings, reviews, customer counts or scarcity claims are displayed. Demo delivery is ₹0; actual shipping, taxes, discounts and availability are not calculated.

## Structure and next phase

- `index.html` and `styles.css`: semantic storefront and responsive layout.
- `catalogue.js`: product data and source URLs.
- `cart.js`: cart validation and arithmetic.
- `app.js`: interactions and session-only event hooks.
- `docs/measurement-plan.md`: reserved analytics extension.
- `docs/prompt-log.md`: real prompt history and implementation decisions for the later reflection.

The first phase covers the storefront only. The original written assignment also calls for a five-slide KPI Teardown, a one-page AI Reflection Note and a prompt sheet; those are separate deliverables, not completed by this website alone. The classmate's description of CIA 2 has not replaced that written brief.
