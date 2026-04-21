You are an expert full-stack developer and UI/UX designer specializing in 
premium e-commerce experiences. Build a production-ready, high-end 
Nike-inspired sneaker store using the following stack and specifications.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Framework:     Next.js 14 (App Router)
- Styling:       Tailwind CSS v3 + custom CSS variables
- Animation:     Framer Motion v11
- 3D Effects:    React Three Fiber (optional hero shoe)
- Icons:         Lucide React
- Font:          next/font (Bebas Neue + Barlow Condensed)
- State:         Zustand (cart, filters)
- Images:        next/image with blur placeholder
- Package:       pnpm

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate the following file structure:

/app
  layout.tsx          ← Root layout, font setup, custom cursor
  page.tsx            ← Assembles all sections
  globals.css         ← CSS variables, scrollbar, base styles

/components
  /ui
    CustomCursor.tsx   ← Magnetic cursor with mix-blend-mode
    MagneticBtn.tsx    ← Button with magnetic hover effect
    GlassCard.tsx      ← Reusable glassmorphism card
  /sections
    Navbar.tsx         ← Sticky nav with blur on scroll
    Hero.tsx           ← Fullscreen parallax hero
    ProductGrid.tsx    ← 3D tilt product cards
    FeaturedCarousel.tsx ← Horizontal scroll sneakers
    BrandStory.tsx     ← Split layout with scroll trigger
    Testimonials.tsx   ← Staggered reveal cards
    CtaBanner.tsx      ← Full-width accent CTA
    Footer.tsx         ← Minimal elegant footer

/lib
  products.ts         ← Mock product data (6 sneakers)
  useCart.ts          ← Zustand cart store

/hooks
  useScrollReveal.ts  ← IntersectionObserver reveal hook
  useParallax.ts      ← Parallax offset hook
  useMagneticHover.ts ← Mouse tracking for magnetic effect

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM (globals.css)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
:root {
  --black:       #050505;
  --white:       #f8f4ef;
  --gray-dark:   #111111;
  --gray-mid:    #1e1e1e;
  --accent:      #e8ff00;   /* neon yellow */
  --accent2:     #ff3c00;   /* hot orange */
  --glass:       rgba(255,255,255,0.04);
  --glass-border:rgba(255,255,255,0.08);
  --text-muted:  #666666;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT SPECS — Build each exactly as described
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[NAVBAR]
- Fixed, transparent → frosted glass on scroll
- Logo: "NKX" in Bebas Neue + accent dot
- Links: fade-in underline on hover (::after pseudo)
- Mobile: hamburger → full-screen overlay menu
- Cart icon with Zustand item count badge

[HERO]
- 100vh, dark background with CSS grid overlay
- Parallax: background moves at 0.3x scroll speed (useParallax hook)
- Giant ghost text number "97" behind content
- Headline: Bebas Neue, clamp(80px, 14vw, 180px)
  Line 1: solid white
  Line 2: outlined (-webkit-text-stroke)
  Accent word: var(--accent)
- Framer Motion: staggered children with initial={{ y:60, opacity:0 }}
- CTA: clip-path polygon button with ::before slide-in fill
- Scroll indicator: animated vertical line, bottom-left
- Stat counter: bottom-right (e.g., "2,400+ styles")

[PRODUCT GRID — 3D TILT CARDS]
- CSS Grid: repeat(auto-fit, minmax(320px, 1fr)), gap: 2px
- Each card: useMagneticHover → onMouseMove → rotateX/Y via inline style
- Image wrapper: overflow:hidden, aspect-ratio: 4/3
- On hover:
  - Card lifts: translateY(-8px), box-shadow
  - Image: scale(1.08) rotate(-2deg)
  - Quick-add (+) button fades in bottom-right (opacity + translateY)
- Badge: "NEW" in accent, "HOT" in accent2
- Color swatches: small dots, click changes product image src
- Price: Bebas Neue 28px + strikethrough old price

[FEATURED CAROUSEL]
- Horizontal scroll container, scroll-snap-type: x mandatory
- Cards: min-width 520px, height 500px
- Each card: dark gradient bg, shoe image with float animation
- On hover: shoe translateY(-10px) + colored glow blur beneath
- Prev/Next arrow buttons with Framer whileTap={{ scale: 0.9 }}
- Scroll progress bar below carousel

[BRAND STORY]
- CSS Grid: 1fr 1fr, min-height: 100vh
- Left: dark panel, giant ghost text, floating shoe SVG/PNG
  - Float keyframe: translateY(0→-20px), 4s ease-in-out infinite
  - Drop shadow: rgba(232,255,0,0.15)
- Right: content panel
  - Ghost year "1964" behind section title
  - Framer: whileInView stagger for paragraphs
  - 3-column stat grid (140M+ customers, 190+ countries, etc.)
  - Stats border-top, accent numbers in Bebas Neue

[TESTIMONIALS]
- Grid: repeat(auto-fit, minmax(320px, 1fr)), gap: 2px
- Each card:
  - Giant ghost quote mark (position: absolute, opacity: 0.04)
  - Star rating in accent color
  - Author avatar: colored circle with initials
  - Footer: "Purchased: [Product Name]" in accent
  - Framer: whileInView={{ opacity:1, y:0 }}, stagger 0.1s

[CTA BANNER]
- Full-width, background: var(--accent)
- Giant ghost "NOW" text at 400px opacity 0.06
- Dark clip-path button with accent text

[FOOTER]
- Grid: 2fr 1fr 1fr 1fr
- Social icons: bordered squares, hover → accent border + color
- Links: animated → prefix on hover
- Bottom bar: copyright + legal links

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATIONS REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 }}
}
// Fade-up child
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] }}
}
// Scroll reveal (whileInView)
viewport={{ once: true, margin: "-80px" }}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOM CURSOR (CustomCursor.tsx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Two divs: dot (12px) + ring (40px)
- Track mouse with useEffect + mousemove listener
- Dot: instant follow (transform direct)
- Ring: delayed follow via lerp in requestAnimationFrame loop
- mix-blend-mode: difference on dot
- On hover [data-cursor="hover"]: ring scales to 64px
- On hover [data-cursor="link"]: dot disappears, ring becomes text cursor
- Disable on touch devices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- All images: use next/image with width/height + blurDataURL
- Fonts: next/font/google with display:'swap', preload:true
- Framer: use LazyMotion + domAnimation to reduce bundle
- Animations: GPU-only props (transform, opacity) — never layout props
- Carousel: use CSS scroll-snap (no JS library needed)
- Avoid layout shift: set explicit dimensions on all media

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOCK DATA (lib/products.ts)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Export array of 6 products with:
{ id, name, category, price, oldPrice, badge, colors[], description, image }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELIVERABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Generate ALL files completely — no placeholders, no "// TODO"
2. Every component must be fully functional and self-contained
3. Run cleanly with: pnpm install && pnpm dev
4. Zero TypeScript errors
5. Mobile-first, tested at 375px / 768px / 1440px breakpoints