# The Agency School

Marketing site built with [Astro](https://astro.build), deployed on Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 22 (from `.node-version`) |

## Selling a course (Stripe + Nextcloud)

1. Buyer clicks **Buy** on `/courses/` and pays on a Stripe Payment Link.
2. Stripe emails the buyer a receipt and emails you a sale notification.
3. Stripe redirects the buyer to `/order-confirmed/`.
4. You email the buyer a Nextcloud share link to the course videos.

Setup:
- In Stripe, create one Payment Link per product. For each link, set **After payment → Redirect** to `https://<your-domain>/order-confirmed/` and turn on **Allow promotion codes**.
- Paste the links into `STRIPE_LINKS` in `src/consts.js`. Buttons appear only for links that are filled in.
- Founding cohort pricing: create Stripe promotion codes ($200 off Core, $503 off Launch).
- Stripe sale emails: Stripe Dashboard → Settings → Personal details → Email notifications → Successful payments.
- Nextcloud: make one share link per buyer (with a password or expiry date) so you can turn off a single buyer's access after a refund.

## Before launch

- `src/consts.js`: set `SITE_URL` to the live domain, `CONTACT_EMAIL`, confirm `REFUND_DAYS` and `DELIVERY_TIME`, and fill in `STRIPE_LINKS`.
- `src/components/SignupForm.astro`: connect the form to the email platform and redirect to `/thank-you/`.
- Replace the "D" photo placeholder on the home and About pages.
- Have the legal pages reviewed by a lawyer.
