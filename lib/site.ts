/**
 * Single source of truth for every piece of copy, link and data point on the
 * landing page. Everything here is placeholder content — swap this file (and
 * nothing else) to rebrand the site.
 */

export const site = {
  name: "AiraDigital",
  tagline: "Creator commerce, unified.",
  description:
    "AiraDigital helps brands discover curated creators, run campaigns end-to-end, and track the revenue they actually drive — on one analytics-native platform.",
  email: "hello@example.com",
  bookingUrl: "#book",
  creatorUrl: "#creators-signup",
  url: "https://example.com",
  year: 2025,
  legalName: "AiraDigital",
} as const;

export const announcement = {
  lead: "Series A",
  text: "AiraDigital closes a $1.5M round to scale creator commerce",
  linkLabel: "Read more",
  href: "#press",
};

export const nav = [
  { label: "Features", target: "features" },
  { label: "Case Studies", target: "case-studies" },
  { label: "FAQs", target: "faqs" },
] as const;

export const hero = {
  titleTop: "Find the right",
  titleBottom: "creators",
  subtitle:
    "End-to-end workflows and zero manual work — from outreach, to approvals, to centralised payouts.",
  cta: "Get in touch",
};

/** Placeholder partner wordmarks rendered as SVG in <BrandMark />. */
export const brands = [
  { name: "Northwind", accent: "#f6a2c5" },
  { name: "Lumen", accent: "#b7dee1" },
  { name: "Kettle&Co", accent: "#f5b8a3" },
  { name: "Havenly", accent: "#ebe57a" },
  { name: "Orbit Mart", accent: "#c3b1e8" },
] as const;

export const statsSection = {
  sub: "AiraDigital sets a new standard — helping brands discover curated creators, engage meaningfully, track performance, and scale on an intuitive, analytics-driven platform that removes operational friction and delivers measurable ROI.",
};

export const stats = [
  { value: "250k+", label: "Curated Creators" },
  { value: "300+", label: "Trusted Brand Partners" },
  { value: "1.4 Billion+", label: "Massive Reach Monthly" },
  { value: "$18M+", label: "Sales Driven Monthly" },
] as const;

export const powerSection = {
  heading: "How AiraDigital powers you?",
  sub: "With AiraDigital, brands of every size can turn creators into a proven growth engine.",
};

/** Sticky stacking cards. `tone` picks the card + artwork panel colours. */
export const powers = [
  {
    tone: "pink",
    title: "Discover creators\nbuilt for your goals",
    body: "Use AiraDigital's data-rich discovery to spot the right creators, assess fit instantly, and choose the people who can champion your brand with real impact.",
    art: "discovery",
  },
  {
    tone: "cyan",
    title: "Execute faster\nOperate smarter",
    body: "AiraDigital unifies discovery, payouts, analytics, performance tracking and affiliate management — eliminating spreadsheets and scattered tools for a faster creator workflow.",
    art: "workflow",
  },
  {
    tone: "orange",
    title: "Complete clarity\nreal-time",
    body: "Understand what's working with live insight across creators, campaigns and overall programme impact, all powered by AiraDigital's intelligent analytics.",
    art: "analytics",
  },
] as const;

export const caseStudiesSection = {
  sub: "Top brands choose AiraDigital to run creator campaigns that deliver real, repeatable wins.",
};

export const caseStudies = [
  {
    tone: "pink",
    title: "Fold & Flip Launch",
    body: "500 creators lifted launch awareness for a flagship handset through impactful, authentic creator storytelling.",
    metric: "4.2x ROAS",
    art: "device",
  },
  {
    tone: "orange",
    title: "Everyday Essentials",
    body: "A diverse creator roster used honest storytelling to elevate visibility, engagement and brand relevance — driving strong organic awareness.",
    metric: "38M reach",
    art: "bottle",
  },
  {
    tone: "purple",
    title: "Haircare Sprint",
    body: "100 creators rapidly amplified a haircare range with a high-impact, two-day awareness burst across short-form video.",
    metric: "2 day burst",
    art: "bloom",
  },
] as const;

export const habitsSection = {
  headBefore: "Your buyers have changed—has your",
  headAccent: "marketing",
  headAfter: "kept up?",
  sub: "People trust creators over polished ads; AiraDigital turns creator content into measurable growth.",
};

export const habits = [
  {
    icon: "search",
    tone: "cyan",
    title: "Creators are the new storefront",
    body: "Gen Z and Millennials open social before they open a search bar. AiraDigital connects you with creators who get your brand seen by the right audience, at the right moment.",
    art: "storefront",
  },
  {
    icon: "bag",
    tone: "orange",
    title: "Shoppers want connection, not a sales pitch",
    body: "Creators share real routines, real experiences and real opinions — giving customers a confidence that polished advertising simply cannot manufacture.",
    art: "connection",
  },
  {
    icon: "chart",
    tone: "pink",
    title: "Creator content delivers superior ROI",
    body: "Nearly 98% of marketing leaders say creator partnerships return more than traditional digital advertising spend.",
    art: "roi",
  },
  {
    icon: "handshake",
    tone: "cyan",
    title: "Why you should care",
    body: "You don't just get reach — you get a high-performing channel that beats standard ads. Creator content converts better and keeps working long after the campaign ends.",
    art: "growth",
  },
] as const;

export const creatorsSection = {
  headAccent: "Creators",
  headAfter: "who go beyond content",
  sub: "People drive trust, not ads. AiraDigital powers growth with creator content that actually shifts decisions.",
};

/**
 * Placeholder creator roster. Portraits are generated locally as SVG from the
 * `seed`, so there are no external image requests and nothing to break.
 */
export const creators = [
  { name: "Nadia Perez", handle: "madebynadia", followers: "156K", seed: 3, palette: "peach" },
  { name: "Simone Reyes", handle: "simone.rey", followers: "174K", seed: 11, palette: "pink" },
  { name: "Priya Raman", handle: "happyxsoul", followers: "218K", seed: 5, palette: "violet" },
  { name: "Rowan Patel", handle: "seriouslyrowan", followers: "15.3K", seed: 8, palette: "peach" },
  { name: "Gemma Cole", handle: "gemmasgoodlife", followers: "559K", seed: 2, palette: "pink" },
  { name: "Shivani Rao", handle: "thefashionhub", followers: "193K", seed: 14, palette: "peach" },
  { name: "Sofia Kumar", handle: "sofiamoond", followers: "120K", seed: 6, palette: "peach" },
  { name: "Amit Sethi", handle: "amit.builds", followers: "239K", seed: 9, palette: "violet" },
  { name: "Salma Idris", handle: "shystyles", followers: "395K", seed: 1, palette: "pink" },
  { name: "Priti Banerjee", handle: "pritiplates", followers: "30.3K", seed: 12, palette: "violet" },
] as const;

export const faqSection = {
  heading: "Content engine? Easier said than built",
  sub: "AI and creators make it effortless with AiraDigital.",
};

export const faqs = [
  {
    q: "What data do I get?",
    a: "Every campaign ships with live reach, engagement, click-through, conversion and payout data — broken down per creator, per asset and per placement, and exportable to CSV or your warehouse.",
  },
  {
    q: "How fast is content creation?",
    a: "Briefs go out the same day you approve a roster. Most brands see first drafts inside 72 hours and a fully approved content set within two weeks.",
  },
  {
    q: "How do creator partnerships work?",
    a: "You set the budget, deliverables and usage rights. AiraDigital handles outreach, negotiation, contracting and consolidated payouts, so you approve work instead of chasing invoices.",
  },
  {
    q: "Why choose AiraDigital?",
    a: "Discovery, execution, analytics and payments live in one system. No spreadsheets, no scattered tools, and no guessing which creator actually drove the revenue.",
  },
  {
    q: "Can I control brand voice?",
    a: "Yes. Brand guidelines, mandatory talking points and do-not-say lists attach to every brief, and nothing publishes until your team approves it.",
  },
] as const;

export const founder = {
  name: "Maya Rao",
  role: "Founder & CEO",
  socialLabel: "Maya Rao",
  socialUrl: "#linkedin",
  body: [
    "Hey, I'm Maya — founder, tennis obsessive, former chess champ, and someone who cannot resist a good brand problem. While building a creator ecosystem I kept running into the same gaps brands struggled with, so I built AiraDigital: a clean, intelligent way to discover creators, execute faster and track what actually drives sales.",
    "Explore the platform, click around… and if you're here to scale, you'll feel right at home. 🎾",
  ],
};

export const finalCta = {
  lines: ["Build smarter.", "Execute faster.", "Grow bigger."],
  button: "Talk to Us",
};

export const footerLinks = {
  primary: [
    { label: "Home", href: "#top" },
    { label: "Case Studies", target: "case-studies" },
    { label: "Features", target: "features" },
    { label: "FAQs", target: "faqs" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Governance", href: "#governance" },
  ],
  social: [
    { label: "Instagram", href: "#instagram", icon: "instagram" as const },
    { label: "LinkedIn", href: "#linkedin", icon: "linkedin" as const },
    { label: "YouTube", href: "#youtube", icon: "youtube" as const },
  ],
};
