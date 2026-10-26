# mCaffeine KPI Teardown

Five-slide qualitative audit. Current brand analytics and account report evidence remain unverified.

## Slide 1

CIA 1   DIGITAL AND SOCIAL MEDIA ANALYTICS

mCaffeine

KPI Teardown

Body wash buying journey

Business goal

More completed orders and repeat customers

Mughaputo Achumi

Student demo website: FESH shilo

Public website audit and KPI proposal

26 October 2026

Internal performance figures unavailable

### Notes and sources

Scope: a qualitative audit of mCaffeine's body-wash buying journey. The business goal is the student's proposed objective, not a statement of the brand's internal targets. FESH shilo is a separate academic prototype, not the official store. No actual GA4 Demo Account report or Meta Business Suite export was obtained.

Sources checked 26 October 2026:

https://www.mcaffeine.com/collections/body-wash

https://www.mcaffeine.com/products/guava-tini-de-tan-body-wash

https://herman1211.github.io/cia-analytics/

Photo source: https://www.mcaffeine.com/cdn/shop/files/Card_1_1_97f06227-87c0-4f9e-8640-7bbd6784931e.webp?v=1789649106&width=900

## Slide 2

Likely customer funnel

A reconstruction of the journey, with suggested tracking at each step

02

Stage

Customer action

Proposed tracking

Question to answer

Discovery

Search or social visit

Source and UTM tags

Which sources bring buyers?

Product

Reads product details

view_item

Which products hold interest?

Cart

Adds a body wash

add_to_cart, view_cart

Who leaves after adding?

Checkout

Starts placing an order

begin_checkout

Where do shoppers drop out?

Purchase

Completes a real order

purchase and refund

What generates net sales?

FESH shilo reproduces this journey with a simulated order. Its demo completion is not a real purchase.

### Notes and sources

The table is a proposed funnel, not evidence that these events currently fire on mCaffeine. Suggested ecommerce event names follow Google's documentation. UTM tags identify tagged campaigns; they do not establish causality or complete attribution.

Sources: https://developers.google.com/analytics/devguides/collection/ga4/ecommerce

https://www.mcaffeine.com/collections/body-wash

FESH shilo source code: https://github.com/Herman1211/cia-analytics/blob/main/app.js

The prototype emits session-only browser events. No external analytics property is connected. Its completion hook is demo_order_complete, intentionally separate from a real purchase event.

## Slide 3

Visible evidence and measurement gaps

The current internal dashboard and tracking coverage remain unverified

03

Public evidence

Likely measurement to verify

What should also be checked

Product pages and cart

Page views and shopping events

Drop-off by product, device and source

Bundles and discount codes

Offer clicks and code use

Order value after discounts and refunds

Ratings and review counts

Review volume and interactions

Purchase rate after review interaction

My assessment

These visible signals do not establish sales performance. Recommended KPIs need event and order-data checks.

Likely measurement is a hypothesis. This audit does not claim that mCaffeine fails to track these KPIs.

### Notes and sources

Public observations: the body-wash collection and product pages display prices, bundles or promotional codes, product reviews and cart controls. Their existence does not reveal the company's analytics configuration. The middle column is explicitly a hypothesis requiring verification. Association between review interaction and purchase would not itself prove that reviews cause conversion.

Sources checked 26 October 2026:

https://www.mcaffeine.com/collections/body-wash

https://www.mcaffeine.com/products/blueberry-blast-body-wash

https://www.mcaffeine.com/products/lipid-rich-care-forest-dew-perfume-body-wash

## Slide 4

KPIs that support business decisions

Suggested definitions for the audit. No current values or targets are claimed.

04

KPI

Definition

Decision it supports

Product-to-cart rate

Item viewers who later add it ÷ item viewers × 100

Improve product information

Checkout completion

Checkout starters who purchase ÷ checkout starters × 100

Simplify checkout

Average order value

Merchandise revenue after discounts ÷ valid orders

Assess bundle value

90-day repeat rate

New buyers with a second order in 90 days ÷ eligible new buyers × 100

Plan retention activity

Use consistent user cohorts and reporting windows. Repeat rate needs 90 days of follow-up. Check refunds separately.

### Notes and sources

Definitions are proposed by this audit, not claimed mCaffeine internal formulas. Product-to-cart numerator includes only users who viewed the same product and subsequently added it within the chosen funnel window. Checkout completion uses the same starter cohort and a fixed completion window. Valid orders exclude cancelled/test orders. For the stated AOV definition, merchandise revenue is after discounts and excludes tax and shipping; track refunds as a separate guardrail. Repeat rate uses a first-purchase cohort with a full 90-day observation period, not all recent buyers. Compare device/source splits only when event quality and cohort sizes support comparison.

Event implementation reference: https://developers.google.com/analytics/devguides/collection/ga4/ecommerce

GA4 demo-account context: https://support.google.com/analytics/answer/6367342?hl=en

## Slide 5

Recommended actions and tool use

My priority is to find the biggest drop-off before changing the website

05

Recommended actions

1  Verify the funnel

Check events against real order records.

2  Build a baseline

Compare product, device and source for 28 days.

3  Test one change

Try clearer product details or a simpler cart.

4  Review business impact

Check completed orders, order value and refunds.

Role of each tool

GA4 Demo Account

Reference for ecommerce reports. Its data belongs to Google's demo properties.

Meta Business Suite

With authorised access, relate reach and link clicks to tagged website visits.

ChatGPT

Helped structure the audit and build the demo. Claims still need evidence.

Account evidence remains to be added: a dated GA4 demo report and authorised Meta insights. No account results appear here.

### Notes and sources

This is a proposed evaluation plan, not a completed experiment or claimed uplift. A 28-day baseline is a suggested starting window; extend it when seasonality, campaign timing or sample sizes require. GA4 demo-account data comes from Google Merchandise Store and Flood-It!, not mCaffeine. Google states the demo cannot be queried through the Analytics Data API and restricts report/export features. A screenshot should identify property, date range and metric definitions. Meta's official documentation describes Insights and Page access; the help pages redirected to sign-in during research. No private brand analytics access was obtained. Public likes or follower counts cannot establish paid reach, ad spend or ROAS.

Sources:

https://support.google.com/analytics/answer/6367342?hl=en

https://www.facebook.com/business/help/700570830721044

https://www.facebook.com/business/help/1101781386943864

https://developers.google.com/analytics/devguides/collection/ga4/ecommerce
