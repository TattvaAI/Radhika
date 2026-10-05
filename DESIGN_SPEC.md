# Astrologer Radhika Sharma — Build Spec (single source of truth)

Project root: `/Users/creator/astro`
Stack: **Next.js 16.3.8**, React 19.2.8, TypeScript 5, Tailwind v4.3.3, `motion`, `@phosphor-icons/react`.

> Next.js 16 is NOT Next 14/15. Non-negotiable v16 rules for this build:
> - `proxy.ts` (NOT `middleware.ts`), export `proxy`, NOT `export function middleware`. Node runtime only, no `edge`.
> - `params` is a Promise. **Always `await`.** Use generated `PageProps<'/[locale]'>` / `LayoutProps<'/[locale]'>` helpers (globally available, no import).
> - `next/font/google` is unchanged. `revalidateTag` needs 2 args (not used here).
> - Do NOT use the built-in `i18n` config option. App Router i18n is `[locale]` segment + `proxy.ts`.
> - Do NOT use `cacheComponents`. Stay on the default model (static by default, `export const revalidate` allowed).
> - No `next lint` in Next 16. Lint via the ESLint CLI directly if wired; typecheck via `npx tsc --noEmit`.

---

## 1. Design read

A private astrology practice in Ambala, Haryana, presented as a quiet personal studio rather than a marketplace.

**Dials (explicit, not baseline):**
| Dial | Value | Why |
|---|---|---|
| `DESIGN_VARIANCE` | 7 | Heritage/heritage-editorial family. Offset and asymmetric, not symmetric-grid corporate. Mobile must collapse to single column. |
| `MOTION_INTENSITY` | 5 | Slow and ceremonial (yantra stroke-draw, scroll reveals). Motion MUST be shipped, not claimed. Reduced-motion must collapse it all. |
| `VISUAL_DENSITY` | 3 | Gallery-airy. Generous section gaps. This is a private practice, not a dashboard. |

---

## 2. Palette — DARK INDIGO DOMINANT (this is a deliberate reversal)

The obvious choice for "Indian heritage" is cream paper + brass + oxblood. **That is banned** as the AI-default premium-consumer palette. Do not use a cream-dominant page.

Instead: **the night sky over a temple courtyard.** Indigo dominates (~85% of surface area). Cream appears only as *type* and one inset panel. Gold is *linework*, never a fill. Madder red is a single-purpose accent.

Define as CSS variables in `globals.css` via Tailwind v4 `@theme`, with a light-mode override under `@media (prefers-color-scheme: light)`. **Both modes must exist and be tested.**

```
--color-ink        #0E1020   /* dominant surface, dark mode */
--color-ink-raised #161A2E   /* raised panels, dark mode */
--color-ink-line   #2A3050   /* hairlines, dark mode */
--color-paper      #F2EDE3   /* TYPE ONLY on dark. Also the light-mode surface. */
--color-madder     #A63A2B   /* accent, see usage rules below */
--color-turmeric   #D9A441   /* linework, yantra strokes, focus rings */
--color-jade       #2F6B5A   /* secondary accent for "confirmed"/availability only */
```

**Accent usage lock (one accent rule, enforced):**
- `--color-madder` = **primary CTA background, and nothing else.** It appears on the primary CTA only. If you find yourself using madder for a badge, a border, an icon, or a link, use turmeric instead.
- `--color-turmeric` = all hairlines, yantra stroke, focus ring, small caps labels, link hover.
- `--color-jade` = availability / success state only.

Light mode: invert roles. `--color-paper` becomes the surface, `--color-ink` becomes text. Madder and turmeric stay the accents (madder darkens for contrast on light).

**Contrast gate:** every CTA, form input, placeholder, focus ring, and body text must pass WCAG AA (4.5:1 body, 3:1 large). Audit before shipping. Madder `#A63A2B` on paper `#F2EDE3` is roughly 6:1 and passes; paper on madder is the button pairing, also passes. Verify turmeric-on-ink passes for small text, and if it does not, drop turmeric text to hairlines/labels only and use `--color-paper` for small text.

---

## 3. Typography

Justification for a serif (serif is otherwise discouraged): this is a **heritage / manuscript family**, and the display face **must carry Devanagari** so Hindi and English headlines share one voice instead of swapping fonts on language toggle.

- Display serif: `Noto_Serif_Devanagari`, `subsets: ['devanagari','latin']`, `weight: 'variable'` (it is a variable font, weight is optional), `display: 'swap'`, `variable: '--font-display'`.
- Body sans: `IBM_Plex_Sans_Devanagari`, `subsets: ['devanagari','latin']`, **`weight` is REQUIRED** (non-variable font), use `weight: ['400','600']`, `display: 'swap'`, `variable: '--font-body'`.

Define both ONCE in `src/app/fonts.ts` and import from there. Never call a font constructor inside a component.

**Do NOT use Fraunces or Instrument_Serif.** Do NOT use Inter.

Type scale: display `text-4xl md:text-5xl lg:text-6xl` with `leading-[1.15]` (NOT `leading-none`, Devanagari has tall matras above the head line and descenders below; `leading-none` will clip). Body `max-w-[65ch] leading-relaxed`. Always pair `font-display` with the Devanagari-aware stack so neither script clips.

---

## 4. Hard content prohibitions (non-negotiable)

- **ZERO em-dashes (`—`) and en-dashes (`–`) anywhere visible on the page.** Zero. Headlines, body, labels, buttons, alt text, quotes, footer. Rewrite the sentence instead.
- **NO fabricated claims of any kind.** No invented testimonials, no invented years, no invented client counts, no invented awards, no invented certifications, no invented phone number, no "500+ astrologers", no "100% guaranteed", no fake live counters, no fake availability.
- The only hard numbers permitted on the site are: **4 years in practice, 12 clients consulted, Ambala, ₹2500, Hindi and English.** Everything else must come from the content file or be a visible `TODO` state.
- No scrolling testimonial marquee, no logo wall, no "trusted by", no urgency/scarcity banners, no red blinking buttons.

## 5. Verified facts (from the client)

- Name: Radhika Sharma. Title: Astrologer. Based in Ambala, Haryana.
- 4 years in practice. 12 clients consulted. Consults in Hindi and English.
- Fee: ₹2500 flat. Consultation by scheduled call/video AND WhatsApp chat.
- Instagram: `radhika_sharmag1`. **WhatsApp number NOT SUPPLIED.**
- Services: all EXCEPT spiritual/karmic healing and muhrat.
- **NO photos available.** Testimonials do not exist yet.
- Per-tier fees NOT supplied. Single flat ₹2500 given.
- Credentials, call slots, chat reply window: NOT SUPPLIED.

## 6. Unsupplied data must degrade gracefully

Because contact details and prices are incomplete, `whatsapp` and per-tier prices are typed `null`. When `null`:
- Render a clearly-labelled `TODO` affordance, never a broken or dead link, never a `href="#"`, never a `wa.me/` link with a fake number.
- The booking flow's final step is a pre-filled WhatsApp message. If the number is absent, the flow ends on an honest "contact details being added" state that still shows the full composed message so the client can copy it. This is a deliberate, good state, not an error.

## 7. Layout rules

- Page theme is LOCKED. No section inverts light/dark mid-page.
- Corner radius lock: **all-sharp, radius 0.** One radius for the entire project. No pills, no rounded cards.
- Hero: `pt-24` max at desktop, headline **2 lines max** on desktop, subtext **20 words max**, CTAs visible without scroll, **max 4 text elements** (one eyebrow OR none, headline, subtext, CTAs). Nothing below the CTAs.
- Nav: single line at desktop, height ≤ 72px, one language toggle, one primary CTA. Must not wrap.
- CTA label lock: **one label per intent, used everywhere.** The single primary intent is WhatsApp contact. Pick ONE string per language and reuse it in nav, hero, footer, sticky bar. Do not mix "Talk to Radhika" / "Contact now" / "Get in touch".
- CTA button text must never wrap at desktop. Keep labels ≤ 3 words.
- Section layout families: a page with 8 sections needs **≥ 4 distinct families**, and no image+text split may repeat 3× consecutively.
- Eyebrow restraint: **max 1 eyebrow per 3 sections**, counted mechanically as small-caps wide-tracking labels above a headline. Hero counts as 1.
- No 3-equal-card rows. No bento cell without real visual variation.
- Every multi-column layout must declare its `< 768px` single-column collapse in the same component.
- Use `min-h-[100dvh]`, never `h-screen`.

## 8. Imagery

No image-generation tool is available in this environment and the subject has no photographs of her own.

- **NEVER show a face presented as Radhika Sharma.** Using stock photography of another woman as her portrait is deception and is forbidden.
- Build one clearly-labelled portrait slot component (`PortraitSlot`) with a documented TODO and a correct 3:4 aspect box, so real photography drops in later with no redesign.
- Supporting imagery must be **atmospheric and object/subject-based**, never a person's face: brass kalash, oil lamps, temple stone geometry, marigold, kumkum in a palm, star charts, manuscripts. Reference by stable remote URL from an open-license source, each with descriptive `alt` text. If a specific licensed URL cannot be verified, use `https://picsum.photos/seed/<descriptive-seed>/<w>/<h>` and say so in the final report.
- Hand-authored SVG is permitted for exactly ONE thing: the **yantra** (sacred geometric mark, 9 interlocking triangles with concentric lotus rings), used as the brand mark and as linework texture at low opacity. It is a geometric mark, not illustration. Icons must come from `@phosphor-icons/react` and must never be hand-rolled.

## 9. Motion (MOTION_INTENSITY 5, so motion must actually ship)

Allowed and required:
1. Yantra stroke-draw in the hero, slow, once on mount. Communicates: establishing the mark and signalling "this is deliberate."
2. Scroll reveals on section entry. Communicates: narrative sequencing as you read down the page.
3. Button/CTA tactile press feedback. Communicates: acknowledgement.

Rules:
- Every animated component is an isolated leaf with `'use client'` at the top.
- Animate ONLY `transform` and `opacity`. Never `top/left/width/height`.
- **Forbidden:** `window.addEventListener('scroll', ...)`, custom scroll progress in React state, `rAF` loops touching React state, GSAP (not installed, not needed at this dial).
- Import from `motion/react`.
- Every `useEffect` animation has a strict cleanup.
- `useReducedMotion()` must collapse all of it. This is mandatory.

## 10. Accessibility

Both colour modes present. `prefers-reduced-motion` honoured. Focus rings visible and turmeric. Labels ABOVE inputs, no placeholder-as-label, error text below input, `gap-2` per field. Provide loading, empty, and error states for the booking form and the kundli form. Nav needs a real mobile menu with focus management.

## 11. Zero-noise rules for copy

Every visible string gets read before shipping. No grammatically broken strings. No mock-cute wordplay. No passive-aggressive humility. No fake-craft micro-meta. No decorative text strips. No section-numbering eyebrows. No scroll cues. No version footers. One copy register per page.

## 12. Legal (mandatory, not optional)

`/legal` must carry a real astrology disclaimer stating results are not guaranteed and that astrology is offered for guidance, not as a substitute for medical, legal, or financial advice. This page is a credibility asset for this category, not filler.
