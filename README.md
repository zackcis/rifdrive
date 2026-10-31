# RIF DRIVE — Go your own way.

A bespoke, responsive React + Vite car-rental concept for **Al Hoceima, Morocco**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Deploy to **Vercel** by importing this repository as a Vite project. A `vercel.json` rewrite is included so all React Router pages work when refreshed.

## What is built

- Distinctive editorial automotive homepage with mobile layouts.
- Search bar for pickup location, pickup/return dates and car category.
- Full fleet directory with category filtering, vehicle search and price sorting.
- Eight demo vehicles with specs, price per day, and detail pages.
- Date-aware estimate on each vehicle page (number of rental days × sample daily rate).
- WhatsApp quote messages containing vehicle, location and rental dates.
- Working About / Contact pages; contact form opens WhatsApp (no backend).
- Proper 404 route and mobile navigation.
- Local SVG car art and landscape illustration as image fallbacks when online photos fail.
- Responsive and keyboard accessible controls; respects reduced motion settings.

## Configure WhatsApp (important)

Copy `.env.example` to `.env` and set your REAL business WhatsApp number in international format, using only digits, with **no `+`**:

```bash
VITE_WHATSAPP_NUMBER=2126XXXXXXXX
```

Restart Vite after changing your env. Without a number, the site intentionally uses WhatsApp's recipient-chooser URL; the user must manually select a recipient and **inquiries are NOT directed to the business**. Do not publish commercially without configuring this.

## Update vehicles

Edit `src/data/cars.js`. All vehicles, prices, models, badges, and equipment are fictional demo examples; they do **not** prove the cars are actually available. Every car has a remote demonstration photo and a bundled SVG fallback. Replace remote photos with genuine approved pictures of inventory before launching to avoid model mismatch. Displayed rates are indicative, with no taxes/insurance/deposit calculation.

Vehicle fields include `slug`, `name`, `year`, `category`, `price` (MAD/day), `seats`, `bags`, `doors`, `transmission`, `fuel`, `photo`, `fallback`, `description`, and `features`.

For pickup locations, edit `pickupLocations` in that same file.

## Booking behavior

This is **not** a booking engine. No payment, reservation, availability service, email send, database, or checkout is implemented. The customer requests a quote through WhatsApp. The rental provider must personally confirm the car, the dates, pricing, license requirements, insurance and deposit.

## Images & font notes

Some online vehicle photos link to Unsplash and are illustrative **only**. The website uses original local SVG illustration fallbacks, which work without network access. Fonts load from Google Fonts with standard fallbacks. For a commercial site, verify photo rights, trademarks/logos and model accuracy before publication.

## Stack

React 18, React Router 6, Vite 6, Lucide React, custom CSS. No UI component library, Tailwind, or backend.
# rifdrive
