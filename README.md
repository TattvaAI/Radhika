# Radhika Sharma — Astrological Studio (ज्योतिष अध्ययन)

A private Vedic astrology studio based in Ambala, Haryana, crafted as a quiet, editorial sanctuary rather than a commercial marketplace.

Live Repository: [https://github.com/TattvaAI/Radhika](https://github.com/TattvaAI/Radhika)

---

## Technical Stack

* **Framework:** Next.js 16.3.8 (App Router with `proxy.ts` locale negotiation)
* **Runtime:** React 19.2.8 & TypeScript 5
* **Styling:** Tailwind CSS v4 (`@theme` tokens with celestial gradients)
* **Motion:** `motion` (`motion/react` with `useReducedMotion()` fallbacks)
* **Typography:** `Noto Serif Devanagari` (Display) & `IBM Plex Sans Devanagari` (Body)
* **Iconography:** Bespoke Vedic Graha sigils & `@phosphor-icons/react`

---

## Key Architectural & Design Features

1. **Bilingual App Router Architecture (`[locale]`):**
   * Pre-renders 25 static pages across Hindi (`/hi`) and English (`/en`).
   * Next.js 16 Proxy (`src/proxy.ts`) negotiates client `Accept-Language` headers.
2. **Living Celestial Canvas & Astrolabe:**
   * Dynamic particle stardust canvas with organic magnitude twinkling.
   * Multi-ring astronomical astrolabe featuring 12 Sanskrit Rashis, 27 Nakshatras, and sacred Sri Yantra geometry.
3. **Interactive Vedic Kundli Studio:**
   * Interactive 12-house North Indian diamond chart (*द्वादश भाव*) with real-time house significations (*कारकत्व*) and ruling planet (*कारका ग्रह*) analysis.
4. **Authentic Vedic Copywriting & Ethical Transparency:**
   * Natural, culturally grounded Hindi and English copy completely free of AI slop.
   * Explicit ₹2500 flat fee guarantee rejecting commercial upsells, fake gemstones, or fear-based remedies.
5. **Statutory Compliance:**
   * Dedicated legal disclaimer (`/[locale]/legal`) establishing astrology as personal reflection rather than medical/financial advice.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Typecheck & Production Build

```bash
# Typecheck
npx tsc --noEmit

# Static Site Generation build
npm run build
```
