// Change SITE_URL to your custom domain once it is connected in Cloudflare Pages.
export const SITE_URL = 'https://theagencyschool.pages.dev';
export const SITE_NAME = 'The Agency School';
export const SITE_DESCRIPTION =
  'Learn to start a digital marketing agency from your phone with no coding. A WordPress playbook, first-client scripts and a contractor team that builds the work.';
// TODO: replace with the real contact inbox.
export const CONTACT_EMAIL = 'hello@theagencyschool.com';
export const FOUNDER = 'Davey Duarte';
export const LEGAL_UPDATED = '2026-09-27';
// TODO: confirm the refund window before launch.
export const REFUND_DAYS = 14;

// How long buyers wait for their Nextcloud access email after paying.
export const DELIVERY_TIME = 'within 24 hours';

// Stripe Payment Links (Stripe Dashboard → Payment Links → Create).
// In each link, set "After payment" → "Redirect to your website" → `${SITE_URL}/order-confirmed/`
// and turn on "Allow promotion codes" (use a promo code for founding cohort pricing).
// A button only shows once its link is filled in.
export const STRIPE_LINKS = {
  core: '',          // Core Course, $497
  corePlan: '',      // Core Course, 3 payments of $197 (subscription that ends after 3 payments)
  launch: '',        // Launch Package, $1,500
  templatePack: '',  // Template pack, $37
  hostingBundle: '', // Hosting and tools bundle, $97 setup
  community: '',     // Community, $47/month
};
