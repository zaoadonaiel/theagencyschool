export const FAQ = [
  { q: 'Do I need to know how to code?', a: 'No. The playbook uses WordPress, and my team handles the building. You learn to sell, manage clients and place jobs.' },
  { q: 'Do I need agency experience?', a: 'No. The course starts from zero: what an agency sells, how to price it, and how to land your first three clients.' },
  { q: 'How does ordering work?', a: 'You order from a fixed menu of services in the shop and pay the listed price. My team builds it on our hosting, and you approve it before it counts as done.' },
  { q: 'Can I do this part-time?', a: 'Yes. Many people start on the side. Because the team does the building, the work is mostly selling and client communication.' },
  { q: 'Will I make money?', a: "I can't promise that. The examples on this site show how the pricing works. Your results depend on your clients and your effort." },
  { q: "What's the difference between the Core Course and the Launch Package?", a: 'The Core Course teaches you the whole model so you can run it yourself. The Launch Package adds a done-for-you setup: we build your first website and host it free for one year, set up your business email and SEO your site for local search. It also includes a monthly live group session and 6 months of community access.' },
  { q: 'Can I pay in installments?', a: 'The Core Course is $497, or 3 payments of $197. The Launch Package is a single payment of $1,500.' },
  { q: 'What is the founding cohort?', a: 'The first 20 students get the Core Course for $297 and the Launch Package for $997, in exchange for honest feedback on the program.' },
];

export const faqSchema = (items = FAQ) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
