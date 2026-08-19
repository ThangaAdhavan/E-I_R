// -----------------------------------------------------------------------------
// EXACTIV is RighT — portfolio data
// All projects, copy, and metadata are fictional and original to the brand.
// -----------------------------------------------------------------------------

export type ProjectBg = 'beige' | 'graphite' | 'powder' | 'coral' | 'olive';

export type MetaItem = { label: string; value: string };

export type Project = {
  slug: string;
  index: string; // "01"
  name: string; // "Digital Architecture"
  category: string; // "WEB DESIGN / DEVELOPMENT"
  year: string; // "2026"
  client: string;
  role: string;
  tech: string[];
  url: string;
  tagline: string;
  description: string;
  img: string; // card thumbnail
  imgAlt: string; // alternate flip image
  bg: ProjectBg;
  gallery?: string[];
};

export type ProjectDetail = Project & {
  heroImg: string;
  quoteLines: string[];
  intro: string;
  chapterTag: string;
  chapterName: string;
  chapterNum: string;
  chapterTitle: string; // pipe-separated for the Lines component
  chapterLines: string[];
  chapterText: string;
  meta: MetaItem[];
  mediaA: string;
  mediaB: string;
  closing: string;
  soulLines: string[];
  soulText: string;
  fullImg: string;
  emoLines: string[];
  gallery: string[];
  next: { slug: string; name: string } | null;
};

export const ALL_NUMBERED_IMAGES = [
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png',
  '/img/5.png',
  '/img/6.png',
  '/img/7.png',
  '/img/8.png',
  '/img/9.png',
  '/img/10.png',
  '/img/11.png',
  '/img/12.png',
  '/img/13.png',
  '/img/14.png',
];

export const ALL_CONCEPT_IMAGES = [
  '/img/concept-1.png',
  '/img/concept-2.png',
  '/img/concept-3.png',
  '/img/concept-4.png',
  '/img/concept-5.png',
  '/img/concept-6.png',
  '/img/concept-7.png',
  '/img/concept-8.png',
  '/img/concept-9.png',
  '/img/concept-10.png',
  '/img/concept-11.png',
];

export const ALL_WORKSPACE_IMAGES = [
  ...ALL_NUMBERED_IMAGES,
  ...ALL_CONCEPT_IMAGES,
  '/img/warrior-front.png',
  '/img/warrior-mountain.png',
  '/img/gal1.jpg',
  '/img/gal2.jpg',
  '/img/gal3.jpg',
  '/img/gal4.jpg',
  '/img/black1.jpg',
  '/img/black2.jpg',
  '/img/beige1.jpg',
  '/img/beige2.jpg',
  '/img/term-elegancia.jpg',
  '/img/term-autenticidad.jpg',
  '/img/term-funcionalidad.jpg',
  '/img/solana-hero.jpg',
  '/img/solana-pool.jpg',
  '/img/solana-full.jpg',
  '/img/about-craft.jpg',
  '/img/about-juan.jpg',
  '/img/p-plaza.jpg',
  '/img/p-pol43.jpg',
  '/img/p-pexegueiro.jpg',
  '/img/p-juno.jpg',
  '/img/p-solana.jpg',
  '/img/cierre.jpg',
  '/img/flip1.jpg',
  '/img/hero.jpg',
];

export const PROJECTS: Project[] = [
  {
    slug: 'digital-architecture',
    index: '01',
    name: 'Digital Architecture',
    category: 'WEB DESIGN / DEVELOPMENT',
    year: '2026',
    client: 'Marca Estudio',
    role: 'Art Direction, Creative Development',
    tech: ['React', 'GSAP', 'WebGL', 'Lenis'],
    url: 'marca-studio.com',
    tagline: 'A monolithic digital identity for an architectural studio that refuses to design ordinary buildings.',
    description:
      'A website carved from concrete and light — every section is a load-bearing wall, every transition a doorway. The grid is structural, not decorative.',
    img: '/img/1.png',
    imgAlt: '/img/2.png',
    bg: 'beige',
    gallery: ['/img/1.png', '/img/2.png', '/img/3.png', '/img/concept-1.png', '/img/concept-2.png'],
  },
  {
    slug: 'night-matter',
    index: '02',
    name: 'Night / Matter',
    category: 'FASHION / INTERACTIVE',
    year: '2026',
    client: 'Atelier Noir',
    role: 'Creative Direction, Motion',
    tech: ['Three.js', 'GLSL', 'Framer Motion'],
    url: 'nightmatter.atelier',
    tagline: 'An interactive lookbook for a fashion atelier that treats darkness as a material.',
    description:
      'Garments are revealed by subtraction — cloth emerges from shadow the way a memory surfaces. The cursor does not browse; it illuminates.',
    img: '/img/4.png',
    imgAlt: '/img/5.png',
    bg: 'graphite',
    gallery: ['/img/4.png', '/img/5.png', '/img/6.png', '/img/concept-3.png', '/img/concept-4.png'],
  },
  {
    slug: 'object-09',
    index: '03',
    name: 'Object 09',
    category: 'PRODUCT / BRAND',
    year: '2025',
    client: 'Object Studio',
    role: 'Brand, Web, E-commerce',
    tech: ['React', 'Three.js', 'Stripe'],
    url: 'object09.studio',
    tagline: 'A product experience for a design studio’s ninth object — a ceramic vessel that holds nothing but light.',
    description:
      'Nine objects, nine rituals. The site lets you rotate, light, and listen to each vessel before you decide to own one.',
    img: '/img/7.png',
    imgAlt: '/img/8.png',
    bg: 'powder',
    gallery: ['/img/7.png', '/img/8.png', '/img/9.png', '/img/concept-5.png', '/img/concept-6.png'],
  },
  {
    slug: 'after-the-rain',
    index: '04',
    name: 'After the Rain',
    category: 'PHOTOGRAPHY / ART DIRECTION',
    year: '2025',
    client: 'Self-initiated',
    role: 'Photography, Art Direction, Web',
    tech: ['Next.js', 'Sanity', 'GSAP'],
    url: 'aftertherain.photo',
    tagline: 'A photographic essay on the moments just after rain — when puddles become mirrors and the city doubles.',
    description:
      'Forty-eight photographs, taken between the last drop and the first dry patch. The site itself behaves like wet pavement: reflective, slow, briefly doubled.',
    img: '/img/10.png',
    imgAlt: '/img/11.png',
    bg: 'olive',
    gallery: ['/img/10.png', '/img/11.png', '/img/12.png', '/img/concept-7.png', '/img/concept-8.png'],
  },
  {
    slug: 'void',
    index: '05',
    name: 'Void',
    category: 'EXPERIMENTAL / INTERACTIVE',
    year: '2026',
    client: 'Self-initiated',
    role: 'Creative Direction, Development, Sound',
    tech: ['WebGL', 'GLSL', 'Web Audio API'],
    url: 'void.experience',
    tagline: 'An interactive meditation on negative space — a canvas of pure black that responds to your presence.',
    description:
      'There is nothing here, and that is the point. Move your cursor and the void moves back. Stay still and it forgets you.',
    img: '/img/13.png',
    imgAlt: '/img/14.png',
    bg: 'graphite',
    gallery: ['/img/13.png', '/img/14.png', '/img/concept-9.png', '/img/concept-10.png', '/img/concept-11.png'],
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'digital-architecture': {
    ...PROJECTS[0],
    heroImg: '/img/1.png',
    quoteLines: ['Form follows', 'function, until', 'function follows form'],
    intro:
      'Marca Estudio designs buildings that refuse to be ordinary — heavy walls that float, courtyards that breathe, staircases drawn as a single gesture. Their old website was a gallery of thumbnails. The new one is a building you walk through. Sections are load-bearing. Pages are doorways. The cursor is the visitor; the scroll, the corridor.',
    chapterTag: 'Chapter One',
    chapterName: 'The Plan',
    chapterNum: '(01)',
    chapterTitle: 'Drawn in|light',
    chapterLines: ['A wall that', 'floats. A stair', 'as a single line.'],
    chapterText:
      'Every screen of the new site is structurally honest. The grid is exposed, not hidden. Type carries weight. Negative space is the load. A visitor should feel they are inside a drawing, not browsing one.',
    meta: [
      { label: 'Client', value: 'Marca Estudio' },
      { label: 'Year', value: '2026' },
      { label: 'Role', value: 'Art Direction, Creative Development' },
      { label: 'Stack', value: 'React, GSAP, WebGL, Lenis' },
      { label: 'Live', value: 'marca-studio.com' },
    ],
    mediaA: '/img/2.png',
    mediaB: '/img/3.png',
    closing:
      'The studio no longer sends a PDF portfolio. They send a URL. Architects who once asked for “something minimal” now ask for “something structural.”',
    soulLines: ['Architecture', 'you can', 'scroll through'],
    soulText:
      'The whole site is built like one of their buildings: heavy at the edges, weightless in the middle. The cursor is the only visitor who can walk through walls.',
    fullImg: '/img/concept-1.png',
    emoLines: ['Drawn in light,', 'built in', 'pixels'],
    gallery: ['/img/1.png', '/img/2.png', '/img/3.png', '/img/concept-1.png', '/img/concept-2.png', '/img/warrior-front.png'],
    next: { slug: 'night-matter', name: 'Night / Matter' },
  },
  'night-matter': {
    ...PROJECTS[1],
    heroImg: '/img/4.png',
    quoteLines: ['Matter remembers', 'the night', 'it was shaped in'],
    intro:
      'Atelier Noir does not design for seasons. They design for hours. Their collections are released at dusk, photographed at 3 a.m., and worn by people who prefer to be invisible. The brief was a lookbook. What we built is a dark room you enter with a cursor.',
    chapterTag: 'Chapter One',
    chapterName: 'The Cloth',
    chapterNum: '(02)',
    chapterTitle: 'Shadow,|cut into|cloth',
    chapterLines: ['Subtraction', 'is the', 'new silhouette'],
    chapterText:
      'Each garment is revealed by removing light, not adding it. The cursor is a torch. Move it across a look and the cloth emerges from shadow the way a memory surfaces — slowly, then all at once.',
    meta: [
      { label: 'Client', value: 'Atelier Noir' },
      { label: 'Year', value: '2026' },
      { label: 'Role', value: 'Creative Direction, Motion' },
      { label: 'Stack', value: 'Three.js, GLSL, Framer Motion' },
      { label: 'Live', value: 'nightmatter.atelier' },
    ],
    mediaA: '/img/5.png',
    mediaB: '/img/6.png',
    closing:
      'The atelier sold out its first collection two hours after launch — not because the site was loud, but because it was the first time darkness felt like a fabric you could choose.',
    soulLines: ['Shadow,', 'cut into', 'garments'],
    soulText:
      'The cursor is the only light source on the page. Garments are not photographed; they are revealed. Light becomes the verb, darkness the noun.',
    fullImg: '/img/concept-3.png',
    emoLines: ['Wear the', 'night,', 'not the season'],
    gallery: ['/img/4.png', '/img/5.png', '/img/6.png', '/img/concept-3.png', '/img/concept-4.png', '/img/black1.jpg'],
    next: { slug: 'object-09', name: 'Object 09' },
  },
  'object-09': {
    ...PROJECTS[2],
    heroImg: '/img/7.png',
    quoteLines: ['Every object', 'waits for', 'its ninth life'],
    intro:
      'Object Studio makes vessels — ceramic, blown, cast, folded. They had eight. They wanted a ninth, and a website that could hold it. We built a digital vitrine that lets you turn each vessel in your hand, light it from any angle, and hear the small sound it makes when set down.',
    chapterTag: 'Chapter One',
    chapterName: 'The Vessel',
    chapterNum: '(03)',
    chapterTitle: 'Nine lives,|one object',
    chapterLines: ['A vessel that', 'holds nothing', 'but light'],
    chapterText:
      'Each of the nine objects can be rotated, lit from five angles, and “set down” to hear the sound it makes. Buying is almost an afterthought — a quiet line of text at the bottom, not a button at the top.',
    meta: [
      { label: 'Client', value: 'Object Studio' },
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Brand, Web, E-commerce' },
      { label: 'Stack', value: 'React, Three.js, Stripe' },
      { label: 'Live', value: 'object09.studio' },
    ],
    mediaA: '/img/8.png',
    mediaB: '/img/9.png',
    closing:
      'The studio sold all nine vessels in a week. Three buyers wrote back to say they had not realized you could love a website the way you love an object.',
    soulLines: ['Nine lives', 'in a single', 'object'],
    soulText:
      'The vessel is the hero; the interface is the shelf. Nothing competes with the object — not the cursor, not the chrome, not the buy button. The page is a room with very good light.',
    fullImg: '/img/concept-5.png',
    emoLines: ['Held lightly,', 'kept', 'forever'],
    gallery: ['/img/7.png', '/img/8.png', '/img/9.png', '/img/concept-5.png', '/img/concept-6.png', '/img/beige1.jpg'],
    next: { slug: 'after-the-rain', name: 'After the Rain' },
  },
  'after-the-rain': {
    ...PROJECTS[3],
    heroImg: '/img/10.png',
    quoteLines: ['After the rain,', 'everything', 'reflects'],
    intro:
      'Forty-eight photographs, taken between the last drop and the first dry patch. A self-initiated essay about the brief, doubled city — the one that exists for an hour after rain, when a puddle becomes a second sky and the pavement forgets which way is up.',
    chapterTag: 'Chapter One',
    chapterName: 'The Reflection',
    chapterNum: '(04)',
    chapterTitle: 'Wet pavement,|doubled skies',
    chapterLines: ['The city', 'briefly', 'is two'],
    chapterText:
      'The gallery itself behaves like wet pavement — reflective, slow, doubled. Scroll down and the photographs scroll up. Hover an image and its reflection appears beneath it, slightly delayed, as if the page is still wet.',
    meta: [
      { label: 'Client', value: 'Self-initiated' },
      { label: 'Year', value: '2025' },
      { label: 'Role', value: 'Photography, Art Direction, Web' },
      { label: 'Stack', value: 'Next.js, Sanity, GSAP' },
      { label: 'Live', value: 'aftertherain.photo' },
    ],
    mediaA: '/img/11.png',
    mediaB: '/img/12.png',
    closing:
      'After the Rain was shortlisted for an editorial design award — the only self-initiated project on the list that year.',
    soulLines: ['Wet pavement,', 'doubled', 'skies'],
    soulText:
      'A puddle is a small second sky. The site is built to behave the same way — every image has a faint echo beneath it, slightly delayed, as if the page is still wet from the photograph that was just taken.',
    fullImg: '/img/concept-7.png',
    emoLines: ['Briefly,', 'the world', 'is two'],
    gallery: ['/img/10.png', '/img/11.png', '/img/12.png', '/img/concept-7.png', '/img/concept-8.png', '/img/gal2.jpg'],
    next: { slug: 'void', name: 'Void' },
  },
  void: {
    ...PROJECTS[4],
    heroImg: '/img/13.png',
    quoteLines: ['The void', 'looks back', 'at you'],
    intro:
      'A canvas of pure black. No content. No navigation. No sound, until you move. Move your cursor and the void moves back — a faint ripple of light follows your presence, then forgets you when you stop. Stay still long enough and the screen slowly goes dark, then darker, then forgets you entirely.',
    chapterTag: 'Chapter One',
    chapterName: 'The Empty',
    chapterNum: '(05)',
    chapterTitle: 'Nothing,|made|navigable',
    chapterLines: ['Where nothing', 'is,', 'something happens'],
    chapterText:
      'There is no menu. To leave, you must find the only three letters of the alphabet the void remembers. They are not in order. They are not in the same place twice.',
    meta: [
      { label: 'Client', value: 'Self-initiated' },
      { label: 'Year', value: '2026' },
      { label: 'Role', value: 'Creative Direction, Development, Sound' },
      { label: 'Stack', value: 'WebGL, GLSL, Web Audio API' },
      { label: 'Live', value: 'void.experience' },
    ],
    mediaA: '/img/14.png',
    mediaB: '/img/concept-9.png',
    closing:
      'Visitors spend an average of four minutes on Void. There is nothing to read, nothing to buy, nothing to click. People stay anyway.',
    soulLines: ['Nothing,', 'made', 'navigable'],
    soulText:
      'The void is not empty — it is patient. It responds to presence, not to intent. The cursor is the only signal it accepts, and it forgets the cursor the moment it stops moving.',
    fullImg: '/img/concept-10.png',
    emoLines: ['Where nothing', 'is,', 'something happens'],
    gallery: ['/img/13.png', '/img/14.png', '/img/concept-9.png', '/img/concept-10.png', '/img/concept-11.png', '/img/black2.jpg'],
    next: null,
  },
};

// -----------------------------------------------------------------------------

export type Capability = {
  n: string;
  title: string;
  text: string;
  img: string;
};

export const CAPABILITIES: Capability[] = [
  {
    n: '01',
    title: 'Art Direction',
    text: 'Editorial systems, typographic identity, the slow work of deciding what a project looks like before it looks like anything.',
    img: '/img/1.png',
  },
  {
    n: '02',
    title: 'Creative Development',
    text: 'React, WebGL, GLSL — code as a material with weight, grain, and a tendency to surprise the people who wrote it.',
    img: '/img/2.png',
  },
  {
    n: '03',
    title: 'Interaction Design',
    text: 'Cursors that mean something. Hovers that earn their pixels. Transitions that feel like turning a page, not clicking a button.',
    img: '/img/3.png',
  },
  {
    n: '04',
    title: 'Motion',
    text: 'Spring physics, scroll-linked timelines, inertia that respects the user’s intention. Nothing bounces. Everything lands.',
    img: '/img/4.png',
  },
  {
    n: '05',
    title: 'Brand Systems',
    text: 'A logo is a sentence. A system is a vocabulary. I build the second one — the rules that let a brand speak in more than one voice.',
    img: '/img/5.png',
  },
  {
    n: '06',
    title: 'Digital Experiences',
    text: 'Websites that behave like places. Portfolios that behave like exhibitions. Forms that behave like questions, not paperwork.',
    img: '/img/6.png',
  },
];

// -----------------------------------------------------------------------------

export const BRAND = {
  name: 'EXACTIV is RighT',
  shortName: 'EXACTIV',
  midName: 'is',
  longName: 'RighT',
  email: 'tadhavans@gmail.com',
  year: '2026',
  tagline: 'DESIGNED TO DEFY THE ORDINARY.',
  location: 'Tamil Nadu',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/thangam_1_2/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thangaadhavan-s-72430a381/' },
  ],
};

export const EMAIL = BRAND.email;
