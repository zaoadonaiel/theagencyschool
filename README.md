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

## Before launch

- `src/consts.js`: set `SITE_URL` to the live domain, `CONTACT_EMAIL`, and confirm `REFUND_DAYS`.
- `src/components/SignupForm.astro`: connect the form to the email platform and redirect to `/thank-you/`.
- Replace the "D" photo placeholder on the home and About pages.
- Have the legal pages reviewed by a lawyer.
