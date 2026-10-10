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
  email: "admin@airadigi.com",
  phone: "+91 97407 25577",
  /** "Book a Call" dials this; every other CTA opens an enquiry email. */
  callUrl: "tel:+919740725577",
  enquiryUrl: "mailto:admin@airadigi.com?subject=Brand%20enquiry",
  creatorUrl: "mailto:admin@airadigi.com?subject=Creator%20sign-up",
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
  { label: "Why Us", target: "why-us" },
  { label: "FAQs", target: "faqs" },
] as const;

export const hero = {
  titleTop: "Find The Right",
  titleBottom: "Creators",
  subtitle:
    "End-to-end workflows and zero manual work — from outreach, to approvals, to centralised payouts.",
  cta: "Get in touch",
};

/**
 * Partner logos for the "Trusted By" marquee. Each file in /public/brands is a
 * transparent PNG of the same fixed height with the mark optically size-matched
 * to the rest of the set, so a single CSS height renders them all evenly.
 */
export const brands = [
  { name: "A2B Veg. Restaurant", src: "/brands/a2b.png", w: 219, h: 176 },
  { name: "Nandhana Palace", src: "/brands/nandhana.png", w: 188, h: 176 },
  { name: "Nandini", src: "/brands/nandini.png", w: 189, h: 176 },
  { name: "Government of Karnataka", src: "/brands/karnataka.png", w: 188, h: 176 },
  { name: "Parachute", src: "/brands/parachute.png", w: 222, h: 176 },
  { name: "Marico", src: "/brands/marico.png", w: 217, h: 176 },
  { name: "Vilvah Store", src: "/brands/vilvah.png", w: 188, h: 176 },
  { name: "Traya", src: "/brands/traya.png", w: 298, h: 176 },
  { name: "Deconstruct", src: "/brands/deconstruct.png", w: 205, h: 176 },
  { name: "SharkNinja", src: "/brands/sharkninja.png", w: 341, h: 176 },
  { name: "Sangeetha Mobiles", src: "/brands/sangeetha.png", w: 293, h: 176 },
  { name: "Unilet", src: "/brands/unilet.png", w: 266, h: 176 },
  { name: "Q Experiences", src: "/brands/qexperiences.png", w: 188, h: 176 },
] as const;

export const statsSection = {
  sub: "AiraDigital sets a new standard — helping brands discover curated creators, engage meaningfully, track performance, and scale on an intuitive, analytics-driven platform that removes operational friction and delivers measurable ROI.",
};

export const stats = [
  { value: "50,000+", label: "Creators Across India" },
  { value: "150+", label: "Trusted Brand Partners" },
  { value: "700 Million+", label: "Massive Reach Monthly" },
] as const;

/** Two positioning claims that sit directly beneath the stat tiles. */
export const networkPoints = [
  {
    title: "India's Premier Influencer Network",
    body: "Instant access to 50,000+ creators across every region, niche, and language in India.",
  },
  {
    title: "Driven by Data, Backed by ROI",
    body: "We match your brand with high-performing influencers using deep creator insights and audience demographics for maximum campaign performance.",
  },
] as const;

export const powerSection = {
  heading: "Our Core Capabilities",
  sub: "From hyper-targeted matching through full campaign execution to final ROI reporting.",
};

/** Sticky stacking cards. `tone` picks the card + artwork panel colours. */
export const powers = [
  {
    tone: "pink",
    title: "Hyper-Targeted\nMatching",
    body: "AI- and insight-driven creator discovery that guarantees brand-safety and real engagement.",
    art: "discovery",
  },
  {
    tone: "cyan",
    title: "End-to-End Campaign\nManagement",
    body: "From brief and influencer onboarding to creative direction, editing, and final ROI reporting.",
    art: "workflow",
  },
  {
    tone: "orange",
    title: "Scalable\nReach",
    body: "Whether you need 5 micro-influencers or 100+ regional creators simultaneously, we handle the logistics seamlessly.",
    art: "analytics",
  },
] as const;

export const whyUsSection = {
  headBefore: "Why work",
  headAccent: "with us",
  sub: "Not a marketplace and not a middleman — a team that owns the narrative, the edit and the execution end to end.",
};

export const whyUs = [
  {
    icon: "handshake",
    tone: "pink",
    title: "Value & Intent First",
    body: "We don't just generate content; we craft intentional narratives that resonate with audiences and convert viewers into loyal customers.",
  },
  {
    icon: "film",
    tone: "cyan",
    title: "In-House Post-Production",
    body: "Our full-time, in-house team of video editors and strategists ensures top-tier visual quality, fast turnarounds, and seamless brand alignment.",
  },
  {
    icon: "chart",
    tone: "orange",
    title: "Proven Scale & Execution",
    body: "Trusted to execute at scale — from hyper-targeted boutique campaigns to delivering 100+ vetted creators for large-scale national government initiatives.",
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

export const finalCta = {
  lines: ["Build smarter.", "Execute faster.", "Grow bigger."],
  button: "Talk to Us",
};

export const footerLinks = {
  primary: [
    { label: "Home", href: "#top" },
    { label: "Features", target: "features" },
    { label: "Why Us", target: "why-us" },
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
