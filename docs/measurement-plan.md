# Analytics extension — reserved for a later phase

No GA4 property, Meta pixel or external analytics service is connected. No mCaffeine private analytics, sales, conversion rates or retention figures are available. Existing event hooks do not create or transmit analytics records.

`app.js` emits an in-memory `shower-edit:journey` browser CustomEvent at meaningful interactions. Its detail contains a name, `demo: true`, INR currency and product identifiers, quantities and snapshot prices. A future listener can map these to a separately configured demo property. Never send customer-form fields to analytics.

| Journey | Hook | Future measurement |
| --- | --- | --- |
| View collection | view_item_list | Collection engagement |
| View details | view_item | Product-detail engagement |
| Add/increase quantity | add_to_cart | Add-to-cart rate, with denominator specified |
| Reduce/remove quantity | remove_from_cart | Bag changes |
| Open bag | view_cart | Bag-to-checkout progression |
| Start checkout | begin_checkout | Checkout starts |
| Complete simulated checkout | demo_order_complete | Simulated completion rate only |

`demo_order_complete` intentionally is not a real revenue or purchase record. Page interactions alone cannot establish actual customer acquisition cost, repeat-purchase rate, customer lifetime value or profitability. Those require suitable real customer, revenue and cost records with permission.

GA4 Demo Account observations must be clearly labelled as Google demo-property data, never mCaffeine performance. Meta Business Suite private insights require authorized Page access; public social counts cannot prove reach, ad spend or ROAS.

Do not publish fabricated metrics. The proposed KPI audit can distinguish: public observation, hypothesis about likely tracking, recommended measurement, and unavailable evidence.
